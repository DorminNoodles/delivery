import React from 'react';

const HomeCard = (props) => {
	return (
		<div className="homeCard sd">
			<img src={props.img} />
			<h2>{props.title}</h2>
			<p>
				{props.description}
			</p>
		</div>
	);
};

export default HomeCard;
