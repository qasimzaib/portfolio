'use client';

import { EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { trackFormSubmission } from '@/lib/analytics';
import { ContactFormData } from '@/lib/types';

export function ContactForm() {
	const [formData, setFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState<Partial<ContactFormData>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		type: 'success' | 'error' | null;
		message: string;
	}>({ type: null, message: '' });

	const validateForm = (): boolean => {
		const newErrors: Partial<ContactFormData> = {};

		// Validate name
		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		// Validate email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		// Validate message
		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Message must be at least 10 characters long';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validate form
		if (!validateForm()) {
			return;
		}

		// Show submitting state
		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: '' });

		try {
			// Send the form data to our API endpoint
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Something went wrong');
			}

			// Show success message
			setSubmitStatus({
				type: 'success',
				message:
					data.message ||
					"Your message has been sent successfully! I'll get back to you soon.",
			});

			// Track successful form submission
			trackFormSubmission('contact', true);

			// Reset form
			setFormData({
				name: '',
				email: '',
				message: '',
			});
		} catch (error) {
			// Show error message
			setSubmitStatus({
				type: 'error',
				message:
					error instanceof Error
						? error.message
						: 'There was an error sending your message. Please try again later.',
			});

			// Track failed form submission
			trackFormSubmission('contact', false);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));

		// Clear error for this field when user starts typing
		if (errors[name as keyof ContactFormData]) {
			setErrors(prev => ({ ...prev, [name]: undefined }));
		}
	};

	return (
		<div>
			{submitStatus.type && (
				<div
					className={`mb-6 p-4 rounded-md ${
						submitStatus.type === 'success'
							? 'bg-green-50 border border-green-200 text-green-700'
							: 'bg-red-50 border border-red-200 text-red-700'
					}`}
				>
					<p>{submitStatus.message}</p>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="grid gap-2">
					<div className="flex justify-between items-baseline">
						<label htmlFor="name" className="text-sm font-medium">
							Name
						</label>
						{errors.name && (
							<span className="text-xs text-red-500 flex items-center">
								<ExclamationCircleIcon className="h-3 w-3 mr-1" />
								{errors.name}
							</span>
						)}
					</div>
					<input
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your name"
						className={`rounded-md border ${
							errors.name ? 'border-red-300 bg-red-50' : 'border-input bg-background'
						} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
					/>
				</div>

				<div className="grid gap-2">
					<div className="flex justify-between items-baseline">
						<label htmlFor="email" className="text-sm font-medium">
							Email
						</label>
						{errors.email && (
							<span className="text-xs text-red-500 flex items-center">
								<ExclamationCircleIcon className="h-3 w-3 mr-1" />
								{errors.email}
							</span>
						)}
					</div>
					<input
						id="email"
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Your email"
						className={`rounded-md border ${
							errors.email ? 'border-red-300 bg-red-50' : 'border-input bg-background'
						} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
					/>
				</div>

				<div className="grid gap-2">
					<div className="flex justify-between items-baseline">
						<label htmlFor="message" className="text-sm font-medium">
							Message
						</label>
						{errors.message && (
							<span className="text-xs text-red-500 flex items-center">
								<ExclamationCircleIcon className="h-3 w-3 mr-1" />
								{errors.message}
							</span>
						)}
					</div>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Your message"
						rows={5}
						className={`rounded-md border ${
							errors.message
								? 'border-red-300 bg-red-50'
								: 'border-input bg-background'
						} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
					/>
				</div>

				<Button type="submit" disabled={isSubmitting} className="w-full">
					{isSubmitting ? (
						<>
							<svg
								className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Sending...
						</>
					) : (
						<>
							<EnvelopeIcon className="mr-2 h-4 w-4" />
							Send Message
						</>
					)}
				</Button>
			</form>
		</div>
	);
}
