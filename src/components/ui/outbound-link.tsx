'use client';

import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

import { trackOutboundLink } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface OutboundLinkProps extends ComponentPropsWithoutRef<typeof Link> {
	href: string;
	children: React.ReactNode;
	className?: string;
	trackingId?: string;
}

export function OutboundLink({
	href,
	children,
	className,
	trackingId,
	...props
}: OutboundLinkProps) {
	const isExternal = href.startsWith('http') || href.startsWith('mailto:');

	const handleClick = () => {
		if (isExternal) {
			trackOutboundLink(trackingId || href);
		}
	};

	return (
		<Link
			href={href}
			className={cn('hover:text-primary transition-colors', className)}
			target={isExternal ? '_blank' : undefined}
			rel={isExternal ? 'noopener noreferrer' : undefined}
			onClick={handleClick}
			{...props}
		>
			{children}
		</Link>
	);
}
