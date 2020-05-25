import React from 'react';
import {Link} from 'react-router-dom';
import WhiteLogo from "../include/shelfCheckWhiteLogo.png";
import PlayBadge from "../include/PlayBadge.png";
import AppleBadge from "../components/AppleBadge";
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
							<a href="mailto:contact.shelfcheck@gmail.com">
								<button type="button" className="ContactButton"> Contact Us</button>
							</a>
							<Link to="/coffee">
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
					<h2 className="SecondaryText"> Create A Shopping List to Test Us Out </h2>
				</div>
				<div className="ButtonDiv">
				<Link to="/search">
					<button type="button" className="TryButton">Create a List</button>
				</Link>
				<div className="AppLinksBar">
					<a href="https://apps.apple.com/us/app/shelfcheck-shop-smarter/id1514416220">
						<AppleBadge />
					</a>
					<img src={PlayBadge} alt="Google Play Badge" className="PlayBadge" />
