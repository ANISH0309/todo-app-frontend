import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Register from "./pages/Register";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<Routes>
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/" element={<Landing />} />
				</Routes>
			</div>
		);
	}
}

export default App;
