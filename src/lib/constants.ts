import { NavLink, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/experience', label: 'Experience' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/skills', label: 'Skills' },
	{ href: '/contact', label: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
	{
		platform: 'GitHub',
		url: 'https://github.com/qasimzaib',
		icon: 'github',
	},
	{
		platform: 'LinkedIn',
		url: 'https://linkedin.com/in/qasimzaib',
		icon: 'linkedin',
	},
	{
		platform: 'Email',
		url: 'mailto:zaib_qasim@hotmail.com',
		icon: 'mail',
	},
];

export const SITE_CONFIG = {
	name: 'Qasim Zaib',
	title: 'Qasim Zaib | Software Architect & Full-Stack Developer',
	description:
		'Portfolio of Qasim Zaib - Software Architect & Full-Stack Developer with 10+ years of experience building performant cloud products that scale.',
	url: 'https://qasimzaib.com',
	ogImage: '/images/og-image.png',
	links: {
		twitter: 'https://twitter.com/qasimzaib',
		github: 'https://github.com/qasimzaib',
	},
};
