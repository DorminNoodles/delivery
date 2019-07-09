import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BurgerButton.module.css';


const BurgerButton = (props) => {
	return (
		<div className={styles.BurgerButton} onClick={props.onClick}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default BurgerButton;
