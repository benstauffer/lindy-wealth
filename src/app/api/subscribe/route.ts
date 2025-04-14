import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID;
    const apiKey = process.env.BEEHIIV_API_KEY;

    if (!publicationId || !apiKey) {
      console.error('Missing Beehiiv environment variables');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        email: email,
        // Add other parameters like utm source/medium if needed
        // send_welcome_email: true, // Optional: uncomment to send welcome email
      })
    });

    const data = await response.json();

    if (!response.ok) {
      // Beehiiv might return specific error messages
      console.error('Beehiiv API Error:', data);
      return NextResponse.json({ error: data.error || 'Subscription failed.' }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: 'Subscription successful!' });

  } catch (error) {
    console.error('Subscription endpoint error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
} 