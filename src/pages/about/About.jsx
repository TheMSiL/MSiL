import { useTranslation } from 'react-i18next';
import { FaDownload, FaGraduationCap } from 'react-icons/fa';
import certificate from '../../assets/Silka certificate.pdf';
import CV from '../../assets/Silka_Resume.pdf';

import Info from '../../components/Info';
import Skills from '../../components/Skills';
import Stats from '../../components/Stats';
import './about.css';

const About = () => {
	const { t } = useTranslation();

	return (
		<main className='section container'>
			<section className='about'>
				<h2 className='section__title'>
					{t('about.title')} <span>{t('about.title-span')}</span>
				</h2>
				<div className='about__container grid'>
					<div className='about__info'>
						<h3 className='section__subtitle'>{t('personal.title')}</h3>
						<ul className='info__list grid'>
							<Info />
						</ul>
						<div className='button__flex-container'>
							<a href={CV} download='' className='button'>
								{t('personal.button')}
								<span className='button__icon'>
									<FaDownload />
								</span>
							</a>
						</div>
						<div className='separator-1200'></div>
					</div>
					<div className='stats grid'>{<Stats />}</div>
				</div>
			</section>
			<div className='separator'></div>

			<section className='skills'>
				<h3 className='section__subtitle subtitle__center'>
					{t('skills.title')}
				</h3>

				<div className='skills__container grid'>
					<Skills />
				</div>

				<div className='separator'></div>

				<section className='education'>
					<h3 className='section__subtitle subtitle__center'>
						{t('education.title')}
					</h3>
					<div className='education__flex'>
						<div className='resume__data'>
							<div className='resume__icon'>
								<FaGraduationCap />
							</div>
							<span className='resume__date'>2023</span>
							<h4 className='resume__subtitle'>
								{t('education.prof')}
								<span>Byte IT Education</span>
							</h4>
							<p className='resume__description'>{t('education.desc')}</p>
						</div>
						<a href={certificate} download='' className='button'>
							{t('education.button')}
							<span className='button__icon'>
								<FaDownload />
							</span>
						</a>
					</div>
				</section>
			</section>
		</main>
	);
};

export default About;
