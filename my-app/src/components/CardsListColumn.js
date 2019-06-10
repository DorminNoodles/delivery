import React from 'react';

import MarketsCards from 'components/MarketsCards';
import Title from 'components/Title';


const CardsListColumn = (props) => {

	let items = props.items.map((item, index) => {
		return (
			<div className="CardsBig">

				<div className="CardsBigSocle">
					<div className="CardsBigImg">
						<img src="restaurants01.jpg" />
					</div>
					<div>
						<Title style="" text="Benjamin" />
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="CardsListColumn">
			{items}
		</div>
	);
}

export default CardsListColumn;
