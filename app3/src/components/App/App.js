import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer/Footer";
import Company from "../Company/Company";
import Intro from "../Intro/Intro";
import Startups from "../Startups/Startups";
import "./App.scss";
import LetsChat from "../LetsChat/LetsChat";
import Milestones from "../Milestones/Milestones";

function App() {
	return (
		<Router>
			<div className="App">
				<Intro />
				<Milestones />
				<Startups />
				<Company />
				<LetsChat />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
