import { Metadata } from 'next';

import { TimelineItem } from '@/components/experience/timeline-item';
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

			{/* Experience Timeline */}
			<div className="relative">
				{/* Timeline Line (Desktop) */}
				<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 z-0" />

				<div className="space-y-12 md:space-y-0">
					{experiences.map((exp, index) => (
						<div
							key={`${exp.company}-${index}`}
							className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
						>
							<div className="md:w-1/2" />
							<TimelineItem
								{...exp}
								index={index}
								isLast={index === experiences.length - 1}
								className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
							/>
						</div>
					))}
				</div>
			</div>

			{/* Professional Summary */}
			<section className="mt-20 rounded-lg border bg-card p-6 shadow-sm">
				<h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
				<div className="text-muted-foreground space-y-4">
					<p>
						Throughout my career, I&apos;ve consistently led the architecture and
						delivery of complex software solutions that solve real business problems. My
						focus on quality, performance, and maintainability has helped organizations
						achieve their strategic goals while building robust technology foundations.
					</p>
					<p>
						I excel in bridging the gap between business requirements and technical
						implementation, ensuring that projects deliver measurable value while
						maintaining high engineering standards.
					</p>
				</div>
			</section>
		</div>
	);
}
