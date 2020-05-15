import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './styles/AppStyle.css'
import NavBar from './components/Navbar.js'
import HomePageContent from './components/HomePageContent.js'
import StoreSearcherComponent from './components/StoreSearcherComponent.js'

class App extends Component {
	render() {
		return (
			<Switch>
			<div className="general">
				<Route path="/" render={props =>
					<div className="general">
						<NavBar />
						<HomePageContent />
					</div>
				} exact />
				<Route path="/search" render={props =>
					<div>
						<div className="general">
							<StoreSearcherComponent itemName="Bread"/>
						</div>
					</div>
				} exact />
			</div>
			</Switch>
		)
	}

}

export default App
