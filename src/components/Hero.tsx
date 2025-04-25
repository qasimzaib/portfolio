'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex flex-col justify-center items-center text-center"
		>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="text-5xl md:text-7xl font-bold mb-4"
			>
				Qasim Zaib
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9 }}
				className="text-xl md:text-2xl max-w-2xl mb-8"
			>
				Software Architect • Full‑Stack Developer • Technical Leader
			</motion.p>
			<Link
				href="#contact"
				className="px-6 py-3 rounded-full shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
			>
				Let’s talk
			</Link>
		</section>
	);
}
