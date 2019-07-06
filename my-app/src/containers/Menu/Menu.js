import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';

import styles from 'containers/Menu/Menu.module.css';

class Menu extends Component {

	constructor(props) {
		super();
		this.state = {
			openMenu: props.openMenu
		}
	}

	render() {

		console.log(this.state);

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
						<Link>Search</Link>
						<Link>Basket</Link>
						<Link>Discounts</Link>
					</div>
					<div className={styles.Footer}>
						<Link>Settings</Link>
						<Link>Support</Link>
					</div>
				</div>;
			</div>
		);

	};
}

export default Menu;
