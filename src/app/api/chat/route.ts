import { NextResponse } from 'next/server';
import {
  getChatbotReply,
  normalizeConversationHistory,
} from '@/lib/chatbot';
import { generateAIChatReply } from '@/lib/openai-chat';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      history?: unknown;
      message?: unknown;
    };

    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!message) {
      return NextResponse.json(
        { error: 'A message is required.' },
        { status: 400 },
      );
    }

    const history = normalizeConversationHistory(body.history);
    const fallbackReply = getChatbotReply(message);

    try {
      // Include the new user message in history for AI context
      const historyWithNewMessage = [...history, { role: 'user' as const, text: message }];
      const aiReply = await generateAIChatReply(historyWithNewMessage);

      if (aiReply) {
        return NextResponse.json({
          ...fallbackReply,
          text: aiReply,
          usingAI: true,
        });
      }
    } catch (error) {
      console.error('AI chat reply failed:', error);
    }

    return NextResponse.json({
      ...fallbackReply,
      usingAI: false,
    });
  } catch (error) {
    console.error('Chat request failed:', error);

    return NextResponse.json(
      { error: 'Unable to process the chat request.' },
      { status: 500 },
    );
  }
}
