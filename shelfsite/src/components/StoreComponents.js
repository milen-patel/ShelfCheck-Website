import React from "react";
import '../styles/StoreComponentStyle.css';

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

