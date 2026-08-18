import { useTranslation } from 'react-i18next';
import type { Theme } from '../data';

type ThemeItemProps = Theme & {
	changeColor: (color: string) => void;
};

const ThemeItem = ({ color, name, img, changeColor }: ThemeItemProps) => {
	const { t } = useTranslation();

	return (
		<button
			className='theme__button'
			onClick={() => changeColor(color)}
			aria-label={`${t('style.color')}: ${name}`}
		>
			<img src={img} alt='' className='theme__img' />
		</button>
	);
};

export default ThemeItem;
