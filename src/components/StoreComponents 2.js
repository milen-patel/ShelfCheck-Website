import React from "react";
import '../styles/StoreComponentStyle.css';
import Navigate from '../include/Navigate.png';

/* Represents and individual store item. Used for visualizing search
 * results for each user serach. The following parameters are recieved
 * props.name -> Name of the store
 * proprs.addy -> Address of the store
 * props.quantity -> Estimated Quantity of Item in Store 
 * props.distance -> Distance from store to user 
 *
 * StoreComponent will round estimated quantity to the nearest integer
 * StoreComponent will round distance to exactly two decimal places
 */
function StoreComponent(props) {
	return (
		<div className='primary'>
		<div className="inner">
		<h1><u> {props.name}</u></h1>
		<a href={generateMapsURL(props.latitude,props.longitude)}>
			<img src={Navigate} alt="Navigate" className="NavigateButton"/>
		</a>
		</div>

		<div>
		<p>{props.addy}</p>
		<p><b>Quantity:</b> {Math.round(props.quantity)}</p>
		<p><b>Distance:</b> {Math.round((Number.EPSILON + props.distance) * 100)/100}</p>
		</div>
		</div>
	)
}

function generateMapsURL(lat, lon) {
	return "https://www.google.com/maps/search/?api=1&query=" + lon + "," + lat
}

export default StoreComponent;

