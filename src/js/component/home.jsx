import React, { useState } from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import img1 from "../../img/card1.jpg"
import img2 from "../../img/card2.jpg"
import img3 from "../../img/card3.jpg"
import img4 from "../../img/card4.jpg"


//create your first component
const Home = () => {
	const [cardList, setList] = useState([{
		image: img1,
		title: 'Card 1'
	}, {
		image: img2,
		title: 'Card 2'
	}, {
		image: img3,
		title: 'Card 3'
	}, {
		image: img4,
		title: 'Card 4'
	}])
	return (
		<div>
			<NavBar />
			<div className='container-fluid mt-4'>
				<Jumbotron />
				<div className='container-fluid d-flex justify-content-center mt-4 p-0 '>
					<div className='row card-container w-100 g-4 '>
						{cardList.map((item, index) => {
							return (<div key={index} className='col-sm-12 col-lg-3 col-md-6'>
								<Card image={item.image} title={item.title} /></div>)
						})}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
