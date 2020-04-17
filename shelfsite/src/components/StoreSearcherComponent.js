import React, {Component} from 'react';
import StoreComponent from "./StoreComponents";
import "../styles/StoreComponentStyle.css";

class StoreSearcherComponent extends Component {
	constructor(props) {
		super();
		this.state = {
			todos: [],
			isLoading: false,
			queryItem: props.itemName,
			queryLat: props.lat,
			queryLon: props.lon
		}
		this.convertRawToElement = this.convertRawToElement.bind(this);
	}

	render() {
		if (this.state.isLoading) { return ( <div><p>loading...</p></div>); }
		const parsedData = Array.from(this.state.todos).map(this.convertRawToElement)
		return (
			<div className="StoreSearcher">
				{parsedData}
			</div>
		)
	}

	componentDidMount() {
		this.setState({isLoading:true})
		console.log("test");
		fetch('https://cors-anywhere.herokuapp.com/https://api.shelfcheck.io/dev/get-closest-stores-single-item', { 
			method: 'POST', 
			headers: new Headers({
				'x-api-key': 'H3T5GfHGhB6Ai1IZDYX708MvVsnpypnq5efMzdGl', 
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000',
				'Access-Control-Allow-Methods': 'POST',
				'Access-Control-Allow-Credential': 'true'
			}),
		 body: '{ "longitude":' + this.state.queryLat + ', "latitude": ' + this.state.queryLon  + ', "item_name": "' + this.state.queryItem + '" }' 
		})
			.then(response => response.json())
			.then(data => {
				this.setState({
					isLoading: false,
					todos: data,
				})
			});
	}

 	convertRawToElement(currentItem) {
	return (
		<StoreComponent name={currentItem.name} addy={currentItem.address} latitude={currentItem.coordinates[0]} longitude = {currentItem.coordinates[1]} quantity={currentItem.approximate_quantity} distance={currentItem.distance} />
	)

	}
}

export default StoreSearcherComponent;
