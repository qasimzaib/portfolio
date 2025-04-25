import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// import { SITE_CONFIG } from '@/lib/constants';

export default function HomePage() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center py-12 md:py-24 text-center">
				<h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
					<span className="gradient-text">Qasim Zaib</span>
				</h1>
				<p className="mt-4 max-w-3xl text-xl text-muted-foreground">
					Software Architect & Full-Stack Developer with 10+ years of experience building
					performant cloud products that scale.
				</p>
				<div className="mt-8 flex flex-wrap gap-4 justify-center">
					<Link
						href="/contact"
						className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
					>
						Get in Touch
					</Link>
					<Link
						href="/projects"
						className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
					>
						View Projects
					</Link>
				</div>
			</section>

			{/* Featured Projects Section */}
			<section className="py-12 md:py-24">
				<div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
					<h2 className="text-3xl font-bold">Featured Projects</h2>
					<Link
						href="/projects"
						className="text-muted-foreground hover:text-primary inline-flex items-center mt-4 md:mt-0"
					>
						View all projects <ArrowRightIcon className="ml-1 h-4 w-4" />
					</Link>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
					{/* Project cards will be added in Phase 3 */}
					<div className="group relative rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
						<h3 className="text-xl font-semibold">Shopify‑Style E‑Commerce SaaS</h3>
						<p className="mt-2 text-muted-foreground">
							B2C platform enabling small businesses to spin up stores with zero
							technical overhead.
						</p>
					</div>
					<div className="group relative rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
						<h3 className="text-xl font-semibold">Digital Asset Management Platform</h3>
						<p className="mt-2 text-muted-foreground">
							Rich‑media activation platform built on a micro‑services architecture.
						</p>
					</div>
				</div>
			</section>

			{/* Experience Highlight Section */}
			<section className="py-12 md:py-24">
				<div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
					<h2 className="text-3xl font-bold">Experience Highlights</h2>
					<Link
						href="/experience"
						className="text-muted-foreground hover:text-primary inline-flex items-center mt-4 md:mt-0"
					>
						View full experience <ArrowRightIcon className="ml-1 h-4 w-4" />
					</Link>
				</div>

				<div className="space-y-6">
					{/* Experience items will be expanded in Phase 3 */}
					<div className="rounded-lg border bg-card p-6 shadow-sm">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between">
							<div>
								<h3 className="text-xl font-semibold">Managing Consultant</h3>
								<p className="text-muted-foreground">Systems Limited</p>
							</div>
							<p className="text-sm text-muted-foreground mt-2 md:mt-0">
								Apr 2021 – Present
							</p>
						</div>
					</div>
					<div className="rounded-lg border bg-card p-6 shadow-sm">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between">
							<div>
								<h3 className="text-xl font-semibold">Development Lead</h3>
								<p className="text-muted-foreground">
									TenthWheel (Founding Member)
								</p>
							</div>
							<p className="text-sm text-muted-foreground mt-2 md:mt-0">
								Nov 2020 – May 2021
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 md:py-24">
				<div className="rounded-lg bg-card p-8 shadow-sm border">
					<h2 className="text-2xl font-bold">Ready to work together?</h2>
					<p className="mt-2 text-muted-foreground">
						I&apos;m currently available for new projects and consulting opportunities.
					</p>
					<div className="mt-6">
						<Link
							href="/contact"
							className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
						>
							Contact Me
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
