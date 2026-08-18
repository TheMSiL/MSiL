import { useTranslation } from 'react-i18next';
import { stats } from '../data';

const Stats = () => {
	const { t } = useTranslation();

	return (
		<>
			{stats.map(({ value, labelKey }) => (
				<div className='stats__box' key={labelKey}>
					<h3 className='stats__no'>{value}</h3>
					<p className='stats__title'>{t(labelKey)}</p>
				</div>
			))}
		</>
	);
};

export default Stats;
