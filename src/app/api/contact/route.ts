import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with the API Key (set in environment variables)
// If RESEND_API_KEY is not set (e.g. during development/testing without keys), it might throw,
// so we initialize cautiously.
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, country, service, budget, message } = await req.json();

    if (!resend) {
      // Mock mode if API key is not available
      console.log('Mock email sent (Resend API key missing):', { name, email, message });
      return NextResponse.json({ success: true, mock: true });
    }

    const data = await resend.emails.send({
      from: 'NexGenius Leads <onboarding@resend.dev>', // Update to verified domain in production
      to: ['hello@nexgeniussolutions.com'], 
      subject: `New Lead: ${name} from ${company || 'Unknown Company'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Country:</strong> ${country || 'N/A'}</p>
        <p><strong>Service Required:</strong> ${service || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
