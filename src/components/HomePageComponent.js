import React from 'react';
import {Link} from 'react-router-dom';
import WhiteLogo from "../include/shelfCheckWhiteLogo.png";
import PlayBadge from "../include/PlayBadge.png";
import AppleBadge from "../components/AppleBadge";
import '../styles/HomePageStyle.css';
import TeamPersonVisualizer from './TeamPersonVisualizer.js';
import { BrowserView, MobileView } from "react-device-detect"; /* https://www.npmjs.com/package/react-device-detect */
import FacebookLogo from '../include/Facebook.png';
import InstaLogo from '../include/Instagram.png';
import LinkedLogo from '../include/Linkedin.png';

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
							<a href="mailto:contact.shelfcheck@gmail.com">
								<button type="button" className="ContactButton"> Contact Us</button>
							</a>
							<Link to="/coffee">
								<button type="button" className="ContactButton"> Buy A Coffee</button>
							</Link>
						</div>
					</div>
				<div className="InfoText">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/Z08koGatwLw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="promoVid"></iframe>
					<h1 className="HeaderText"> Know What's In Store </h1>
					<h3 className="SecondaryText"> *Starting only in Raleigh/Cary </h3>
				</div>
				</BrowserView>
				<MobileView>
					<div className="MobileNavBar">
							<img src={WhiteLogo} alt="WhiteLogo" className="WhiteLogo"/>
							<hr width="40%"/>
					</div>
					<div className="InfoText">
						<h1 className="MobileHeaderText"> Know What's In Store </h1>
						<h2 className="MobileSecondaryText"> *Starting only in Raleigh/Cary </h2>
					</div>
				</MobileView>
				<div className="ButtonDiv">
				<Link to="/search">
					<button type="button" className="TryButton">Try it Out</button>
				</Link>
				<div className="AppLinksBar">
					<a href="https://apps.apple.com/us/app/shelfcheck-shop-smarter/id1514416220">
						<AppleBadge />
					</a>
					<a href="https://play.google.com/store/apps/details?id=com.shelfcheck.shelfcheck">
						<img src={PlayBadge} alt="Google Play Badge" className="PlayBadge" />
					</a>
				</div>
				</div>
					<hr width="30%" color="white" />


				<h1 className="SubHeaderText"> About Us </h1>
				<p className="companyExplanation">shelfCheck is a novel data solutions company providing consumer-sourced reports of current store inventories. Inspired by the country-wide shortages of common household goods due to natural disasters and pandemics, our founders sought to develop a tool that could make one-stop shopping a reality.  </p>
				<h1 className="SubHeaderText"> Meet the Team </h1>
				<div className="team">
					<TeamPersonVisualizer name = "Anthony Guzzo" role = "Design, Product #Rice"/>
					<TeamPersonVisualizer name = "Rohit Jain" role = "Growth, Product #Duke"/>
					<TeamPersonVisualizer name = "Viraj Shah" role = "Growth, Business #UNC"/>
					<TeamPersonVisualizer name = "James Taylor" role = "Engineer, Backend and Mobile #Duke"/>
					<TeamPersonVisualizer name = "Milen Patel" role = "Engineer, Web-Developement #UNC"/>
				</div>
				<BrowserView>
						<a href="https://www.instagram.com/shelfcheck.io/"><img src={InstaLogo} alt="IGLogo" className="SocialLogo"/></a>
						<a href="https://www.facebook.com/shelfCheck.io/"><img src={FacebookLogo} alt="FBLogo" className="SocialLogo"/></a>
						<a href="https://www.linkedin.com/company/shelfcheck/"><img src={LinkedLogo} alt="LILogo" className="SocialLogoLI"/></a>
						<hr width="15%" color="#333333" />
					<div className="footer">
						<Link to="/privacy" style={{textDecoration:'none'}}>
							<p className="policytext">Privacy Policy</p>
						</Link>
						<Link to="/terms" style={{textDecoration:'none'}}>
							<p className="policytext">Terms and Conditions</p>
						</Link>
					</div>
				</BrowserView>
				<MobileView>
					<hr width="40%" color="#333333" />
					<a href="mailto:contact.shelfcheck@gmail.com">
						<button type="button" className="MobileContactButton"> Contact Us</button>
					</a>
					<Link to="/coffee">
						<button type="button" className="MobileContactButton"> Buy A Coffee</button>
					</Link>
					<div className="mobilefooter">
						<Link to="/privacy" style={{textDecoration:'none'}}>
							<p className="policytext">Privacy Policy</p>
						</Link>
						<Link to="/terms" style={{textDecoration:'none'}}>
							<p className="policytext">Terms and Conditions</p>
						</Link>
					</div>
				</MobileView>
			</div>
		)
}

export default HomePage;
