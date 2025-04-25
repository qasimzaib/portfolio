'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface SkillCardProps {
	name: string;
	className?: string;
	index?: number;
}

export function SkillCard({ name, className, index = 0 }: SkillCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.4,
				delay: index * 0.05,
				ease: 'easeOut',
			}}
			className={cn(
				'group relative rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md flex items-center',
				className
			)}
		>
			<div className="flex-1">
				<h3 className="text-base font-medium group-hover:text-primary transition-colors">
					{name}
				</h3>
			</div>
		</motion.div>
	);
}
