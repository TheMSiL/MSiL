import { useTranslation } from 'react-i18next';
import { FaCode, FaGlobe } from 'react-icons/fa';
import { FiExternalLink, FiFileText } from 'react-icons/fi';
import PortfolioItem from '../../components/PortfolioItem';
import './portfolio.css';

import Work3 from '../../assets/AimTraining.png';
import Work10 from '../../assets/BeanScene.png';
import Work6 from '../../assets/CreditCards.png';
import Work11 from '../../assets/MNTN - Dribbble.png';
import Work7 from '../../assets/NFT.png';
import Work1 from '../../assets/Qubly.png';
import Work9 from '../../assets/RandomColor.png';
import Work4 from '../../assets/TaskTrack.png';
import Work5 from '../../assets/YelpApp.png';
import Work8 from '../../assets/Zone.png';
import Work2 from '../../assets/elixir.png';
import Work12 from '../../assets/miraton.png';
import Work12_1 from '../../assets/miraton2.png';



const Portfolio = () => {
	const { t } = useTranslation();

	const portfolio = [
		{
			id: 1,
			img: Work8,
			modalImg: Work8,
			title: 'Zone.',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item8-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, SASS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://themsil.github.io/Zone/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/Zone'>GitHub</a>",
				},
			],
		},
		{
			id: 2,
			img: Work2,
			modalImg: Work2,
			title: 'Elixir',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item8-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, Bootstrap',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://msil-elixir.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/Elixir'>GitHub</a>",
				},
			],
		},
		{
			id: 3,
			img: Work11,
			modalImg: Work11,
			title: 'MNTN',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item2-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, SASS, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://msil-mntn.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/MNTN'>GitHub</a>",
				},
			],
		},
		{
			id: 4,
			img: Work12,
			modalImg: Work12_1,
			title: 'Miraton',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item10-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, CSS, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://miraton.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/Miraton'>GitHub</a>",
				},
			],
		},
		{
			id: 5,
			img: Work1,
			modalImg: Work1,
			title: 'Qubly',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item1-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, SASS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://themsil.github.io/Qubly/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/Qubly'>GitHub</a>",
				},
			],
		},
		{
			id: 6,
			img: Work10,
			modalImg: Work10,
			title: 'Bean Scene',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item7-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, SASS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://bean-scene.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/BeanScene'>GitHub</a>",
				},
			],
		},

		{
			id: 7,
			img: Work7,
			modalImg: Work7,
			title: 'NFT Ring',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item7-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, Tailwind CSS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://themsil.github.io/NFT-Ring/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/NFT-Ring'>GitHub</a>",
				},
			],
		},
		{
			id: 8,
			img: Work5,
			modalImg: Work5,
			title: 'Yelp App',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item5-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),

					desc: 'React, SASS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://themsil.github.io/YelpApp/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/YelpApp'>GitHub</a>",
				},
			],
		},
		{
			id: 9,
			img: Work6,
			modalImg: Work6,
			title: 'Credit cards',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item6-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, SASS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://themsil.github.io/CreditCards/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/CreditCards'>GitHub</a>",
				},
			],
		},
		{
			id: 10,
			img: Work3,
			modalImg: Work3,
			title: 'AimTraining',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item3-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, CSS, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://aim-game-themsil.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/AimGame'>GitHub</a>",
				},
			],
		},
		{
			id: 11,
			img: Work4,
			modalImg: Work4,
			title: 'TaskTrack',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item4-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'JavaScript',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://themsil.github.io/TaskTrack/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/TaskTrack'>GitHub</a>",
				},
			],
		},
		{
			id: 12,
			img: Work9,
			modalImg: Work9,
			title: 'RandomColor',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item9-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, CSS, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://themsil.github.io/RandomColor/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/RandomColor'>GitHub</a>",
				},
			],
		},
	];
	return (
		<section className='portfolio section'>
			<h2 className='section__title'>
				{t('portfolio.title')} <span>{t('portfolio.title-span')}</span>
			</h2>
			<div className='portfolio__container container grid'>
				{portfolio.map(item => {
					return <PortfolioItem key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};

export default Portfolio;
