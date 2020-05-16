import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePageComponent.js';
import StoreSearcherComponent from './components/StoreSearcherComponent.js';
import PrivacyPolicy from './components/PrivacyPolicyRender.js';
import './styles/AppStyle.css';

class App extends Component {
	render() {
		return (
			<Switch>
			<div className="general">
				<Route path="/" render={props =>
					<div className="general">
						<HomePage />
					</div>
				} exact />
				<Route path="/search" render={props =>
					<div>
						<div className="general">
							<StoreSearcherComponent itemName="Bread"/>
						</div>
					</div>
				} />
				<Route path="/contact" render={props =>
					<div>
						<div className="general">
							<p> Coming </p>
						</div>
					</div>
				} />
				<Route path="/privacy-policy" render={props =>
					<div>
						<div className="general">
							<PrivacyPolicy />
						</div>
					</div>
				} />
			</div>
			</Switch>
		)
	}

}

export default App
