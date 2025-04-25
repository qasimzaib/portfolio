import { EnvelopeIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

// import { ContactForm } from '@/components/contact/contact-form';
// import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Contact',
	description: 'Get in touch with Qasim Zaib for collaboration, opportunities, or inquiries.',
};

export default function ContactPage() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<div className="mb-12 space-y-4">
				<h1 className="text-4xl font-bold">Contact Me</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					Interested in working together? I&apos;m available for project inquiries and
					consulting opportunities.
				</p>
			</div>

			<div className="grid gap-12 md:grid-cols-2">
				{/* Contact Form */}
				<div className="rounded-lg border bg-card p-6 shadow-sm order-2 md:order-1">
					<h2 className="text-2xl font-bold mb-6">Send a Message</h2>
					{/* Placeholder for contact form - will be implemented in Phase 4 */}
					<div className="space-y-4">
						<div className="grid gap-2">
							<label htmlFor="name" className="text-sm font-medium">
								Name
							</label>
							<input
								id="name"
								placeholder="Your name"
								className="rounded-md border border-input bg-background px-3 py-2"
								disabled
							/>
						</div>
						<div className="grid gap-2">
							<label htmlFor="email" className="text-sm font-medium">
								Email
							</label>
							<input
								id="email"
								type="email"
								placeholder="Your email"
								className="rounded-md border border-input bg-background px-3 py-2"
								disabled
							/>
						</div>
						<div className="grid gap-2">
							<label htmlFor="message" className="text-sm font-medium">
								Message
							</label>
							<textarea
								id="message"
								placeholder="Your message"
								className="rounded-md border border-input bg-background px-3 py-2 min-h-[120px]"
								disabled
							/>
						</div>
						<button
							disabled
							className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground opacity-50 cursor-not-allowed"
						>
							Send Message
						</button>
						<p className="text-xs text-muted-foreground">
							(Contact form will be functional in Phase 4)
						</p>
					</div>
				</div>

				{/* Contact Information */}
				<div className="space-y-8 order-1 md:order-2">
					<div className="rounded-lg border bg-card p-6 shadow-sm">
						<h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
						<div className="space-y-6">
							<div className="flex items-start">
								<div className="bg-primary/10 p-2 rounded-full mr-4">
									<EnvelopeIcon className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-base font-medium">Email</h3>
									<Link
										href="mailto:zaib_qasim@hotmail.com"
										className="text-primary hover:underline"
									>
										zaib_qasim@hotmail.com
									</Link>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-primary/10 p-2 rounded-full mr-4">
									<GlobeAltIcon className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-base font-medium">LinkedIn</h3>
									<Link
										href="https://linkedin.com/in/qasimzaib"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										linkedin.com/in/qasimzaib
									</Link>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-primary/10 p-2 rounded-full mr-4">
									<DevicePhoneMobileIcon className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-base font-medium">GitHub</h3>
									<Link
										href="https://github.com/qasimzaib"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										github.com/qasimzaib
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-lg border bg-card p-6 shadow-sm">
						<h2 className="text-xl font-bold mb-4">Resume</h2>
						<p className="text-muted-foreground mb-4">
							Download my resume for a comprehensive overview of my experience,
							skills, and qualifications.
						</p>
						<Link
							href="/resume.pdf"
							target="_blank"
							className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
						>
							Download Resume (PDF)
						</Link>
					</div>
				</div>
			</div>

			{/* Availability Section */}
			<section className="mt-12 rounded-lg border bg-card p-6 shadow-sm text-center">
				<h2 className="text-xl font-bold mb-2">
					Currently Available for New Opportunities
				</h2>
				<p className="text-muted-foreground">
					I&apos;m open to consulting, freelance projects, and full-time positions.
					Let&apos;s discuss how I can contribute to your team!
				</p>
			</section>
		</div>
	);
}
