import { CodeBracketIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { OutboundLink } from '@/components/ui/outbound-link';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

const socialIcons = {
	GitHub: (className: string) => <CodeBracketIcon className={className} />,
	LinkedIn: (className: string) => <GlobeAltIcon className={className} />,
	Email: (className: string) => <EnvelopeIcon className={className} />,
};

export function Footer() {
	return (
		<footer className="border-t bg-background py-8 md:py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				<div className="space-y-4">
					<Link href="/" className="flex items-center space-x-2">
						<div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl shadow-sm">
							QZ
						</div>
						<span className="font-semibold text-lg">Qasim Zaib</span>
					</Link>
					<p className="text-sm text-muted-foreground max-w-md">
						Software Architect & Full-Stack Developer with 10+ years of experience
						building performant cloud products that scale.
					</p>
				</div>

				<div className="space-y-4">
					<h3 className="text-base font-medium">Navigation</h3>
					<nav className="flex flex-col space-y-2">
						<Link
							href="/"
							className="text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							About
						</Link>
						<Link
							href="/experience"
							className="text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							Experience
						</Link>
						<Link
							href="/projects"
							className="text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							Projects
						</Link>
					</nav>
				</div>

				<div className="space-y-4">
					<h3 className="text-base font-medium">Resources</h3>
					<nav className="flex flex-col space-y-2">
						<Link
							href="/skills"
							className="text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							Skills
						</Link>
						<Link
							href="/contact"
							className="text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							Contact
						</Link>
						<OutboundLink
							href="/resume.pdf"
							className="text-sm text-muted-foreground hover:text-primary transition-colors"
							trackingId="footer-resume-download"
						>
							Resume
						</OutboundLink>
					</nav>
				</div>

				<div className="space-y-4">
					<h3 className="text-base font-medium">Connect</h3>
					<div className="flex flex-col space-y-3">
						{SOCIAL_LINKS.map(link => (
							<OutboundLink
								key={link.platform}
								href={link.url}
								className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
								trackingId={`footer-${link.platform.toLowerCase()}`}
							>
								{link.platform in socialIcons &&
									socialIcons[link.platform as keyof typeof socialIcons](
										'h-4 w-4'
									)}
								<span>{link.platform}</span>
							</OutboundLink>
						))}
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 border-t pt-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm text-muted-foreground">
						&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
					</p>
					<p className="text-sm text-muted-foreground mt-2 md:mt-0">
						Built with Next.js and TailwindCSS
					</p>
				</div>
			</div>
		</footer>
	);
}
