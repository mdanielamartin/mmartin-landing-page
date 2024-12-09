import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div class='container mt-4'>
				<div class='row'>
					<div class='col-sm-12 col-lg-4'>
						<Card />
					</div>
					<div class='col-sm-12 col-lg-4'>
						<Card />
					</div>
					<div class='col-sm-12 col-lg-4'>
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
