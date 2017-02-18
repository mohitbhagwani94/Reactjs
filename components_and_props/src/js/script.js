import React from "react";
import ReactDOM from "react-dom";

import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Layout from "./components/Layout"

var app = document.getElementById("app");
const  element =<div>
                  <Header />
                  <Layout name="Mohit" />
                  <Layout name="Rohit" />
                  <Layout name="Kohit" />
                  <Footer />
                </div>
ReactDOM.render(
    element 
  ,app); 