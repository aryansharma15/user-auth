import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import supabase from "./supabase";

function SignUp() {
	const [uname, setUname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignup = async () => {
		try {
			const { user, error } = await supabase.auth.signUp({ uname, email, password });

			if (error) {
				console.log("Error signing up:", error.message);
				alert("Couldn't singup:", error.message);
			} else {
				console.log("User signed up successfully:", user);
				alert("Signup successful!");
			}
		} catch (error) {
			console.error("Error signing up:", error.message);
			alert("Couldn't singup:", error.message);
		}
	};

	return (
		<div className="signup">
			<h2>Sign Up</h2>
			<div className="sig-inputs">
				<h3>Enter Your Details...</h3>
				<form action="" method="">
					<input type="text" placeholder="Enter a Username" value={uname} onChange={(e) => setUname(e.target.value)} />
					<input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<input type="password" placeholder="Confirm Password" />

					<button className="sub-sig" onClick={handleSignup}>
						Sign Up
					</button>
				</form>
			</div>

			<h3>
				Already a member? <Link to="/login">Sign-in</Link>
			</h3>
		</div>
	);
}

export default SignUp;
