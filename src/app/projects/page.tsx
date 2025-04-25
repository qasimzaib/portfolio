import { Metadata } from 'next';

import { ProjectCard } from '@/components/projects/project-card';
import { projects } from '@/data/resume';
// import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Projects',
	description:
		'Portfolio of notable projects by Qasim Zaib, showcasing expertise in architecture and development.',
};

export default function ProjectsPage() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<div className="mb-12 space-y-4">
				<h1 className="text-4xl font-bold">Projects</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					A showcase of my key projects, highlighting architecture decisions and technical
					solutions.
				</p>
			</div>

			{/* Project Categories */}
			<section className="mb-16">
				<h2 className="text-2xl font-bold mb-6">Featured Work</h2>
				<div className="grid gap-8 md:grid-cols-2">
					{projects.map((project, index) => (
						<ProjectCard key={`${project.name}-${index}`} {...project} index={index} />
					))}
				</div>
			</section>

			{/* Project Approach */}
			<section className="rounded-lg border bg-card p-6 shadow-sm">
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
			</section>
		</div>
	);
}
