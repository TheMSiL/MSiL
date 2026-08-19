import { useForm, ValidationError } from '@formspree/react';
import type { FormEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelopeOpen, FaTelegram } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import Seo from '../../components/Seo';
import { socials } from '../../data';
import './contact.css';

const Contact = () => {
	const [state, handleSubmit] = useForm('mayzzlrv');
	const { t } = useTranslation();
	const formRef = useRef<HTMLFormElement>(null);
	// Formspree swallows network failures and rejects instead of reporting them,
	// so a failed request has to be caught here.
	const [requestFailed, setRequestFailed] = useState(false);

	const submitFailed =
		requestFailed || (state.errors?.getFormErrors().length ?? 0) > 0;

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		setRequestFailed(false);

		try {
			await handleSubmit(event);
		} catch {
			setRequestFailed(true);
		}
	};

	useEffect(() => {
		if (state.succeeded) formRef.current?.reset();
	}, [state.succeeded]);

	return (
		<section className='contact section'>
			<Seo
				title={t('seo.contact-title')}
				description={t('seo.contact-description')}
				path='/contact'
			/>
			<h2 className='section__title container'>
				{t('contact.title')} <span>{t('contact.title-span')}</span>
			</h2>

			<div className='contact__container container grid'>
				<div className='contact__data'>
					<h3 className='contact__title'>{t('contact.subtitle')}</h3>
					<p className='contact__description'>{t('contact.desc')}</p>

					<div className='contact__info'>
						<a className='info__item' href='mailto:msil.developer@gmail.com'>
							<FaEnvelopeOpen className='info__icon' />
							<div>
								<span className='info__title'>{t('contact.mail')}</span>
								<h4 className='info__desc'>msil.developer@gmail.com</h4>
							</div>
						</a>
						<a
							className='info__item'
							href='https://telegram.me/TheMSiL'
							target='_blank'
							rel='noreferrer'
						>
							<FaTelegram className='info__icon' />
							<div>
								<span className='info__title'>{t('contact.telegram')}</span>
								<h4 className='info__desc'>@TheMSiL</h4>
							</div>
						</a>
					</div>

					<div className='contact__socials'>
						{socials.map(({ href, children }, index) => {
							return (
								<a
									href={href}
									className='contact__social-link'
									key={index}
									target='_blank'
									rel='noreferrer'
								>
									{children}
								</a>
							);
						})}
					</div>
				</div>

				<form className='contact__form' ref={formRef} onSubmit={onSubmit}>
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
						<button className='button' type='submit' disabled={state.submitting}>
							{t('contact.button')}
							<span className='button__icon contact__button-icon'>
								<FiSend />
							</span>
						</button>
					</div>

					{state.succeeded && (
						<p className='form__message form__message--success' role='status'>
							{t('contact.success')}
						</p>
					)}
					{submitFailed && (
						<p className='form__message form__message--error' role='alert'>
							{t('contact.error')}
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default Contact;
