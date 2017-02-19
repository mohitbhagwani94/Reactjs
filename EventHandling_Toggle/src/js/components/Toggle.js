import React from "react"
import ReactDOM from "react-dom"

export default class Toggle extends React.Component {
	constructor(props) {
		
		super(props);

		this.state = {isToggleOn:true};
		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler(){
		this.setState(prevState => ({
				isToggleOn: !prevState.isToggleOn
			}));
	}

	render(){
		return (
					<button onClick = {this.clickHandler} value={this.state.isToggleOn}>
						{this.state.isToggleOn ? 'On':'Off'}
					</button>
			);
	}

}