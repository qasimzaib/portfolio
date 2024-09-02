import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { siteMetaData } from '@/config/site-meta-data';
import './globals.css';
import { Navbar } from '@/components/molecules/navbar';
import { Footer } from '@/components/molecules/footer';
import { BackgroundCanvas } from '@/components/molecules/background-canvas';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = siteMetaData;

export const viewport: Viewport = {
	themeColor: '#030014',
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'bg-[#030014] overflow-y-scroll overflow-x-hidden',
					inter.className
				)}
			>
				<BackgroundCanvas />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
