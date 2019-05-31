import React, { Component } from 'react';

import HomeCard from 'components/homeCard/homeCard';
import HomeButton from 'components/HomeButton';

class Home extends Component {

	render() {
		return (
			<div className="home">
				<h2 className="title">Welcome</h2>
				<div className="bd-example">
					<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
						  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
						  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
						</ol>
						<div className="carousel-inner">
						  <div className="carousel-item active">
							  <HomeCard />

						  </div>
						  <div className="carousel-item">
							  <HomeCard />

						  </div>
						</div>
					</div>
				</div>
				<div>
					<HomeButton />
				</div>

			</div>
		);
	}
}

export default Home;
