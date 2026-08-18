import { useTranslation } from 'react-i18next';

const FIELDS = [1, 2, 3, 4, 5, 6, 7, 8];

const Info = () => {
	const { t } = useTranslation();

	return (
		<>
			{FIELDS.map(field => (
				<li className='info__item' key={field}>
					<span className='info__title'>
						{t(`personal.info-title__${field}`)}
					</span>
					<span className='info__description'>
						{t(`personal.info-description__${field}`)}
					</span>
				</li>
			))}
		</>
	);
};

export default Info;
