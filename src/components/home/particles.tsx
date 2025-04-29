'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export function Particles() {
	const shouldReduceMotion = useReducedMotion();
	const [mouse, setMouse] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
		window.addEventListener('mousemove', onMove);
		return () => window.removeEventListener('mousemove', onMove);
	}, []);

	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const particles = useMemo(() => {
		if (shouldReduceMotion || !mounted) return [];
		const w = window.innerWidth;
		const h = window.innerHeight;
		return Array.from({ length: 100 }).map((_, i) => ({
			id: i,
			baseX: Math.random() * w,
			baseY: Math.random() * h,
			size: Math.random() * 2 + 1,
			duration: Math.random() * 15 + 10,
			delay: Math.random() * 5,
			opacity: Math.random() * 0.5 + 0.3,
		}));
	}, [shouldReduceMotion, mounted]);

	return (
		<div className="absolute inset-0 pointer-events-none">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
			{particles.map(particle => {
				const dx = mouse.x - particle.baseX;
				const dy = mouse.y - particle.baseY;
				const dist = Math.sqrt(dx * dx + dy * dy);

				const maxDist = 150;
				const pushStrength = 30;

				let offsetX = 0;
				let offsetY = 0;

				if (dist < maxDist) {
					offsetX = -(dx / dist) * (pushStrength * (1 - dist / maxDist));
					offsetY = -(dy / dist) * (pushStrength * (1 - dist / maxDist));
				}

				return (
					<motion.div
						key={particle.id}
						className="absolute rounded-full bg-black/10 dark:bg-white/20 backdrop-blur-sm"
						style={{
							left: particle.baseX,
							top: particle.baseY,
							width: `${particle.size + 2}px`,
							height: `${particle.size + 2}px`,
							opacity: particle.opacity,
							translateX: offsetX,
							translateY: offsetY,
							filter: 'hue-rotate(0deg)',
						}}
						animate={{
							x: [-10, 10, -10],
							y: [-10, 10, -10],
							scale: [1, 1.05, 1],
							opacity: [particle.opacity, particle.opacity + 0.1, particle.opacity],
							filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
						}}
						transition={{
							duration: particle.duration + 5,
							repeat: Infinity,
							repeatType: 'mirror',
							ease: 'easeInOut',
							delay: particle.delay,
						}}
					/>
				);
			})}
		</div>
	);
}
