import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FaPalette } from 'react-icons/fa';
import { themes } from '../data';
import SwitchLanguage from './SwitchLanguage';
import ThemeItem from './ThemeItem';
import './themes.css';

const getStorageColor = () => {
	let color = 'hsl(4, 93%, 34%)';
	if (localStorage.getItem('color')) {
		color = localStorage.getItem('color');
	}

	return color;
};

const getStorageTheme = () => {
	let theme = 'light-theme';
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}

	return theme;
};

const Themes = () => {
	const [showSwitcher, setShowSwitcher] = useState(false);
	const [color, setColor] = useState(getStorageColor());
	const [theme, setTheme] = useState(getStorageTheme());

	const { t } = useTranslation();

	const changeColor = color => {
		setColor(color);
	};

	const toggleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme');
		} else {
			setTheme('light-theme');
		}
	};

	useEffect(() => {
		const themeColorMetaTag = document.querySelector(
			'meta[name="theme-color"]'
		);
		themeColorMetaTag.setAttribute('content', color);
		localStorage.setItem('color', color);
	}, [color]);

	useEffect(() => {
		document.documentElement.style.setProperty('--first-color', color);
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
				<div
					className='style__switcher-toggler'
					onClick={() => setShowSwitcher(!showSwitcher)}
				>
					<FaPalette />
				</div>
				<div className='theme__toggler' onClick={toggleTheme}>
					{theme === 'light-theme' ? <BsMoon /> : <BsSun />}
				</div>
				<h3 className='style__switcher-title'>{t('style')}</h3>
				<div className='style__switcher-items'>
					{themes.map((theme, index) => {
						return (
							<ThemeItem key={index} {...theme} changeColor={changeColor} />
						);
					})}
				</div>
				<div
					className='style__switcher-close'
					onClick={() => setShowSwitcher(!showSwitcher)}
				>
					&times;
				</div>
			</div>
		</div>
	);
};

export default Themes;
