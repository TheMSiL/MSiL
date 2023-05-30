import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const AnimatedText = ({ text }) => {
	const [animatedText, setAnimatedText] = useState('');

	useEffect(() => {
		let animationTimeout;

		const animateText = currentIndex => {
			if (currentIndex >= text.length) {
				return;
			}

			animationTimeout = setTimeout(() => {
				setAnimatedText(prevText => prevText + text[currentIndex]);
				animateText(currentIndex + 1);
			}, 100);
		};

		setAnimatedText('');

		animateText(0);

		return () => {
			clearTimeout(animationTimeout);
		};
	}, [text]);

	return <>{animatedText}</>;
};

AnimatedText.propTypes = {
	text: PropTypes.string.isRequired,
};

export default AnimatedText;
