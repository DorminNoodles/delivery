import React, { Component } from 'react';

import Title from 'components/Title';
import BurgerButton from 'components/BurgerButton';
import AddressHeader from 'components/AddressHeader';
import SearchBar from 'components/SearchBar';
import Markets from 'components/Markets';
import CardsListRow from 'components/CardsListRow';

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


		let markets = [
			{
				'img': 'market01.jpg',
				'title': 'Sushiland',
				'address': "96, bd bessiere"
			},
			{
				'img': 'market02.jpg',
				'title': 'Bagel Food',
				'address': "132, rue des champs"
			}
		]


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
						<CardsListRow title="Markets" items={markets} />

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
