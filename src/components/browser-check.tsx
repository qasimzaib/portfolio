'use client';

import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export function BrowserCheck() {
	const [showWarning, setShowWarning] = useState(false);
	const [browserInfo, setBrowserInfo] = useState<{
		name: string;
		version: string;
		isSupported: boolean;
	} | null>(null);

	useEffect(() => {
		// Check if we're in a browser environment
		if (typeof window !== 'undefined') {
			// Simple browser detection
			const ua = navigator.userAgent;
			let browserName = 'Unknown';
			let browserVersion = 'Unknown';
			let isSupported = true;

			// Detect browser
			if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edg') === -1) {
				browserName = 'Chrome';
				browserVersion = ua.match(/Chrome\/([0-9.]+)/)![1];
				// Chrome < 80 lacks some features
				isSupported = parseInt(browserVersion) >= 80;
			} else if (ua.indexOf('Firefox') > -1) {
				browserName = 'Firefox';
				browserVersion = ua.match(/Firefox\/([0-9.]+)/)![1];
				// Firefox < 70 lacks some features
				isSupported = parseInt(browserVersion) >= 70;
			} else if (ua.indexOf('Edg') > -1) {
				browserName = 'Edge';
				browserVersion = ua.match(/Edg\/([0-9.]+)/)![1];
				// Edge < 80 lacks some features
				isSupported = parseInt(browserVersion) >= 80;
			} else if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) {
				browserName = 'Safari';
				browserVersion = ua.match(/Safari\/([0-9.]+)/)![1];
				// Safari < 13 lacks some features
				isSupported = parseInt(browserVersion) >= 600; // Safari versioning is weird
			} else if (ua.indexOf('Trident') > -1 || ua.indexOf('MSIE') > -1) {
				browserName = 'Internet Explorer';
				browserVersion =
					ua.indexOf('MSIE') > -1
						? ua.match(/MSIE ([0-9.]+)/)![1]
						: ua.match(/rv:([0-9.]+)/)![1];
				// IE is not supported
				isSupported = false;
			}

			setBrowserInfo({
				name: browserName,
				version: browserVersion,
				isSupported,
			});

			// Show warning if the browser is not supported
			setShowWarning(!isSupported);
		}
	}, []);

	if (!showWarning || !browserInfo) {
		return null;
	}

	return (
		<div className="fixed bottom-4 right-4 max-w-md bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg z-50 animate-fade-in">
			<div className="flex items-start">
				<div className="flex-shrink-0">
					<ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
				</div>
				<div className="ml-3 flex-1">
					<h3 className="text-sm font-medium text-yellow-800">
						Browser Compatibility Warning
					</h3>
					<div className="mt-2 text-sm text-yellow-700">
						<p>
							It looks like you&apos;re using {browserInfo.name} {browserInfo.version}
							, which may not support all features of this website. For the best
							experience, please use the latest version of Chrome, Firefox, Edge, or
							Safari.
						</p>
					</div>
				</div>
				<button
					type="button"
					className="ml-3 flex-shrink-0 text-yellow-500 hover:text-yellow-700 focus:outline-none"
					onClick={() => setShowWarning(false)}
					aria-label="Close"
				>
					<XMarkIcon className="h-5 w-5" />
				</button>
			</div>
		</div>
	);
}
