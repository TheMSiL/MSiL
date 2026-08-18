import { lazy, Suspense } from 'react';
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import NavBar from './components/Navbar';
import Themes from './components/Themes';
import Home from './pages/home/Home';

import './App.css';

// Split off the routes that carry their own weight (Swiper, project images).
const About = lazy(() => import('./pages/about/About'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'));
const Reviews = lazy(() => import('./pages/reviews/Reviews'));

const RouteFallback = () => (
	<div className='route-loader'>
		<span className='loader-spinner'></span>
	</div>
);

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<NavBar />
			<Themes />
			<Suspense fallback={<RouteFallback />}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/reviews' element={<Reviews />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
