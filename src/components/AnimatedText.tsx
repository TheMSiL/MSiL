import { useEffect, useState } from 'react';

type AnimatedTextProps = {
	text: string;
};

/** Types the text out one character at a time; remount (via key) to replay. */
const AnimatedText = ({ text }: AnimatedTextProps) => {
	const [visible, setVisible] = useState(0);

	useEffect(() => {
		if (visible >= text.length) return;

		const timeout = setTimeout(() => setVisible(current => current + 1), 100);

		return () => clearTimeout(timeout);
	}, [visible, text.length]);

	return <>{text.slice(0, visible)}</>;
};

export default AnimatedText;
