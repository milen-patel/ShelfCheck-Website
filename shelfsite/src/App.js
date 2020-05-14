import React, {Component} from 'react';
import './styles/HomePageStyle.css'
import NavBar from './components/Navbar.js'
import HomePageContent from './components/HomePageContent.js'
import {Route, Switch} from 'react-router-dom';
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
					<div className="general">
						<StoreSearcherComponent />
					</div>
				} exact />
			</div>
			</Switch>
		)
	}

}

export default App
