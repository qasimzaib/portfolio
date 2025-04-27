'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { trackDownload } from '@/lib/analytics';

interface ResumeDownloadProps {
	className?: string;
}

export function ResumeDownload({ className }: ResumeDownloadProps) {
	const [isDownloading, setIsDownloading] = useState(false);

	const handleDownload = () => {
		setIsDownloading(true);

		trackDownload('resume.pdf');

		setTimeout(() => {
			setIsDownloading(false);
		}, 1500);
	};

	return (
		<Button variant="default" size="lg" className={className} onClick={handleDownload} asChild>
			<a
				href="/resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				download="Qasim_Zaib_Resume.pdf"
			>
				{isDownloading ? (
					<>
						<svg
							className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Downloading...
					</>
				) : (
					<>
						<ArrowDownTrayIcon className="mr-2 h-4 w-4" />
						Download Resume
					</>
				)}
			</a>
		</Button>
	);
}
