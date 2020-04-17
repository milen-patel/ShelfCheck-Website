import React from "react"

function StoreComponent(props) {
	let textStyle = {color: "black"}
	return (
		<div>
		<div style={{color: "blue", backgroundColor: "orange", textAlign: "center", display:"flex", flexDirection:"column"}}>
		<p style={textStyle}>Store Name: {props.name}</p>
		<p style={textStyle}>Store Address: {props.addy}</p>
		<p style={textStyle}>Store Latitdue: {props.latitude}</p>
		<p style={textStyle}>Store Longitude: {props.longitude}</p>
		<p style={textStyle}>Store Quantity: {props.quantity}</p>
		<p style={textStyle}>Store Distance: {props.distance}</p>
		</div>
		
		<div>
		<hr />
		</div>
		</div>
	)
}

export default StoreComponent;

