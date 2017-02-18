import React from "react"

export default class Layout extends React.Component {
	render() {
		return (
				<div>
					<h1> Automatic Timer</h1>
					<h2>the time {this.state.date.toLocalTimeString()}.</h2>
				</div>
			)
	}
}