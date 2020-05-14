import React, {Component} from 'react';
import '../styles/HomePageContentStyle.css'
import TeamPersonVisualizer from './TeamPersonVisualizer.js'
class HomePageContent extends Component {
	constructor(props) {
		super();
		this.state = {}
	}

	render() {
		return (
			<div className="main">
				<h1> What We Do </h1>
				<p>ShelfCheck is a novel data solutions company providing consumer-sourced reports of current store inventories. Inspired by the country-wide shortages of common household goods due to the the COVID-19 pandemic, our founders sought to develop a tool that could make one-stop shopping a reality.  </p>
				<h1> Meet the Team </h1>


			<div className="team">
				<TeamPersonVisualizer name = "Anthony Guzzo" role = "Chief Design Officer, UX Specialist" imgloc="../include/AnthonyGuzzo.jpeg"/>
				<TeamPersonVisualizer name = "Rohit Jain" role = "Co-CBO, Website Design, Finances" imgloc="../include/RohitJain.jpeg"/>
				<TeamPersonVisualizer name = "Viraj Shah" role = "Co-CBO, Legal Operations, Finances" imgloc="../include/VirajShah.jpeg"/>
				<TeamPersonVisualizer name = "James Taylor" role = "Co-CTO, Head of App Platform Development" imgloc="../include/JamesTaylor.jpeg"/>
				<TeamPersonVisualizer name = "Milen Patel" role = "Co-CTO, Head of Web Platform Development" imgloc="../include/MilenPatel.jpeg"/>
			</div>

			</div>
		)
	}
	}
export default HomePageContent;
