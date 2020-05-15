/* Documentation : https://www.npmjs.com/package/react-google-places-autocomplete#get-lat-lng */
/* Api key maintained in public/index.html */

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import React, {Component} from 'react';
import '../styles/AddressSearcherStyle.css'
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

function AddressSearchComponent(props) {
		return (
		  <div>
			<GooglePlacesAutocomplete
				onSelect={({ description }) => (
					geocodeByAddress(description)
					.then(results => getLatLng(results[0]))
					.then(({ lat, lng }) =>
						props.onClick(lat, lng)
					)
				)}
			/>
		  </div>
		)
}

export default AddressSearchComponent;
