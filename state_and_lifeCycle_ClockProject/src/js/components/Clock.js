import React from "react"

export default class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {date:new Date()};
	}
	componentDidMount(){
		this.timerID = setInterval(
				() => this.tick(),
				1000
			);
	}
	componentWillDemount(){
		clearInterval(this.timeID);
	}
	tick() {
		this.setState({
			date : new Date()
		});
	}
	render() {
		return (
				<div>
					<h1> Automatic Timer</h1>
					<h2>The time is {this.state.date.toLocaleTimeString()}.</h2>
				</div>
			)
	}
}