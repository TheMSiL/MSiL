const NEXT_TS_TAILWIND = 'Next.js, TypeScript, Tailwind CSS';
const REACT_TAILWIND = 'React, Tailwind CSS';

// Every project ships an 800px card image and a 1600px one for the modal and
// retina screens; scripts/optimize-images.mjs generates both from works/_src.
const sources = import.meta.glob<string>('./assets/works/*.webp', {
	eager: true,
	import: 'default',
});

export type ProjectImage = {
	src: string;
	srcSet: string;
};

export type ProjectEntry = {
	slug: string;
	modalSlug?: string;
	title: string;
	descKey: string;
	stack: string;
	url?: string;
};

export type PortfolioProject = Omit<ProjectEntry, 'modalSlug'> & {
	image: ProjectImage;
	modalImage: ProjectImage;
};

const imageSet = (slug: string): ProjectImage => {
	const small = sources[`./assets/works/${slug}-800.webp`];
	const large = sources[`./assets/works/${slug}-1600.webp`];

	if (!small || !large) {
		throw new Error(`Missing generated images for project "${slug}"`);
	}

	return { src: small, srcSet: `${small} 800w, ${large} 1600w` };
};

/**
 * Portfolio entries, newest first. `descKey` points at an i18n key describing
 * what the project is, `url` at the live site.
 */
const entries: ProjectEntry[] = [
	{
		slug: 'ra-agency',
		title: 'RA Agency',
		descKey: 'project.ra-agency',
		stack: NEXT_TS_TAILWIND,
		url: 'https://raagency.tech/en',
	},
	{
		slug: 'crashatlas',
		title: 'CrashAtlas',
		descKey: 'project.crashatlas',
		stack: NEXT_TS_TAILWIND,
		url: 'https://crashatlas.com/',
	},
	{
		slug: 'glidex',
		title: 'GLIDEX',
		descKey: 'project.glidex',
		stack: NEXT_TS_TAILWIND,
		url: 'https://glidex-theta.vercel.app/ua',
	},
	{
		slug: 'nova',
		title: 'NOVA',
		descKey: 'project.nova',
		stack: NEXT_TS_TAILWIND,
		url: 'https://nova-ai-preview.vercel.app/',
	},
	{
		slug: 'motion',
		title: 'MOTION',
		descKey: 'project.motion',
		stack: 'React, TypeScript, Vite, Tailwind CSS',
		url: 'https://motion-app-check.vercel.app/',
	},
	{
		slug: 'noir',
		title: 'NOIR X1',
		descKey: 'project.noir',
		stack: NEXT_TS_TAILWIND,
		url: 'https://noir-electric.vercel.app/',
	},
	{
		slug: 'flow',
		title: 'FLOW',
		descKey: 'project.flow',
		stack: 'React, Vite, Tailwind CSS, Motion',
		url: 'https://flow-mauve-six.vercel.app/',
	},
	{
		slug: 'aera',
		title: 'AERA Systems',
		descKey: 'project.aera',
		stack: NEXT_TS_TAILWIND,
		url: 'https://aera-phi.vercel.app/',
	},
	{
		slug: 'oriel',
		title: 'ORIEL Development',
		descKey: 'project.oriel',
		stack: NEXT_TS_TAILWIND,
		url: 'https://oriel-peach.vercel.app/',
	},
	{
		slug: 'tvorivo',
		title: 'Tvorivo',
		descKey: 'project.tvorivo',
		stack: NEXT_TS_TAILWIND,
		url: 'https://tvorivo.vercel.app/',
	},
	{
		slug: 'axion',
		title: 'AXION',
		descKey: 'project.axion',
		stack: NEXT_TS_TAILWIND,
		url: 'https://axion-six-bay.vercel.app/',
	},
	{
		slug: 'pelagion',
		title: 'Pelagion',
		descKey: 'project.pelagion',
		stack: NEXT_TS_TAILWIND,
		url: 'https://deep-chi-six.vercel.app/',
	},
	{
		slug: 'litha',
		title: 'LITHA°',
		descKey: 'project.litha',
		stack: NEXT_TS_TAILWIND,
		url: 'https://litha.vercel.app/',
	},
	{
		slug: 'aureon',
		title: 'AUREON',
		descKey: 'project.aureon',
		stack: NEXT_TS_TAILWIND,
		url: 'https://aureon-two-eta.vercel.app/',
	},
	{
		slug: 'elara-dental',
		title: 'ELARA Dental Studio',
		descKey: 'project.elara',
		stack: NEXT_TS_TAILWIND,
		url: 'https://clinic-elara.vercel.app/',
	},
	{
		slug: 'kovalov-partners',
		title: 'Ковальов і Партнери',
		descKey: 'project.kovalov',
		stack: NEXT_TS_TAILWIND,
		url: 'https://kovalev-mu.vercel.app/',
	},
	{
		slug: 'swisspc',
		title: 'SwissPC',
		descKey: 'project.swisspc',
		stack: 'React, TypeScript',
		url: 'https://swisspc-services.pingueu.com/',
	},
	{
		slug: 'abramova',
		title: 'Abramova Svíčky',
		descKey: 'project.abramova',
		stack: 'Next.js, TypeScript',
		url: 'https://candlesabramova.cz/',
	},
	{
		slug: 'elixir',
		title: 'Elixir',
		descKey: 'project.elixir',
		stack: 'HTML, Bootstrap',
		url: 'https://msil-elixir.vercel.app/',
	},
	{
		slug: 'miraton',
		modalSlug: 'miraton-modal',
		title: 'Miraton',
		descKey: 'project.miraton',
		stack: 'HTML, CSS, JS',
		url: 'https://miraton.vercel.app/',
	},
	{
		slug: 'kamba',
		title: 'Kamba',
		descKey: 'project.kamba',
		stack: REACT_TAILWIND,
		url: 'https://kambaplus.de/',
	},
	{
		slug: 'tex',
		title: 'TEX',
		descKey: 'project.tex',
		stack: REACT_TAILWIND,
		url: 'https://tex-io.com/',
	},
	{
		slug: 'kantor',
		title: 'Kantor',
		descKey: 'project.kantor',
		stack: REACT_TAILWIND,
		url: 'https://kantorx.pl/',
	},
	{
		slug: 'amrit',
		title: 'Amrit-On',
		descKey: 'project.amrit',
		stack: 'Next.js, Tailwind CSS',
		url: 'https://amrit-on.com/',
	},
	{
		slug: 'handyman',
		title: 'Handyman',
		descKey: 'project.handyman',
		stack: REACT_TAILWIND,
		url: 'https://handyman-prime.ca/',
	},
	{
		slug: 'sheremet',
		title: 'SHEREMET',
		descKey: 'project.sheremet',
		stack: REACT_TAILWIND,
		url: 'https://sheremet-transport.pl/',
	},
	{
		slug: 'lst',
		title: 'LST',
		descKey: 'project.lst',
		stack: REACT_TAILWIND,
		url: 'https://lst.com.ua/',
	},
	{
		slug: 'zone',
		title: 'Zone.',
		descKey: 'project.zone',
		stack: 'React, SASS',
		url: 'https://themsil.github.io/Zone/',
	},
	{
		slug: 'mntn',
		title: 'MNTN',
		descKey: 'project.mntn',
		stack: 'HTML, SASS, JS',
		url: 'https://msil-mntn.vercel.app/',
	},
	{
		slug: 'freedom',
		title: 'Freedom BC',
		descKey: 'project.freedom',
		stack: 'HTML, CSS, JS',
		url: 'https://freedom-bc.netlify.app/',
	},
	{
		slug: 'infinity-bet',
		title: 'Infinity Bet',
		descKey: 'project.infinity-bet',
		stack: 'React, PHP',
		url: 'https://infinity-bet.netlify.app/',
	},
	{
		slug: 'curiosity',
		title: 'Curiosity',
		descKey: 'project.curiosity',
		stack: REACT_TAILWIND,
		url: 'https://curiosity-adult.netlify.app/',
	},
	{
		slug: 'numapay',
		title: 'Numapay',
		descKey: 'project.numapay',
		stack: 'HTML, Tailwind, JS',
		url: 'https://numapay.netlify.app/',
	},
	{
		slug: 'qubly',
		title: 'Qubly',
		descKey: 'project.qubly',
		stack: 'HTML, SASS',
		url: 'https://themsil.github.io/Qubly/',
	},
	{
		slug: 'kreative-korner',
		title: 'Kreative Korner',
		descKey: 'project.kreative-korner',
		stack: 'HTML, CSS, JS',
		url: 'https://kreativekorner.netlify.app/',
	},
	{
		slug: 'bean-scene',
		title: 'Bean Scene',
		descKey: 'project.bean-scene',
		stack: 'HTML, SASS',
		url: 'https://bean-scene.vercel.app/',
	},
	{
		slug: 'paynicle',
		title: 'Paynicle',
		descKey: 'project.paynicle',
		stack: 'HTML, Tailwind, JS',
		url: 'https://paynicle.netlify.app/',
	},
	{
		slug: 'nft-ring',
		title: 'NFT Ring',
		descKey: 'project.nft-ring',
		stack: 'HTML, Tailwind CSS',
		url: 'https://themsil.github.io/NFT-Ring/',
	},
	{
		slug: 'resilience',
		title: 'Resilience',
		descKey: 'project.resilience',
		stack: REACT_TAILWIND,
		url: 'https://msil-resilience.netlify.app/',
	},
	{
		slug: 'spayke',
		title: 'Spayke',
		descKey: 'project.spayke',
		stack: 'HTML, Tailwind CSS',
		url: 'https://spayke.netlify.app/',
	},
	{
		slug: 'wavschool',
		title: 'WaV School',
		descKey: 'project.wavschool',
		stack: REACT_TAILWIND,
		url: 'https://wavschool.vercel.app/',
	},
	{
		slug: 'delivery-import',
		title: 'Delivery Import',
		descKey: 'project.delivery-import',
		stack: 'HTML, CSS, JS',
		url: 'https://carfs-from-usa-calculator.netlify.app/',
	},
	{
		slug: 'abc',
		title: 'ABC Photoshoot',
		descKey: 'project.abc',
		stack: 'HTML, CSS, JS',
		url: 'https://abcphotoshoot.com/',
	},
	{
		slug: 'tvs',
		title: 'TVS',
		descKey: 'project.tvs',
		stack: REACT_TAILWIND,
		url: 'https://www.tvs2017.es',
	},
	{
		slug: 'accelerage-landing',
		title: 'Accelerage Landing',
		descKey: 'project.accelerage-landing',
		stack: 'HTML, Tailwind, JS',
		url: 'https://accelerage-landing.netlify.app/',
	},
	{
		slug: 'casino-259',
		title: 'Casino 259',
		descKey: 'project.casino-259',
		stack: 'React, PHP',
		url: 'https://t.me/Testotostot_bot',
	},
];

export const projects: PortfolioProject[] = entries.map(
	({ slug, modalSlug, ...project }) => ({
		...project,
		slug,
		image: imageSet(slug),
		modalImage: imageSet(modalSlug || slug),
	})
);
