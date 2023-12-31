import React from "react";
import { Link } from "react-router-dom";

function Landing() {
	const text = "Welcome to the doorway to the Future!";
	const letters = text.split("");

	return (
		<>
			<div className="landing">
				<div className="first-content">
					{/* animated heading that appears letter by letter */}
					<h1 className="fc-head1">
						{/* Welcome to the doorway to the Future! */}
						{letters.map((letter, index) => (
							<span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
								{letter}
							</span>
						))}
					</h1>
					<p>
						{" "}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt hic beatae, magni necessitatibus modi quae?
						Voluptates inventore libero quis.
					</p>
				</div>
				<div className="buttons-div">
					<h3>Get on board: </h3>
					<Link to="/register">
						<button className="land-btn">Register</button>
					</Link>
					<Link to="/login">
						<button className="land-btn">Sign-In</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Landing;
