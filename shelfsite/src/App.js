import React, {Component} from 'react';
import StoreSearcherComponent from './components/StoreSearcherComponent.js' 
import './styles/HomePageStyle.css'
import Logo from "./include/shelfCheckLogoTransparent.png"
import NavBar from './components/Navbar.js'
import Footer from './components/Footer.js'

class App extends Component {
	render() {
		return (
			<div className="general">
				<NavBar />
				<img src={Logo} alt="Logo" className="Logo"/>
			    <StoreSearcherComponent itemName="Bread" lat="35.82" lon="-78.77"/>
				<Footer />
			</div>
		)
	}

}

export default App
