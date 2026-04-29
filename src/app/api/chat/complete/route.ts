import { NextResponse } from 'next/server';
import {
  detectServiceInterest,
  formatConversationTranscript,
  normalizeConversationHistory,
} from '@/lib/chatbot';
import {
  isEmailNotificationConfigured,
  sendEmailNotification,
} from '@/lib/email';
import { summarizeConversationForNotification } from '@/lib/openai-chat';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      history?: unknown;
    };

    const history = normalizeConversationHistory(body.history, 18);

    if (history.length === 0) {
      return NextResponse.json(
        { error: 'Conversation history is required.' },
        { status: 400 },
      );
    }

    const serviceInterest = detectServiceInterest(history);
    let summary: string;

    try {
      summary = await summarizeConversationForNotification(history);
    } catch (error) {
      console.error('Conversation summary generation failed:', error);
      summary = `Website visitor likely needs ${serviceInterest}. Please review the conversation transcript for the latest details.`;
    }
    const notificationConfigured = isEmailNotificationConfigured();

    if (!notificationConfigured) {
      return NextResponse.json({
        notificationConfigured: false,
        notificationSent: false,
        serviceInterest,
        summary,
      });
    }

    const notification = await sendEmailNotification({
      messageCount: history.length,
      serviceInterest,
      summary,
      transcript: formatConversationTranscript(history),
    });

    return NextResponse.json({
      notificationConfigured: notification.configured,
      notificationMode: notification.provider,
      notificationSent: notification.sent,
      serviceInterest,
      summary,
    });
  } catch (error) {
    console.error('Conversation completion failed:', error);

    return NextResponse.json(
      { error: 'Unable to complete the conversation.' },
      { status: 500 },
    );
  }
}
