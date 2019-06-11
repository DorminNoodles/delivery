import React from 'react';

import MarketsCards from 'components/MarketsCards';
import Title from 'components/Title';


const CardsListColumn = (props) => {

	let items = props.items.map((item, index) => {
		return (
			<div className="CardsBig">
				<div className="CardsBigSocle">
					hey

					<div className="CardsBigImg">
						<img src="restaurants01.jpg" />
					</div>

					<div className="CardsBigDescription">
						<Title style="" text="Benjamin" />
						<Title style="" text="Ben" />
					</div>
					<div>
						bordel
					</div>
					<div>
						bordel
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








// <img src="restaurants01.jpg" />
