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
			portfolio: [
				{
					title: 'Обробка фото',
					details: [
						{
							title: 'Проект : ',
							desc: 'Photo',
						},
						{
							title: 'Клієнт : ',
							desc: 'Dribble',
						},
						{
							title: 'Технології : ',
							desc: 'Adobe Photoshop',
						},
						{
							title: 'Перегляд : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Дизайн веб-сайту',
					details: [
						{
							title: 'Проект : ',
							desc: 'Website',
						},
						{
							title: 'Клієнт : ',
							desc: 'Dribble',
						},
						{
							title: 'Технології : ',
							desc: 'React JS',
						},
						{
							title: 'Перегляд : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Обробка відео',
					details: [
						{
							title: 'Проект : ',
							desc: 'Video',
						},
						{
							title: 'Клієнт : ',
							desc: 'Dribble',
						},
						{
							title: 'Технології : ',
							desc: 'Adobe Premium',
						},
						{
							title: 'Перегляд : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Обробка відео',
					details: [
						{
							title: 'Проект : ',
							desc: 'Video',
						},
						{
							title: 'Клієнт : ',
							desc: 'Dribble',
						},
						{
							title: 'Технології : ',
							desc: 'Adobe Premium',
						},
						{
							title: 'Перегляд : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Односторінковий сайт',
					details: [
						{
							title: 'Проект : ',
							desc: 'Website',
						},
						{
							title: 'Клієнт : ',
							desc: 'Dribble',
						},
						{
							title: 'Технології : ',
							desc: 'React JS, Node JS',
						},
						{
							title: 'Перегляд : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Обробка фото',
					details: [
						{
							title: 'Проект : ',
							desc: 'Photo',
						},
						{
							title: 'Клієнт : ',
							desc: 'Dribble',
						},
						{
							title: 'Технології : ',
							desc: 'Adobe Photoshop',
						},
						{
							title: 'Перегляд : ',
							desc: 'www.dibble.com',
						},
					],
				},
			],
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
			portfolio: [
				{
					title: 'Photo Editing',
					details: [
						{
							title: 'Project : ',
							desc: 'Photo',
						},
						{
							title: 'Client : ',
							desc: 'Dribble',
						},
						{
							title: 'Technology : ',
							desc: 'Adobe Photoshop',
						},
						{
							title: 'Preview : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Website Design',
					details: [
						{
							title: 'Project : ',
							desc: 'Website',
						},
						{
							title: 'Client : ',
							desc: 'Dribble',
						},
						{
							title: 'Technology : ',
							desc: 'React JS',
						},
						{
							title: 'Preview : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Video Editing',
					details: [
						{
							title: 'Project : ',
							desc: 'Video',
						},
						{
							title: 'Client : ',
							desc: 'Dribble',
						},
						{
							title: 'Technology : ',
							desc: 'Adobe Premium',
						},
						{
							title: 'Preview : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Video Editing',
					details: [
						{
							title: 'Project : ',
							desc: 'Video',
						},
						{
							title: 'Client : ',
							desc: 'Dribble',
						},
						{
							title: 'Technology : ',
							desc: 'Adobe Premium',
						},
						{
							title: 'Preview : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Landing Page',
					details: [
						{
							title: 'Project : ',
							desc: 'Website',
						},
						{
							title: 'Client : ',
							desc: 'Dribble',
						},
						{
							title: 'Technology : ',
							desc: 'React JS, Node JS',
						},
						{
							title: 'Preview : ',
							desc: 'www.dribble.com',
						},
					],
				},

				{
					title: 'Photo Editing',
					details: [
						{
							title: 'Project : ',
							desc: 'Photo',
						},
						{
							title: 'Client : ',
							desc: 'Dribble',
						},
						{
							title: 'Technology : ',
							desc: 'Adobe Photoshop',
						},
						{
							title: 'Preview : ',
							desc: 'www.dibble.com',
						},
					],
				},
			],
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
