import React from 'react';
import { Link } from 'react-router-dom';


import Title from 'components/Title/Title';


const MarketsCards = (props) => {

	return (
		<div className="MarketsCards">
			<Link to={props.link}>
				<div className="MarketsCardsSocle">
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
			</Link>
		</div>
	);
}

export default MarketsCards;
