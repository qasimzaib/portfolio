import { Metadata } from 'next';

import { SkillCard } from '@/components/skills/skill-card';
import { skills } from '@/data/resume';
// import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Skills',
	description:
		'Technical skills and expertise of Qasim Zaib, covering languages, frameworks, architecture, and more.',
};

export default function SkillsPage() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<div className="mb-12 space-y-4">
				<h1 className="text-4xl font-bold">Skills & Expertise</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					A comprehensive overview of my technical skills, expertise, and knowledge areas.
				</p>
			</div>

			{/* Skills Categories */}
			<div className="grid gap-12">
				{skills.map((category, categoryIndex) => (
					<section key={`${category.label}-${categoryIndex}`}>
						<h2 className="text-2xl font-bold mb-6">{category.label}</h2>
						<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{category.items.map((skill, skillIndex) => (
								<SkillCard
									key={`${skill}-${skillIndex}`}
									name={skill}
									index={skillIndex}
								/>
							))}
						</div>
					</section>
				))}
			</div>

			{/* Additional Info */}
			<section className="mt-16 rounded-lg border bg-card p-6 shadow-sm">
				<h2 className="text-2xl font-bold mb-4">Professional Development</h2>
				<p className="text-muted-foreground">
					I regularly engage in continuous learning to stay updated with the latest
					technologies and best practices in software development and architecture. This
					includes online courses, technical books, conferences, and participating in
					developer communities.
				</p>
			</section>
		</div>
	);
}
