import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";
import Landing from "./components/landing";

function App() {
	return (
		<BrowserRouter>
			<header></header>

			<div className="App">
				<SignUp></SignUp>
				{/* <Login></Login> */}
			</div>
			<main>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
