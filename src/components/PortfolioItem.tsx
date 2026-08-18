import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import type { PortfolioProject } from '../projects';

type PortfolioItemProps = PortfolioProject & {
	eager?: boolean;
};

const PortfolioItem = ({
	image,
	modalImage,
	title,
	descKey,
	stack,
	url,
	eager,
}: PortfolioItemProps) => {
	const { t } = useTranslation();
	const [modal, setModal] = useState(false);
	const dialogRef = useRef<HTMLDivElement>(null);
	const openerRef = useRef<HTMLButtonElement>(null);

	const closeModal = () => setModal(false);

	useEffect(() => {
		if (!modal) return;

		const dialog = dialogRef.current;
		const opener = openerRef.current;

		if (!dialog) return;

		const focusable = () =>
			[...dialog.querySelectorAll<HTMLElement>('button, a[href]')].filter(
				element => !element.hasAttribute('disabled')
			);

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModal();
				return;
			}

			if (event.key !== 'Tab') return;

			// Keep focus inside the dialog while it is open.
			const elements = focusable();
			const first = elements[0];
			const last = elements[elements.length - 1];

			if (!first || !last) return;

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};

		const { overflow } = document.body.style;
		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', onKeyDown);
		focusable()[0]?.focus();

		return () => {
			document.body.style.overflow = overflow;
			document.removeEventListener('keydown', onKeyDown);
			opener?.focus();
		};
	}, [modal]);

	// The card is transformed on hover, and a transform makes it the containing
	// block for fixed children, so the modal is rendered outside of the card.
	const modalMarkup = (
		<div
			className='portfolio__modal'
			ref={dialogRef}
			role='dialog'
			aria-modal='true'
			aria-label={title}
			onClick={closeModal}
		>
			<div
				className='portfolio__modal-content'
				onClick={event => event.stopPropagation()}
			>
				<button
					className='modal__close'
					onClick={closeModal}
					aria-label={t('portfolio.close')}
				>
					<FiX />
				</button>

				<img
					src={modalImage.src}
					srcSet={modalImage.srcSet}
					sizes='(max-width: 768px) 92vw, 720px'
					alt={title}
					className='modal__img'
					decoding='async'
				/>

				<div className='modal__body'>
					<h3 className='modal__title'>{title}</h3>
					<p className='modal__desc'>{t(descKey)}</p>

					<ul className='modal__tags'>
						{stack.split(',').map((tag: string) => (
							<li className='modal__tag' key={tag}>
								{tag.trim()}
							</li>
						))}
					</ul>

					{url && (
						<a
							href={url}
							className='button modal__link'
							target='_blank'
							rel='noreferrer'
						>
							{t('portfolio.visit')}
							<span className='button__icon'>
								<FiArrowUpRight />
							</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);

	return (
		<div className='portfolio__item'>
			<img
				src={image.src}
				srcSet={image.srcSet}
				sizes='(max-width: 576px) 92vw, (max-width: 1024px) 46vw, 360px'
				alt={title}
				className='portfolio__img'
				loading={eager ? 'eager' : 'lazy'}
				decoding='async'
			/>

			<button
				className='portfolio__hover'
				ref={openerRef}
				onClick={() => setModal(true)}
			>
				<span className='portfolio__title'>{title}</span>
				<span className='portfolio__type'>{t(descKey)}</span>
			</button>

			{modal && createPortal(modalMarkup, document.body)}
		</div>
	);
};


export default PortfolioItem;
