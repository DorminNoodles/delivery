import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import MarketsCards from 'components/MarketsCards';

const CardsListRow = (props) => {

	let items = props.items.map((item, index) => {
		return (
			<MarketsCards
				key={index}
				img={item.img}
				title="fuck"
			/>
		);
	});



	return (
		<div className="Markets">
			<div className="MarketsHeader">
				<Title text={props.title} style="MarketTitle" />
				<span>
					<Link to="">View all (102)</Link>
				</span>
			</div>
			<div className="MarketsCarousel">
				<div className="MarketCarouselContainer">
					{items}
				</div>
			</div>

		</div>
	);
}


export default CardsListRow;
