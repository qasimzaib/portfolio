'use client';

import { useState } from 'react';

import { ContactFormData } from '@/lib/types';

export function ContactForm() {
	const [formData, setFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		message: '',
	});

	// This will be implemented in Phase 4
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// API submission will be added in Phase 4
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="grid gap-2">
				<label htmlFor="name" className="text-sm font-medium">
					Name
				</label>
				<input
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Your name"
					className="rounded-md border border-input bg-background px-3 py-2"
					required
				/>
			</div>
			<div className="grid gap-2">
				<label htmlFor="email" className="text-sm font-medium">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Your email"
					className="rounded-md border border-input bg-background px-3 py-2"
					required
				/>
			</div>
			<div className="grid gap-2">
				<label htmlFor="message" className="text-sm font-medium">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Your message"
					className="rounded-md border border-input bg-background px-3 py-2 min-h-[120px]"
					required
				/>
			</div>
			<button
				type="submit"
				className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
			>
				Send Message
			</button>
		</form>
	);
}
