import { Metadata } from 'next';

import { ProjectsContent } from '@/components/projects/projects-content';
import { projects } from '@/data/resume';
// import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Projects',
	description:
		'Portfolio of notable projects by Qasim Zaib, showcasing expertise in architecture and development.',
};

export default function ProjectsPage() {
	return <ProjectsContent projects={projects} />;
}
