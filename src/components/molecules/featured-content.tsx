'use client';

import { motion } from 'framer-motion';
import {
	slideInFromTop,
	slideInFromLeft,
	slideInFromRight,
} from '@/lib/animation';
import { SparklesIcon } from '@heroicons/react/24/solid';

import Image from 'next/image';

export const FeaturedContent = () => {
	return (
		<motion.div
			initial='hidden'
			animate='visible'
			className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
		>
			<div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
				<motion.div
					variants={slideInFromTop}
					className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]'
				>
					<SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
					<h1 className='Welcome-text text-[13px]'>Hi, I'm Qasim</h1>
				</motion.div>

				<motion.div
					variants={slideInFromLeft(0.5)}
					className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
				>
					<span>
						Building{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
							awesome apps
						</span>{' '}
						that scale
					</span>
				</motion.div>

				<motion.p
					variants={slideInFromLeft(0.8)}
					className='text-lg text-gray-400 my-5 max-w-[600px]'
				>
					I&apos;m a seasoned Full Stack Developer / Architect with experience
					in web apps and SaaS platforms. Check out my projects and skills.
				</motion.p>

				<motion.a
					variants={slideInFromLeft(1)}
					className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
				>
					Learn more
				</motion.a>
			</div>

			<motion.div
				variants={slideInFromRight(0.8)}
				className='w-full h-full flex justify-center items-center'
			>
				<Image
					src='/featured-bg.svg'
					alt='work icons'
					height={650}
					width={650}
					draggable={false}
					className='select-none'
				/>
			</motion.div>
		</motion.div>
	);
};
