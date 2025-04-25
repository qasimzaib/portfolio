import Link from 'next/link';

import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
	return (
		<footer className="border-t bg-background py-8">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
				<div>
					<Link href="/" className="flex items-center space-x-2">
						<span className="text-xl font-bold">QZ</span>
					</Link>
					<p className="mt-4 text-sm text-muted-foreground max-w-md">
						Software Architect & Full-Stack Developer with 10+ years of experience
						building performant cloud products that scale.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
					<div className="space-y-3">
						<h4 className="text-sm font-medium">Links</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/experience"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Experience
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Projects
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h4 className="text-sm font-medium">More</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/skills"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Skills
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/resume.pdf"
									target="_blank"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Resume
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h4 className="text-sm font-medium">Social</h4>
						<ul className="space-y-2">
							{SOCIAL_LINKS.map(link => (
								<li key={link.platform}>
									<Link
										href={link.url}
										target={link.url.startsWith('http') ? '_blank' : undefined}
										rel={
											link.url.startsWith('http')
												? 'noopener noreferrer'
												: undefined
										}
										className="text-sm text-muted-foreground hover:text-primary"
									>
										{link.platform}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t pt-6">
				<p className="text-center text-xs text-muted-foreground">
					&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
