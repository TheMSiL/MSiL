import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EN from '../assets/en-flag.svg';
import UA from '../assets/ua-flag.svg';

const SwitchLanguage = () => {
	const { t, i18n } = useTranslation();
	const current = i18n.language === 'ua' ? 'ua' : 'en';
	const next = current === 'en' ? 'ua' : 'en';

	useEffect(() => {
		const stored = localStorage.getItem('language');

		if (stored && stored !== i18n.language) i18n.changeLanguage(stored);
	}, [i18n]);

	const change = () => {
		i18n.changeLanguage(next);
		localStorage.setItem('language', next);
	};

	return (
		<button
			className='language'
			onClick={change}
			aria-label={t('language.switch')}
		>
			<img src={current === 'en' ? EN : UA} alt='' />
		</button>
	);
};

export default SwitchLanguage;
