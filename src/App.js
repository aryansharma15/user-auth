import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";
import Landing from "./components/landing";
import Pricing from "./components/pricing";
import Product from "./components/product";
import logo from "./assets/icons8-logo-50.png";

function App() {
	return (
		<BrowserRouter>
			{/* <header>navbar</header> */}
			{/* no navbar here to show different states of signed in/out instead of the sign-up/login links?? */}
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

			<main>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/product" element={<Product />} />
					<Route path="/pricing" element={<Pricing />} />

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<SignUp />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
