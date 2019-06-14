import React from 'react';

import Title from 'components/Title';
import StarIcon from 'components/StarIcon';


const CardsBig = (props) => {

	let ranking = [];

	for (let i = 0; i < 5; i++) {
		if (i < props.ranking)
			ranking.push(<StarIcon key={i} style="" />);
		else
			ranking.push(<StarIcon key={i} style="blank" />);

	}

	return (
		<div className="CardsBig">
			<div className="CardsBigSocle">
				<div className="CardsBigImg">
					<img src={props.img} />
				</div>

				<div className="CardsBigDescription">
					<div className="CardsBigHeader">
						<Title style="CardsBigTitle" text={props.title} />
						<div className="CardsBigDistance">
							{props.distance} m
						</div>
					</div>
					<div className="CardsBigAddress">
						{props.address}
					</div>
					<div className="BigCardsRanking">
						{ranking}
					</div>
				</div>
			</div>
		</div>
	);

}

export default CardsBig;

// {(i > props.ranking) && <StarIcon key={i} style="blank" />}
