import React from "react";
import { render } from "react-dom";
import LandingPage from "./views/landing-page";
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navbar";
// eslint-disable-next-line no-unused-vars
import { Dropdown } from "bootstrap";

render(
	<Router>
		<NavBar />
		<Route exact path="/" component={LandingPage} />
	</Router>,
	document.getElementById("main")
);
