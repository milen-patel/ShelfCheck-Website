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
			todos: {
				found_proportion: 0, 
				stores: Array(1),
				not_found_items: Array(1),
				total_time: 0,
			},
			isLoading: false,
			queryItem: ["Bread"],
			queryLat: 0.0,
			queryLon: 0.0,
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
					<div className="ButtonHolder">
						<Link to="/">
							<button type="button" className="BackButton">Back Home</button>
						</Link>
					</div>
					<ItemChooser notifyFunction={this.itemListChangeRequested}/>
					<AddressSearchComponent onClick={this.addressChangeRequested}/>
					<p>Loading...</p>
				</div>
			);
		}

		if (this.state.queryLat === 0) {
			return (
				<div className="StoreSearcher">
					<img src={Logo} alt="Logo" className="Logo"/>
					<div className="ButtonHolder">
						<Link to="/">
							<button type="button" className="BackButton">Back Home</button>
						</Link>
					</div>
					<ItemChooser notifyFunction={this.itemListChangeRequested}/>
					<AddressSearchComponent onClick={this.addressChangeRequested} />
					<p> Please Enter an Address </p>	
				</div>
			)
		}

		if (this.state.todos.found_proportion === 0) {
			return (
				<div className="StoreSearcher">
					<img src={Logo} alt="Logo" className="Logo"/>
					<div className="ButtonHolder">
						<Link to="/">
							<button type="button" className="BackButton">Back Home</button>
						</Link>
					</div>
					<ItemChooser notifyFunction={this.itemListChangeRequested}/>
					<AddressSearchComponent onClick={this.addressChangeRequested} />
					<p> No Results Found </p>	
				</div>
			)
		}

		const parsedData = this.state.todos.stores.map(this.convertRawToElement)
		var foundStatement;
		if (this.state.todos.found_proportion === 1) {
			foundStatement = "We were able to find all of your items!";
		} else {
			foundStatement = "We were able to find " + Math.round(this.state.todos.found_proportion*100) + "% of your items. shelfCheck does not currently have inventory on: ";
			var i;
			for (i = 0; i < this.state.todos.not_found_items.length; i++) {
				foundStatement += this.state.todos.not_found_items[i];
				
				if (i !== this.state.todos.not_found_items.length - 1) {
					foundStatement += ", ";
				} else {
					foundStatement += ".";
				}
			}
		}

		var tripTimeStatement;
		if (this.state.todos.total_time !== 0) {
			tripTimeStatement = "The total trip will take " + Math.round(this.state.todos.total_time/60) + " minutes using the route below";
		} else {
			tripTimeStatement = "";
		}

		return (
			<div className="StoreSearcher">
				<img src={Logo} alt="Logo" className="Logo"/>
				<div className="ButtonHolder">
					<Link to="/">
						<button type="button" className="BackButton">Back Home</button>
					</Link>
				</div>
				<ItemChooser notifyFunction={this.itemListChangeRequested}/>
				<AddressSearchComponent onClick={this.addressChangeRequested}/>
				<p>{foundStatement}</p>
				<p>{tripTimeStatement}</p>
				{parsedData}
			</div>
		)
	}

	conductSearch() {
		this.setState({isLoading:true})
		var parsedItemString = '[';
		var i;
		for (i = 0; i < this.state.queryItem.length; i++) {
			parsedItemString += '"';
			parsedItemString += this.state.queryItem[i];
			parsedItemString += '"'
			if (i !== this.state.queryItem.length-1) {
				parsedItemString += ','
			}
		}
		parsedItemString += ']';
		console.log('{ "curr_longitude":' + this.state.queryLon + ', "curr_latitude": ' + this.state.queryLat  +', "home_longitude": '+this.state.queryLon+', "home_latitude": '+this.state.queryLat +', "items": ' + parsedItemString  + ' }' )
		fetch('https://graphimmunity.xyz/https://api.shelfcheck.io/v1/greedy-shopper', { 
			method: 'POST', 
			headers: new Headers({
				'x-api-key': keys["single-item-search"], 
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'https://www.shelfcheck.io',
				'Access-Control-Allow-Methods': 'POST',
				'Access-Control-Allow-Credential': 'true'
			}),
			body: '{ "curr_longitude":' + this.state.queryLon + ', "curr_latitude": ' + this.state.queryLat  +', "home_longitude": '+this.state.queryLon+', "home_latitude": '+this.state.queryLat +', "items": ' + parsedItemString  + ' }' 
		})
			.then(response => response.json())
			.then(data => {
				console.log(data);
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
			stock_proportion = {currentItem.stock_proportion}
		    items = {currentItem.approximate_quantities}
			distance={currentItem.distance} 
			commuteTime = {this.state.todos.stop_times[this.state.todos.stores.indexOf(currentItem)]}
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

	itemListChangeRequested(newList) {
		if (this.state.queryLat === 0) {
			return;
		}
		console.log("Current State: " + this.state.queryItem)
		console.log("Requested State: " + newList)
		if (newList.length !== this.state.queryItem.length) {
			console.log("conditions met");
			this.setState(
				{
					queryItem: newList.slice(0),
				}, () => this.conductSearch())
		} 
	}
}

export default StoreSearcherComponent;
