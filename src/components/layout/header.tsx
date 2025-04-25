'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ThemeToggle } from '@/components/theme-toggle';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	// Close the mobile menu when the path changes
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [mobileMenuOpen]);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<span className="text-xl font-bold">QZ</span>
				</Link>

				{/* Desktop navigation */}
				<nav className="hidden md:flex items-center gap-6">
					{NAV_LINKS.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								pathname === link.href ? 'text-primary' : 'text-muted-foreground'
							}`}
						>
							{link.label}
						</Link>
					))}
					<ThemeToggle />
				</nav>

				{/* Mobile navigation toggle */}
				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<button
						className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-primary"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? (
							<XMarkIcon className="h-6 w-6" />
						) : (
							<Bars3Icon className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-background border-b"
					>
						<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
							{NAV_LINKS.map(link => (
								<Link
									key={link.href}
									href={link.href}
									className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
										pathname === link.href
											? 'text-primary'
											: 'text-muted-foreground'
									}`}
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
