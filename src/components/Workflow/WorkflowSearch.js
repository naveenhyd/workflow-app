import React, { Component } from "react";
import "./Workflow.scss";

class WorkflowSearch extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-md-3">
					<span className="fa fa-search search-icon"></span>
					<input
						type="text"
						className="form-control search-input"
						placeholder="Search Workflows"
						aria-describedby="basic-addon1"
					/>
				</div>
				<div className="col-md-1">
					<button
						className="btn btn-default dropdown-toggle"
						type="button"
						id="dropdownMenu1"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true"
					>
						Filter
						<span className="fa fa-caret"></span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						<li>
							<a href="#all">ALL</a>
						</li>
						<li>
							<a href="#completed">COMPLETED</a>
						</li>
						<li>
							<a href="#pending">PENDING</a>
						</li>
					</ul>
				</div>
				<div className="col-md-3 offset-md-5">
				<span className="fa fa-plus"></span>
					<button className="btn btn-success create-workflow">Create Workflow</button>
				</div>
			</React.Fragment>
		);
	}
}

export default WorkflowSearch;
