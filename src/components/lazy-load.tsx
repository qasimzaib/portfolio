'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LazyLoadProps {
	children: ReactNode;
	threshold?: number;
	rootMargin?: string;
	className?: string;
	placeholder?: ReactNode;
}

export function LazyLoad({
	children,
	threshold = 0.1,
	rootMargin = '100px',
	className = '',
	placeholder,
}: LazyLoadProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(false);

	useEffect(() => {
		// Skip if already loaded or no window (SSR)
		if (hasLoaded || typeof window === 'undefined') return;

		// Create an observer instance
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					setHasLoaded(true);
					observer.disconnect(); // Clean up after loading
				}
			},
			{
				threshold,
				rootMargin,
			}
		);

		// Get the first DOM element inside our component
		const currentElement = document.getElementById('lazy-container');
		if (currentElement) {
			observer.observe(currentElement);
		}

		// Cleanup observer
		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
			observer.disconnect();
		};
	}, [hasLoaded, threshold, rootMargin]);

	return (
		<div id="lazy-container" className={className}>
			{isVisible ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					{children}
				</motion.div>
			) : (
				placeholder || <div className="w-full h-40 bg-muted animate-pulse rounded-lg" />
			)}
		</div>
	);
}
