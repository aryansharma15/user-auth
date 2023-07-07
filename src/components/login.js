import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import supabase from "./supabase";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = async () => {
		let { data, error } = await supabase.auth.signInWithPassword({
			email: "",
			password: "",
		});
	};

	return (
		<div className="login">
			<div className="login-boxed">
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
		</div>
	);
}

export default Login;
