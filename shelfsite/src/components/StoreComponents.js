import React from "react"
import '../styles/StoreComponentStyle.css'

function StoreComponent(props) {
	return (
		<div className='primary'>
		<p> Store Name: {props.name}</p>
		<p >Store Address: {props.addy}</p>
		<p >Store Latitdue: {props.latitude}</p>
		<p >Store Longitude: {props.longitude}</p>
		<p >Store Quantity: {props.quantity}</p>
		<p >Store Distance: {props.distance}</p>
		</div>
	)
}

export default StoreComponent;

