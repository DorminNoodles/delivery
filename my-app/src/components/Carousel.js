import React from 'react';

import HomeCard from 'components/homeCard/homeCard';


const Carousel = (props) => {
	return (
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<HomeCard
						img="bakery1.jpg"
						title="Order"
						description="Order all you want from your favorite stores."
					/>
				</div>
				<div className="carousel-item">
					<HomeCard
						img="croissant.jpg"
						title="Pick Delivery Time"
						description="Receive your order in less than 1 hour. Or pick a specific delivery time."
					/>
				</div>
				<div className="carousel-item">
					<HomeCard
						img="eggs.jpg"
						title="Get Your Order"
						description="Real-time tracking will keep you posted about order progress."
					/>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
