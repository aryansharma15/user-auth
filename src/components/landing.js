import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./signup";
import Login from "./login";
import logo from "../assets/icons8-logo-50.png";
import Pricing from "./pricing";
import Product from "./product";

function Landing() {
	return (
		<>
			<header>
				<nav className="navbar">
					<img src={logo} alt="logo white" style={{ width: "30px" }} />
					{/* src\assets\icons8-logo-50.png */}
					<div className="land-nav-a">
						<Link to="/">Home</Link>
						<Link to="/product">Product</Link>
						<Link to="/pricing">Pricing</Link>
					</div>
					<div className="land-nav-b">
						<Link to="/register">Register/Sign-In</Link>
						{/* <Link to="/login">Sign-In</Link> */}
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
					<Route path="/pricing" element={<Product />} />
					<Route path="/product" element={<Pricing />} />
					<Route path="/register" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<SignUp />} />
				</Routes>
			</main>
		</>
	);
}

export default Landing;
