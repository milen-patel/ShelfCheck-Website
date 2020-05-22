import React from 'react';
import '../styles/ItemChooserStyles.css';
/* Preparinig for temp removal */
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
		this.state = {categoryToShow: 'nutrition', itemsSelected: ["Bread"]};
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
			return;
		} else {
			this.setState(
				{itemsSelected: Array(iName)}
			);
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
				<li><input type="radio" id="nutrition" name="category" value="nutrition" defaultChecked="checked"/>
				<label htmlFor="nutrition"> Nutrition </label></li>
				<li><input type="radio" id="power" name="category" value="power" />
				<label htmlFor="power"> Power </label></li>
				<li><input type="radio" id="cleaning" name="category" value="cleaning" />
				<label htmlFor="cleaning"> Cleaning </label></li>
				<li><input type="radio" id="health" name="category" value="health" />
				<label htmlFor="health"> Health </label></li>
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
					<li><input type="checkbox" id="Bread" name="Bread" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Bread")} />
					<label htmlFor="Bread"> Bread </label></li>
					<li><input type="checkbox" id="Milk" name="Milk" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Milk")} />
					<label htmlFor="Milk"> Milk </label></li>
					<li><input type="checkbox" id="Eggs" name="Eggs" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Eggs")} />
					<label htmlFor="Eggs"> Eggs </label></li>
					<li><input type="checkbox" id="Bottled Water" name="Bottled Water" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Bottled Water")} />
					<label htmlFor="Bottled Water"> Water </label></li>
					<li><input type="checkbox" id="Ground Beef" name="Ground Beef" value="first" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Ground Beef")} />
					<label htmlFor="Ground Beef"> Ground Beef </label></li>
				</form>
			);
		} else if (this.state.categoryToShow === "power") {
			return (
				<form className="itemListForm">
					<li><input type="checkbox" id="Toilet Paper" name="Toilet Paper" value="second" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Toilet Paper")} />
					<label htmlFor="Toilet Paper"> Toilet Paper </label></li>
					<li><input type="checkbox" id="Diapers" name="Diapers" value="second" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Diapers")} />
					<label htmlFor="Diapers"> Diapers </label></li>
					<li><input type="checkbox" id="Masks" name="Masks" value="second" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Masks")} />
					<label htmlFor="Masks"> Masks </label></li>
				</form>
			);
		} else if (this.state.categoryToShow === "cleaning") {
			return (
				<form className="itemListForm">
					<li><input type="checkbox" id="Garbage Bags" name="Garbage Bags" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Garbage Bags")} />
					<label htmlFor="Garbage Bags"> Garbage Bags </label></li>
					<li><input type="checkbox" id="Disinfectant Wipes" name="Disenfectant Wipes" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Disinfectant Wipes")} />
					<label htmlFor="Disinfectant Wipes"> Disinfectant Wipes </label></li>
					<li><input type="checkbox" id="Hand Sanitizer" name="Hand Sanitizer" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Hand Sanitizer")} />
					<label htmlFor="Hand Sanitizer"> Hand Sanitizer </label></li>
					<li><input type="checkbox" id="Hand Soap" name="Hand Soap" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Hand Soap")} />
					<label htmlFor="Hand Soap"> Hand Soap </label></li>
					<li><input type="checkbox" id="Paper Towels" name="Paper Towels" value="third" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Paper Towels")} />
					<label htmlFor="Paper Towels"> Paper Towels </label></li>
				</form>
			);
		} else if (this.state.categoryToShow === "health") {
			return (
				<form className="itemListForm">
					<li><input type="checkbox" id="Batteries" name="Batteries" value="fourth" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Batteries")} />
					<label htmlFor="Batteries"> Batteries </label></li>
					<li><input type="checkbox" id="Flashlights" name="Flashlights" value="fourth" onChange={this.handleIndividualItemSelectChange.bind(this)} checked={this.shouldBeChecked("Flashlights")} />
					<label htmlFor="Flashlights"> Flashlights </label></li>
				</form>
			);
		}
	}
}

export default ItemChooser;
