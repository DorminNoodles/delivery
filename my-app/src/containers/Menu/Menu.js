import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';

import styles from 'containers/Menu/Menu.module.css';

class Menu extends Component {

	render() {

		return (
			<div className={styles.Menu}>
				<Title style="MenuTitle">Deliv</Title>
				<div>
					Sign In | Sign Up
				</div>
			</div>
		);
	};
}

export default Menu;
