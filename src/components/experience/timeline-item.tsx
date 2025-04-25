'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Experience } from '@/lib/types';

interface TimelineItemProps extends Experience {
	index?: number;
	className?: string;
	isLast?: boolean;
	isOdd?: boolean;
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
	isOdd = false,
}: TimelineItemProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
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
					<motion.div
						className="h-6 w-6 rounded-full border-2 border-primary bg-card z-10 shrink-0 mt-1"
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
					>
						<motion.div
							className="h-[10px] w-[10px] rounded-full bg-primary mt-[5px] ml-[5px]"
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
						/>
					</motion.div>
					{!isLast && (
						<motion.div
							className="w-px h-full bg-border ml-3 -mt-1 md:hidden"
							initial={{ height: 0 }}
							animate={{ height: '100%' }}
							transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
						/>
					)}
				</div>

				{/* Content */}
				<div className="relative rounded-lg border bg-card p-6 shadow-sm ml-6 md:ml-0 md:flex-1 hover:shadow-md transition-shadow">
					{/* Decorative triangle for desktop */}
					<div
						className={`absolute top-1/2 -mt-2 hidden md:block ${isOdd ? 'right-full mr-px' : 'left-full ml-px'}`}
					>
						<div
							className={`w-0 h-0 border-8 border-transparent ${
								isOdd ? 'border-r-border' : 'border-l-border'
							}`}
						/>
						<div
							className={`w-0 h-0 border-8 border-transparent ${
								isOdd
									? 'border-r-card -mt-[16px] mr-[1px]'
									: 'border-l-card -mt-[16px] ml-[1px]'
							} absolute top-0`}
						/>
					</div>

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
									<motion.li
										key={idx}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
									>
										{highlight}
									</motion.li>
								))}
							</ul>
						</div>

						<div>
							<h4 className="text-base font-medium mb-2">Technologies</h4>
							<div className="flex flex-wrap gap-2">
								{tech.map((t, idx) => (
									<motion.span
										key={t}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
										className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium hover:bg-secondary/80 transition-colors"
									>
										{t}
									</motion.span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
