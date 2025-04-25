'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Experience } from '@/lib/types';

interface TimelineItemProps extends Experience {
	index?: number;
	className?: string;
	isLast?: boolean;
}

export function TimelineItem({
	company,
	role,
	period,
	highlights,
	tech,
	index = 0,
	className,
	isLast = false,
}: TimelineItemProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.4,
				delay: index * 0.1,
				ease: 'easeOut',
			}}
			className={cn('relative ml-6 md:ml-0', className)}
		>
			<div className="flex flex-col md:flex-row gap-4">
				{/* Timeline Line & Dot */}
				<div className="absolute left-0 top-0 bottom-0 flex flex-col items-center md:relative md:flex-row">
					<div className="h-6 w-6 rounded-full border-2 border-primary bg-card z-10 shrink-0 mt-1" />
					{!isLast && <div className="w-px h-full bg-border ml-3 -mt-1 md:hidden" />}
				</div>

				{/* Content */}
				<div className="rounded-lg border bg-card p-6 shadow-sm ml-6 md:ml-0 md:flex-1">
					<div className="flex flex-col md:flex-row md:items-start md:justify-between">
						<div>
							<h3 className="text-xl font-semibold">{role}</h3>
							<p className="text-muted-foreground">{company}</p>
						</div>
						<div className="mt-2 md:mt-0 md:ml-4 md:text-right">
							<span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
								{period}
							</span>
						</div>
					</div>

					<div className="mt-4 space-y-4">
						<div>
							<h4 className="text-base font-medium mb-2">Highlights</h4>
							<ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
								{highlights.map((highlight, idx) => (
									<li key={idx}>{highlight}</li>
								))}
							</ul>
						</div>

						<div>
							<h4 className="text-base font-medium mb-2">Technologies</h4>
							<div className="flex flex-wrap gap-2">
								{tech.map(t => (
									<span
										key={t}
										className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium"
									>
										{t}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
