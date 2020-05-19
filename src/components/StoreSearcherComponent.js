import React, {Component} from 'react';
import StoreComponent from "./StoreComponents";
import AddressSearchComponent from "./AddressSearchComponent";
import "../styles/StoreComponentStyle.css";
import Logo from "../include/shelfCheckWhiteLogo.png"
import {Link} from 'react-router-dom';
import keys from '../keys.js';
import ItemChooser from './ItemChooser.js';

class StoreSearcherComponent extends Component {
	constructor(props) {
		super();
		this.state = {
			todos: [],
			isLoading: false,
			queryItem: props.itemName,
			queryLat: props.lat,
			queryLon: props.lon,
		}
		this.convertRawToElement = this.convertRawToElement.bind(this);
		this.addressChangeRequested = this.addressChangeRequested.bind(this);
		this.conductSearch = this.conductSearch.bind(this);
		this.itemListChangeRequested = this.itemListChangeRequested.bind(this);
	}

	render() {

		if (this.state.isLoading) { 
			return (
				<div className="StoreSearcher">
					<img src={Logo} alt="Logo" className="Logo"/>
					<ItemChooser notifyFunction={this.itemListChangeRequested}/>
					<AddressSearchComponent onClick={this.addressChangeRequested}/>
					<p>Loading...</p>
					<Link to="/">
						<button type="button" className="BackButton">Back</button>
					</Link>
				</div>
			);
		}

		if ((this.state.todos  === "none") || (this.state.todos.length  === 0) || (this.state.todos.includes("no stores nearby"))) {
			return (
				<div className="StoreSearcher">
					<img src={Logo} alt="Logo" className="Logo"/>
					<ItemChooser notifyFunction={this.itemListChangeRequested}/>
					<AddressSearchComponent onClick={this.addressChangeRequested} />
					<p> No Results Found </p>	
					<Link to="/">
						<button type="button" className="BackButton">Back</button>
					</Link>
				</div>
			)
		}

		const parsedData = Array.from(this.state.todos).map(this.convertRawToElement)
		return (
			<div className="StoreSearcher">
				<img src={Logo} alt="Logo" className="Logo"/>
					<ItemChooser notifyFunction={this.itemListChangeRequested}/>
				<AddressSearchComponent onClick={this.addressChangeRequested}/>
				{parsedData}
				<Link to="/">
					<button type="button" className="BackButton">Back</button>
				</Link>
			</div>
		)
	}

	conductSearch() {
		this.setState({isLoading:true})
		fetch('https://api.shelfcheck.io/v1/get-closest-stores-single-item', { 
			method: 'POST', 
			headers: new Headers({
				'x-api-key': keys["single-item-search"], 
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'https://www.shelfcheck.io',
				'Access-Control-Allow-Methods': 'POST',
				'Access-Control-Allow-Credential': 'true'
			}),
		 body: '{ "longitude":' + this.state.queryLon + ', "latitude": ' + this.state.queryLat  + ', "item_name": "' + this.state.queryItem  + '" }' 
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
		<StoreComponent 
			name={currentItem.name}
			key={currentItem.address}  
			addy={currentItem.address} 
			latitude={currentItem.coordinates[0]} 
			longitude = {currentItem.coordinates[1]} 
			quantity={currentItem.approximate_quantity} 
			distance={currentItem.distance} 
		/>
	)
	}

	addressChangeRequested(lat, lon) {
		this.setState(
			{
				todos: [],
				isLoading: true,
				queryLat: lat,
				queryLon: lon,
				queryItem: this.props.itemName,
			})
		this.conductSearch();
	}

	itemListChangeRequested(items) {
		console.log(items);
	}
}

export default StoreSearcherComponent;
