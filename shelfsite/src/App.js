import React, {Component} from 'react';
import StoreSearcherComponent from './components/StoreSearcherComponent.js' 
import './styles/HomePageStyle.css'
import Logo from "./include/shelfCheckLogoTransparent.png"

class App extends Component {
	render() {
		return (
			<div className="general">
				<img src={Logo} alt="Logo" className="Logo"/>
				<p> Welcome to shelfCheck! </p>
			    <StoreSearcherComponent itemName="Bread" lat="35.82" lon="-78.77"/>
			</div>
		)
	}

}

export default App
