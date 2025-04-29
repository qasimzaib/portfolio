import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			fontSize: {
				h1: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
				h2: ['2rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
				h3: ['1.75rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
				h4: ['1.5rem', { lineHeight: '1.4' }],
				h5: ['1.25rem', { lineHeight: '1.5' }],
				h6: ['1rem', { lineHeight: '1.5' }],
				dy: ['1rem', { lineHeight: '1.75' }],
				sm: ['0.875rem', { lineHeight: '1.5' }],
				xs: ['0.75rem', { lineHeight: '1.4' }],
			},
			letterSpacing: {
				tighter: '-0.03em',
				tight: '-0.015em',
			},
			lineHeight: {
				tight: '1.2',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'gradient-animation': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				gradient: 'gradient-animation 6s ease infinite',
			},
		},
	},
	plugins: [],
};

export default config;
