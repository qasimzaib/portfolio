/* Populate this file whenever you gain new experience or projects.
   The UI reads directly from these objects. */

export const experiences = [
	{
		company: 'Systems Limited',
		role: 'Managing Consultant',
		period: 'Apr 2021 – Present',
		highlights: [
			'Architected & delivered 4+ large‑scale cloud solutions (Node, React, Next, .NET Core, AWS, Vercel).',
			'Led cross‑functional teams of up to 20 devs, consistently on‑time delivery.',
			'Headless checkout project boosted conversion by 20%.',
			'Digital Asset Management platform built on React, Rust, gRPC micro‑services.',
		],
		tech: ['Next.js', 'Node.js', '.NET Core', 'AWS', 'Vercel', 'Microservices'],
	},
	{
		company: 'TenthWheel',
		role: 'Development Lead (Founding Member)',
		period: 'Nov 2020 – May 2021',
		highlights: [
			'Architected logistics management suite; launched MVP in six months.',
			'Implemented ML‑driven cost‑estimation algorithm.',
		],
		tech: ['Next.js', 'Node.js', 'React Native', 'PostgreSQL', 'Azure'],
	},
	{
		company: 'iEngineering',
		role: 'Senior Software Engineer',
		period: 'Apr 2020 – Nov 2020',
		highlights: [
			'Built web/mobile apps with React (‑Native) and .NET Core.',
			'Automated GIS‑based roadway asset inventory management (Transconomy).',
		],
		tech: ['React', 'React Native', '.NET Core', 'AWS'],
	},
	{
		company: 'Whinstone Pvt. Ltd.',
		role: 'Senior Software Developer',
		period: 'Nov 2016 – Mar 2020',
		highlights: [
			'Led SaaS CRM & call‑center solution development.',
			'Delivered 5+ enterprise projects, raising overall code quality.',
		],
		tech: ['.NET Core', 'React', 'Node.js', 'AWS'],
	},
	{
		company: 'xFlow Research Inc.',
		role: 'Software Design Engineer',
		period: 'Sep 2015 – Nov 2016',
		highlights: [
			'Automated cloud provisioning (OpenStack) cutting time by 50%.',
			'Built high‑throughput API MVP using Intel DPDK & C++.',
		],
		tech: ['Python', 'Django', 'C++', 'OpenStack'],
	},
];

export const projects = [
	{
		name: 'Shopify‑Style E‑Commerce SaaS',
		description:
			'B2C platform enabling small businesses to spin up stores with zero technical overhead.',
		tech: ['React', 'Node.js', 'AWS', 'Vercel'],
		link: '',
	},
	{
		name: 'Virtual Event Platform',
		description:
			'Event‑management SaaS adopted by the Canadian government for MWC 2025.',
		tech: ['.NET Core', 'Azure', 'MS SQL Server'],
		link: '',
	},
	{
		name: 'Headless Checkout Experience',
		description:
			'Blazing‑fast checkout that raised conversion by 20 % for a major retailer.',
		tech: ['Next.js', 'Vercel'],
		link: '',
	},
	{
		name: 'Digital Asset Management Platform',
		description:
			'Rich‑media activation platform built on a micro‑services architecture.',
		tech: ['React', 'Rust', 'gRPC', 'AWS'],
		link: '',
	},
];

export const skills = [
	{
		label: 'Languages',
		items: ['JavaScript', 'TypeScript', 'C#', 'Rust'],
	},
	{
		label: 'Frontend',
		items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'jQuery'],
	},
	{
		label: 'Backend',
		items: ['Node.js', 'NestJS', '.NET Core'],
	},
	{
		label: 'Architecture & DevOps',
		items: ['Microservices', 'DDD', 'Docker', 'AWS', 'Azure', 'NATS', 'Redis'],
	},
	{
		label: 'Management & Misc',
		items: ['Agile', 'Tech Mentorship', 'SEO', 'System Design'],
	},
];
