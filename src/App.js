import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePageComponent.js';
import StoreSearcherComponent from './components/StoreSearcherComponent.js';
import './styles/AppStyle.css';
import PolicyComponent from './components/PolicyComponent.js';
import TermsComponent from './components/TermsComponent.js';


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
				<Route path="/privacy" render={props =>
					<div>
						<div className="generalterms">
							<PolicyComponent />
						</div>
					</div>
				} />
				<Route path="/terms" render={props =>
					<div>
						<div className="generalterms">
							<TermsComponent />
						</div>
					</div>
				} />
				<Route path="/coffee" render={props =>
					<div>
						<meta http-equiv="refresh" content="0; url=https://ko-fi.com/shelfcheck" />
					</div>
				} />
			</div>
			</Switch>
		)
	}

}

export default App
