import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Simple validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return 'Name must be at least 2 characters long';
  }

  if (!data.email || !validateEmail(data.email)) {
    return 'Please provide a valid email address';
  }

  if (!data.subject || data.subject.trim().length < 3) {
    return 'Subject must be at least 3 characters long';
  }

  if (!data.message || data.message.trim().length < 10) {
    return 'Message must be at least 10 characters long';
  }

  return null;
}

export async function POST(request: NextRequest) {
  // Check if request method is POST
  if (request.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    // Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body as ContactFormData;

    // Validate form data
    const validationError = validateFormData({ name, email, subject, message });
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    // Rate limiting (basic)
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    
    // TODO: Implement rate limiting with Redis or similar

    // TODO: Send email to admin
    // This could integrate with services like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend
    // - NodeMailer

    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
      ip: clientIp,
    });

    // For now, just acknowledge the submission
    // In production, implement actual email sending

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        error: 'Failed to process your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// OPTIONS for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
