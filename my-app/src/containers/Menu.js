import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';


class Menu extends Component {

	render() {

		return (
			<div className="Menu">
				<Title style="MenuTitle" title="Deliv" />
				<div>
					Sign In | Sign Up
				</div>
			</div>
		);
	};


}

export default Menu;
