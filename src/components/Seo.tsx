import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://msil.vercel.app';

/** i18next uses `ua`, but `<html lang>` needs the language code, not the country. */
const HTML_LANG: Record<string, string> = { ua: 'uk', en: 'en' };

type SeoProps = {
	title: string;
	description: string;
	path: string;
};

const upsertTag = <T extends HTMLElement>(
	selector: string,
	create: () => T
): T => {
	let tag = document.head.querySelector<T>(selector);

	if (!tag) {
		tag = create();
		document.head.appendChild(tag);
	}

	return tag;
};

const setMeta = (name: string, content: string) => {
	const attr = name.startsWith('og:') ? 'property' : 'name';
	const tag = upsertTag<HTMLMetaElement>(`meta[${attr}="${name}"]`, () => {
		const meta = document.createElement('meta');
		meta.setAttribute(attr, name);
		return meta;
	});

	tag.setAttribute('content', content);
};

/**
 * Keeps title, description, canonical and social tags in sync with the current
 * route and language. The crawlable defaults live in index.html.
 */
const Seo = ({ title, description, path }: SeoProps) => {
	const { i18n } = useTranslation();

	useEffect(() => {
		const url = `${SITE_URL}${path === '/' ? '/' : path}`;

		document.title = title;
		document.documentElement.lang = HTML_LANG[i18n.language] || 'en';

		setMeta('description', description);
		setMeta('og:title', title);
		setMeta('og:description', description);
		setMeta('og:url', url);
		setMeta('twitter:title', title);
		setMeta('twitter:description', description);

		upsertTag<HTMLLinkElement>('link[rel="canonical"]', () => {
			const link = document.createElement('link');
			link.setAttribute('rel', 'canonical');
			return link;
		}).setAttribute('href', url);
	}, [title, description, path, i18n.language]);

	return null;
};

export default Seo;
