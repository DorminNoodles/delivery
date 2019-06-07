import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import MarketsCards from 'components/MarketsCards';

const Markets = () => {

	return (
		<div className="Markets">
			<div className="MarketsHeader">
				<Title text="Markets" style="MarketTitle" />
				<span>
					<Link to="">View all (102)</Link>
				</span>
			</div>
			<div className="MarketsCarousel">
				<div className="MarketCarouselContainer">
					hello
					<MarketsCards />
				</div>
			</div>

		</div>
	);
}


export default Markets;
