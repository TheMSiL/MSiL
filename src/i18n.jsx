import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	ua: {
		translation: {
			style: 'Перемикач стилів',
			'home.title-span': 'Я Максим Сілка.',
			'home.title': 'Фронтенд розробник',
			'home.description':
				'Я фронтенд React-розробник, знаходжусь в Києві, Україна. Маю сильну пристрасть до створення цікавих та інтерактивних користувацьких інтерфейсів, активно шукаю можливості застосувати свої навички та вивчити нові технології у високопрофесійній команді з цікавими задачами та амбітними проектами.',
			'home.button': 'Більше про мене',
			'about.title-span': 'Мене',
			'about.title': 'Про',
			'personal.title': 'Персональна інформація',
			'personal.info-title__1': 'Ім’я : ',
			'personal.info-description__1': 'Максим',
			'personal.info-title__2': 'Прізвище : ',
			'personal.info-description__2': 'Сілка',
			'personal.info-title__3': 'Вік : ',
			'personal.info-description__3': '25 років',
			'personal.info-title__4': 'Національність : ',
			'personal.info-description__4': 'Українець',
			'personal.info-title__5': 'Пошта : ',
			'personal.info-description__5': 'msil.developer@gmail.com',
			'personal.info-title__6': 'Адреса : ',
			'personal.info-description__6': 'Україна, Київ',
			'personal.info-title__7': 'Телефон : ',
			'personal.info-description__7': '+380981093352',
			'personal.info-title__8': 'Telegram : ',
			'personal.info-description__8': 'TheMSiL',
			'personal.info-title__9': 'Професія: ',
			'personal.info-description__9': 'Фронтенд Розробник',
			'personal.info-title__10': 'Мови : ',
			'personal.info-description__10': 'Українська, Англійська',
			'personal.button': 'Завантажити резюме',
			'hobbies.title': 'Захоплення',
			'skills.title': 'Мої Навички',
			'education.title': 'Освіта',
			'education.prof': 'Фронтенд розробник',
			'education.desc':
				'Вивчав HTML, CSS, JavaScript та React. Майстерно оволодів Webpack, Git, Figma та Visual Studio Code.',
			'education.button': 'Завантажити сертифікат',
			'portfolio.title': 'Мої',
			'portfolio.title-span': 'Проекти',
			'contact.title': 'Встановити',
			'contact.title-span': 'Зв’язок',
			'contact.subtitle': 'Очікую вашого повідомлення',
			'contact.desc':
				'Будь ласка, не соромтеся звертатися до мене в будь-який час. Я буду радий стати частиною вашої команди.',
			'contact.mail': 'Написати мені',
			'contact.tel': 'Подзвонити мені',
			'contact.button': 'Відправити',
			'coctact.submmitted': 'Дякую, що обрали мене частиною своєї команди',
			'name.placeholder': 'Ваше ім’я',
			'email.placeholder': 'Ваша пошта',
			'textarea.placeholder': 'Ваше повідомлення',
			'portfolio.item1-title-1': 'Проект : ',
			'portfolio.item1-desc': 'Лендінг',
			'portfolio.item-title-2': 'Технології : ',
			'portfolio.item-title-3': 'Прев’ю : ',
			'portfolio.item-title-4': 'Код : ',
			'portfolio.item2-desc': 'Паралакс ефект',
			'portfolio.item3-desc': 'Гра',
			'portfolio.item4-desc': 'Трекер завдань',
			'portfolio.item5-desc': 'React додаток',
			'portfolio.item6-desc': 'Генератор кредиток',
			'portfolio.item7-desc': 'Лендінг',
			'portfolio.item8-desc': 'Лендінг',
			'portfolio.item9-desc': 'Генератор кольорів',
			'portfolio.item10-desc': 'Лендінг + кабінет',
		},
	},
	en: {
		translation: {
			style: 'Style Switcher',
			'home.title-span': 'I’m Max Silka.',
			'home.title': 'Front-end Developer',
			'home.description':
				'I’m a front-end React developer based in Kyiv, Ukraine. With a strong passion for creating engaging and interactive user interfaces, I am actively looking for opportunities to apply my skills and learn new technologies in a dynamic and collaborative team.',
			'home.button': 'More About Me',
			'about.title-span': 'Me',
			'about.title': 'About',
			'personal.title': 'Personal Infos',
			'personal.info-title__1': 'First Name : ',
			'personal.info-description__1': 'Max',
			'personal.info-title__2': 'Last Name : ',
			'personal.info-description__2': 'Silka',
			'personal.info-title__3': 'Age : ',
			'personal.info-description__3': '25 Years',
			'personal.info-title__4': 'Nationality : ',
			'personal.info-description__4': 'Ukrainian',
			'personal.info-title__5': 'Email : ',
			'personal.info-description__5': 'msil.developer@gmail.com',
			'personal.info-title__6': 'Address : ',
			'personal.info-description__6': 'Ukraine, Kyiv',
			'personal.info-title__7': 'Phone : ',
			'personal.info-description__7': '+380981093352',
			'personal.info-title__8': 'Telegram : ',
			'personal.info-description__8': 'TheMSiL',
			'personal.info-title__9': 'Profession : ',
			'personal.info-description__9': 'Front-end Developer',
			'personal.info-title__10': 'Languages : ',
			'personal.info-description__10': 'Ukrainian, English',
			'personal.button': 'Download CV',
			'hobbies.title': 'Hobbies',
			'skills.title': 'My Skills',
			'education.title': 'Education',
			'education.prof': 'Front-end developer',
			'education.desc':
				'Learned HTML, CSS, JavaScript and React. Mastered tools such as Webpack, Git, Figma and Visual Studio Code.',
			'education.button': 'Download certificate',
			'portfolio.title': 'My',
			'portfolio.title-span': 'Portfolio',
			'contact.title': 'Get In',
			'contact.title-span': 'Touch',
			'contact.subtitle': 'Waiting your message!',
			'contact.desc':
				'Please feel free to contact me at any time and I would be delighted to be part of your team.',
			'contact.mail': 'Mail me',
			'contact.tel': 'Call me',
			'contact.button': 'Send Message',
			'coctact.submmitted':
				'Thank you for considering me as part of your team.',
			'name.placeholder': 'Your Name',
			'email.placeholder': 'Your Email',
			'textarea.placeholder': 'Your Message',
			'portfolio.item1-title-1': 'Project : ',
			'portfolio.item1-desc': 'Langing page',
			'portfolio.item-title-2': 'Technology : ',
			'portfolio.item-title-3': 'Preview : ',
			'portfolio.item-title-4': 'Code : ',
			'portfolio.item2-desc': 'Parallax effect',
			'portfolio.item3-desc': 'Game',
			'portfolio.item4-desc': 'Task tracker',
			'portfolio.item5-desc': 'React App',
			'portfolio.item6-desc': 'Credit cards generator',
			'portfolio.item7-desc': 'Langing page',
			'portfolio.item8-desc': 'Langing page',
			'portfolio.item9-desc': 'Random colour generator',
			'portfolio.item10-desc': 'Langing page + cabinet',
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
