import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<h2>Workflow</h2>
				<ul className="menu">
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/workflow">Workflow</Link>
					</li>
					<li>
						<Link to="/logout">Logout</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
