import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Logo from "/src/assets/svg/favicon-cote-dor.svg";
import ChocolateBlob from "../components/ChocolateBlob"; 

// Home is the first page of the application, featuring a button that directs users to the History page.
function Home() {
	return (
		<div className="home-container">
			<ChocolateBlob
				blobColor="#7E4500"
				backgroundColor="none"
				sizes={{
					circle1: {
						width: "125px",
						height: "125px",
					},
					circle2: {
						width: "250px",
						height: "250px",
					},
					circle3: {
						width: "280px",
						height: "280px",
					},
				}}
			/>
			<div className="home-logo-button">
				<img src={Logo} alt="Logo" className="home-logo" />
				<Link to="/history">
					<button className="history-button">HISTORY</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
