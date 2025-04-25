'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function CTASection() {
	return (
		<section className="py-12 md:py-24 bg-secondary/50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="rounded-lg bg-card p-8 md:p-12 shadow-sm border max-w-3xl mx-auto text-center relative overflow-hidden"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{/* Decorative elements */}
					<div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
					<div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />

					<div className="relative">
						<motion.h2
							className="text-2xl md:text-3xl font-bold"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Ready to work together?
						</motion.h2>
						<motion.p
							className="mt-4 text-muted-foreground"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							I&apos;m currently available for new projects and consulting
							opportunities. Let&apos;s build something amazing together.
						</motion.p>
						<motion.div
							className="mt-8"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Button asChild size="lg" className="relative group">
								<Link href="/contact">
									<span className="relative z-10">Get in Touch</span>
									<span className="absolute inset-0 rounded-md bg-primary/10 scale-0 transition-transform group-hover:scale-100" />
								</Link>
							</Button>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
