import { Metadata } from 'next';

import { ExperienceContent } from '@/components/experience/experience-content';
import { experiences } from '@/data/resume';
// import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Experience',
	description:
		'Professional experience of Qasim Zaib, Software Architect & Full-Stack Developer with 10+ years in the industry.',
};

export default function ExperiencePage() {
	return <ExperienceContent experiences={experiences} />;
}
