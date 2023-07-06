import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function SignUp() {
	return (
		<div className="signup">
			<h2>Sign Up</h2>
			<div className="sig-inputs">
				<h3>Enter Your Details...</h3>
				<form action="" method="post">
					<input type="text" placeholder="Enter a Username" />
					<input type="email" placeholder="Enter Email" />
					<input type="password" placeholder="Enter Password" />
					<input type="password" placeholder="Confirm Password" />

					<button className="sub-sig">Sign Up</button>
				</form>
			</div>

			<h3>
				Already a member? <Link to="/login">Sign-in</Link>
			</h3>
		</div>
	);
}

export default SignUp;
