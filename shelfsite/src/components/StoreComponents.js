import React from "react"
import '../styles/StoreComponentStyle.css'

function StoreComponent(props) {
	return (
		<div className='primary'>
		<p><b> Store Name:</b> {props.name}</p>
		<p><b>Store Address:</b> {props.addy}</p>
		<p><b>Store Latitdue:</b> {props.latitude}</p>
		<p><b>Store Longitude:</b> {props.longitude}</p>
		<p><b>Store Quantity:</b> {props.quantity}</p>
		<p><b>Store Distance:</b> {props.distance}</p>
		</div>
	)
}

export default StoreComponent;

