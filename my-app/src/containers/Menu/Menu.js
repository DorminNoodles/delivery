import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';

import styles from 'containers/Menu/Menu.module.css';

class Menu extends Component {

	constructor(props) {
		super();
	}

	render() {


		return (
			<div>
				<div className={styles.Menu}>
					<div>
						<Title style="MenuTitle">Deliv</Title>
						<div>
							Sign In | Sign Up
						</div>
					</div>
					<div className={styles.Links}>
						<Link to=''>Search</Link>
						<Link to=''>Basket</Link>
						<Link to=''>Discounts</Link>
					</div>
					<div className={styles.Footer}>
						<Link to=''>Settings</Link>
						<Link to=''>Support</Link>
					</div>
				</div>
			</div>
		);
	};
}

export default Menu;
