'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

import { trackPageView } from '@/lib/analytics';

function AnalyticsTracker() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (pathname) {
			let url = pathname;
			if (searchParams?.toString()) {
				url += `?${searchParams.toString()}`;
			}

			trackPageView(url);
		}
	}, [pathname, searchParams]);

	return null;
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Suspense fallback={null}>
				<AnalyticsTracker />
			</Suspense>
			{children}
		</>
	);
}
