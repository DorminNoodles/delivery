import React from 'react';
import { Link } from 'react-router-dom';


const BurgerButton = (props) => {
	return (
		<div class="BurgerButton" onClick={props.onClick}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default BurgerButton;
