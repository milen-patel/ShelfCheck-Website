import React, {Component} from 'react';
import './styles/HomePageStyle.css'
import NavBar from './components/Navbar.js'
import HomePageContent from './components/HomePageContent.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<switch>
			<div className="general">
				<Route path="/" render={props =>
					<div>
						<NavBar />
						<HomePageContent />
					</div>
				} exact />
				<Route path="/test" component={NavBar, HomePageContent} />
			</div>
			</switch>
		)
	}

}

export default App
