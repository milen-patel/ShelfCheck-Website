import React from 'react';
import '../styles/ItemChooserStyles.css';
import keys from '../keys.js';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Script from 'react-load-script';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import '../styles/DeveloperPageStyles.css';

class DeveloperPage  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false, 
			password:"",
			storeName: "",
			storeAddy: "",
			storeLat: "",
			storeLon: "",
			pos: "Awaiting Input",
			addedStores: 0
		};
		this.loginFormSubmit = this.loginFormSubmit.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAddyChange = this.handleAddyChange.bind(this);
		this.handleLatChange = this.handleLatChange.bind(this);
		this.handleLonChange = this.handleLonChange.bind(this);
		this.addstoreFormSubmit = this.addstoreFormSubmit.bind(this);
	}

	loginFormSubmit() {
		if (this.state.password === keys["dev-password"]) {
			this.setState({ loggedIn: true});
		} else {
			return;
		}
	}

	addstoreFormSubmit() {
		console.log("Attempting to Add Store...");
		console.log(this.state.storeName);
		console.log(this.state.storeAddy);
		console.log(this.state.storeLat);
		console.log(this.state.storeLon);
		 console.log('{"store_name":"' + this.state.storeName + '","store_address":"' + this.state.storeAddy + '","store_coords":[' + this.state.storeLon+','+this.state.storeLat  + ']}')
		fetch('https://graphimmunity.xyz/https://api.shelfcheck.io/dev/add-store', { 
			method: 'POST', 
			headers: new Headers({
				'x-api-key': keys["shelfcheck-dev-key"], 
			}),
		 body: '{"store_name":"' + this.state.storeName + '","store_address":"' + this.state.storeAddy + '","store_coords":[' + this.state.storeLon+','+this.state.storeLat  + ']}' 
		})
			.then(response => response.json())
			.then(data => {
				this.setState(prevState => ({
					pos: "Submitted " + prevState.storeName,
					addedStores: prevState.addedStores+1,
					storeName: "",
					storeAddy: "",
					storeLat: "",
					storeLon: "",
				}));
			});
	}

	handlePasswordChange(e) { this.setState({password: e.target.value}); }
	handleNameChange(e) { this.setState({storeName: e.target.value}); }
	handleAddyChange(e) { this.setState({storeAddy: e.target.value}); }
	handleLatChange(e) { this.setState({storeLat: e}); }
	handleLonChange(e) { this.setState({storeLon: e}); }

	render() {
		if (this.state.loggedIn) {
		    return(
				<div className="LoggedInView">
					<h1>Logged In</h1>
					<p> Heres How This Goes. Search for the Address in the Bar Above, this will autofill the Lat and Lon so you dont have to worry about them. Then type in the store name and address. The address is intentionally not copied over since you are to omit uneeded parts such as the city and state and abbreviate where needed. Then click the submit button. Things work if the status label changed (below the submit button)</p>
				<hr />
				<Script type="text/javascript" url={"https://maps.googleapis.com/maps/api/js?key=" + keys["google-address-search"] + "&libraries=places"}></Script>

			<GooglePlacesAutocomplete
				onSelect={({ description }) => (
					geocodeByAddress(description)
					.then(results => getLatLng(results[0]))
					.then(({ lat, lng }) =>
						(
							this.handleLonChange(lng),
							this.handleLatChange(lat)
						)
					)
				)}
			/>
					<form className="storeAddForm">
						<li>
							Name:
							<input type="text" value={this.state.storeName} onChange={this.handleNameChange}/>
						</li>
						<li>
							Address:
							<input type="text" value={this.state.storeAddy} onChange={this.handleAddyChange}/>
						</li>
						<li>
							Lat:
							<input type="text" value={this.state.storeLat} onChange={this.handleLatChange}/>
						</li>
						<li>
							Lon:
							<input type="text" value={this.state.storeLon} onChange={this.handleLonChange}/>
						</li>
						<li>
							<button type="button" value="xubmit" onClick={this.addstoreFormSubmit}> Submit </button>
						</li>
					</form>
				<hr style={{width:"40%"}} />
				<p><b>STATUS: </b>{this.state.pos}</p>
				<p><b>STORES ADDED: </b>{this.state.addedStores}</p>
				</div>
			);
		} else {
		    return(
				<div>
					<h1>Not Logged In</h1>
					<p> To Sign in, type the password and click the submit button (do not use the enter key) </p>

					<hr />
					<form>
						<label>
						Password:
						<input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
						</label>
						<button type="button" value="xubmit" onClick={this.loginFormSubmit}> Submit </button>
					</form>
				</div>
			);
			
		}
	}

}

export default DeveloperPage;
