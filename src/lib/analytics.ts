import { track } from '@vercel/analytics';

export const trackEvent = (
	eventName: string,
	properties?: Record<string, string | number | boolean>
) => {
	if (process.env.NODE_ENV === 'production') {
		track(eventName, properties);
	}
};

export const trackDownload = (fileName: string) => {
	trackEvent('file_download', { fileName });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
	trackEvent('form_submission', { formName, success });
};

export const trackThemeChange = (theme: string) => {
	trackEvent('theme_change', { theme });
};

export const trackOutboundLink = (url: string) => {
	trackEvent('outbound_link_click', { url });
};
