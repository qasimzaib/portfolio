import { Metadata } from 'next';

import { SkillsContent } from '@/components/skills/skills-content';
import { skills } from '@/data/resume';
// import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Skills',
	description:
		'Technical skills and expertise of Qasim Zaib, covering languages, frameworks, architecture, and more.',
};

export default function SkillsPage() {
	return <SkillsContent skills={skills} />;
}
