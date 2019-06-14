import React from 'react';

import MarketsCards from 'components/MarketsCards';
import CardsBig from 'components/CardsBig';
import Title from 'components/Title';


const CardsListColumn = (props) => {

	let items = props.items.map((item, index) => {
		return (
			<CardsBig
				title={item.title}
				img={item.img}
				address={item.address}

			/>
		);
	});

	return (
		<div className="CardsListColumn">
			{items}
		</div>
	);
}

export default CardsListColumn;




// <img src="restaurants01.jpg" />
