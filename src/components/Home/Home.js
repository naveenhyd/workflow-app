import React, { Component } from "react";
import Header from "../header/Header";
import WorkflowSearch from "../Workflow/WorkflowSearch";
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="row search-bar">
					<WorkflowSearch />
				</div>
				<div>Home</div>
			</React.Fragment>
		);
	}
}

export default Home;
