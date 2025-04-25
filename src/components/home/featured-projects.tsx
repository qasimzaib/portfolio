'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { ProjectCard } from '@/components/projects/project-card';
import { projects } from '@/data/resume';

export function FeaturedProjects() {
	// Get just the first 4 projects
	const featuredProjects = projects.slice(0, 4);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section id="featured-projects" className="py-12 md:py-24 bg-secondary/50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
					<motion.h2
						className="text-3xl font-bold"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Featured Projects
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Link
							href="/projects"
							className="text-muted-foreground hover:text-primary inline-flex items-center mt-4 md:mt-0 group"
						>
							View all projects
							<ArrowRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
					</motion.div>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							className="relative"
						>
							<ProjectCard
								{...project}
								index={index}
								className={
									hoveredIndex === index
										? 'ring-2 ring-primary ring-offset-2'
										: ''
								}
							/>

							{/* Decorative element */}
							{hoveredIndex === index && (
								<motion.div
									layoutId="project-hover"
									className="absolute -inset-px rounded-lg bg-primary/10 z-[-1]"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.2 }}
								/>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
