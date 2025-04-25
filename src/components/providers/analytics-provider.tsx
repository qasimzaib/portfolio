'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { trackPageView } from '@/lib/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (pathname) {
			// Construct the full URL with search params
			let url = pathname;
			if (searchParams?.toString()) {
				url += `?${searchParams.toString()}`;
			}

			// Track the page view
			trackPageView(url);
		}
	}, [pathname, searchParams]);

	return <>{children}</>;
}
