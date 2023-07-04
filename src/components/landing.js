import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./signup";
import Login from "./login";

function Landing() {
	return (
		<BrowserRouter>
			<header>
				<nav className="navbar">
					<div className="land-nav-a">
						<Link to="/">Home</Link>
						<Link to="/product">Product</Link>
						<Link to="/pricing">Pricing</Link>
					</div>

					<div className="land-nav-b">
						<Link to="/register">Register</Link>
						<Link to="/login">Sign-In</Link>
					</div>
				</nav>
			</header>

			<div className="landing">
				<div className="first-content">
					{/* animated heading that appears letter by letter */}
					<h1>Welcome to the doorway of Future!</h1>
					<p></p>
				</div>
				<div className="buttons-div">
					<h3>Get on board: </h3>
					<button>Register</button>
					<button>Sign-In</button>
				</div>
			</div>
			<main>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/register" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default Landing;
