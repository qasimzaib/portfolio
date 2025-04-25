import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import { HeroSection } from '@/components/home/hero-section';
// import { SITE_CONFIG } from '@/lib/constants';
import { projects } from '@/data/resume';

export default function HomePage() {
	// Select just two featured projects
	const featuredProjects = projects.slice(0, 2);

	return (
		<div>
			<HeroSection />

			{/* Featured Projects Section */}
			<section className="py-12 md:py-24 bg-secondary/50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
						<h2 className="text-3xl font-bold">Featured Projects</h2>
						<Link
							href="/projects"
							className="text-muted-foreground hover:text-primary inline-flex items-center mt-4 md:mt-0"
						>
							View all projects <ArrowRightIcon className="ml-1 h-4 w-4" />
						</Link>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						{featuredProjects.map((project, index) => (
							<div
								key={`${project.name}-${index}`}
								className="group relative rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
							>
								<div className="aspect-video w-full bg-muted rounded-md mb-4" />
								<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
									{project.name}
								</h3>
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
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Experience Highlight Section */}
			<section className="py-12 md:py-24">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
						<h2 className="text-3xl font-bold">Latest Experience</h2>
						<Link
							href="/experience"
							className="text-muted-foreground hover:text-primary inline-flex items-center mt-4 md:mt-0"
						>
							View full experience <ArrowRightIcon className="ml-1 h-4 w-4" />
						</Link>
					</div>

					<div className="rounded-lg border bg-card p-6 shadow-sm">
						<div className="flex flex-col md:flex-row md:items-start md:justify-between">
							<div>
								<h3 className="text-xl font-semibold">Managing Consultant</h3>
								<p className="text-muted-foreground">Systems Limited</p>
								<ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
									<li>Architected & delivered 4+ large‑scale cloud solutions</li>
									<li>Led cross‑functional teams of up to 20 developers</li>
									<li>Headless checkout project boosted conversion by 20%</li>
								</ul>
							</div>
							<div className="mt-4 md:mt-0 md:ml-4 md:text-right">
								<span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
									Apr 2021 – Present
								</span>
								<div className="mt-2 flex flex-wrap gap-2 md:justify-end">
									<span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
										Next.js
									</span>
									<span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
										Node.js
									</span>
									<span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
										AWS
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 md:py-24 bg-secondary/50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="rounded-lg bg-card p-8 shadow-sm border max-w-3xl mx-auto text-center">
						<h2 className="text-2xl md:text-3xl font-bold">Ready to work together?</h2>
						<p className="mt-4 text-muted-foreground">
							I&apos;m currently available for new projects and consulting
							opportunities. Let&apos;s build something amazing together.
						</p>
						<div className="mt-6">
							<Link
								href="/contact"
								className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
							>
								Get in Touch
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
