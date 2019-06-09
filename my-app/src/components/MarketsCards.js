import React from 'react';

import Title from 'components/Title';



const MarketsCards = () => {

	return (

		<div className="MarketsCards">
			<div className="CardsSocle">
				<div className="CardsImg">
					<img src="market01.jpg" />
				</div>
				<div className="MarketsCardsHeader">
					<div>
						<Title style="MarketsCardsTitle" text="Sushiland" />
					</div>
					<div>
						<p>
							75 m
						</p>
					</div>
				</div>
				<div>
					96, bd bessiere
				</div>
			</div>
		</div>

	);

}

export default MarketsCards;


// <img src="market01.jpg" />
