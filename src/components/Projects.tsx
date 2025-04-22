import { projects } from '@/data/resume';
import ProjectCard from './ProjectCard';

export default function Projects() {
	return (
		<section id='projects' className='py-20'>
			<div className='container mx-auto px-6'>
				<h2 className='text-3xl font-bold mb-10'>Projects</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					{projects.map((p) => (
						<ProjectCard key={p.name} {...p} />
					))}
				</div>
			</div>
		</section>
	);
}
