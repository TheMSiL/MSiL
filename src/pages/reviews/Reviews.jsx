import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import './reviews.css';
import ReviewsItem from './ReviewsItem';

const Reviews = () => {
	const { t } = useTranslation();

	const reviews = [
		{
			id: 1,
			name: t('review.name-1'),
			text: t('review.text-1'),
		},
		{
			id: 2,
			name: t('review.name-2'),
			text: t('review.text-2'),
		},
		{
			id: 3,
			name: t('review.name-3'),
			text: t('review.text-3'),
		},
		{
			id: 4,
			name: t('review.name-4'),
			text: t('review.text-4'),
		},
		{
			id: 5,
			name: t('review.name-5'),
			text: t('review.text-5'),
		},
		{
			id: 6,
			name: t('review.name-6'),
			text: t('review.text-6'),
		},
		{
			id: 7,
			name: t('review.name-7'),
			text: t('review.text-7'),
		},
		{
			id: 8,
			name: t('review.name-8'),
			text: t('review.text-8'),
		},
		{
			id: 9,
			name: t('review.name-9'),
			text: t('review.text-9'),
		},
		{
			id: 10,
			name: t('review.name-10'),
			text: t('review.text-10'),
		},
		{
			id: 11,
			name: t('review.name-11'),
			text: t('review.text-11'),
		},
		{
			id: 12,
			name: t('review.name-12'),
			text: t('review.text-12'),
		},
		{
			id: 13,
			name: t('review.name-13'),
			text: t('review.text-13'),
		},
		{
			id: 14,
			name: t('review.name-14'),
			text: t('review.text-14'),
		},
		{
			id: 15,
			name: t('review.name-15'),
			text: t('review.text-15'),
		},
		{
			id: 16,
			name: t('review.name-16'),
			text: t('review.text-16'),
		},
		{
			id: 17,
			name: t('review.name-17'),
			text: t('review.text-17'),
		},
		{
			id: 18,
			name: t('review.name-18'),
			text: t('review.text-18'),
		},
		{
			id: 19,
			name: t('review.name-19'),
			text: t('review.text-19'),
		},
		{
			id: 20,
			name: t('review.name-20'),
			text: t('review.text-20'),
		},
		{
			id: 21,
			name: t('review.name-21'),
			text: t('review.text-21'),
		},
		{
			id: 22,
			name: t('review.name-22'),
			text: t('review.text-22'),
		},
		{
			id: 23,
			name: t('review.name-23'),
			text: t('review.text-23'),
		},
	];

	return (
		<section className='reviews section'>
			<h2 className='section__title'>
				{t('reviews.title')} <span>{t('reviews.title-span')}</span>
			</h2>
			<div className='container reviews_items'>
				<Swiper
					pagination={{
						dynamicBullets: true,
						clickable: true,
					}}
					navigation
					autoplay={{
						delay: 5000, 
						disableOnInteraction: true,
					}}
					modules={[Pagination, Navigation, Autoplay]}
					spaceBetween={10}
					slidesPerView={1}
					loop={true}
				>
					{reviews.map(item => {
						return (
							<SwiperSlide key={item.id}>
								<ReviewsItem name={item.name} text={item.text} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Reviews;
