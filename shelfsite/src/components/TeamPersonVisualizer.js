import React from 'react';
import "../styles/HomePageStyle.css";
import GuzzoPic from "../include/AnthonyGuzzo.jpeg";
import JamesPic from "../include/JamesTaylor.jpeg";
import VirajPic from "../include/VirajShah.jpeg";
import RJPic from "../include/RohitJain.jpeg";
import MilenPic from "../include/MilenPatel.jpeg";

/* TeampersonVisualizer is responsible for creating each member on the Meet the Team List
 * name: Name of the team member; must correspond to one of the names for which an image exists
 * role: Description of the team member with formal position */

function TeamPersonVisualizer(props) {
		var imgfile;
		/* Determine from the name of the individual, which image should be used */
		if (props.name === "Anthony Guzzo") {
			imgfile = GuzzoPic;
		} else if (props.name === "James Taylor") {
			imgfile = JamesPic;
		} else if (props.name === "Viraj Shah") {
			imgfile = VirajPic;
		} else if (props.name === "Rohit Jain") {
			imgfile = RJPic;
		} else if (props.name === "Milen Patel") {
			imgfile = MilenPic;
		}

		return (
			<div className="teamListEntity">
				<img src={imgfile} alt={props.name} className="HeadShotPic" />
				<p className="TeamListEntityName"> {props.name} </p>
				<p className="TeamListEntityRole"> {props.role} </p>
			</div>
		)
}
export default TeamPersonVisualizer;
