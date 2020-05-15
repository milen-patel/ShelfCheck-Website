import React, {Component} from 'react';
import '../styles/NavbarStyle.css'
import CartArt from "../include/ShoppingCart.png"
import {Link} from 'react-router-dom'
class NavBar extends Component {
	constructor(props) {
		super();
		this.state = {}
	}

	render() {
		return (
			<div className="NavPrimary">
				<div className="DivLogo">
					<p> ShelfCheck </p>
				</div>
				<div className="InfoText">
					<h1 className="HeaderText"> Know What's In Store </h1>
					<h2 className="SecondaryText"> Create A Shopping List to Get Started </h2>
				</div>
				<div className="ButtonDiv">
				<Link to="/search">
					<button type="button" className="TryButton">Create a List</button>
				</Link>
				</div>
				<img src={CartArt} alt="CartArt" className="align-self"/>
			</div>
		)
	}
}
export default NavBar;
