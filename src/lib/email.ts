type EmailNotificationPayload = {
  messageCount: number;
  serviceInterest: string;
  summary: string;
  transcript: string;
};

type ContactFormPayload = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
};

export type EmailNotificationResult = {
  configured: boolean;
  provider: 'resend' | null;
  sent: boolean;
};

function hasEmailConfig() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CHAT_NOTIFICATION_EMAIL_TO &&
      process.env.CHAT_NOTIFICATION_EMAIL_FROM,
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildEmailText(payload: EmailNotificationPayload) {
  return [
    'New NexGenius website chat completed.',
    '',
    `Likely service: ${payload.serviceInterest}`,
    `Messages: ${payload.messageCount}`,
    `Summary: ${payload.summary}`,
    '',
    'Transcript:',
    payload.transcript,
  ].join('\n');
}

function buildEmailHtml(payload: EmailNotificationPayload) {
  const safeTranscript = escapeHtml(payload.transcript).replaceAll('\n', '<br />');
  const safeSummary = escapeHtml(payload.summary);
  const safeService = escapeHtml(payload.serviceInterest);

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;padding:24px;">
      <h2 style="margin:0 0 16px;">New NexGenius website chat completed</h2>
      <p style="margin:0 0 8px;"><strong>Likely service:</strong> ${safeService}</p>
      <p style="margin:0 0 8px;"><strong>Messages:</strong> ${payload.messageCount}</p>
      <p style="margin:0 0 20px;"><strong>Summary:</strong> ${safeSummary}</p>
      <h3 style="margin:0 0 12px;">Transcript</h3>
      <div style="padding:16px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
        ${safeTranscript}
      </div>
    </div>
  `.trim();
}

function buildContactEmailText(payload: ContactFormPayload) {
  return [
    'New NexGenius Contact Form Submission',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || 'N/A'}`,
    `Service Interested: ${payload.service || 'N/A'}`,
    '',
    'Message:',
    payload.message,
  ].join('\n');
}

function buildContactEmailHtml(payload: ContactFormPayload) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;padding:24px;">
      <h2 style="margin:0 0 16px;">New Contact Form Submission</h2>
      <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p style="margin:0 0 8px;"><strong>Company:</strong> ${escapeHtml(payload.company || 'N/A')}</p>
      <p style="margin:0 0 8px;"><strong>Service:</strong> ${escapeHtml(payload.service || 'N/A')}</p>
      <h3 style="margin:0 0 12px;">Message</h3>
      <div style="padding:16px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
        ${escapeHtml(payload.message).replaceAll('\n', '<br />')}
      </div>
    </div>
  `.trim();
}

export function isEmailNotificationConfigured() {
  return hasEmailConfig();
}

export async function sendEmailNotification(
  payload: EmailNotificationPayload,
): Promise<EmailNotificationResult> {
  if (!hasEmailConfig()) {
    return { configured: false, provider: null, sent: false };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CHAT_NOTIFICATION_EMAIL_FROM,
      to: [process.env.CHAT_NOTIFICATION_EMAIL_TO],
      reply_to: process.env.CHAT_NOTIFICATION_EMAIL_REPLY_TO || undefined,
      subject: `New NexGenius chat lead: ${payload.serviceInterest}`,
      text: buildEmailText(payload),
      html: buildEmailHtml(payload),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email request failed: ${response.status} ${errorText}`);
  }

  return {
    configured: true,
    provider: 'resend',
    sent: true,
  };
}

export async function sendContactEmail(
  payload: ContactFormPayload,
): Promise<EmailNotificationResult> {
  if (!hasEmailConfig()) {
    return { configured: false, provider: null, sent: false };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CHAT_NOTIFICATION_EMAIL_FROM,
      to: [process.env.CHAT_NOTIFICATION_EMAIL_TO],
      reply_to: payload.email,
      subject: `New NexGenius Inquiry from ${payload.name}`,
      text: buildContactEmailText(payload),
      html: buildContactEmailHtml(payload),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email request failed: ${response.status} ${errorText}`);
  }

  return {
    configured: true,
    provider: 'resend',
    sent: true,
  };
}
