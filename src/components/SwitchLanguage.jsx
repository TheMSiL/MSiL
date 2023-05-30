import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EN from '../assets/en-flag.svg';
import UA from '../assets/ua-flag.svg';

const SwitchLanguage = () => {
	const { i18n } = useTranslation();
	const savedLanguage = localStorage.getItem('language');

	useEffect(() => {
		if (savedLanguage) {
			i18n.changeLanguage(savedLanguage);
		}
	}, [savedLanguage, i18n]);

	const change = lng => {
		i18n.changeLanguage(lng);
		localStorage.setItem('language', lng);
	};

	return (
		<div
			className='language'
			onClick={() => change(savedLanguage === 'en' ? 'ua' : 'en')}
		>
			{savedLanguage === 'en' ? (
				<img src={EN} alt='' />
			) : (
				<img src={UA} alt='' />
			)}
		</div>
	);
};

export default SwitchLanguage;
