import Head from 'next/head';
import { useRouter } from 'next/router';

import { SITE_CONFIG } from '@/lib/constants';

interface SEOProps {
	title?: string;
	description?: string;
	canonical?: string;
	ogImage?: string;
}

export function SEO({
	title = SITE_CONFIG.title,
	description = SITE_CONFIG.description,
	canonical,
	ogImage = SITE_CONFIG.ogImage,
}: SEOProps) {
	const router = useRouter();
	const url = canonical || `${SITE_CONFIG.url}${router.asPath}`;
	const fullTitle = title === SITE_CONFIG.title ? title : `${title} | ${SITE_CONFIG.name}`;

	return (
		<Head>
			{/* Primary Meta Tags */}
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={fullTitle} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={ogImage} />

			{/* Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Person',
						name: SITE_CONFIG.name,
						url: SITE_CONFIG.url,
						sameAs: [SITE_CONFIG.links.twitter, SITE_CONFIG.links.github],
						jobTitle: 'Software Architect & Full-Stack Developer',
						worksFor: {
							'@type': 'Organization',
							name: 'Systems Limited',
						},
					}),
				}}
			/>
		</Head>
	);
}
