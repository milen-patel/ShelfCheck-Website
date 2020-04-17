import React, {Component} from 'react';
import '../styles/NavbarStyle.css'

class NavBar extends Component {
	constructor(props) {
		super();
		this.state = {}
	}

	render() {
		return (
			<div className="NavPrimary">
				<div className="buttonChoice"> <button type="button" className="buttonFormat"> About </button> </div>
				<div className="buttonChoice"> <button type="button" className="buttonFormat"> FAQ 	</button>		</div>
				<div className="buttonChoice"> <button type="button" className="buttonFormat"> Contact Us </button>	</div>
				<div className="buttonChoice"> <button type="button" className="buttonFormat"> Contribute </button>	</div>
			</div>
		)
	}

	}

export default NavBar;
