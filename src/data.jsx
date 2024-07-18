import {
	FaComment,
	FaCommentDots,
	FaComments,
	FaEnvelopeOpen,
	FaFolderOpen,
	FaHome,
	FaUser,
} from 'react-icons/fa';

import { FaFacebook, FaLinkedin, FaTelegram, FaViber } from 'react-icons/fa';

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

import board from './assets/board-game.jpg';
import music from './assets/guitar.jpg';
import gaming from './assets/ps.jpg';

import bootstrap from './assets/bootstrap.svg';
import css from './assets/css.svg';
import git from './assets/git.svg';
import gulp from './assets/gulp.svg';
import html from './assets/html.svg';
import javascript from './assets/javascript.svg';
import react from './assets/react.svg';
import redux from './assets/redux.svg';
import sass from './assets/sass.svg';
import tailwind from './assets/tailwind.svg';
import typescript from './assets/typescript.svg';
import webpack from './assets/webpack.svg';

export const links = [
	{
		id: 1,
		name: 'Home',
		icon: <FaHome className='nav__icon' />,
		path: '/',
	},

	{
		id: 2,
		name: 'About',
		icon: <FaUser className='nav__icon' />,
		path: '/about',
	},

	{
		id: 3,
		name: 'Reviews',
		icon: <FaCommentDots className='nav__icon' />,
		path: '/reviews',
	},

	{
		id: 4,
		name: 'Portfolio',
		icon: <FaFolderOpen className='nav__icon' />,
		path: '/portfolio',
	},

	{
		id: 5,
		name: 'Contact',
		icon: <FaEnvelopeOpen className='nav__icon' />,
		path: '/contact',
	},
];

export const hobbies = [
	{
		id: 1,
		img: gaming,
	},
	{
		id: 2,
		img: music,
	},
	{
		id: 3,
		img: board,
	},
];

export const skills = [
	{
		id: 1,
		title: 'HTML',
		img: html,
	},
	{
		id: 2,
		title: 'CSS',
		img: css,
	},

	{
		id: 3,
		title: 'JavaScript',
		img: javascript,
	},

	{
		id: 4,
		title: 'TypeScript',
		img: typescript,
	},

	{
		id: 5,
		title: 'React',
		img: react,
	},

	{
		id: 6,
		title: 'Redux',
		img: redux,
	},

	{
		id: 7,
		title: 'SASS',
		img: sass,
	},

	{
		id: 8,
		title: 'Tailwind CSS',
		img: tailwind,
	},

	{
		id: 9,
		title: 'Bootstrap',
		img: bootstrap,
	},

	{
		id: 10,
		title: 'Git',
		img: git,
	},
	{
		id: 11,
		title: 'Webpack',
		img: webpack,
	},
	{
		id: 12,
		title: 'Gulp',
		img: gulp,
	},
];

export const themes = [
	{
		id: 1,
		img: Theme1,
		color: 'hsl(252, 35%, 51%)',
	},

	{
		id: 2,
		img: Theme2,
		color: 'hsl(4, 93%, 34%)',
	},

	{
		id: 3,
		img: Theme3,
		color: 'hsl(271, 76%, 53%)',
	},

	{
		id: 4,
		img: Theme4,
		color: 'hsl(225, 73%, 57%)',
	},

	{
		id: 5,
		img: Theme5,
		color: 'hsl(43, 74%, 49%)',
	},

	{
		id: 6,
		img: Theme6,
		color: 'hsl(339, 81%, 66%)',
	},

	{
		id: 7,
		img: Theme7,
		color: 'hsl(80, 61%, 50%)',
	},

	{
		id: 8,
		img: Theme8,
		color: 'hsl(19, 96%, 52%)',
	},

	{
		id: 9,
		img: Theme9,
		color: 'hsl(88, 65%, 43%)',
	},

	{
		id: 10,
		img: Theme10,
		color: 'hsl(42, 100%, 50%)',
	},
];

export const socials = [
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
	{
		href: 'https://www.facebook.com/profile.php?id=100006593373325',
		children: <FaFacebook />,
	},
];
