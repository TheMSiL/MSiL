import { useTranslation } from 'react-i18next';

const Info = () => {
	const { t } = useTranslation();
	const personalInfo = [
		{
			id: 1,
			title: t('personal.info-title__1'),
			description: t('personal.info-description__1'),
		},

		{
			id: 2,
			title: t('personal.info-title__2'),
			description: t('personal.info-description__2'),
		},

		{
			id: 3,
			title: t('personal.info-title__3'),
			description: t('personal.info-description__3'),
		},

		{
			id: 4,
			title: t('personal.info-title__4'),
			description: t('personal.info-description__4'),
		},

		{
			id: 5,
			title: t('personal.info-title__5'),
			description: t('personal.info-description__5'),
		},

		{
			id: 6,
			title: t('personal.info-title__6'),
			description: t('personal.info-description__6'),
		},

		{
			id: 7,
			title: t('personal.info-title__7'),
			description: t('personal.info-description__7'),
		},

		{
			id: 8,
			title: t('personal.info-title__8'),
			description: t('personal.info-description__8'),
		},

		{
			id: 9,
			title: t('personal.info-title__9'),
			description: t('personal.info-description__9'),
		},

		{
			id: 10,
			title: t('personal.info-title__10'),
			description: t('personal.info-description__10'),
		},
	];
	return (
		<>
			{personalInfo.map(({ title, description }, index) => {
				return (
					<li className='info__item' key={index}>
						<span className='info__title'>{title}</span>
						<span className='info__description'>{description}</span>
					</li>
				);
			})}
		</>
	);
};

export default Info;
