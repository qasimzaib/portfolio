'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Particles } from './particles';

const roles = [
	'Software Architect',
	'Full-Stack Developer',
	'Technical Leader',
	'Cloud Solutions Expert',
];

export function HeroSection() {
	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
	const [displayText, setDisplayText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [typingSpeed, setTypingSpeed] = useState(100);

	useEffect(() => {
		const currentRole = roles[currentRoleIndex];

		const timer = setTimeout(() => {
			if (!isDeleting) {
				setDisplayText(currentRole.substring(0, displayText.length + 1));

				if (displayText.length === currentRole.length) {
					setTypingSpeed(1500);
					setIsDeleting(true);
				} else {
					setTypingSpeed(100);
				}
			} else {
				setDisplayText(currentRole.substring(0, displayText.length - 1));

				if (displayText.length === 0) {
					setIsDeleting(false);
					setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
					setTypingSpeed(300);
				} else {
					setTypingSpeed(50);
				}
			}
		}, typingSpeed);

		return () => clearTimeout(timer);
	}, [displayText, currentRoleIndex, isDeleting, typingSpeed]);

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
		<section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
			<Particles />

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
						className="mt-4 md:mt-6 text-xl md:text-2xl font-medium min-h-[2em]"
						variants={item}
					>
						<span className="text-primary inline-block">{displayText}</span>
						<span className="animate-pulse">|</span>
					</motion.h2>

					<motion.p
						className="mt-6 text-lg text-muted-foreground max-w-2xl"
						variants={item}
					>
						With 10+ years of experience building performant cloud products that scale.
						I specialize in architecting and delivering large-scale solutions using
						modern technologies.
					</motion.p>

					<motion.div
						className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center"
						variants={item}
					>
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
						<Button asChild variant="outline" size="lg">
							<Link href="/projects" className="group">
								View Projects
								<ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</Button>
					</motion.div>

					<motion.div className="mt-12 animate-bounce" variants={item}>
						<Link href="#featured-projects" className="text-muted-foreground">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M12 5v14" />
								<path d="m19 12-7 7-7-7" />
							</svg>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
