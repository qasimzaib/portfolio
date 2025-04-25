'use client';

import {
	CodeBracketIcon,
	CommandLineIcon,
	ServerIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { LazyLoad } from '@/components/lazy-load';
import { ResumeDownload } from '@/components/resume/resume-download';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.1,
				duration: 0.5,
			},
		}),
	};

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<motion.div
				className="mb-12 space-y-4"
				initial="hidden"
				animate="visible"
				variants={fadeIn}
				custom={0}
			>
				<h1 className="text-4xl font-bold">About Me</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					Software Architect & Full-Stack Developer with a passion for creating efficient,
					scalable solutions.
				</p>
			</motion.div>

			{/* Bio Section with Visual Elements */}
			<section className="mb-16 grid md:grid-cols-2 gap-12 items-center">
				<motion.div
					className="space-y-4 text-lg"
					initial="hidden"
					animate="visible"
					variants={fadeIn}
					custom={1}
				>
					<p>
						I&apos;m Qasim Zaib — a passionate software architect with 10+ years&apos;
						experience building performant cloud products that scale. I thrive at the
						intersection of strategy & code, translating business ideas into delightful
						SaaS experiences.
					</p>
					<p>
						Throughout my career, I&apos;ve worked across diverse industries from
						logistics to e-commerce, helping businesses leverage technology to solve
						complex challenges. I specialize in architecting systems that are not only
						technically sound but also align perfectly with business objectives.
					</p>
					<p>
						As a technical leader, I excel at bridging the gap between business
						stakeholders and development teams, ensuring that solutions are delivered on
						time and meet or exceed expectations.
					</p>
				</motion.div>
				<motion.div
					className="bg-card border rounded-lg p-8 shadow-sm relative overflow-hidden"
					initial="hidden"
					animate="visible"
					variants={fadeIn}
					custom={2}
				>
					{/* Decorative elements */}
					<motion.div
						className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.5, 0.3],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					/>
					<motion.div
						className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.5, 0.3],
						}}
						transition={{
							duration: 5,
							delay: 1,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					/>

					<div className="relative">
						<LazyLoad>
							<div className="aspect-square bg-muted rounded-full max-w-xs mx-auto flex items-center justify-center">
								<motion.div
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: 0.3 }}
								>
									<span className="text-8xl font-bold text-secondary-foreground/20">
										QZ
									</span>
								</motion.div>
							</div>
						</LazyLoad>

						<motion.div
							className="absolute top-5 right-0 bg-card p-2 rounded-lg border shadow-sm"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.8 }}
						>
							<p className="text-sm font-medium">10+ Years Experience</p>
						</motion.div>

						<motion.div
							className="absolute bottom-5 left-0 bg-card p-2 rounded-lg border shadow-sm"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 1 }}
						>
							<p className="text-sm font-medium">Software Architect</p>
						</motion.div>
					</div>
				</motion.div>
			</section>

			{/* Skills Highlight with Icons */}
			<motion.section
				className="mb-16 bg-secondary/50 rounded-lg p-8"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={fadeIn}
				custom={3}
			>
				<h2 className="text-2xl font-bold mb-8">Core Competencies</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<motion.div
						className="space-y-4 flex flex-col items-center text-center p-4"
						whileHover={{ y: -5 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
							<CommandLineIcon className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-medium">Technical Leadership</h3>
						<p className="text-muted-foreground">
							Leading cross-functional teams to deliver complex projects on time and
							with high quality.
						</p>
					</motion.div>
					<motion.div
						className="space-y-4 flex flex-col items-center text-center p-4"
						whileHover={{ y: -5 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
							<ServerIcon className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-medium">Architecture Design</h3>
						<p className="text-muted-foreground">
							Designing scalable cloud-native solutions using microservices,
							serverless, and modern paradigms.
						</p>
					</motion.div>
					<motion.div
						className="space-y-4 flex flex-col items-center text-center p-4"
						whileHover={{ y: -5 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
							<CodeBracketIcon className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-medium">Full-Stack Development</h3>
						<p className="text-muted-foreground">
							Building high-performance applications with React, Next.js, Node.js, and
							.NET Core.
						</p>
					</motion.div>
					<motion.div
						className="space-y-4 flex flex-col items-center text-center p-4"
						whileHover={{ y: -5 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
							<UserGroupIcon className="h-8 w-8 text-primary" />
						</div>
						<h3 className="text-xl font-medium">Cloud Infrastructure</h3>
						<p className="text-muted-foreground">
							Implementing and optimizing solutions on AWS, Azure, and Vercel.
						</p>
					</motion.div>
				</div>
			</motion.section>

			{/* Philosophy Section */}
			<motion.section
				className="mb-16 rounded-lg border bg-card p-8 shadow-sm"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={fadeIn}
				custom={4}
			>
				<h2 className="text-2xl font-bold mb-6">My Approach</h2>
				<div className="space-y-4 text-lg">
					<p>
						I believe in a pragmatic approach to software development—choosing the right
						tools for each specific problem rather than forcing a one-size-fits-all
						solution. Whether it&apos;s a microservices architecture for a complex
						enterprise system or a monolithic approach for a focused startup product, I
						advocate for what will deliver the most value.
					</p>
					<p>
						Performance, security, and maintainability are core principles that guide my
						work. I&apos;m passionate about creating systems that not only solve
						immediate problems but can evolve gracefully as business needs change.
					</p>
				</div>
			</motion.section>

			{/* Professional Journey */}
			<motion.section
				className="mb-16"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={fadeIn}
				custom={5}
			>
				<h2 className="text-2xl font-bold mb-6">Professional Journey</h2>
				<div className="relative border-l border-primary/20 pl-8 space-y-8">
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<div className="absolute -left-10 top-0 h-4 w-4 rounded-full bg-primary" />
						<h3 className="text-xl font-medium">Early Career</h3>
						<p className="text-muted-foreground">
							Started as a software engineer focused on backend development, quickly
							expanding into full-stack roles.
						</p>
					</motion.div>
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="absolute -left-10 top-0 h-4 w-4 rounded-full bg-primary" />
						<h3 className="text-xl font-medium">Technical Growth</h3>
						<p className="text-muted-foreground">
							Expanded expertise across multiple technologies and frameworks, becoming
							proficient in both frontend and backend development.
						</p>
					</motion.div>
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<div className="absolute -left-10 top-0 h-4 w-4 rounded-full bg-primary" />
						<h3 className="text-xl font-medium">Leadership</h3>
						<p className="text-muted-foreground">
							Transitioned into leadership roles, guiding teams and architecting
							large-scale solutions for enterprise clients.
						</p>
					</motion.div>
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<div className="absolute -left-10 top-0 h-4 w-4 rounded-full bg-primary" />
						<h3 className="text-xl font-medium">Present</h3>
						<p className="text-muted-foreground">
							Currently focusing on architecting cloud-native solutions and mentoring
							the next generation of developers.
						</p>
					</motion.div>
				</div>
			</motion.section>

			{/* Call to Action */}
			<motion.section
				className="text-center max-w-3xl mx-auto"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={fadeIn}
				custom={6}
			>
				<h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
				<p className="text-muted-foreground mb-6">
					I&apos;m always open to discussing new projects, creative ideas, or
					opportunities to be part of your vision.
				</p>
				<div className="flex flex-wrap gap-4 justify-center">
					<Button asChild size="lg" className="group">
						<Link href="/contact">
							Get in Touch
							<motion.span
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
								className="ml-2 inline-block"
							>
								→
							</motion.span>
						</Link>
					</Button>
					<ResumeDownload className="mt-0" />
				</div>
			</motion.section>
		</div>
	);
}
