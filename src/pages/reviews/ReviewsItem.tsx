import { useTranslation } from 'react-i18next';

type ReviewsItemProps = {
	name: string;
	text: string;
};

const initials = (name: string) =>
	name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map(word => word[0])
		.join('')
		.toUpperCase();

const ReviewsItem = ({ name, text }: ReviewsItemProps) => {
	const { t } = useTranslation();

	return (
		<article className='review'>
			<span className='review__quote' aria-hidden='true'>
				“
			</span>
			<p className='review__text'>{text}</p>

			<div className='review__author'>
				<span className='review__avatar' aria-hidden='true'>
					{initials(name)}
				</span>
				<span>
					<span className='review__name'>{name}</span>
					<span className='review__role'>{t('reviews.role')}</span>
				</span>
			</div>
		</article>
	);
};

export default ReviewsItem;
