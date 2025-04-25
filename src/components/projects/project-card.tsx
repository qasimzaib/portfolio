'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { LazyLoad } from '@/components/lazy-load';
import { Image } from '@/components/ui/image';
import { OutboundLink } from '@/components/ui/outbound-link';
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
	const [isHovered, setIsHovered] = useState(false);

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
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="aspect-video w-full bg-muted relative overflow-hidden">
				{image ? (
					<LazyLoad>
						<Image
							src={image}
							alt={name}
							width={600}
							height={340}
							className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
					</LazyLoad>
				) : (
					<div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/50" />
				)}

				{/* Project name overlay that appears on hover */}
				<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-md"
					>
						<h3 className="text-xl font-semibold">{name}</h3>
					</motion.div>
				</div>

				{/* Decorative elements */}
				<motion.div
					className="absolute top-2 right-2 size-3 rounded-full bg-primary opacity-0 group-hover:opacity-80 transition-opacity"
					animate={isHovered ? { scale: [1, 1.5, 1] } : { scale: 1 }}
					transition={{
						duration: 1.5,
						repeat: isHovered ? Infinity : 0,
						ease: 'easeInOut',
					}}
				/>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
					{name}
				</h3>
				<p className="mt-2 text-muted-foreground">{description}</p>

				<motion.div
					className="mt-4 flex flex-wrap gap-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					{tech.map((t, techIndex) => (
						<motion.span
							key={t}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: 0.2 + techIndex * 0.05 }}
							className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium hover:bg-secondary/80 transition-colors"
						>
							{t}
						</motion.span>
					))}
				</motion.div>

				{link && (
					<motion.div
						className="mt-6"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						<OutboundLink
							href={link}
							className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link"
							trackingId={`project-link-${name.toLowerCase().replace(/\s+/g, '-')}`}
						>
							View Project
							<ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
						</OutboundLink>
					</motion.div>
				)}
			</div>
		</motion.div>
	);
}
