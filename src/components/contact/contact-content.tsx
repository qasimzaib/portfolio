'use client';

import { EnvelopeIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import { ContactForm } from '@/components/contact/contact-form';
import { ResumeDownload } from '@/components/resume/resume-download';
import { OutboundLink } from '@/components/ui/outbound-link';
// import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export function ContactContent() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<motion.div
				className="mb-12 space-y-4"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-4xl font-bold">Contact Me</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					Interested in working together? I&apos;m available for project inquiries and
					consulting opportunities.
				</p>
			</motion.div>

			<div className="grid gap-12 md:grid-cols-2">
				{/* Contact Form */}
				<motion.div
					className="rounded-lg border bg-card p-6 shadow-sm order-2 md:order-1"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<h2 className="text-2xl font-bold mb-6">Send a Message</h2>
					<ContactForm />
				</motion.div>

				{/* Contact Information */}
				<motion.div
					className="space-y-8 order-1 md:order-2"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<div className="rounded-lg border bg-card p-6 shadow-sm">
						<h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
						<div className="space-y-6">
							<motion.div
								className="flex items-start"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								<div className="bg-primary/10 p-2 rounded-full mr-4">
									<EnvelopeIcon className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-base font-medium">Email</h3>
									<OutboundLink
										href="mailto:zaib_qasim@hotmail.com"
										className="text-primary hover:underline"
										trackingId="contact-email"
									>
										zaib_qasim@hotmail.com
									</OutboundLink>
								</div>
							</motion.div>

							<motion.div
								className="flex items-start"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.5 }}
							>
								<div className="bg-primary/10 p-2 rounded-full mr-4">
									<GlobeAltIcon className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-base font-medium">LinkedIn</h3>
									<OutboundLink
										href="https://linkedin.com/in/qasimzaib"
										className="text-primary hover:underline"
										trackingId="contact-linkedin"
									>
										linkedin.com/in/qasimzaib
									</OutboundLink>
								</div>
							</motion.div>

							<motion.div
								className="flex items-start"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								<div className="bg-primary/10 p-2 rounded-full mr-4">
									<DevicePhoneMobileIcon className="h-5 w-5 text-primary" />
								</div>
								<div>
									<h3 className="text-base font-medium">GitHub</h3>
									<OutboundLink
										href="https://github.com/qasimzaib"
										className="text-primary hover:underline"
										trackingId="contact-github"
									>
										github.com/qasimzaib
									</OutboundLink>
								</div>
							</motion.div>
						</div>
					</div>

					<motion.div
						className="rounded-lg border bg-card p-6 shadow-sm"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						<h2 className="text-xl font-bold mb-4">Resume</h2>
						<p className="text-muted-foreground mb-4">
							Download my resume for a comprehensive overview of my experience,
							skills, and qualifications.
						</p>
						<ResumeDownload />
					</motion.div>
				</motion.div>
			</div>

			{/* Availability Section */}
			<motion.section
				className="mt-12 rounded-lg border bg-card p-6 shadow-sm text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.8 }}
			>
				<h2 className="text-xl font-bold mb-2">
					Currently Available for New Opportunities
				</h2>
				<p className="text-muted-foreground">
					I&apos;m open to consulting, freelance projects, and full-time positions.
					Let&apos;s discuss how I can contribute to your team!
				</p>
			</motion.section>
		</div>
	);
}
