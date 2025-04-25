'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { experiences } from '@/data/resume';

export function ExperienceHighlight() {
	// Get just the first 2 experiences
	const highlightedExperiences = experiences.slice(0, 2);

	return (
		<section className="py-12 md:py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
					<motion.h2
						className="text-3xl font-bold"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Latest Experience
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Link
							href="/experience"
							className="text-muted-foreground hover:text-primary inline-flex items-center mt-4 md:mt-0 group"
						>
							View full experience
							<ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</motion.div>
				</div>

				<div className="space-y-8">
					{highlightedExperiences.map((experience, index) => (
						<motion.div
							key={`${experience.company}-${index}`}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="flex flex-col md:flex-row md:items-start md:justify-between">
								<div>
									<h3 className="text-xl font-semibold text-primary">
										{experience.role}
									</h3>
									<p className="text-muted-foreground">{experience.company}</p>
									<ul className="mt-4 space-y-2 text-sm list-disc list-inside">
										{experience.highlights.map((highlight, idx) => (
											<li key={idx} className="text-muted-foreground">
												{highlight}
											</li>
										))}
									</ul>
								</div>
								<div className="mt-4 md:mt-0 md:ml-4 md:text-right">
									<span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
										{experience.period}
									</span>
									<div className="mt-2 flex flex-wrap gap-2 md:justify-end">
										{experience.tech.slice(0, 3).map(tech => (
											<span
												key={tech}
												className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium transition-colors hover:bg-secondary/80"
											>
												{tech}
											</span>
										))}
										{experience.tech.length > 3 && (
											<span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
												+{experience.tech.length - 3} more
											</span>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
