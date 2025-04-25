import { Metadata } from 'next';
import Link from 'next/link';

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

			{/* Projects Grid - To be enhanced in Phase 3 */}
			<div className="grid gap-8 md:grid-cols-2">
				{projects.map((project, index) => (
					<div
						key={`${project.name}-${index}`}
						className="rounded-lg border bg-card shadow-sm overflow-hidden"
					>
						<div className="aspect-video w-full bg-muted" />
						<div className="p-6">
							<h2 className="text-2xl font-bold">{project.name}</h2>
							<p className="mt-2 text-muted-foreground">{project.description}</p>

							<div className="mt-4 flex flex-wrap gap-2">
								{project.tech.map(tech => (
									<span
										key={tech}
										className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium"
									>
										{tech}
									</span>
								))}
							</div>

							{project.link && (
								<div className="mt-6">
									<Link
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										View Project →
									</Link>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
