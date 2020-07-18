import React from "react";
import '../styles/StoreComponentStyle.css';
import Navigate from '../include/Navigate.png';

/* Represents and individual store item. Used for visualizing search
 * results for each user serach. The following parameters are recieved
 * props.name -> Name of the store
 * proprs.addy -> Address of the store
 * props.distance -> Distance from store to user 
 *
 * props.stock_proportion
 * props.items
 *
 * StoreComponent will round estimated quantity to the nearest integer
 * StoreComponent will round distance to exactly two decimal places
 */
function StoreComponent(props) {
	return (
		<div className='primary'>
		<div className="inner">
		<h1><b> {props.name}</b></h1>
		<a href={generateMapsURL(props.latitude,props.longitude)}>
			<img src={Navigate} alt="Navigate" className="NavigateButton"/>
		</a>
		</div>

		<div>
		<p>{props.addy}</p>
		<p> Contains {Math.round(props.stock_proportion*100)}% of your list. </p>
		<p><b>Distance:</b> {Math.round((Number.EPSILON + props.distance) * 100)/100} Miles</p>
		<p> Takes {Math.round(props.commuteTime/60)} minutes to commute here. </p>
		<p> Buy the following items: </p>
		{props.items.map(convertRawToElement)}
		</div>
		</div>
	)
}

function generateMapsURL(lat, lon) {
	return "https://www.google.com/maps/search/?api=1&query=" + lon + "," + lat
}

function convertRawToElement(currentItem) {
return (
	<p> <b>{currentItem.item_name}</b> Estimated {Math.round(currentItem.quantity)} units in stock as of {Math.round(currentItem.recency)} minutes ago. </p>
)
}

export default StoreComponent;

