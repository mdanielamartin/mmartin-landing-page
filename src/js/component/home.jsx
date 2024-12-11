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
			<div className='container-fluid mt-4'>
				<Jumbotron />
				<div className='container-fluid d-flex justify-content-center mt-4 p-0 '>
					<div className='row card-container w-100 g-4 '>
						<div className='col-sm-12 col-lg-3 col-md-6'>
							<Card />
						</div>
						<div className='col-sm-12 col-lg-3 col-md-6'>
							<Card />
						</div>
						<div className='col-sm-12 col-lg-3 col-md-6 '>
							<Card />
						</div>
						<div className='col-sm-12 col-lg-3 col-md-6 '>
							<Card />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
