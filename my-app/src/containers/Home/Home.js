import React, { Component } from 'react';

import Carousel from 'components/Carousel';
import HomeButton from 'components/HomeButton';
import Title from 'components/Title';

class Home extends Component {

	render() {
		return (
			<div className="home">
				<Title>Welcome</Title>
				<Carousel />
				<div>
					<HomeButton />
				</div>
			</div>
		);
	}
}

export default Home;
