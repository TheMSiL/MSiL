import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import Seo from '../../components/Seo';
import ReviewsItem from './ReviewsItem';
import './reviews.css';

const REVIEW_COUNT = 25;
const FREELANCE_PROFILE = 'https://freelance.ua/ru/user/msil/opinions/';

const Reviews = () => {
	const { t } = useTranslation();
	const reviews = Array.from({ length: REVIEW_COUNT }, (_, index) => index + 1);

	return (
		<section className='reviews section'>
			<Seo
				title={t('seo.reviews-title')}
				description={t('seo.reviews-description')}
				path='/reviews'
			/>
			<h2 className='section__title container'>
				{t('reviews.title')} <span>{t('reviews.title-span')}</span>
			</h2>

			<div className='container'>
				<div className='reviews__grid'>
					{reviews.map(number => (
						<ReviewsItem
							key={number}
							name={t(`review.name-${number}`)}
							text={t(`review.text-${number}`)}
						/>
					))}
				</div>

				<p className='reviews__source'>
					{t('reviews.source')}
					<a href={FREELANCE_PROFILE} target='_blank' rel='noreferrer'>
						freelance.ua
						<FiExternalLink />
					</a>
				</p>
			</div>
		</section>
	);
};

export default Reviews;
