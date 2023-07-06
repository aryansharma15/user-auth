import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="login">
			<div className="hed">
				<h2>Sign-In</h2>
				<div className="inputs">
					<input type="text" placeholder="Enter Email" />
					<input type="password" placeholder="Enter Password" />
					<button className="submit-btn">Sign-In</button>
				</div>

				<h3>
					First time here? <Link to="/register">Register Now!</Link>
				</h3>
			</div>
		</div>
	);
}

export default Login;
