'use client';

import Image from 'next/image';
import Link from 'next/link';

import { LINKS, NAV_LINKS, SOCIALS } from '@/data/data';
import { useState } from 'react';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-5 md:px-10'>
			{isMenuOpen && (
				<div
					className='fixed inset-0 bg-gray-800 opacity-50 z-40'
					onClick={() => setIsMenuOpen(false)}
				></div>
			)}
			<div className='w-full h-full flex items-center justify-between m-auto px-[10px]'>
				<Link href='/' className='flex items-center'>
					<Image
						src='/logo.png'
						alt='Logo'
						width={40}
						height={40}
						draggable={false}
						className='cursor-pointer hover:animate-slowspin'
					/>
					<div className='font-bold ml-[10px] text-gray-300 hidden sm:block'>
						Qasim Zaib
					</div>
				</Link>

				<div className='hidden md:flex items-center justify-between w-[500px] h-full md:mr-20'>
					<div className='flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[20px] py-[10px] rounded-full text-gray-200'>
						{NAV_LINKS.map((link) => (
							<Link
								key={link.title}
								href={link.link}
								className='cursor-pointer hover:text-[rgb(112,66,248)] transition'
							>
								{link.title}
							</Link>
						))}
					</div>
				</div>

				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						className='text-white focus:outline-none'
					>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16m-7 6h7'
							/>
						</svg>
					</button>
				</div>

				<div className='hidden md:flex gap-5'>
					{SOCIALS.map(({ link, name, icon: Icon }) => (
						<Link
							href={link}
							target='_blank'
							rel='noreferrer noopener'
							key={name}
						>
							<Icon className='h-6 w-6 text-white' />
						</Link>
					))}
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden fixed pb-[100px] inset-x-0 top-[65px] bg-[#03001499] p-5 rounded-lg text-gray-200 opacity-100 transition-transform duration-300 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}">
					<div className='flex flex-col items-center w-full space-y-4'>
						{NAV_LINKS.map((link) => (
							<Link
								key={link.title}
								href={link.link}
								className='w-full py-3 px-5 text-lg font-semibold rounded-md bg-[#040018] text-gray-200 text-center hover:bg-[#05001f] hover:text-[rgb(112,66,248)] transition-colors'
								onClick={() => setIsMenuOpen(false)} // Close menu on link click
							>
								{link.title}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
