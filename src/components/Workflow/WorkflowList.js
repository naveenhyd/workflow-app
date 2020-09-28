import React, { Component } from "react";
import Axios from "axios";
import "./Workflow.scss";

class WorkflowList extends Component {
	constructor(props) {
		super(props);
		this.setState = {
			workflows: [],
			errorMsg: "",
		};
	}
	componentDidMount() {
		// const [workflows, setWorkflows] = useState([]);
		console.log("component mount");
		Axios.get("http://localhost:3001/workflow")
			.then((response) => {
				console.log(response);
				this.setState({ posts: response.data });
			})
			.catch((error) => {
				console.log(error);
				this.setState({ errorMsg: "API error" });
			});
	}
	render() {
		const { workflows, errorMsg } = this.state;
		return (
			<React.Fragment>
				{/* <div>
					Posts List
					{posts.length
						? posts.map((post) => (
								<div key={post.id}>{post.title}</div>
						  ))
						: null}
					{errorMsg ? <div>{errorMsg}</div> : null}
				</div> */}

				{workflows.length}
				<div className="col-md-3 workflow-list-item">
					<span className="fa fa-trash delete-icon"></span>
					<div className="workflow-name">Workflow 1</div>
					<div className="workflow-state">
						COMPLETED
						<span className="fa fa-check pull-right complete"></span>
					</div>
				</div>
				<div className="col-md-3 workflow-list-item">
					<span className="fa fa-trash delete-icon"></span>
					<div className="workflow-name">Workflow 1</div>
					<div className="workflow-state">
						COMPLETED
						<span className="fa fa-check pull-right complete"></span>
					</div>
				</div>
				<div className="col-md-3 workflow-list-item">
					<span className="fa fa-trash delete-icon"></span>
					<div className="workflow-name">Workflow 1</div>
					<div className="workflow-state">
						COMPLETED
						<span className="fa fa-check pull-right complete"></span>
					</div>
				</div>
				<div className="col-md-3 workflow-list-item">
					<span className="fa fa-trash delete-icon"></span>
					<div className="workflow-name">Workflow 1</div>
					<div className="workflow-state">
						COMPLETED
						<span className="fa fa-check pull-right pending"></span>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default WorkflowList;
