import React from 'react';

const Title = (props) => {
	return (
		<div className={props.style}>
			<h1>{props.text}</h1>
		</div>
	);
};

export default Title;
