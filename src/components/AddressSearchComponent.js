

/* Documentation : https://www.npmjs.com/package/react-google-places-autocomplete#get-lat-lng */
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import React from 'react';
import '../styles/AddressSearcherStyle.css';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import keys from '../keys.js';
import Script from 'react-load-script';
/* AddressSearchComponent is responsible for creating a search bar that
 * autocompletes addresses using Google's autocomplete api. onClick is
 * the sole prop and refers to the function that this component will call
 * when the user selects a new address. The onClick parameter should refer
 * to a function which recieves solely latitude and longitude as input
 */
function AddressSearchComponent(props) {
		return (
		  <div>
				<Script type="text/javascript" url={"https://maps.googleapis.com/maps/api/js?key=" + keys["google-address-search"] + "&libraries=places"}></Script>

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
