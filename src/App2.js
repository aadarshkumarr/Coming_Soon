import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import logo from "./components/assets/logo.jpeg";
import Appointment from "./components/Appointment/Appointment";

const App = () => {
	return (
		<div className="coming-soon-container">
			<Particles
				id="tsparticles"
				options={{
					background: {
						color: {
							value: "#0d47a1",
						},
					},
					fpsLimit: 60,
					particles: {
						number: {
							value: 80,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						color: {
							value: "#ffffff",
						},
						shape: {
							type: "circle",
							stroke: {
								width: 0,
								color: "#000000",
							},
							polygon: {
								nb_sides: 5,
							},
						},
						opacity: {
							value: 0.5,
							random: true,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.1,
								sync: false,
							},
						},
						size: {
							value: 3,
							random: true,
							anim: {
								enable: true,
								speed: 2,
								size_min: 0.1,
								sync: false,
							},
						},
						line_linked: {
							enable: false,
							distance: 150,
							color: "#ffffff",
							opacity: 0.4,
							width: 1,
						},
						move: {
							enable: true,
							speed: 1,
							direction: "none",
							random: true,
							straight: false,
							out_mode: "out",
							bounce: false,
							attract: {
								enable: false,
								rotateX: 600,
								rotateY: 1200,
							},
						},
					},
					interactivity: {
						detect_on: "canvas",
						events: {
							onhover: {
								enable: true,
								mode: "repulse",
							},
							onclick: {
								enable: true,
								mode: "push",
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: 1,
								},
							},
							bubble: {
								distance: 400,
								size: 40,
								duration: 2,
								opacity: 8,
								speed: 3,
							},
							repulse: {
								distance: 100,
								duration: 0.4,
							},
							push: {
								particles_nb: 4,
							},
							remove: {
								particles_nb: 2,
							},
						},
					},
					retina_detect: true,
				}}
			/>
			<div className="centered">
				<div className="img">
					<img src={logo} alt="logo" />
				</div>
				<h1>We are coming soon</h1>
				<a href="https://www.instagram.com/thebusytoddlersclub/?igshid=YmMyMTA2M2Y%3D">
					<button class="btn">Check Our Instagram</button>
				</a>
				<Appointment />
			</div>
		</div>
	);
};

export default App;
