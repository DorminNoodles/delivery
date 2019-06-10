import React, { Component } from 'react';

import AddressHeader from 'components/AddressHeader';
import CardsListRow from 'components/CardsListRow';
import CardsListColumn from 'components/CardsListColumn';
import BurgerButton from 'components/BurgerButton';
import SearchBar from 'components/SearchBar';
import DownMenu from 'components/DownMenu';
import Markets from 'components/Markets';
import Title from 'components/Title';
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
				'title': 'Vegetables',
				'address': "96, bd bessiere",
				'distance': '75'
			},
			{
				'img': 'market02.jpg',
				'title': 'Vegan Food',
				'address': '132, rue des champs',
				'distance': '800'
			}
		];

		let restaurants = [
			{
				'img': 'restaurants01.jpg',
				'title': 'Sushiland',
				'address': "96, bd bessiere",
				'distance': '75'
			}
		];

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
						<CardsListRow title="Restaurants" items={restaurants} />

						<CardsListColumn items={restaurants}/>


					</div>
					<DownMenu />
				</div>
			</div>
		)
	}

}

export default Explore;


// ,
// {
// 	'img': 'restaurants02.jpg',
// 	'title': 'Bagel Food',
// 	'address': '132, rue des champs',
// 	'distance': '800'
// }
