import React, {Component} from 'react';
import "../styles/ProductPickerStyle.css";

class ItemChooserComponent extends Component {
	constructor(props) {
		super();
		this.state = {}
	}

	render() {
		return (
			<div>
			<form className="itemPicker">
				<input type="radio" id="Bread" value="Bread" name="pickItem" />
				<label htmlFor="Bread">Bread</label>
				<input type="radio" id="Water" value="Water" name="pickItem" />
				<label htmlFor="Water">Water</label>
				<br />
			</form>
			</div>
		)
	}

	}

export default ItemChooserComponent;
