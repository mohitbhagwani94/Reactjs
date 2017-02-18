import React from "react";
import ReactDOM from "react-dom";

import Clock from "./components/Clock";

var app = document.getElementById("app");
const element = <div><Clock /></div>

ReactDOM.render(
					element,
					app
				);