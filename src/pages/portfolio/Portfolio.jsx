import { useTranslation } from 'react-i18next';
import PortfolioItem from '../../components/PortfolioItem';
import { portfolio } from '../../data';
import './portfolio.css';

const Portfolio = () => {
	const { t } = useTranslation();
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
