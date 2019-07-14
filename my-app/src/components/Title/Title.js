import React from 'react';

const Title = (props) => {
	return (
		<div className={props.class}>
			<h1>{props.children}</h1>
		</div>
	);
};

export default Title;
