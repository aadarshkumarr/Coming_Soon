import React from "react";
import "./App.css";
import logo from "./components/assets/logo.jpg";
import Appointment from "./components/Appointment/Appointment";

const App = () => {
	return (
		<div className="app">
			<div className="img">
				<img src={logo} alt="" />
			</div>
			<h1>Coming soon!</h1>
			<a href="https://www.instagram.com/thebusytoddlersclub/?igshid=YmMyMTA2M2Y%3D">
				<button class="btn">Check Our Instagram</button>
			</a>
			<Appointment />
		</div>
	);
};

export default App;

// done
