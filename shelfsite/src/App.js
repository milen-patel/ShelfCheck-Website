import React, {Component} from 'react';
import './styles/HomePageStyle.css'
import NavBar from './components/Navbar.js'
import HomePageContent from './components/HomePageContent.js'
class App extends Component {
	render() {
		return (
			<div className="general">
				<NavBar />
				<HomePageContent />
			</div>
		)
	}

}

export default App
