import {
	FaCommentDots,
	FaEnvelopeOpen,
	FaFolderOpen,
	FaHome,
	FaUser,
} from 'react-icons/fa';

import { FaLinkedin, FaTelegram, FaViber } from 'react-icons/fa';

import Theme4 from './assets/blue.png';
import Theme3 from './assets/blueviolet.png';
import Theme5 from './assets/goldenrod.png';
import Theme9 from './assets/green.png';
import Theme6 from './assets/magenta.png';
import Theme8 from './assets/orange.png';
import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme10 from './assets/yellow.png';
import Theme7 from './assets/yellowgreen.png';


import css from './assets/css.svg';
import figma from './assets/figma.svg';
import framer from './assets/framer.svg';
import git from './assets/git.svg';
import html from './assets/html.svg';
import javascript from './assets/javascript.svg';
import next from './assets/next.svg';
import nodejs from './assets/nodejs.svg';
import php from './assets/php.svg';
import postgresql from './assets/postgresql.svg';
import prisma from './assets/prisma.svg';
import react from './assets/react.svg';
import redux from './assets/redux.svg';
import sass from './assets/sass.svg';
import tailwind from './assets/tailwind.svg';
import typescript from './assets/typescript.svg';

import type { ReactNode } from 'react';

export type NavLinkItem = {
	id: number;
	nameKey: string;
	icon: ReactNode;
	path: string;
};

export type Skill = {
	id: number;
	title: string;
	img: string;
	invert?: boolean;
};

export type Theme = {
	id: number;
	img: string;
	name: string;
	color: string;
};

export type Stat = {
	value: string;
	labelKey: string;
};

export type Social = {
	href: string;
	children: ReactNode;
};

export const links: NavLinkItem[] = [
	{
		id: 1,
		nameKey: 'nav.home',
		icon: <FaHome className='nav__icon' />,
		path: '/',
	},

	{
		id: 2,
		nameKey: 'nav.about',
		icon: <FaUser className='nav__icon' />,
		path: '/about',
	},

	{
		id: 3,
		nameKey: 'nav.reviews',
		icon: <FaCommentDots className='nav__icon' />,
		path: '/reviews',
	},

	{
		id: 4,
		nameKey: 'nav.portfolio',
		icon: <FaFolderOpen className='nav__icon' />,
		path: '/portfolio',
	},

	{
		id: 5,
		nameKey: 'nav.contact',
		icon: <FaEnvelopeOpen className='nav__icon' />,
		path: '/contact',
	},
];

// Shared by the About counters and the home hero; `deskKey` keeps the manual
// line break that the wide layout needs.
export const stats: Stat[] = [
	{ value: '4+', labelKey: 'stat.item_5' },
	{ value: '80+', labelKey: 'stat.item_6' },
	{ value: '55+', labelKey: 'stat.item_7' },
	{ value: '16+', labelKey: 'stat.item_8' },
];

export const skills: Skill[] = [
	{ id: 1, title: 'HTML', img: html },
	{ id: 2, title: 'CSS', img: css },
	{ id: 3, title: 'JavaScript', img: javascript },
	{ id: 4, title: 'TypeScript', img: typescript },
	{ id: 5, title: 'React', img: react },
	// Monochrome black logos need inverting on the dark theme.
	{ id: 6, title: 'Next.js', img: next, invert: true },
	{ id: 7, title: 'Redux', img: redux },
	{ id: 8, title: 'Tailwind CSS', img: tailwind },
	{ id: 9, title: 'SASS', img: sass },
	{ id: 11, title: 'Framer Motion', img: framer, invert: true },
	{ id: 12, title: 'Node.js', img: nodejs },
	{ id: 13, title: 'PHP', img: php },
	{ id: 14, title: 'PostgreSQL', img: postgresql },
	{ id: 15, title: 'Prisma', img: prisma, invert: true },
	{ id: 16, title: 'Git', img: git },
	{ id: 17, title: 'Figma', img: figma },
];

export const themes: Theme[] = [
	{
		id: 1,
		img: Theme1,
		name: 'Purple',
		color: 'hsl(252, 35%, 51%)',
	},

	{
		id: 2,
		img: Theme2,
		name: 'Red',
		color: 'hsl(4, 93%, 34%)',
	},

	{
		id: 3,
		img: Theme3,
		name: 'Violet',
		color: 'hsl(271, 76%, 53%)',
	},

	{
		id: 4,
		img: Theme4,
		name: 'Blue',
		color: 'hsl(225, 73%, 57%)',
	},

	{
		id: 5,
		img: Theme5,
		name: 'Gold',
		color: 'hsl(43, 74%, 49%)',
	},

	{
		id: 6,
		img: Theme6,
		name: 'Pink',
		color: 'hsl(339, 81%, 66%)',
	},

	{
		id: 7,
		img: Theme7,
		name: 'Lime',
		color: 'hsl(80, 61%, 50%)',
	},

	{
		id: 8,
		img: Theme8,
		name: 'Orange',
		color: 'hsl(19, 96%, 52%)',
	},

	{
		id: 9,
		img: Theme9,
		name: 'Green',
		color: 'hsl(88, 65%, 43%)',
	},

	{
		id: 10,
		img: Theme10,
		name: 'Yellow',
		color: 'hsl(42, 100%, 50%)',
	},
];

export const socials: Social[] = [
	{
		href: 'https://telegram.me/TheMSiL',
		children: <FaTelegram />,
	},
	{
		href: 'viber://chat?number=%2B380981093352',
		children: <FaViber />,
	},
	{
		href: 'https://www.linkedin.com/in/msil/',
		children: <FaLinkedin />,
	},
];
