import { Metadata } from 'next';

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

			{/* Skills Categories - To be enhanced in Phase 3 */}
			<div className="grid gap-10">
				{skills.map((category, index) => (
					<section key={`${category.label}-${index}`}>
						<h2 className="text-2xl font-bold mb-6">{category.label}</h2>
						<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{category.items.map(skill => (
								<div
									key={skill}
									className="rounded-lg border bg-card p-4 shadow-sm flex items-center"
								>
									<span className="text-base font-medium">{skill}</span>
								</div>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
