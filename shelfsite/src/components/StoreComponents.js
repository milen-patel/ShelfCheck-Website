import React from "react";
import '../styles/StoreComponentStyle.css';

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
		<h1><u> {props.name}</u></h1>
		<p>{props.addy}</p>
		<p><b>Quantity:</b> {Math.round(props.quantity)}</p>
		<p><b>Distance:</b> {Math.round((Number.EPSILON + props.distance) * 100)/100}</p>
		</div>
	)
}

export default StoreComponent;

