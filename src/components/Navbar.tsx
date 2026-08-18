import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { links } from '../data';
import './navbar.css';

const Navbar = () => {
	const { t } = useTranslation();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className='nav'>
			<div
				className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}
				id='nav-menu'
			>
				<ul className='nav__list'>
					{links.map(({ id, nameKey, icon, path }) => (
						<li className='nav__item' key={id}>
							<NavLink
								to={path}
								className={({ isActive }) =>
									isActive ? 'nav__link active-nav' : 'nav__link'
								}
								onClick={() => setShowMenu(false)}
							>
								{icon}
								<h3 className='nav__name'>{t(nameKey)}</h3>
							</NavLink>
						</li>
					))}
				</ul>
			</div>

			<button
				className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
				onClick={() => setShowMenu(current => !current)}
				aria-label={t('nav.menu')}
				aria-expanded={showMenu}
				aria-controls='nav-menu'
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</nav>
	);
};

export default Navbar;
