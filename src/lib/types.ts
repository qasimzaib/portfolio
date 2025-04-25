export interface Experience {
	company: string;
	role: string;
	period: string;
	highlights: string[];
	tech: string[];
}

export interface Project {
	name: string;
	description: string;
	tech: string[];
	link?: string;
	image?: string;
}

export interface SkillCategory {
	label: string;
	items: string[];
}

export interface NavLink {
	href: string;
	label: string;
}

export interface SocialLink {
	platform: string;
	url: string;
	icon: string;
}

export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}
