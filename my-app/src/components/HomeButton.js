import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const HomeButton = (props) => {
	return (
		<div className="homeButton">
			<Link to="/signin">Start Now</Link>
		</div>
	);
};

export default HomeButton;
