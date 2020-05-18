import React from 'react';
import '../styles/ItemChooserStyles.css';

/* ItemChooser is responsible for visualizing all the items that
 * shelfCheck monitors. 
 *
 * Props and State Explanation:
 *	(Prop) notifyFunction -> Function to be called everytime user input changes
 *	(State) categoryToShow -> String representing which of the four categories is currently selected
 *	(State) itemsSelected -> Array of strings representing the current items the user has selected
 */
class ItemChooser  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {categoryToShow: 'nutrition', itemsSelected: []};
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.getAppropriateSubchoices = this.getAppropriateSubchoices.bind(this);
		this.handleIndividualItemSelectChange = this.handleIndividualItemSelectChange.bind(this);
		this.shouldBeChecked.bind(this);
	}

	/* When the user chooses between one of the four categories
	 * we need to update state which will then rerender the individual
	 * item choices 
	 */
	handleCategoryChange(event) {
		this.setState({
              categoryToShow: event.target.value 
        });
	}

	/* When the user toggles an individual item, we need to
	 * update state.categoryToShow to either include that item
	 * if it wasn't already there, or otherwise remove it from the list 
	 */
	handleIndividualItemSelectChange(e) {
		var iName = e.target.id;
		if (this.state.itemsSelected.includes(iName)) {
			this.setState((state) => {
				var index = state.itemsSelected.indexOf(iName);
				if (index !== -1) {
					state.itemsSelected.splice(index, 1);
					return ({itemsSelected: state.itemsSelected});
				}
			});
		} else {
			this.setState((old) => {
				old.itemsSelected.push(iName);
				return ({itemsSelected: old.itemsSelected});
			});
		}
	}
	
	componentDidUpdate(prevProps, prevState) {
		this.props.notifyFunction(this.state.itemsSelected);
	}

	/* When the individual item checkboxes are rendered
	 * they call shouldBeChecked, consumes the name of the item
	 * and returns whether or not the item is in state.itemsSelected
	 */
	shouldBeChecked(name) {
		if(this.state.itemsSelected.includes(name)) {
			return true;
		}
		return false;
	}

	render() {
	    return(
			<div>
			<form onChange={this.handleCategoryChange} className="categoryForm">
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

	/* Returns the list of checkboxes to render based on the 
	 * current very of state.categoryToShow
	 */
	getAppropriateSubchoices() {
		if (this.state.categoryToShow === "nutrition") {
			return (
				<form className="itemListForm">
					<li><input type="checkbox" id="bread" name="bread" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("bread")} />
					<label htmlFor="bread"> Bread </label></li>
					<li><input type="checkbox" id="milk" name="milk" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("milk")} />
					<label htmlFor="milk"> Milk </label></li>
					<li><input type="checkbox" id="eggs" name="eggs" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("eggs")} />
					<label htmlFor="eggs"> Eggs </label></li>
					<li><input type="checkbox" id="water" name="water" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("water")} />
					<label htmlFor="water"> Water </label></li>
					<li><input type="checkbox" id="beef" name="beef" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("beef")} />
					<label htmlFor="beef"> Ground Beef </label></li>
				</form>
			);
		} else if (this.state.categoryToShow === "power") {
			return (
				<form className="itemListForm">
					<li><input type="checkbox" id="toilet_paper" name="toilet_paper" value="second" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("toilet_paper")} />
					<label htmlFor="toilet_paper"> Toilet Paper </label></li>
					<li><input type="checkbox" id="diapers" name="diapers" value="second" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("diapers")} />
					<label htmlFor="diapers"> Diapers </label></li>
					<li><input type="checkbox" id="masks" name="masks" value="second" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("masks")} />
					<label htmlFor="masks"> Masks </label></li>
				</form>
			);
		} else if (this.state.categoryToShow === "cleaning") {
			return (
				<form className="itemListForm">
					<li><input type="checkbox" id="garbage_bags" name="garbage_bags" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("garbage_bags")} />
					<label htmlFor="garbage_bags"> Garbage Bags </label></li>
					<li><input type="checkbox" id="clorox_wipes" name="clorox_wipes" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("clorox_wipes")} />
					<label htmlFor="clorox_wipes"> Clorox Wipes </label></li>
					<li><input type="checkbox" id="sanitizer" name="sanitizer" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("sanitizer")} />
					<label htmlFor="sanitizer"> Hand Sanitizer </label></li>
					<li><input type="checkbox" id="hand_soap" name="hand_soap" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("hand_soap")} />
					<label htmlFor="hand_soap"> Hand Soap </label></li>
					<li><input type="checkbox" id="paper_towels" name="paper_towels" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("paper_towels")} />
					<label htmlFor="paper_towels"> Paper Towels </label></li>
				</form>
			);
		} else if (this.state.categoryToShow === "health") {
			return (
				<form className="itemListForm">
					<li><input type="checkbox" id="batteries" name="batteries" value="fourth" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("batteries")} />
					<label htmlFor="batteries"> Batteries </label></li>
					<li><input type="checkbox" id="flashlights" name="flashlights" value="fourth" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("flashlights")} />
					<label htmlFor="flashlights"> Flashlights </label></li>
				</form>
			);
		}
	}
}

export default ItemChooser;
