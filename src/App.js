import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import WorkflowSearch from "./components/Workflow/WorkflowSearch";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

import "./App.scss";
import Login from "./components/Login/Login";
import WorkflowList from "./components/Workflow/WorkflowList";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/home" exact component={Home} />
					<Route path="/workflow" exact component={WorkflowList} />
					<Route path="/login" exact component={Login} />
					<Route path="/" exact component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
