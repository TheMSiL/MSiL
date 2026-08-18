import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FaPalette } from 'react-icons/fa';
import { themes } from '../data';
import SwitchLanguage from './SwitchLanguage';
import ThemeItem from './ThemeItem';
import './themes.css';

// Matches :root in App.css, so the first paint and this state agree.
const DEFAULT_COLOR = 'hsl(271, 76%, 53%)';

const getStorageColor = () => localStorage.getItem('color') || DEFAULT_COLOR;

const getStorageTheme = () => {
	const stored = localStorage.getItem('theme');

	if (stored) return stored;

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark-theme'
		: 'light-theme';
};

const Themes = () => {
	const [showSwitcher, setShowSwitcher] = useState(false);
	const [color, setColor] = useState(getStorageColor);
	const [theme, setTheme] = useState(getStorageTheme);

	const { t } = useTranslation();

	const toggleTheme = () =>
		setTheme(current =>
			current === 'light-theme' ? 'dark-theme' : 'light-theme'
		);

	useEffect(() => {
		document.documentElement.style.setProperty('--first-color', color);
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute('content', color);
		localStorage.setItem('color', color);
	}, [color]);

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<div>
			<div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
				<SwitchLanguage />
				<button
					className='style__switcher-toggler'
					onClick={() => setShowSwitcher(current => !current)}
					aria-label={t('style')}
					aria-expanded={showSwitcher}
				>
					<FaPalette />
				</button>
				<button
					className='theme__toggler'
					onClick={toggleTheme}
					aria-label={t(theme === 'light-theme' ? 'theme.dark' : 'theme.light')}
				>
					{theme === 'light-theme' ? <BsMoon /> : <BsSun />}
				</button>
				<h3 className='style__switcher-title'>{t('style')}</h3>
				<div className='style__switcher-items'>
					{themes.map(item => (
						<ThemeItem key={item.id} {...item} changeColor={setColor} />
					))}
				</div>
				<button
					className='style__switcher-close'
					onClick={() => setShowSwitcher(false)}
					aria-label={t('portfolio.close')}
				>
					&times;
				</button>
			</div>
		</div>
	);
};

export default Themes;
