import {
	FaCode,
	FaEnvelopeOpen,
	FaFolderOpen,
	FaHome,
	FaUser,
} from 'react-icons/fa';
import { FiExternalLink, FiFileText, FiUser } from 'react-icons/fi';

import { FaFacebook, FaLinkedin, FaTelegram, FaViber } from 'react-icons/fa';

import Work3 from './assets/2048.png';
import Work1 from './assets/Qubly.png';
import Work4 from './assets/TaskTrack.png';
import Work5 from './assets/YelpApp.png';
import Work2 from './assets/parallax.png';

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

import css from './assets/css.svg';
import git from './assets/git.svg';
import html from './assets/html.svg';
import javascript from './assets/javascript.svg';
import react from './assets/react.svg';
import redux from './assets/redux.svg';
import sass from './assets/sass.svg';
import tailwind from './assets/tailwind.svg';

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
		name: 'Portfolio',
		icon: <FaFolderOpen className='nav__icon' />,
		path: '/portfolio',
	},

	{
		id: 4,
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
		title: 'React',
		img: react,
	},

	{
		id: 5,
		title: 'Redux',
		img: redux,
	},

	{
		id: 6,
		title: 'SASS',
		img: sass,
	},

	{
		id: 7,
		title: 'Tailwind CSS',
		img: tailwind,
	},

	{
		id: 8,
		title: 'Git',
		img: git,
	},
];

export const portfolio = [
	{
		id: 1,
		img: Work1,
		title: 'Qubly',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Landing Page',
			},
			{
				icon: <FaCode />,
				title: 'Technology : ',
				desc: 'HTML SASS',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'https://themsil.github.io/Qubly/',
			},
			{
				icon: <FiUser />,
				title: 'Code : ',
				desc: 'https://github.com/TheMSiL/Qubly',
			},
		],
	},

	{
		id: 2,
		img: Work2,
		title: 'Fairy Forest',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Parallax effect',
			},
			{
				icon: <FaCode />,
				title: 'Technology : ',
				desc: 'HTML CSS',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'https://themsil.github.io/Parrolax-Forest/',
			},
			{
				icon: <FiUser />,
				title: 'Code : ',
				desc: 'https://github.com/TheMSiL/Parrolax-Forest',
			},
		],
	},

	{
		id: 3,
		img: Work3,
		title: '2048',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Game',
			},
			{
				icon: <FaCode />,
				title: 'Technology : ',
				desc: 'JavaScript CSS',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'https://themsil.github.io/2048/',
			},
			{
				icon: <FiUser />,
				title: 'Code : ',
				desc: 'https://github.com/TheMSiL/2048',
			},
		],
	},

	{
		id: 4,
		img: Work4,
		title: 'TaskTrack',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'Tasks tracker',
			},
			{
				icon: <FaCode />,
				title: 'Technology : ',
				desc: 'JavaScript CSS',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'https://themsil.github.io/TaskTrack/',
			},
			{
				icon: <FiUser />,
				title: 'Code : ',
				desc: 'https://github.com/TheMSiL/TaskTrack',
			},
		],
	},

	{
		id: 5,
		img: Work5,
		title: 'Yelp App',
		details: [
			{
				icon: <FiFileText />,
				title: 'Project : ',
				desc: 'React-app',
			},
			{
				icon: <FaCode />,
				title: 'Technology : ',
				desc: 'React, SASS',
			},
			{
				icon: <FiExternalLink />,
				title: 'Preview : ',
				desc: 'https://themsil.github.io/YelpApp/',
			},
			{
				icon: <FiUser />,
				title: 'Code : ',
				desc: 'https://github.com/TheMSiL/YelpApp',
			},
		],
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
