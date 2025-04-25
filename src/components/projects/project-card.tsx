'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Project } from '@/lib/types';

interface ProjectCardProps extends Project {
	index?: number;
	className?: string;
}

export function ProjectCard({
	name,
	description,
	tech,
	link,
	image,
	index = 0,
	className,
}: ProjectCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.4,
				delay: index * 0.1,
				ease: 'easeOut',
			}}
			className={cn(
				'group relative rounded-lg border bg-card shadow-sm overflow-hidden transition-all hover:shadow-md',
				className
			)}
		>
			<div className="aspect-video w-full bg-muted relative overflow-hidden">
				{image ? (
					<Image
						src={image}
						alt={name}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				) : (
					<div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/50" />
				)}
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
					{name}
				</h3>
				<p className="mt-2 text-muted-foreground">{description}</p>

				<div className="mt-4 flex flex-wrap gap-2">
					{tech.map(t => (
						<span
							key={t}
							className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium"
						>
							{t}
						</span>
					))}
				</div>

				{link && (
					<div className="mt-6">
						<Link
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center text-sm font-medium text-primary hover:underline"
						>
							View Project
							<ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
						</Link>
					</div>
				)}
			</div>
		</motion.div>
	);
}
