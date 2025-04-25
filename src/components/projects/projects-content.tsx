'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { ProjectCard } from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/types';

interface ProjectsContentProps {
	projects: Project[];
}

export function ProjectsContent({ projects }: ProjectsContentProps) {
	// Extract unique technologies from all projects
	const allTechnologies = Array.from(new Set(projects.flatMap(project => project.tech))).sort();

	const [activeFilter, setActiveFilter] = useState<string | null>(null);

	// Filter projects based on selected technology
	const filteredProjects = activeFilter
		? projects.filter(project => project.tech.includes(activeFilter))
		: projects;

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<motion.div
				className="mb-12 space-y-4"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-4xl font-bold">Projects</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					A showcase of my key projects, highlighting architecture decisions and technical
					solutions.
				</p>
			</motion.div>

			{/* Technology Filters */}
			<motion.div
				className="mb-8 overflow-auto scrollbar pb-4"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<div className="flex space-x-2">
					<Button
						variant={activeFilter === null ? 'default' : 'outline'}
						size="sm"
						onClick={() => setActiveFilter(null)}
						className="whitespace-nowrap"
					>
						All Projects
					</Button>
					{allTechnologies.map((tech, index) => (
						<motion.div
							key={tech}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
						>
							<Button
								variant={activeFilter === tech ? 'default' : 'outline'}
								size="sm"
								onClick={() => setActiveFilter(tech)}
								className="whitespace-nowrap"
							>
								{tech}
							</Button>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Projects Grid */}
			<motion.div className="grid gap-8 md:grid-cols-2" layout transition={{ duration: 0.5 }}>
				{filteredProjects.length > 0 ? (
					filteredProjects.map((project, index) => (
						<motion.div
							key={`${project.name}-${index}`}
							layout
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.3 }}
						>
							<ProjectCard {...project} index={index} />
						</motion.div>
					))
				) : (
					<motion.div
						className="col-span-2 text-center py-12"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<p className="text-lg text-muted-foreground">
							No projects found with the selected filter.
						</p>
						<Button
							variant="link"
							onClick={() => setActiveFilter(null)}
							className="mt-2"
						>
							Clear filter
						</Button>
					</motion.div>
				)}
			</motion.div>

			{/* Project Approach */}
			<motion.section
				className="mt-16 rounded-lg border bg-card p-8 shadow-sm"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<h2 className="text-2xl font-bold mb-4">My Approach to Projects</h2>
				<div className="text-muted-foreground space-y-4">
					<p>
						When approaching new projects, I focus on understanding the business goals
						first, then architect solutions that prioritize scalability,
						maintainability, and performance.
					</p>
					<p>
						I believe in choosing the right tech stack for each specific problem rather
						than forcing a one-size-fits-all approach. This pragmatic philosophy has
						helped me deliver successful solutions across various domains and
						industries.
					</p>
				</div>
			</motion.section>

			{/* Project Process */}
			<motion.section
				className="mt-8 rounded-lg border bg-card p-8 shadow-sm"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h2 className="text-2xl font-bold mb-6">My Project Process</h2>
				<div className="grid md:grid-cols-4 gap-6">
					<div className="space-y-2">
						<div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary font-bold">
							1
						</div>
						<h3 className="text-lg font-medium">Discovery</h3>
						<p className="text-muted-foreground">
							Understanding business requirements and technical constraints to define
							clear project goals.
						</p>
					</div>
					<div className="space-y-2">
						<div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary font-bold">
							2
						</div>
						<h3 className="text-lg font-medium">Architecture</h3>
						<p className="text-muted-foreground">
							Designing scalable and maintainable system architecture that aligns with
							project goals.
						</p>
					</div>
					<div className="space-y-2">
						<div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary font-bold">
							3
						</div>
						<h3 className="text-lg font-medium">Implementation</h3>
						<p className="text-muted-foreground">
							Developing robust solutions with a focus on code quality and
							performance.
						</p>
					</div>
					<div className="space-y-2">
						<div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary font-bold">
							4
						</div>
						<h3 className="text-lg font-medium">Refinement</h3>
						<p className="text-muted-foreground">
							Iterative improvement based on feedback to deliver optimal solutions.
						</p>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
