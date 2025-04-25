'use client';

import {
	CommandLineIcon,
	CodeBracketIcon,
	ServerIcon,
	WrenchScrewdriverIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { SkillCard } from '@/components/skills/skill-card';
import { Button } from '@/components/ui/button';
import { SkillCategory } from '@/lib/types';

// Map category to icons
const categoryIcons: Record<string, React.ReactNode> = {
	Languages: <CommandLineIcon className="h-5 w-5" />,
	Frontend: <CodeBracketIcon className="h-5 w-5" />,
	Backend: <ServerIcon className="h-5 w-5" />,
	'Architecture & DevOps': <WrenchScrewdriverIcon className="h-5 w-5" />,
	'Management & Misc': <UserGroupIcon className="h-5 w-5" />,
};

// Assign proficiency levels to skills (random for demonstration)
const getProficiency = (skill: string) => {
	const proficiencyMap: Record<string, number> = {
		JavaScript: 5,
		TypeScript: 5,
		React: 5,
		'Next.js': 5,
		'Node.js': 5,
		AWS: 4,
		Docker: 4,
		Microservices: 5,
		Azure: 4,
		'C#': 4,
		Rust: 3,
		'.NET Core': 4,
		PostgreSQL: 4,
	};

	return proficiencyMap[skill] || 3 + Math.floor(Math.random() * 3); // Default 3-5
};

interface SkillsContentProps {
	skills: SkillCategory[];
}

export function SkillsContent({ skills }: SkillsContentProps) {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);

	// Filter skills based on selected category
	const filteredSkills = activeCategory
		? skills.filter(category => category.label === activeCategory)
		: skills;

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<motion.div
				className="mb-12 space-y-4"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-4xl font-bold">Skills & Expertise</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					A comprehensive overview of my technical skills, expertise, and knowledge areas.
				</p>
			</motion.div>

			{/* Category Filter */}
			<motion.div
				className="flex flex-wrap gap-2 mb-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<Button
					variant={activeCategory === null ? 'default' : 'outline'}
					size="sm"
					onClick={() => setActiveCategory(null)}
					className="flex items-center gap-2"
				>
					All Categories
				</Button>
				{skills.map((category, index) => (
					<motion.div
						key={category.label}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
					>
						<Button
							variant={activeCategory === category.label ? 'default' : 'outline'}
							size="sm"
							onClick={() => setActiveCategory(category.label)}
							className="flex items-center gap-2"
						>
							{categoryIcons[category.label]}
							{category.label}
						</Button>
					</motion.div>
				))}
			</motion.div>

			{/* Skills Categories */}
			<motion.div className="grid gap-12" layout transition={{ duration: 0.5 }}>
				{filteredSkills.map((category, categoryIndex) => (
					<motion.section
						key={`${category.label}-${categoryIndex}`}
						layout
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
					>
						<div className="flex items-center mb-6">
							<div className="p-2 rounded-full bg-primary/10 mr-3">
								{categoryIcons[category.label]}
							</div>
							<h2 className="text-2xl font-bold">{category.label}</h2>
						</div>
						<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							{category.items.map((skill, skillIndex) => (
								<SkillCard
									key={`${skill}-${skillIndex}`}
									name={skill}
									index={skillIndex}
									proficiency={getProficiency(skill)}
									category={category.label}
								/>
							))}
						</div>
					</motion.section>
				))}
			</motion.div>

			{/* Skill Levels Legend */}
			<motion.div
				className="mt-16 p-6 border rounded-lg bg-card"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<h3 className="text-lg font-medium mb-4">Skill Proficiency Legend</h3>
				<div className="flex flex-wrap gap-8">
					<div className="flex items-center">
						<div className="flex space-x-1 mr-2">
							{[1].map(level => (
								<div key={level} className="h-2 w-2 rounded-full bg-primary" />
							))}
							{[2, 3, 4, 5].map(level => (
								<div key={level} className="h-2 w-2 rounded-full bg-muted" />
							))}
						</div>
						<span className="text-sm text-muted-foreground">Beginner</span>
					</div>
					<div className="flex items-center">
						<div className="flex space-x-1 mr-2">
							{[1, 2, 3].map(level => (
								<div key={level} className="h-2 w-2 rounded-full bg-primary" />
							))}
							{[4, 5].map(level => (
								<div key={level} className="h-2 w-2 rounded-full bg-muted" />
							))}
						</div>
						<span className="text-sm text-muted-foreground">Intermediate</span>
					</div>
					<div className="flex items-center">
						<div className="flex space-x-1 mr-2">
							{[1, 2, 3, 4].map(level => (
								<div key={level} className="h-2 w-2 rounded-full bg-primary" />
							))}
							{[5].map(level => (
								<div key={level} className="h-2 w-2 rounded-full bg-muted" />
							))}
						</div>
						<span className="text-sm text-muted-foreground">Advanced</span>
					</div>
					<div className="flex items-center">
						<div className="flex space-x-1 mr-2">
							{[1, 2, 3, 4, 5].map(level => (
								<div key={level} className="h-2 w-2 rounded-full bg-primary" />
							))}
						</div>
						<span className="text-sm text-muted-foreground">Expert</span>
					</div>
				</div>
			</motion.div>

			{/* Additional Info */}
			<motion.section
				className="mt-8 rounded-lg border bg-card p-6 shadow-sm"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h2 className="text-2xl font-bold mb-4">Professional Development</h2>
				<p className="text-muted-foreground">
					I regularly engage in continuous learning to stay updated with the latest
					technologies and best practices in software development and architecture. This
					includes online courses, technical books, conferences, and participating in
					developer communities.
				</p>
				<div className="mt-6 grid md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<h3 className="text-lg font-medium">Continuous Learning</h3>
						<p className="text-muted-foreground">
							I dedicate time each week to learning new technologies and deepening my
							understanding of existing ones.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-lg font-medium">Knowledge Sharing</h3>
						<p className="text-muted-foreground">
							I believe in sharing knowledge through mentoring, writing technical
							documentation, and contributing to open-source projects.
						</p>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
