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
			'headerOpen': true,
			'content': 'explore'
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

	changeContent = (e) => {
		console.log("hey", e);
		this.setState({
			'content': e
		});
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
				'id': 1,
				'img': 'restaurants01.jpg',
				'title': 'Sushiland',
				'address': "96, bd bessiere",
				'distance': '75',
				'ranking': '5'
			},
			{
				'id': 2,
				'img': 'restaurants02.jpg',
				'title': 'Bagelwood',
				'address': "106, rue des canards",
				'distance': '1000',
				'ranking': '2'
			},
			{
				'id': 3,
				'img': 'restaurants03.jpg',
				'title': 'Bowl',
				'address': "106, impasse paul brousse",
				'distance': '430',
				'ranking': '4'
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
								<img src="/clock-logo.png" />
							</div>
						</div>
					}
					{this.state.openMenu && <Menu />}
					<div className="Content">
						<Title text="Explore" style="ExploreTitle"/>
						<SearchBar />
						{(this.state.content == 'explore') &&
							<CardsListRow
								title="Markets"
								viewAll={this.changeContent}
								changeContent="markets"
								items={markets}
							/>}
						{(this.state.content == 'explore') &&
							<CardsListRow
								title="Restaurants"
								viewAll={this.changeContent}
								changeContent="restaurant"
								items={restaurants}
							/>}
						{(this.state.content == 'restaurant') &&
							<CardsListColumn
								title="Restaurants"
								items={restaurants}
							/>}
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
