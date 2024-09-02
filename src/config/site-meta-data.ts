import type { Metadata } from 'next';

export const siteMetaData: Metadata = {
	title: 'Qasim Zaib | Portfolio',
	description:
		'Hi I am Qasim Zaib, an experienced Full Stack Developer / Architect with proven track record of delivering enterprise-scale SaaS applications built. My core competencies include React, Node.js, Next.js, NestJS and AWS.',
	keywords: ['React', 'Next.js', 'aws', 'ReactJS'] as Array<string>,
	authors: {
		name: 'Qasim Zaib',
		url: 'https://www.linkedin.com/in/qasimzaib/',
	},
} as const;
