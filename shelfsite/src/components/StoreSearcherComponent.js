import React, {Component} from 'react';
import StoreComponent from "./StoreComponents";

class StoreSearcherComponent extends Component {
	constructor() {
		super();
		this.state = {
			todos: [],
			isLoading: false,
		}
		this.convertRawToElement = this.convertRawToElement.bind(this);
	}

	render() {
		if (this.state.isLoading) { return ( <div><p>loading...</p></div>); }
		const parsedData = Array.from(this.state.todos).map(this.convertRawToElement)
		return (
			<div className="todoStyle">
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
		 body: '{ "longitude": -78.77, "latitude": 35.82, "item_name": "Bread" }' 
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
