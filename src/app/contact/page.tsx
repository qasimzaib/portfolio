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

			<div className="grid gap-8 md:grid-cols-2">
				{/* Contact Form */}
				<div className="rounded-lg border bg-card p-6 shadow-sm">
					<h2 className="text-2xl font-bold mb-6">Send a Message</h2>
					{/* Will be implemented in Phase 4 */}
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
				<div>
					<h2 className="text-2xl font-bold mb-6">Contact Information</h2>
					<div className="space-y-6">
						<div>
							<h3 className="text-base font-medium mb-2">Email</h3>
							<Link
								href="mailto:zaib_qasim@hotmail.com"
								className="text-primary hover:underline"
							>
								zaib_qasim@hotmail.com
							</Link>
						</div>
						<div>
							<h3 className="text-base font-medium mb-2">Connect on LinkedIn</h3>
							<Link
								href="https://linkedin.com/in/qasimzaib"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline"
							>
								linkedin.com/in/qasimzaib
							</Link>
						</div>
						<div>
							<h3 className="text-base font-medium mb-2">GitHub</h3>
							<Link
								href="https://github.com/qasimzaib"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline"
							>
								github.com/qasimzaib
							</Link>
						</div>
						<div>
							<h3 className="text-base font-medium mb-2">Resume</h3>
							<Link
								href="/resume.pdf"
								target="_blank"
								className="text-primary hover:underline"
							>
								Download Resume (PDF)
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
