'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const links = [
		{ href: '#home', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' },
	];
	return (
		<nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur z-50 shadow">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				<Link href="#home" className="font-bold text-xl">
					QZ
				</Link>
				<button className="md:hidden" onClick={() => setOpen(!open)}>
					☰
				</button>
				<ul
					className={`md:flex gap-6 ${open ? 'block' : 'hidden'} md:block`}
				>
					{links.map(link => (
						<li key={link.href}>
							<Link
								href={link.href}
								className="hover:text-indigo-600"
								onClick={() => setOpen(false)}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
