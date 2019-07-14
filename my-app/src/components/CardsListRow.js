import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title/Title';
import MarketsCards from 'components/MarketsCards';

import Card from 'components/Card/Card';

const CardsListRow = (props) => {

	let items;

	if (props.items) {
		items = props.items.map((item, index) => {
			console.log('il est ou ?', item.id);
			return (
				<Card
					key={index}
					id={item.id}
					link={'restaurant/' + item.id}
					img={item.img}
					title={item.name}
					address={item.address}
					distance={item.distance}
				/>
			);
		});
	}

	return (
		<div className="Markets">
			<div className="MarketsHeader">
				<Title class="MarketTitle">{props.title}</Title>
					<span onClick={() => props.viewAll(props.title)}>View all (102)</span>
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
