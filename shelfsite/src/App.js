import React, {Component} from 'react';
import StoreSearcherComponent from './components/StoreSearcherComponent.js' 
class App extends Component {
	render() {
		return (
			<div>
				<p> Test </p>
			    <StoreSearcherComponent itemName="Bread" lat="35.82" lon="-78.77"/>
			</div>
		)
	}

}

export default App
