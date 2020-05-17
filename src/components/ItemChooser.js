import React from 'react';

class ItemChooser  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {categoryToShow: 'nutrition', itemsSelected: []};
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.getAppropriateSubchoices = this.getAppropriateSubchoices.bind(this);
		this.handleIndividualItemSelectChange = this.handleIndividualItemSelectChange.bind(this);
		this.shouldBeChecked.bind(this);
	}

	handleCategoryChange(event) {
		console.log("Change Detected");
		console.log(this.state.itemsSelected);
		this.setState({
              categoryToShow: event.target.value 
        });
	}

	handleIndividualItemSelectChange(e) {
		console.log("Change Detected");
		var iName = e.target.id;
		if (this.state.itemsSelected.includes(iName)) {
			console.log("YES");
			this.setState((state) => {
				var index = state.itemsSelected.indexOf(iName);
				if (index !== -1) {
					state.itemsSelected.splice(index, 1);
					return ({itemsSelected: state.itemsSelected});
				}
			});
		} else {
			console.log("NO");
			this.setState((old) => {
					old.itemsSelected.push(iName);
					return ({itemsSelected: old.itemsSelected});
			});
		}
	}

	shouldBeChecked(name) {
		return false;
	}

	getAppropriateSubchoices() {
		if (this.state.categoryToShow === "nutrition") {
			return (
				<form>
					<input type="checkbox" id="bread" name="bread" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("bread")} />
					<label htmlFor="bread"> Bread </label>
					<input type="checkbox" id="milk" name="milk" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("milk")} />
					<label htmlFor="milk"> Milk </label>
					<input type="checkbox" id="eggs" name="eggs" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("eggs")} />
					<label htmlFor="eggs"> Eggs </label>
					<input type="checkbox" id="water" name="water" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("water")} />
					<label htmlFor="water"> Water </label>
					<input type="checkbox" id="beef" name="beef" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("beef")} />
					<label htmlFor="beef"> Ground Beef </label>
				</form>
			);
		} else if (this.state.categoryToShow === "power") {
			return (
				<form>
					<input type="checkbox" id="toilet_paper" name="toilet_paper" value="second" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("toilet_paper")} />
					<label htmlFor="toilet_paper"> Toilet Paper </label>
					<input type="checkbox" id="diapers" name="diapers" value="second" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("diapers")} />
					<label htmlFor="diapers"> Diapers </label>
					<input type="checkbox" id="masks" name="masks" value="second" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("masks")} />
					<label htmlFor="masks"> Masks </label>
				</form>
			);
		} else if (this.state.categoryToShow === "cleaning") {
			return (
				<form>
					<input type="checkbox" id="garbage_bags" name="garbage_bags" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("garbage_bags")} />
					<label htmlFor="garbage_bags"> Garbage Bags </label>
					<input type="checkbox" id="clorox_wipes" name="clorox_wipes" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("clorox_wipes")} />
					<label htmlFor="clorox_wipes"> Clorox Wipes </label>
					<input type="checkbox" id="sanitizer" name="sanitizer" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("sanitizer")} />
					<label htmlFor="sanitizer"> Hand Sanitizer </label>
					<input type="checkbox" id="hand_soap" name="hand_soap" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("hand_soap")} />
					<label htmlFor="hand_soap"> Hand Soap </label>
					<input type="checkbox" id="paper_towels" name="paper_towels" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("bread")} />
					<label htmlFor="paper_towels"> Paper Towels </label>
				</form>
			);
		} else if (this.state.categoryToShow === "health") {
			return (
				<form>
					<input type="checkbox" id="batteries" name="batteries" value="fourth" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("batteries")} />
					<label htmlFor="batteries"> Batteries </label>
					<input type="checkbox" id="flashlights" name="flashlights" value="fourth" onChange={this.handleIndividualItemSelectChange.bind(this)} defaultChecked={this.shouldBeChecked("flashlights")} />
					<label htmlFor="flashlights"> Flashlights </label>
				</form>
			);
		}
	}

  render() {
    return(
		<div>
		<form onChange={this.handleCategoryChange}>
			<input type="radio" id="nutrition" name="category" value="nutrition" defaultChecked="checked"/>
			<label htmlFor="nutrition"> Nutrition </label>
			<input type="radio" id="power" name="category" value="power" />
			<label htmlFor="power"> Power </label>
			<input type="radio" id="cleaning" name="category" value="cleaning" />
			<label htmlFor="cleaning"> Cleaning </label>
			<input type="radio" id="health" name="category" value="health" />
			<label htmlFor="health"> Health </label>
		</form>
		{this.getAppropriateSubchoices()}
		</div>	
	);
  }
}

export default ItemChooser;
