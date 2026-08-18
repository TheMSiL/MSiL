import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CV from '../../assets/Max_Silka_Resume.pdf';
import Profile from '../../assets/profile.webp';
import AnimatedText from '../../components/AnimatedText';
import Seo from '../../components/Seo';
import { socials, stats } from '../../data';
import './home.css';

const HERO_STACK = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'];

const Home = () => {
	const { t } = useTranslation();

	return (
		<section className='home'>
			<Seo
				title={t('seo.home-title')}
				description={t('seo.home-description')}
				path='/'
			/>

			<div className='home__content'>
				<p className='home__badge'>
					<span className='home__badge-dot' />
					{t('home.badge')}
				</p>

				<h1 className='home__title'>
					<span className='home__title-accent'>
						<AnimatedText
							key={t('home.title-span')}
							text={t('home.title-span')}
						/>
					</span>
					{t('home.title')}
				</h1>

				<p className='home__description'>{t('home.description')}</p>

				<ul className='home__chips'>
					{HERO_STACK.map(tech => (
						<li className='home__chip' key={tech}>
							{tech}
						</li>
					))}
				</ul>

				<div className='home__actions'>
					<Link to='/portfolio' className='button'>
						{t('home.cta-work')}
						<span className='button__icon'>
							<FaArrowRight />
						</span>
					</Link>
					<a href={CV} download='' className='home__cv'>
						<FaDownload />
						{t('personal.button')}
					</a>
				</div>

				<ul className='home__stats'>
					{stats.slice(0, 3).map(({ value, labelKey }) => (
						<li className='home__stat' key={labelKey}>
							<span className='home__stat-value'>{value}</span>
							<span className='home__stat-label'>{t(labelKey)}</span>
						</li>
					))}
				</ul>
			</div>

			<div className='home__visual'>
				<div className='home__photo'>
					<img
						src={Profile}
						alt='Max Silka'
						className='home__img'
						width='1200'
						height='1642'
					/>
				</div>

				<div className='home__socials'>
					{socials.map(({ href, children }, index) => (
						<a
							href={href}
							className='home__social'
							key={index}
							target='_blank'
							rel='noreferrer'
						>
							{children}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Home;
