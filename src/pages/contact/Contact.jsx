import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelopeOpen, FaPhoneSquareAlt } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { socials } from '../../data';
import './contact.css';

const Contact = () => {
	const [state, handleSubmit] = useForm('mayzzlrv');
	const [formSubmitted, setFormSubmitted] = useState(false);
	const { t } = useTranslation();

	const handleFormSubmit = async event => {
		event.preventDefault();
		await handleSubmit(event);
		setFormSubmitted(true);
		setTimeout(() => {
			setFormSubmitted(false);
			event.target.reset();
		}, 2000);
	};

	return (
		<section className='contact section'>
			<h2 className='section__title'>
				{t('contact.title')} <span>{t('contact.title-span')}</span>
			</h2>

			<div className='contact__container container grid'>
				<div className='contact__data'>
					<h3 className='contact__title'>{t('contact.subtitle')}</h3>
					<p className='contact__description'>{t('contact.desc')}</p>

					<div className='contact__info'>
						<div className='info__item'>
							<FaEnvelopeOpen className='info__icon' />
							<div>
								<span className='info__title'>{t('contact.mail')}</span>
								<h4 className='info__desc'>msil.developer@gmail.com</h4>
							</div>
						</div>
						<div className='info__item'>
							<FaPhoneSquareAlt className='info__icon' />
							<div>
								<span className='info__title'>{t('contact.tel')}</span>
								<h4 className='info__desc'>+38 (098) 109-33-52</h4>
							</div>
						</div>
					</div>

					<div className='contact__socials'>
						{socials.map(({ href, children }, index) => {
							return (
								<a href={href} className='contact__social-link' key={index}>
									{children}
								</a>
							);
						})}
					</div>
				</div>

				<form className='contact__form' onSubmit={handleFormSubmit}>
					<div className='form__input-group'>
						<div className='form__input-div'>
							<input
								id='name'
								name='name'
								type='text'
								placeholder={t('name.placeholder')}
								className='form__control'
								required
							/>
							<ValidationError
								prefix='name'
								field='name'
								errors={state.errors}
							/>
						</div>
						<div className='form__input-div'>
							<input
								id='email'
								name='email'
								type='email'
								placeholder={t('email.placeholder')}
								className='form__control'
								required
							/>
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
						</div>
					</div>
					<div className='form__input-div'>
						<textarea
							id='message'
							name='message'
							placeholder={t('textarea.placeholder')}
							className='form__control textarea'
							required
						/>
						<ValidationError
							prefix='Message'
							field='message'
							errors={state.errors}
						/>
					</div>
					<div className='form__flex-div'>
						<button className='button'>
							{t('contact.button')}
							<span className='button__icon contact__button-icon'>
								<FiSend />
							</span>
						</button>
						{formSubmitted && (
							<p className='form__submitted-text'>
								Thank you for considering me as part of your team.
							</p>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
