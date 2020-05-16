import React from 'react';
import {Link} from 'react-router-dom';
import CartArt from "../include/ShoppingCart.png";
import WhiteLogo from "../include/shelfCheckWhiteLogo.png";
import '../styles/HomePageStyle.css';
import TeamPersonVisualizer from './TeamPersonVisualizer.js';

/* Responsible for rendering the view of the homepage */
function HomePage() {
		return (
			<div className="main">
				<div className="NavBar">
					<div className="t1">
						<img src={WhiteLogo} alt="WhiteLogo" className="WhiteLogo"/>
					</div>
					<div className="t0">
						<button type="button" className="ContactButton"> Contact Us</button>
					</div>
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
				<img src={CartArt} alt="CartArt" className="CartArt"/>
				<h1 className="SubHeaderText"> About Us </h1>
				<p className="companyExplanation">ShelfCheck is a novel data solutions company providing consumer-sourced reports of current store inventories. Inspired by the country-wide shortages of common household goods due to the the COVID-19 pandemic, our founders sought to develop a tool that could make one-stop shopping a reality.  </p>
				<h1 className="SubHeaderText"> Meet the Team </h1>
				<div className="team">
					<TeamPersonVisualizer name = "Anthony Guzzo" role = "Chief Design Officer, UX Specialist"/>
					<TeamPersonVisualizer name = "Rohit Jain" role = "Co-CBO, Website Design, Finances"/>
					<TeamPersonVisualizer name = "Viraj Shah" role = "Co-CBO, Legal Operations, Finances"/>
					<TeamPersonVisualizer name = "James Taylor" role = "Co-CTO, Head of App Platform Development"/>
					<TeamPersonVisualizer name = "Milen Patel" role = "Co-CTO, Head of Web Platform Development"/>
				</div>
			</div>
		)
}

export default HomePage;
