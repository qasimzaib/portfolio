import {
	CodeBracketIcon,
	CommandLineIcon,
	ServerIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

// import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'About',
	description:
		'Learn more about Qasim Zaib, Software Architect & Full-Stack Developer with 10+ years of experience.',
};

export default function AboutPage() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
			{/* Page Header */}
			<div className="mb-12 space-y-4">
				<h1 className="text-4xl font-bold">About Me</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					Software Architect & Full-Stack Developer with a passion for creating efficient,
					scalable solutions.
				</p>
			</div>

			{/* Bio Section with Visual Elements */}
			<section className="mb-16 grid md:grid-cols-2 gap-12 items-center">
				<div className="space-y-4 text-lg">
					<p>
						I&apos;m Qasim Zaib — a passionate software architect with 10+ years&apos;
						experience building performant cloud products that scale. I thrive at the
						intersection of strategy & code, translating business ideas into delightful
						SaaS experiences.
					</p>
					<p>
						Throughout my career, I&apos;ve worked across diverse industries from
						logistics to e-commerce, helping businesses leverage technology to solve
						complex challenges. I specialize in architecting systems that are not only
						technically sound but also align perfectly with business objectives.
					</p>
					<p>
						As a technical leader, I excel at bridging the gap between business
						stakeholders and development teams, ensuring that solutions are delivered on
						time and meet or exceed expectations.
					</p>
				</div>
				<div className="bg-card border rounded-lg p-8 shadow-sm">
					<div className="aspect-square bg-muted rounded-full max-w-xs mx-auto flex items-center justify-center">
						<span className="text-8xl font-bold text-secondary-foreground/20">QZ</span>
					</div>
				</div>
			</section>

			{/* Skills Highlight with Icons */}
			<section className="mb-16 bg-secondary/50 rounded-lg p-8">
				<h2 className="text-2xl font-bold mb-8">Core Competencies</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="space-y-4 flex flex-col items-center text-center p-4">
						<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
							<CommandLineIcon className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-medium">Technical Leadership</h3>
						<p className="text-muted-foreground">
							Leading cross-functional teams to deliver complex projects on time and
							with high quality.
						</p>
					</div>
					<div className="space-y-4 flex flex-col items-center text-center p-4">
						<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
							<ServerIcon className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-medium">Architecture Design</h3>
						<p className="text-muted-foreground">
							Designing scalable cloud-native solutions using microservices,
							serverless, and modern paradigms.
						</p>
					</div>
					<div className="space-y-4 flex flex-col items-center text-center p-4">
						<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
							<CodeBracketIcon className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-medium">Full-Stack Development</h3>
						<p className="text-muted-foreground">
							Building high-performance applications with React, Next.js, Node.js, and
							.NET Core.
						</p>
					</div>
					<div className="space-y-4 flex flex-col items-center text-center p-4">
						<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
							<UserGroupIcon className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-medium">Cloud Infrastructure</h3>
						<p className="text-muted-foreground">
							Implementing and optimizing solutions on AWS, Azure, and Vercel.
						</p>
					</div>
				</div>
			</section>

			{/* Philosophy Section */}
			<section className="mb-16 rounded-lg border bg-card p-8 shadow-sm">
				<h2 className="text-2xl font-bold mb-6">My Approach</h2>
				<div className="space-y-4 text-lg">
					<p>
						I believe in a pragmatic approach to software development—choosing the right
						tools for each specific problem rather than forcing a one-size-fits-all
						solution. Whether it&apos;s a microservices architecture for a complex
						enterprise system or a monolithic approach for a focused startup product, I
						advocate for what will deliver the most value.
					</p>
					<p>
						Performance, security, and maintainability are core principles that guide my
						work. I&apos;m passionate about creating systems that not only solve
						immediate problems but can evolve gracefully as business needs change.
					</p>
				</div>
			</section>

			{/* Call to Action */}
			<section className="text-center max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
				<p className="text-muted-foreground mb-6">
					I&apos;m always open to discussing new projects, creative ideas, or
					opportunities to be part of your vision.
				</p>
				<Link
					href="/contact"
					className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
				>
					Get in Touch
				</Link>
			</section>
		</div>
	);
}
