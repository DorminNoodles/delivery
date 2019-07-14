import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title/Title';
import MarketsCards from 'components/MarketsCards';

const Markets = () => {

	return (
		<div className="Markets">
			<div className="MarketsHeader">
				<Title class="MarketTitle">Markets</Title>
				<span>
					<Link to="">View all (102)</Link>
				</span>
			</div>
			<div className="MarketsCarousel">
				<div className="MarketCarouselContainer">
					<MarketsCards
						img="market01.jpg"
						title="Sushiland"
						distance="75"
						address="96, bd bessiere"
					/>
					<MarketsCards
						img="market02.jpg"
						title="Bagel Food"
						distance="75"
						address="132, rue des champs"
					/>
				</div>
			</div>

		</div>
	);
}


export default Markets;
