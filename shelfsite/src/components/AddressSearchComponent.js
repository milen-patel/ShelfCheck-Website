/* Documentation : https://www.npmjs.com/package/react-google-places-autocomplete#get-lat-lng */
// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrH-BOfL5wAB3BzhyMvdduEpBs-2KwaVs&libraries=places"></script>


import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import React, {Component} from 'react';
import '../styles/FooterStyle.css'

class AddressSearchComponent extends Component {
	constructor(props) {
		super();
		this.state = {}
	}

	render() {
		return (
		  <div>
			<GooglePlacesAutocomplete
			  onSelect={console.log}
			/>
		  </div>
		)
	}

	}

export default AddressSearchComponent;
