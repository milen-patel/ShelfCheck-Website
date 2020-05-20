import React from 'react';
import {Link} from 'react-router-dom';
import CartArt from "../include/ShoppingCart.png";
import WhiteLogo from "../include/shelfCheckWhiteLogo.png";
import '../styles/HomePageStyle.css';
import TeamPersonVisualizer from './TeamPersonVisualizer.js';
import { BrowserView, MobileView } from "react-device-detect"; /* https://www.npmjs.com/package/react-device-detect */

/* Responsible for rendering the view of the homepage
 * uses react-device-detect to provide a more compact 
 * layout for mobile devices
 */
function HomePage() {
		return (
			<div className="main">
				<BrowserView>
					<div className="NavBar">
						<div className="t1">
							<img src={WhiteLogo} alt="WhiteLogo" className="WhiteLogo"/>
						</div>
						<div className="t0">
							<Link to="/contact">
								<button type="button" className="ContactButton"> Contact Us</button>
							</Link>
							<Link to="/coffee" target="_blank">
								<button type="button" className="ContactButton"> Buy A Coffee</button>
							</Link>
						</div>
					</div>
				</BrowserView>
				<MobileView>
					<div className="MobileNavBar">
							<img src={WhiteLogo} alt="WhiteLogo" className="WhiteLogo"/>
							<hr width="40%"/>
					</div>
				</MobileView>
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
				<BrowserView>
					<div className="footer">
						<Link to="/privacy">
							<p className="policytext">Privacy Policy</p>
						</Link>
						<Link to="/terms">
							<p className="policytext">Terms and Conditions</p>
						</Link>
					</div>
				</BrowserView>
				<MobileView>
					<hr width="40%" color="#333333" />
					<Link to="/contact">
						<button type="button" className="MobileContactButton"> Contact Us</button>
					</Link>
					<div className="mobilefooter">
						<Link to="/privacy">
							<p className="policytext">Privacy Policy</p>
						</Link>
						<Link to="/terms">
							<p className="policytext">Terms and Conditions</p>
						</Link>
					</div>
				</MobileView>
			</div>
		)
}

export default HomePage;
