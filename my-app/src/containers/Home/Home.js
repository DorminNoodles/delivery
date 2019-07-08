import React, { Component } from 'react';

import Carousel from 'components/Carousel';
import HomeButton from 'components/HomeButton';
import OnBoardingTitle from 'components/OnBoardingTitle/OnBoardingTitle';

class Home extends Component {

	render() {
		return (
			<div className="home">
				<OnBoardingTitle>Welcome</OnBoardingTitle>
				<Carousel />
				<div>
					<HomeButton />
				</div>
			</div>
		);
	}
}

export default Home;
