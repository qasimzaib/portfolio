'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { trackThemeChange } from '@/lib/analytics';

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [isChanging, setIsChanging] = useState(false);

	// useEffect only runs on the client, so we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setIsChanging(true);

		// Determine the current and target themes
		const currentTheme = resolvedTheme || theme;
		const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';

		// Set the theme after a brief delay to allow for animation
		setTimeout(() => {
			setTheme(targetTheme);

			// Track theme change
			trackThemeChange(targetTheme);

			// Wait for theme to apply before stopping the animation
			setTimeout(() => {
				setIsChanging(false);
			}, 300);
		}, 150);
	};

	if (!mounted) {
		return <div className="w-9 h-9" />;
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			aria-label="Toggle theme"
			className="relative overflow-hidden"
			disabled={isChanging}
		>
			<div className="relative">
				{theme === 'dark' ? (
					<SunIcon
						className={`h-5 w-5 transition-all duration-300 ${isChanging ? 'animate-spin' : ''}`}
					/>
				) : (
					<MoonIcon
						className={`h-5 w-5 transition-all duration-300 ${isChanging ? 'animate-spin' : ''}`}
					/>
				)}
			</div>
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
