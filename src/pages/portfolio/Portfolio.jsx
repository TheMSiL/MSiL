import { useTranslation } from 'react-i18next';
import { FaCode, FaGlobe } from 'react-icons/fa';
import { FiExternalLink, FiFileText } from 'react-icons/fi';
import PortfolioItem from '../../components/PortfolioItem';
import './portfolio.css';

import Work3 from '../../assets/2048.png';
import Work6 from '../../assets/CreditCards.png';
import Work1 from '../../assets/Qubly.png';
import Work4 from '../../assets/TaskTrack.png';
import Work5 from '../../assets/YelpApp.png';
import Work2 from '../../assets/parallax.png';

const Portfolio = () => {
	const { t } = useTranslation();

	const portfolio = [
		{
			id: 1,
			img: Work1,
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
					desc: 'HTML SASS',
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
			id: 2,
			img: Work2,
			title: 'Fairy Forest',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item2-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML CSS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://themsil.github.io/Parrolax-Forest/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/Parrolax-Forest'>GitHub</a>",
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
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item3-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'JavaScript CSS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a href='https://themsil.github.io/2048/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a href='https://github.com/TheMSiL/2048'>GitHub</a>",
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
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item4-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'JavaScript CSS',
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
			id: 5,
			img: Work5,
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
			id: 6,
			img: Work6,
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
					desc: 'React, SASS, Styled-Components',
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
