import React from "react"
import ReactDOM from "react-dom"

import Toggle from "./components/Toggle"

var app = document.getElementById("app");
var element = <div>
					<Toggle />
			  </div>
ReactDOM.render(
					element,
					app
				);