import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Company from '../Company/Company';
import Home from '../Home/Home';
import Startups from '../Startups/Startups';
import './App.scss';
import LetsChat from '../LetsChat/LetsChat';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Home />
				<Company />
				<Startups />
				<LetsChat />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
