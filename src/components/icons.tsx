import {
	ArrowRightIcon,
	CodeBracketIcon,
	CommandLineIcon,
	EnvelopeIcon,
	GlobeAltIcon,
	ServerIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';

export const Icons = {
	logo: (props: React.SVGProps<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="7" cy="15" r="2" />
			<circle cx="17" cy="15" r="2" />
			<path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
			<path d="M3 9v6a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1v-6" />
			<path d="M3 9l2 -4h14l2 4" />
			<path d="M8 12v-3h8v3" />
		</svg>
	),
	github: (props: React.SVGProps<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
		</svg>
	),
	linkedin: (props: React.SVGProps<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
			<path d="M8 11l0 5" />
			<path d="M8 8l0 .01" />
			<path d="M12 16l0 -5" />
			<path d="M16 16v-3a2 2 0 0 0 -4 0" />
		</svg>
	),
	mail: (props: React.SVGProps<SVGSVGElement>) => <EnvelopeIcon {...props} />,
	arrowRight: (props: React.SVGProps<SVGSVGElement>) => <ArrowRightIcon {...props} />,
	code: (props: React.SVGProps<SVGSVGElement>) => <CodeBracketIcon {...props} />,
	command: (props: React.SVGProps<SVGSVGElement>) => <CommandLineIcon {...props} />,
	server: (props: React.SVGProps<SVGSVGElement>) => <ServerIcon {...props} />,
	users: (props: React.SVGProps<SVGSVGElement>) => <UserGroupIcon {...props} />,
	globe: (props: React.SVGProps<SVGSVGElement>) => <GlobeAltIcon {...props} />,
};
