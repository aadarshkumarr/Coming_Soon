import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Appointment.css";
// import TextUnderline from "../TextUnderline/TextUnderline";

function Appointment() {
	const [selectedDate, setSelectedDate] = useState("");
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [timeChecked, setTimeChecked] = useState(false);
	const [selectDate2, setSelectedDate2] = useState(false);
	console.log(selectDate2);

	const handleDateChange = (date) => {
		setSelectedDate(date);
		console.log("Selected date:", date);
	};

	const handleDateChange2 = (event) => {
		const inputDate = new Date(event.target.value);
		const isoDate = inputDate.toISOString();
		const formattedDate = isoDate.slice(0, 10);
		console.log(formattedDate);
		setSelectedDate2(formattedDate);
	};

	const handleTimeChange = (event) => {
		const inputTime = new Date(`1970-01-01T${event.target.value}`);
		const formattedTime = inputTime.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
		setTimeChecked(formattedTime);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleMobileChange = (event) => {
		setMobile(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	console.log(handleTimeChange.time);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = [
			[selectedDate, selectDate2, name, mobile, email, timeChecked],
		];

		console.log(data);
		await fetch(
			"https://v1.nocodeapi.com/vikaskashyap/google_sheets/KpdLorVmOUuqHlts?tabId=sheet1",
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		).then((result) => {
			result.json().then((res) => {
				console.log(res);
				setName("");
				setEmail("");
				setMobile("");
				setSelectedDate("");
				setSelectedDate2("");
				setTimeChecked("");
			});
		});
	};

	return (
		<div className="main_appointment">
			<div className="appointment_heading">
				<h2>SPEAK ON CALL</h2>
				{/* <TextUnderline /> */}
			</div>
			<div className="all_items">
				<div className="calendar">
					<div className="calendar_heading">EVENT/PARTY DATE</div>
					<Calendar value={selectedDate} onChange={handleDateChange} />
				</div>

				<div className="appointment">
					<form onSubmit={handleSubmit}>
						<label className="text_label">
							Name:
							<input
								required
								type="text"
								className="text_input"
								value={name}
								onChange={handleNameChange}
							/>
						</label>
						<label className="text_label">
							Phone:
							<input
								required
								type="tel"
								className="text_input_mobile"
								value={mobile}
								onChange={handleMobileChange}
							/>
						</label>
						<label className="text_label">
							Email:
							<input
								required
								type="email"
								className="text_input"
								value={email}
								onChange={handleEmailChange}
							/>
						</label>
						<h5>REQUEST APPOINTMENT</h5>

						<div className="checkboxes">
							<label>
								Date:
								<input
									className="select_input"
									type="date"
									value={selectDate2}
									onChange={handleDateChange2}
								/>
							</label>

							<label>
								Time:
								<input
									className="select_input"
									type="time"
									value={timeChecked}
									onChange={handleTimeChange}
								/>
							</label>
						</div>
						<button className="appointment_btn" type="submit">
							Let's plan!
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Appointment;
