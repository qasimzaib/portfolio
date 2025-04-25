import { skills } from '@/data/resume';

export default function Skills() {
	return (
		<section id="skills" className="py-20 bg-gray-50">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold mb-10">Skills</h2>

				<div className="grid md:grid-cols-2 gap-6">
					{skills.map(category => (
						<div key={category.label}>
							<h4 className="font-semibold mb-2">
								{category.label}
							</h4>

							<div className="flex flex-wrap gap-2">
								{category.items.map(i => (
									<span
										key={i}
										className="px-2 py-0.5 text-xs bg-emerald-100 text-emerald-700 rounded"
									>
										{i}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
