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
				<div className="buttonChoice"> <p> About </p>		</div>
				<div className="buttonChoice"> <p> FAQ </p>			</div>
				<div className="buttonChoice"> <p> Contact Us </p>	</div>
				<div className="buttonChoice"> <p> Contribute </p>	</div>
			</div>
		)
	}

	}

export default NavBar;
