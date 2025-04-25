'use client';

import { motion } from 'framer-motion';

import { TimelineItem } from '@/components/experience/timeline-item';
import { Experience } from '@/lib/types';

interface ExperienceContentProps {
	experiences: Experience[];
}

export function ExperienceContent({ experiences }: ExperienceContentProps) {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<motion.div
				className="mb-16 space-y-4"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-4xl font-bold">Experience</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					Over 10 years of experience building innovative software solutions across
					various industries.
				</p>
			</motion.div>

			{/* Experience Timeline */}
			<div className="relative mb-16">
				{/* Timeline Line (Desktop) */}
				<motion.div
					className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 z-0"
					initial={{ height: 0 }}
					animate={{ height: '100%' }}
					transition={{ duration: 1, delay: 0.2 }}
				/>

				<div className="space-y-12 md:space-y-0">
					{experiences.map((exp, index) => (
						<motion.div
							key={`${exp.company}-${index}`}
							className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="md:w-1/2" />
							<TimelineItem
								{...exp}
								index={index}
								isLast={index === experiences.length - 1}
								isOdd={index % 2 !== 0}
								className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* Professional Summary */}
			<motion.section
				className="mt-20 rounded-lg border bg-card p-8 shadow-sm"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<h2 className="text-2xl font-bold mb-4">Professional Growth</h2>
				<div className="text-muted-foreground space-y-4">
					<p>
						Throughout my career, I&apos;ve consistently led the architecture and
						delivery of complex software solutions that solve real business problems. My
						focus on quality, performance, and maintainability has helped organizations
						achieve their strategic goals while building robust technology foundations.
					</p>
					<p>
						I excel in bridging the gap between business requirements and technical
						implementation, ensuring that projects deliver measurable value while
						maintaining high engineering standards. My leadership approach emphasizes
						mentorship, collaboration, and continuous improvement.
					</p>
				</div>
			</motion.section>

			{/* Additional Skills */}
			<motion.section
				className="mt-8 rounded-lg border bg-card p-8 shadow-sm"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.7 }}
			>
				<h2 className="text-2xl font-bold mb-4">Additional Expertise</h2>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<h3 className="text-lg font-medium">System Architecture</h3>
						<p className="text-muted-foreground">
							Designing scalable, maintainable architectures for complex enterprise
							systems.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-lg font-medium">Cloud Infrastructure</h3>
						<p className="text-muted-foreground">
							Implementing and optimizing AWS and Azure cloud solutions with a focus
							on security and performance.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-lg font-medium">Team Leadership</h3>
						<p className="text-muted-foreground">
							Leading cross-functional teams and mentoring developers to deliver
							high-quality software.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-lg font-medium">Project Management</h3>
						<p className="text-muted-foreground">
							Managing complex projects from inception to delivery, ensuring alignment
							with business goals.
						</p>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
