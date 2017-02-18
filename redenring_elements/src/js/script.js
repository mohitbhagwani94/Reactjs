import React from "react";
import ReactDOM from "react-dom";

import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Layout from "./components/Layout"

var app = document.getElementById("app");
ReactDOM.render( <div>
                  <Header />
                  <Layout />
                  <Footer />
                </div>
  ,app); 