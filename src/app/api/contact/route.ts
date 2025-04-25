import { NextRequest, NextResponse } from 'next/server';

import { ContactFormData } from '@/lib/types';

export async function POST(request: NextRequest) {
	try {
		// Parse the request body
		const body = await request.json();
		const { name, email, message } = body as ContactFormData;

		// Validate the data
		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
		}

		// Simple email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
		}

		// Honeypot check (if implementing a honeypot field)
		// if (body.honeypot) {
		//   // Silently succeed but don't process
		//   return NextResponse.json({ success: true }, { status: 200 });
		// }

		// In a real implementation, you would:
		// 1. Store the message in a database
		// 2. Send an email notification
		// 3. Possibly add the person to a CRM

		// For now, we're just simulating success
		console.log('Contact form submission:', { name, email, message });

		// Return a success response
		return NextResponse.json(
			{
				success: true,
				message: "Your message has been sent successfully! I'll get back to you soon.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error processing contact form:', error);

		// Return an error response
		return NextResponse.json(
			{
				success: false,
				error: 'There was an error processing your request. Please try again later.',
			},
			{ status: 500 }
		);
	}
}
