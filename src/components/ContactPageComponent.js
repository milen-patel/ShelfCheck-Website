import React from 'react';
import "../styles/ContactPageStyle.css";
import {Link} from 'react-router-dom';
import Logo from "../include/shelfCheckWhiteLogo.png"


function ContactPageComponent(props) {
		return (
			<div className="contactPageContainer">
				<img src={Logo} alt="Logo" className="Logo"/>
				<p> We love to hear user input and kindly welcome any suggestions, complaints, or requests that you might have. Reach out to us using the email below! </p>
				<div>
				<form className="contactForm"action="mailto:you@yourwebsite.com">
					<label for="name"> Name </label>
					<input type="text" id="name" name="name" placeholder="" className="formTextBox"/>
					<label for="email"> Email </label>
					<input type="text" id="email" name="email" placeholder="" className="formTextBox"/>
					<label for="message"> Message </label>
					<textarea rows="4" cols="50" name="comment" form="usrform" className="formMessageBox">     </textarea>
					<input type="submit" value="Submit" className="submitButton"/>
				</form>
				<Link to="/">
					<button type="button" className="BackButton">Back Home</button>
				</Link>
				</div>
			</div>
		)
}

export default ContactPageComponent;

