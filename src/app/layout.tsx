import './globals.css';
import { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';

import { BrowserCheck } from '@/components/browser-check';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { SITE_CONFIG } from '@/lib/constants';
import { Analytics } from '@vercel/analytics/react';

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
		{ media: '(prefers-color-scheme: dark)', color: '#111111' },
	],
};

export const metadata: Metadata = {
	metadataBase: new URL(SITE_CONFIG.url),
	title: {
		default: SITE_CONFIG.title,
		template: `%s | ${SITE_CONFIG.name}`,
	},
	description: SITE_CONFIG.description,
	keywords: [
		'Software Architect',
		'Full-Stack Developer',
		'React',
		'Next.js',
		'Node.js',
		'.NET Core',
		'AWS',
		'Vercel',
		'Microservices',
		'Portfolio',
		'Web Development',
	],
	authors: [{ name: SITE_CONFIG.name }],
	creator: SITE_CONFIG.name,
	publisher: SITE_CONFIG.name,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: SITE_CONFIG.url,
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		siteName: SITE_CONFIG.name,
		images: [
			{
				url: SITE_CONFIG.ogImage,
				width: 1200,
				height: 630,
				alt: SITE_CONFIG.name,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		images: [SITE_CONFIG.ogImage],
		creator: '@qasimzaib',
	},
	manifest: `${SITE_CONFIG.url}/site.webmanifest`,
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body className={`${GeistSans.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Analytics />
					<div className="flex min-h-screen flex-col">
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
						<BrowserCheck />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
