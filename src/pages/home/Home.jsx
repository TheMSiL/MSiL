import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CV from '../../assets/Silka_Resume.pdf';
import Profile from '../../assets/profile.webp';
import AnimatedText from '../../components/AnimatedText';
import './home.css';

const Home = () => {
	const { t } = useTranslation();

	return (
		<section className='home section grid'>
			<a href={CV} download='' className='nick'>
				MSiL
			</a>
			<img src={Profile} alt='' className='home__img' />
			<div className='home__content'>
				<div className='home__data'>
					<h1 className='home__title'>
						<span>
							<AnimatedText text={t('home.title-span')} />
						</span>
						{t('home.title')}
					</h1>
					<p className='home__description'>{t('home.description')}</p>
					<Link to='/about' className='button'>
						{t('home.button')}
						<span className='button__icon'>
							<FaArrowRight />
						</span>
					</Link>
				</div>
			</div>
			<div className='color__block' />
		</section>
	);
};

export default Home;
