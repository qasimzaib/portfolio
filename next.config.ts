/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	// Enable image optimization
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		minimumCacheTTL: 60, // 1 minute in seconds
	},

	// Enable Static Exports (for Vercel Edge Cache)
	output: 'standalone',

	// Configure HTTP Headers for security and caching
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
			{
				source: '/(.*)\\.(jpg|jpeg|png|webp|avif|ico|svg)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				source: '/(.*)\\.(js|css)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		];
	},

	// Redirects and rewrites if needed
	async redirects() {
		return [];
	},

	async rewrites() {
		return [];
	},
};

// Export the configuration
module.exports = nextConfig;
