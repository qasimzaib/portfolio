'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function HeroSection() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 pointer-events-none opacity-20">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					className="flex flex-col items-center text-center max-w-4xl mx-auto"
					variants={container}
					initial="hidden"
					animate="show"
				>
					<motion.h1
						className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
						variants={item}
					>
						<span className="text-foreground">Hi, I&apos;m </span>
						<span className="gradient-text">Qasim Zaib</span>
					</motion.h1>

					<motion.h2
						className="mt-4 md:mt-6 text-xl md:text-2xl font-medium text-muted-foreground"
						variants={item}
					>
						Software Architect & Full-Stack Developer
					</motion.h2>

					<motion.p
						className="mt-6 text-lg text-muted-foreground max-w-2xl"
						variants={item}
					>
						With 10+ years of experience building performant cloud products that scale.
						I specialize in architecting and delivering large-scale solutions using
						React, Node.js, and cloud technologies.
					</motion.p>

					<motion.div
						className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center"
						variants={item}
					>
						<Button asChild size="lg">
							<Link href="/contact">Get in Touch</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/projects" className="group">
								View Projects
								<ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
