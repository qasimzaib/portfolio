import { Metadata } from 'next';

import { ContactContent } from '@/components/contact/contact-content';
// import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Contact',
	description: 'Get in touch with Qasim Zaib for collaboration, opportunities, or inquiries.',
};

export default function ContactPage() {
	return <ContactContent />;
}
