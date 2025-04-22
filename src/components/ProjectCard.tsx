import Link from 'next/link';

interface Props {
	name: string;
	description: string;
	tech: string[];
	link?: string;
}

export default function ProjectCard({ name, description, tech, link }: Props) {
	return (
		<div className='rounded-2xl shadow p-6 transition hover:-translate-y-1 hover:shadow-lg'>
			<h3 className='text-xl font-semibold mb-2'>{name}</h3>
			<p className='mb-4'>{description}</p>

			<div className='flex flex-wrap gap-2 mb-4'>
				{tech.map((t) => (
					<span
						key={t}
						className='px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded'
					>
						{t}
					</span>
				))}
			</div>

			{link && (
				<Link href={link} className='underline hover:text-indigo-600'>
					View project
				</Link>
			)}
		</div>
	);
}
