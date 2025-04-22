import { experiences } from '@/data/resume';

export default function Experience() {
	return (
		<section id='experience' className='py-20 bg-gray-50'>
			<div className='container mx-auto px-6'>
				<h2 className='text-3xl font-bold mb-10'>Experience</h2>
				<div className='space-y-10'>
					{experiences.map((exp) => (
						<div key={exp.company}>
							<h3 className='text-xl font-semibold'>
								{exp.role} @ {exp.company}
							</h3>
							<span className='text-sm text-gray-500'>{exp.period}</span>
							<ul className='list-disc ml-5 mt-2 space-y-1'>
								{exp.highlights.map((h, idx) => (
									<li key={idx}>{h}</li>
								))}
							</ul>
							<div className='flex flex-wrap gap-2 mt-2'>
								{exp.tech.map((t) => (
									<span
										key={t}
										className='px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded'
									>
										{t}
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
