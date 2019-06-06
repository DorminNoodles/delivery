import React from 'react';
import { Link } from 'react-router-dom';


const PreviousButton = (props) => {

	// let linkUrl = (props.link) ? '<Link to=' +props.link+'>' : '';
	// let linkEnd = (props.link) ? '</Link>': '';

	return (
		<div className='PreviousButton'>
			<Link to={props.link}>&lt;</Link>
		</div>
	);
};

export default PreviousButton;
