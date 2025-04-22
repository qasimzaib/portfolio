import Link from 'next/link';

export default function Footer() {
	return (
		<footer id='contact' className='py-10 bg-gray-800 text-gray-300'>
			<div className='container mx-auto px-6 text-center space-y-4'>
				<p className='text-lg font-semibold'>Get in touch</p>

				<div className='flex justify-center gap-4'>
					<Link
						href='mailto:zaib_qasim@hotmail.com'
						className='hover:text-white'
					>
						Email
					</Link>
					<Link
						href='https://github.com/qasimzaib'
						target='_blank'
						className='hover:text-white'
					>
						GitHub
					</Link>
					<Link
						href='https://linkedin.com/in/qasimzaib'
						target='_blank'
						className='hover:text-white'
					>
						LinkedIn
					</Link>
					<Link href='/resume.pdf' target='_blank' className='hover:text-white'>
						Download Résumé
					</Link>
				</div>

				<p className='text-sm'>&copy; {new Date().getFullYear()} Qasim Zaib</p>
			</div>
		</footer>
	);
}
