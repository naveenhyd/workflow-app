import React, { Component } from "react";
import WorkflowList from "../Workflow/WorkflowList";
// import Header from "../Header/Header";
import WorkflowSearch from "../Workflow/WorkflowSearch";
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <Header /> */}
				<div className="row search-bar">
					<WorkflowSearch />
				</div>
				<div className="row worklist">
					<WorkflowList />
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
