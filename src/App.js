import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { BrowserView, MobileView } from "react-device-detect"; /* https://www.npmjs.com/package/react-device-detect */
import HomePage from './components/HomePageComponent.js';
import PolicyComponent from './components/PolicyComponent.js';
import TermsComponent from './components/TermsComponent.js';
import ContactPageComponent from './components/ContactPageComponent.js';
import StoreSearcherComponent from './components/StoreSearcherComponent.js';
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
						<MobileView>
							<div className="general">
								<StoreSearcherComponent itemName="Bread"/>
							</div>
						</MobileView>
						<BrowserView>
							<div className="generalSearchComputer">
								<StoreSearcherComponent itemName="Bread"/>
							</div>
						</BrowserView>
					</div>
				} />
				<Route path="/contact" render={props =>
					<div className="general">
						<ContactPageComponent />
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
