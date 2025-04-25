import { Metadata } from 'next';

import { experiences } from '@/data/resume';
// import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Experience',
	description:
		'Professional experience of Qasim Zaib, Software Architect & Full-Stack Developer with 10+ years in the industry.',
};

export default function ExperiencePage() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<div className="mb-12 space-y-4">
				<h1 className="text-4xl font-bold">Experience</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					Over 10 years of experience building innovative software solutions across
					various industries.
				</p>
			</div>

			{/* Experience Timeline - To be enhanced in Phase 3 */}
			<div className="space-y-12">
				{experiences.map((exp, index) => (
					<div
						key={`${exp.company}-${index}`}
						className="rounded-lg border bg-card p-6 shadow-sm"
					>
						<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
							<div>
								<h2 className="text-2xl font-bold">{exp.role}</h2>
								<p className="text-xl text-muted-foreground">{exp.company}</p>
							</div>
							<div className="mt-2 md:mt-0">
								<span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
									{exp.period}
								</span>
							</div>
						</div>

						<div className="space-y-4">
							<div>
								<h3 className="text-lg font-medium mb-2">Highlights</h3>
								<ul className="list-disc list-inside space-y-1 text-muted-foreground">
									{exp.highlights.map((highlight, idx) => (
										<li key={idx}>{highlight}</li>
									))}
								</ul>
							</div>

							<div>
								<h3 className="text-lg font-medium mb-2">Technologies</h3>
								<div className="flex flex-wrap gap-2">
									{exp.tech.map(tech => (
										<span
											key={tech}
											className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
