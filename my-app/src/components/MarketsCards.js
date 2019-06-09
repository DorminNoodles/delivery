import React from 'react';

import Title from 'components/Title';



const MarketsCards = (props) => {

	return (
		<div className="MarketsCards">
			<div className="CardsSocle">
				<div className="CardsImg">
					<img src={props.img} />
				</div>
				<div className="MarketsCardsHeader">
					<div>
						<Title style="MarketsCardsTitle" text={props.title} />
					</div>
					<div className="MarketsCardsDistance">
						{props.distance} m
					</div>
				</div>
				<div className="MarketsCardsAddress">
					{props.address}
				</div>
				<div className="MarketsCardsStars">
					<img src="starIcon.png" />
					<img src="starIcon.png" />
					<img src="starIcon.png" />
					<img src="starIcon.png" />
					<img src="starIcon.png" />
					<p> 4,8 (458)</p>
				</div>
			</div>
		</div>

	);

}

export default MarketsCards;


// <img src="market01.jpg" />
