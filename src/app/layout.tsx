import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { siteMetaData } from '@/config/site-meta-data';
import './globals.css';

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
				{children}
			</body>
		</html>
	);
}
