'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface SkillCardProps {
	name: string;
	className?: string;
	index?: number;
	proficiency?: number; // 1-5 scale
	category?: string;
}

export function SkillCard({
	name,
	className,
	index = 0,
	proficiency = 4,
	category,
}: SkillCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	// Color mapping based on category
	const getCategoryColor = (category: string = 'default') => {
		const colors: Record<string, string> = {
			Languages: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
			Frontend: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
			Backend: 'bg-green-500/10 text-green-600 dark:text-green-400',
			'Architecture & DevOps': 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
			'Management & Misc': 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
			default: 'bg-primary/10 text-primary',
		};

		return colors[category] || colors.default;
	};

	// Render proficiency dots
	const renderProficiency = () => {
		return (
			<div className="flex space-x-1 ml-auto">
				{[1, 2, 3, 4, 5].map(level => (
					<div
						key={level}
						className={`h-2 w-2 rounded-full ${
							level <= proficiency ? 'bg-primary' : 'bg-muted'
						}`}
					/>
				))}
			</div>
		);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.4,
				delay: index * 0.05,
				ease: 'easeOut',
			}}
			whileHover={{
				scale: 1.03,
				transition: { duration: 0.2 },
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={cn(
				'group relative rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md flex items-center',
				className
			)}
		>
			{/* Skill indicator dot */}
			<div className={`h-3 w-3 rounded-full mr-3 ${getCategoryColor(category)}`} />

			<div className="flex-1 flex items-center justify-between">
				<h3 className="text-base font-medium group-hover:text-primary transition-colors">
					{name}
				</h3>

				{/* Only show proficiency indicator on hover */}
				<motion.div
					initial={{ opacity: 0, width: 0 }}
					animate={{
						opacity: isHovered ? 1 : 0,
						width: isHovered ? 'auto' : 0,
					}}
					transition={{ duration: 0.2 }}
					className="overflow-hidden"
				>
					{renderProficiency()}
				</motion.div>
			</div>

			{/* Background highlight effect on hover */}
			{isHovered && (
				<motion.div
					layoutId="skill-hover"
					className="absolute -inset-px rounded-lg bg-primary/5 -z-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
				/>
			)}
		</motion.div>
	);
}
