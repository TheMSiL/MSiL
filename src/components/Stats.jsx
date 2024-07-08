import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Stats = () => {
	const { t } = useTranslation();

	const stats_desc = [
		{
			id: 1,
			no: '2+',
			title: t('stat.item_1'),
		},
		{
			id: 2,
			no: '50+',
			title: t('stat.item_2'),
		},
		{
			id: 3,
			no: '30+',
			title: t('stat.item_3'),
		},
		{
			id: 4,
			no: '10+',
			title: t('stat.item_4'),
		},
	];

	const stats_mob = [
		{
			id: 1,
			no: '2+',
			title: t('stat.item_5'),
		},
		{
			id: 2,
			no: '50+',
			title: t('stat.item_6'),
		},
		{
			id: 3,
			no: '30+',
			title: t('stat.item_7'),
		},
		{
			id: 4,
			no: '10+',
			title: t('stat.item_8'),
		},
	];

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 500);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const stats = isMobile ? stats_mob : stats_desc;

	return (
		<>
			{stats.map(({ no, title }, index) => (
				<div className='stats__box' key={index}>
					<h3 className='stats__no'>{no}</h3>
					<p className='stats__title'>{isMobile ? title : parse(title)}</p>
				</div>
			))}
		</>
	);
};

export default Stats;
