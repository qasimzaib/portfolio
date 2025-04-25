'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="w-9 h-9" />;
	}

	return (
		<button
			className="rounded-md p-2 hover:bg-muted transition-colors"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			aria-label="Toggle theme"
		>
			{theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
		</button>
	);
}
