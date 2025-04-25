import { Metadata } from 'next';

import { CTASection } from '@/components/home/cta-section';
import { ExperienceHighlight } from '@/components/home/experience-highlight';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { HeroSection } from '@/components/home/hero-section';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
	title: SITE_CONFIG.title,
	description: SITE_CONFIG.description,
};

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<FeaturedProjects />
			<ExperienceHighlight />
			<CTASection />
		</>
	);
}
