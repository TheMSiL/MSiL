/* eslint-disable react/prop-types */
import parse from 'html-react-parser';
import { useState } from 'react';
import Close from '../assets/close.svg';

const PortfolioItem = ({ img, title, details, modalImg }) => {
	const [modal, setModal] = useState(false);
	const [imgLoaded, setImgLoaded] = useState(false);
	const [modalImgLoaded, setModalImgLoaded] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
		if (!modal) setModalImgLoaded(false);
	};

	return (
		<div className='portfolio__item'>
			<div style={{ position: 'relative' }}>
				{!imgLoaded && (
					<div className='img-loader'>
						<span className='loader-spinner'></span>
					</div>
				)}
				<img
					src={img}
					alt=''
					className='portfolio__img'
					style={imgLoaded ? {} : { visibility: 'hidden' }}
					onLoad={() => setImgLoaded(true)}
				/>
			</div>

			<div className='portfolio__hover' onClick={toggleModal}>
				<h3 className='portfolio__title'>{title}</h3>
			</div>

			{modal && (
				<div className='portfolio__modal'>
					<div className='portfolio__modal-content'>
						<img
							src={Close}
							alt=''
							className='modal__close'
							onClick={toggleModal}
						/>

						<h3 className='modal__title'>{title}</h3>
						<ul className='modal__list grid'>
							{details.map(({ icon, title, desc }, index) => {
								return (
									<li className='modal__item' key={index}>
										<span className='item__icon'>{icon}</span>
										<div>
											<span className='item__title'>{title}</span>
											<span className='item__details'>{parse(desc)}</span>
										</div>
									</li>
								);
							})}
						</ul>

						<div style={{ position: 'relative' }}>
							{!modalImgLoaded && (
								<div className='img-loader'>
									<span className='loader-spinner'></span>
								</div>
							)}
							<img
								src={modalImg}
								alt=''
								className='modal__img'
								style={modalImgLoaded ? {} : { visibility: 'hidden' }}
								onLoad={() => setModalImgLoaded(true)}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PortfolioItem;
