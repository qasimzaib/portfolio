'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface ImageProps extends NextImageProps {
	containerClassName?: string;
}

export function Image({
	src,
	alt,
	className,
	containerClassName,
	width,
	height,
	...props
}: ImageProps) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className={cn('overflow-hidden', containerClassName)}>
			<NextImage
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={cn(
					'duration-700 ease-in-out',
					isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0',
					className
				)}
				onLoadingComplete={() => setIsLoading(false)}
				{...props}
			/>
		</div>
	);
}
