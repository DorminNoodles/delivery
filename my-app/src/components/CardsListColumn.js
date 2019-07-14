import React from 'react';

import MarketsCards from 'components/MarketsCards';
import CardsBig from 'components/Card/CardsBig';
import Card from 'components/Card/Card';
import Title from 'components/Title/Title';


const CardsListColumn = (props) => {

	let items = props.items.map((item, index) => {
		return (
			<Card
				key={index}
				title={item.name}
				img={item.img}
				address={item.address}
				distance={item.distance}
				ranking={item.ranking}
			/>
		);
	});

	return (
		<div className="CardsListColumn">
			<div className="TitleContainer">
				<Title style="CardsListColumnTitle">{props.title}</Title>
			</div>
			{items}
		</div>
	);
}

export default CardsListColumn;




// <img src="restaurants01.jpg" />
