import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Button = (props) => {
	return (
		<div className="Button">
			<Link to="/signin">{props.text}</Link>
		</div>
	);
};

export default Button;
