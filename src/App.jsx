import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import NavBar from './components/Navbar';
import Themes from './components/Themes';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';

import './App.css';

const App = () => {
	const handleRouteChange = () => {
		window.scrollTo(0, 0);
	};
	return (
		<Router>
			<ScrollToTop />
			<NavBar />
			<Themes />
			<Routes onUpdate={handleRouteChange}>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Router>
	);
};

export default App;
