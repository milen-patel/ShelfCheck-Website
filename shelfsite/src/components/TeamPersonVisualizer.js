import React, {Component} from 'react';
import "../styles/HomePageContentStyle.css";
import GuzzoPic from "../include/AnthonyGuzzo.jpeg";
import JamesPic from "../include/JamesTaylor.jpeg";
import VirajPic from "../include/VirajShah.jpeg";
import RJPic from "../include/RohitJain.jpeg";
import MilenPic from "../include/MilenPatel.jpeg";

class TeamPersonVisualizer extends Component {
	constructor(props) {
		super();
		this.state = {}
	}

	render() {
		var imgfile;
		
		if (this.props.name === "Anthony Guzzo") {
			imgfile = GuzzoPic;
		} else if (this.props.name === "James Taylor") {
			imgfile = JamesPic;
		} else if (this.props.name === "Viraj Shah") {
			imgfile = VirajPic;
		} else if (this.props.name === "Rohit Jain") {
			imgfile = RJPic;
		} else if (this.props.name === "Milen Patel") {
			imgfile = MilenPic;
		}

		return (
			<div className="teamListEntity">
				<img src={imgfile} alt={this.props.name} className="HeadShotPic" />
				<p className="TeamListEntityName"> {this.props.name} </p>
				<p className="TeamListEntityRole"> {this.props.role} </p>

			</div>
		)
	}
	}
export default TeamPersonVisualizer;
