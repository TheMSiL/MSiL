import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PortfolioItem from '../../components/PortfolioItem';
import Seo from '../../components/Seo';
import { projects } from '../../projects';
import './portfolio.css';

const ITEMS_PER_PAGE = 12;

const Portfolio = () => {
	const { t } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
	const indexOfFirstItem = (currentPage - 1) * ITEMS_PER_PAGE;
	const currentItems = projects.slice(
		indexOfFirstItem,
		indexOfFirstItem + ITEMS_PER_PAGE
	);

	const goToPage = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const nextPage = () => goToPage(currentPage < totalPages ? currentPage + 1 : 1);
	const prevPage = () => goToPage(currentPage > 1 ? currentPage - 1 : totalPages);

	return (
		<section className='portfolio section'>
			<Seo
				title={t('seo.portfolio-title')}
				description={t('seo.portfolio-description')}
				path='/portfolio'
			/>
			<h2 className='section__title container'>
				{t('portfolio.title')} <span>{t('portfolio.title-span')}</span>
			</h2>
			<div className='portfolio__container container grid'>
				{currentItems.map((item, index) => (
					<PortfolioItem
						key={item.title}
						{...item}
						eager={currentPage === 1 && index < 3}
					/>
				))}
			</div>

			<div className='pagination'>
				<button
					className='pagination__btn pagination__btn--prev'
					onClick={prevPage}
					aria-label={t('portfolio.prev-page')}
				>
					<FiChevronLeft />
				</button>

				<div className='pagination__numbers'>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
						<button
							key={number}
							className={`pagination__number ${currentPage === number ? 'active' : ''}`}
							onClick={() => goToPage(number)}
						>
							{number}
						</button>
					))}
				</div>

				<button
					className='pagination__btn pagination__btn--next'
					onClick={nextPage}
					aria-label={t('portfolio.next-page')}
				>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
};

export default Portfolio;
