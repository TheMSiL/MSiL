import { useTranslation } from 'react-i18next';
import { FaCode, FaGlobe } from 'react-icons/fa';
import { FiExternalLink, FiFileText } from 'react-icons/fi';
import PortfolioItem from '../../components/PortfolioItem';
import './portfolio.css';

import Work3 from '../../assets/AimTraining.png';
import Work10 from '../../assets/BeanScene.png';
import Work11 from '../../assets/MNTN - Dribbble.png';
import Work7 from '../../assets/NFT.png';
import Work1 from '../../assets/Qubly.png';
import Work8 from '../../assets/Zone.png';
import Work6 from '../../assets/abc.png';
import Work9 from '../../assets/accelerage-landing.png';
import Work4 from '../../assets/accelerage.png';
import Work20 from '../../assets/cars_usa.png';
import Work5 from '../../assets/casino_tg.png';
import Work15 from '../../assets/curiosity.png';
import Work2 from '../../assets/elixir.png';
import Work22 from '../../assets/freedom.png';
import Work21 from '../../assets/infinity_bet.png';
import Work17 from '../../assets/kantor.png';
import Work13 from '../../assets/kreativekorner.png';
import Work18 from '../../assets/lucky_jet.png';
import Work12 from '../../assets/miraton.png';
import Work12_1 from '../../assets/miraton2.png';
import Work23 from '../../assets/numapay.png';
import Work24 from '../../assets/paynicle.png';
import Work19 from '../../assets/startspeak.png';
import Work16 from '../../assets/tvs.png';
import Work14 from '../../assets/wavschool.png';

const Portfolio = () => {
	const { t } = useTranslation();

	const portfolio = [
		{
			img: Work19,
			modalImg: Work19,
			title: 'StartSpeakEN',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item14-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, Tailwind CSS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://www.startspeaken.com/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/start_speakEN'>GitHub</a>",
				},
			],
		},
		{
			img: Work2,
			modalImg: Work2,
			title: 'Elixir',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item1-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, Bootstrap',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://msil-elixir.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/Elixir'>GitHub</a>",
				},
			],
		},
		{
			img: Work18,
			modalImg: Work18,
			title: 'LuckyJet',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item17-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, PHP',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://lucky-jettest.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/online_game'>GitHub</a>",
				},
			],
		},
		{
			img: Work8,
			modalImg: Work8,
			title: 'Zone.',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item1-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, SASS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://themsil.github.io/Zone/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/Zone'>GitHub</a>",
				},
			],
		},
		{
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
					desc: "<a target='_blank' href='https://msil-mntn.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/MNTN'>GitHub</a>",
				},
			],
		},
		{
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
					desc: "<a target='_blank' href='https://miraton.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/Miraton'>GitHub</a>",
				},
			],
		},
		{
			img: Work21,
			modalImg: Work21,
			title: 'Infinity Bet',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item17-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, PHP',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://infinity-bet.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/infinity_bet'>GitHub</a>",
				},
			],
		},
		{
			img: Work15,
			modalImg: Work15,
			title: 'Curiosity',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item13-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, Tailwind CSS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://curiosity-adult.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/Curiosity-adult'>GitHub</a>",
				},
			],
		},
		{
			img: Work23,
			modalImg: Work23,
			title: 'Numapay',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item1-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, Tailwind, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://numapay.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/numapay'>GitHub</a>",
				},
			],
		},
		{
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
					desc: "<a target='_blank' href='https://themsil.github.io/Qubly/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/Qubly'>GitHub</a>",
				},
			],
		},
		{
			img: Work13,
			modalImg: Work13,
			title: 'Kreative Korner',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item13-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, CSS, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://kreativekorner.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/KreativeKorner'>GitHub</a>",
				},
			],
		},
		{
			img: Work22,
			modalImg: Work22,
			title: 'Freedom BC',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item1-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, CSS, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://freedom-bc.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/freedom'>GitHub</a>",
				},
			],
		},
		{
			img: Work10,
			modalImg: Work10,
			title: 'Bean Scene',
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
					desc: "<a target='_blank' href='https://bean-scene.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/BeanScene'>GitHub</a>",
				},
			],
		},
		{
			img: Work24,
			modalImg: Work24,
			title: 'Paynicle',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item1-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, Tailwind, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://paynicle.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/paynicle'>GitHub</a>",
				},
			],
		},
		{
			img: Work7,
			modalImg: Work7,
			title: 'NFT Ring',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item1-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, Tailwind CSS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://themsil.github.io/NFT-Ring/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/NFT-Ring'>GitHub</a>",
				},
			],
		},
		{
			img: Work14,
			modalImg: Work14,
			title: 'WaV School',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item14-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, Tailwind CSS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://wavschool.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/wavschool'>GitHub</a>",
				},
			],
		},
		{
			img: Work20,
			modalImg: Work20,
			title: 'Delivery Import',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item20-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, CSS, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://carfs-from-usa-calculator.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/cars_from-USA'>GitHub</a>",
				},
			],
		},
		{
			img: Work6,
			modalImg: Work6,
			title: 'ABC Photoshoot',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item1-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, CSS, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://abcphotoshoot.com/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/ABC'>GitHub</a>",
				},
			],
		},
		{
			img: Work4,
			modalImg: Work4,
			title: 'Accelerage',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item7-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, Tailwind, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://accelerage.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/accelerage'>GitHub</a>",
				},
			],
		},
		{
			img: Work16,
			modalImg: Work16,
			title: 'TVS',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item13-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, Tailwind CSS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://www.tvs2017.es'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a style='cursor: not-allowed' target='_blank'>NDA</a>",
				},
			],
		},
		{
			img: Work17,
			modalImg: Work17,
			title: 'Kantor',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item13-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, Tailwind CSS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://kantorx.pl/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/kantor'>GitHub</a>",
				},
			],
		},
		{
			img: Work9,
			modalImg: Work9,
			title: 'Accelerage Landing',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item1-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'HTML, Tailwind, JS',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://accelerage-landing.netlify.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/accelerage-landing'>GitHub</a>",
				},
			],
		},
		{
			img: Work5,
			modalImg: Work5,
			title: 'Casino 259',
			details: [
				{
					icon: <FiFileText />,
					title: t('portfolio.item1-title-1'),
					desc: t('portfolio.item17-desc'),
				},
				{
					icon: <FaGlobe />,
					title: t('portfolio.item-title-2'),
					desc: 'React, PHP',
				},
				{
					icon: <FiExternalLink />,
					title: t('portfolio.item-title-3'),
					desc: "<a target='_blank' href='https://t.me/Testotostot_bot'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/tg_casino'>GitHub</a>",
				},
			],
		},
		{
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
					desc: "<a target='_blank' href='https://aim-game-themsil.vercel.app/'>Web</a>",
				},
				{
					icon: <FaCode />,
					title: t('portfolio.item-title-4'),
					desc: "<a target='_blank' href='https://github.com/TheMSiL/AimGame'>GitHub</a>",
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
					return <PortfolioItem key={item.title} {...item} />;
				})}
			</div>
		</section>
	);
};

export default Portfolio;
