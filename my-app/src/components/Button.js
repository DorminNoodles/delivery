import React from 'react';
import { Link } from 'react-router-dom';


const Button = (props) => {

	let linkUrl = (props.link) ? '<Link to=' +props.link+'>' : '';
	let linkEnd = (props.link) ? '</Link>': '';

	return (
		<div>
			<Link to={props.link}>
				<div className={props.style} onClick={props.onClick}>
					<img src={props.img} />
					{props.text}
				</div>
			</Link>
		</div>
	);
};

export default Button;
