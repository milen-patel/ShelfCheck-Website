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
		/* If the search is loading, show the normal page contents but inform the user */
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

		/* If the queryLat is 0 then the user has not entered an address, inform them */
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

		/* If we make it here, then the user has conducted a valid search (valid item and address)
		 * If we couldn't find any of their items, then tell them that we have no results */
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

		/* If we make it here, we have a valid search where >=1 item has been located */

		/* Convert each of the stores into representable components */
		const parsedData = this.state.todos.stores.map(this.convertRawToElement)

		/* Create a variable for the status message */
		var foundStatement;

		/* Did we find all the items on the user's list? */
		if (this.state.todos.found_proportion === 1) {
			foundStatement = "We were able to find all of your items!";
		} else {

			/* Construct appropriate message if we did not find all items */
			foundStatement = "We were able to find " + Math.round(this.state.todos.found_proportion*100) + "% of your items. shelfCheck does not currently have inventory on: ";

			/* Iterate over all of the missing items */
			var i;
			for (i = 0; i < this.state.todos.not_found_items.length; i++) {
				/* Add the missing item to the status message */
				foundStatement += this.state.todos.not_found_items[i];
				
				/* Add the appropriate item delimiter */
				if (i !== this.state.todos.not_found_items.length - 1) {
					foundStatement += ", ";
				} else {
					foundStatement += ".";
				}
			}
		}

		/* Create a status message for the duration of the trip */
		var tripTimeStatement = "";

		if (this.state.todos.total_time !== 0) {
			tripTimeStatement = "The total trip will take " + Math.round(this.state.todos.total_time/60) + " minutes using the route below";
		} 

		/* Finally, return all of the relevant information to the user */
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
		/* Change state so user knows we are searching */
		this.setState({isLoading:true})

		/* Create the list of items we are searching for */
		var parsedItemString = '[';

		/* Iterate over our search items */
		var i;
		for (i = 0; i < this.state.queryItem.length; i++) {

			/* Add the current item to the list */
			parsedItemString += '"';
			parsedItemString += this.state.queryItem[i];
			parsedItemString += '"'

			/* Add the appropriate delimiter */
			if (i !== this.state.queryItem.length-1) {
				parsedItemString += ','
			}
		}

		/* End the list with a close bracket */
		parsedItemString += ']';

		/* Make API Call */
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
		/* If the address changes, clear all state except for the search items,
		 * and then update the latitude and longitude of the search. Finally,
		 * conduct a search so todos is repopulated 
		 */
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

	/* Function called if itemChooser has an updated list of items */
	itemListChangeRequested(newList) {
		
		/* If the queryLat is 0, then the user has not entered an address yet, so do nothing */
		if (this.state.queryLat === 0) {
			return;
		}

		/* If the list lengths are different, update state and conduct a new search */
		if (newList.length !== this.state.queryItem.length) {
			this.setState(
				{
					queryItem: newList.slice(0),
				}, () => this.conductSearch())
		} 
	}
}

export default StoreSearcherComponent;
