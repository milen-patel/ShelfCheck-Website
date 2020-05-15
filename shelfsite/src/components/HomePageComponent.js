import React from 'react';
import {Link} from 'react-router-dom';
import CartArt from "../include/ShoppingCart.png";
import '../styles/HomePageStyle.css';
import TeamPersonVisualizer from './TeamPersonVisualizer.js';

function HomePage() {
		return (
			<div>
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
			<div className="main">
				<h1> What We Do </h1>
				<p className="companyExplanation">ShelfCheck is a novel data solutions company providing consumer-sourced reports of current store inventories. Inspired by the country-wide shortages of common household goods due to the the COVID-19 pandemic, our founders sought to develop a tool that could make one-stop shopping a reality.  </p>
				<h1> Meet the Team </h1>
				<div className="team">
					<TeamPersonVisualizer name = "Anthony Guzzo" role = "Chief Design Officer, UX Specialist"/>
					<TeamPersonVisualizer name = "Rohit Jain" role = "Co-CBO, Website Design, Finances"/>
					<TeamPersonVisualizer name = "Viraj Shah" role = "Co-CBO, Legal Operations, Finances"/>
					<TeamPersonVisualizer name = "James Taylor" role = "Co-CTO, Head of App Platform Development"/>
					<TeamPersonVisualizer name = "Milen Patel" role = "Co-CTO, Head of Web Platform Development"/>
				</div>
			</div>
			</div>
		)
}

export default HomePage;
