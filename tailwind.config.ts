import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class', // enable dark‑mode utility
	content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#eff6ff',
					100: '#dbeafe',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					900: '#0c1a4b',
				},
			},
			backgroundImage: {
				// radial hero swirl
				'hero-radial':
					'radial-gradient(circle at top left, #3b82f6 0%, #9333ea 40%, #0f172a 100%)',
			},
			boxShadow: {
				card: '0 4px 20px rgba(0,0,0,.05)',
				'card-hover': '0 6px 24px rgba(0,0,0,.12)',
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
			},
		},
	},
	plugins: [],
};

export default config;
