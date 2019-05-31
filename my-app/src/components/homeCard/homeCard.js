import React from 'react';

const HomeCard = (props) => {
	return (
		<div className="homeCard sd">
			<img src={props.img} />
			<p>
				{props.description}
			</p>
		</div>
	);
};

export default HomeCard;
