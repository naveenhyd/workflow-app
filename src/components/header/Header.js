import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<nav class="navbar navbar-default navbar-fixed-top">
				<h2>Workflow</h2>
				<button className="btn btn-default pull-right">Logout</button>
			</nav>
		);
	}
}

export default Header;
