import React from 'react';

import Title from 'components/Title';


const CardsBig = (props) => {

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
							75 m
						</div>
					</div>
					<div className="CardsBigAddress">
						{props.address}
					</div>
				</div>
			</div>
		</div>
	);

}

export default CardsBig;
