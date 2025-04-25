import { Metadata } from 'next';

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

			{/* Bio Section */}
			<section className="mb-16 max-w-4xl">
				<h2 className="text-2xl font-bold mb-4">My Background</h2>
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
			</section>

			{/* Skills Highlight */}
			<section className="mb-16">
				<h2 className="text-2xl font-bold mb-6">Core Competencies</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="space-y-2">
						<h3 className="text-xl font-medium">Technical Leadership</h3>
						<p className="text-muted-foreground">
							Leading cross-functional teams to deliver complex projects on time and
							with high quality.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-xl font-medium">Architecture Design</h3>
						<p className="text-muted-foreground">
							Designing scalable cloud-native solutions using microservices,
							serverless, and modern paradigms.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-xl font-medium">Full-Stack Development</h3>
						<p className="text-muted-foreground">
							Building high-performance applications with React, Next.js, Node.js, and
							.NET Core.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-xl font-medium">Cloud Infrastructure</h3>
						<p className="text-muted-foreground">
							Implementing and optimizing solutions on AWS, Azure, and Vercel.
						</p>
					</div>
				</div>
			</section>

			{/* Philosophy Section */}
			<section className="mb-16 max-w-4xl">
				<h2 className="text-2xl font-bold mb-4">My Approach</h2>
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

			{/* Personal Interests */}
			<section className="max-w-4xl">
				<h2 className="text-2xl font-bold mb-4">Beyond Coding</h2>
				<div className="space-y-4 text-lg">
					<p>
						When I&apos;m not architecting solutions or diving deep into code, I enjoy
						staying updated with the latest tech trends, contributing to open-source
						projects, and mentoring aspiring developers. I&apos;m also an avid reader
						and enjoy exploring new hiking trails whenever possible.
					</p>
				</div>
			</section>
		</div>
	);
}
