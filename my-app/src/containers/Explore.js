import React, { Component } from 'react';

import Title from 'components/Title';
import BurgerButton from 'components/BurgerButton';
import AddressHeader from 'components/AddressHeader';
import SearchBar from 'components/SearchBar';
import Markets from 'components/Markets';

import Menu from 'containers/Menu';

class Explore extends Component {

	constructor(props) {
		super(props);

		this.state = {
			'openMenu': false,
			'exploreClass': 'ExploreOpen',
			'headerOpen': true
		}
	}

	openMenu = () => {
		if (this.state.openMenu === false) {
			this.setState({
				'exploreClass': 'ExploreClose',
				'openMenu': true,
				'headerOpen': false
			});
		}
		else {
			this.setState({
				'exploreClass': 'ExploreOpen',
				'openMenu': false,
				'headerOpen': true
			});
		}
	}

	render () {

		// let burgerBtn = (this.state.openMenu) ? false : <BurgerButton onClick={this.openMenu} />;

		return (
			<div className={this.state.exploreClass}>
				<div>
					{(this.state.headerOpen) &&
						<div className="ContentHeader">
							{!this.state.openMenu && <BurgerButton onClick={this.openMenu} />}
							<AddressHeader />
							<div>
								<img src="clock-logo.png" />
							</div>
						</div>
					}
					{this.state.openMenu && <Menu />}
					<div className="Content">
						<Title text="Explore" style="ExploreTitle"/>
						<SearchBar />
						<Markets />
						<p>
							Lorem Ipsum


							efersgregrs
							<br />
							efsefefsefesf
							<br />
							esgrgsthrhrgrgdef
							<br />
							efsefef;vlorkorr
							<br />

						</p>
					</div>
				</div>
			</div>
		)
	}

}

export default Explore;
