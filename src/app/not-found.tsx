import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="container py-20 flex flex-col items-center justify-center min-h-[70vh] text-center">
			<h1 className="text-6xl font-extrabold gradient-text mb-6">404</h1>
			<h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
			<p className="text-xl text-muted-foreground mb-8 max-w-md">
				Sorry, the page you are looking for doesn&apos;t exist or has been moved.
			</p>
			<Link
				href="/"
				className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
			>
				Return Home
			</Link>
		</div>
	);
}
