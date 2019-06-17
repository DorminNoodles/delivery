import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import MarketsCards from 'components/MarketsCards';

const CardsListRow = (props) => {

	let items = props.items.map((item, index) => {
		console.log(item);
		return (
			<MarketsCards
				key={index}
				id={item.id}
				link={'restaurants/' + item.id}
				img={item.img}
				title={item.title}
				address={item.address}
				distance={item.distance}
			/>
		);
	});


	return (
		<div className="Markets">
			<div className="MarketsHeader">
				<Title text={props.title} style="MarketTitle" />
					<span onClick={() => props.viewAll(props.changeContent)} name="hohohoho">View all (102)</span>
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
