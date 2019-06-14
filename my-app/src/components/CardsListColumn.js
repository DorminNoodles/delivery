import React from 'react';

import MarketsCards from 'components/MarketsCards';
import CardsBig from 'components/CardsBig';
import Title from 'components/Title';


const CardsListColumn = (props) => {

	let items = props.items.map((item, index) => {
		return (
			<CardsBig
				key={index}
				title={item.title}
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
				<Title text={props.title} style="CardsListColumnTitle" />
			</div>
			{items}
		</div>
	);
}

export default CardsListColumn;




// <img src="restaurants01.jpg" />
