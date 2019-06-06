import React from 'react';

const Title = (props) => {
	return (
		<div className={"Title " + props.style}>
			<h1>{props.title}</h1>
		</div>
	);
};

export default Title;
