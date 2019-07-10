import React, { Component } from 'react';

import * as firebase from 'firebase';

import CardsListColumn from 'components/CardsListColumn';
import SearchBar from 'components/SearchBar/SearchBar';
import AddressHeader from 'components/AddressHeader';
import CardsListRow from 'components/CardsListRow';
import Header from 'components/Header/Header';
import DownMenu from 'components/DownMenu';
import Markets from 'components/Markets';
import Menu from 'containers/Menu/Menu';
import Title from 'components/Title';
import Firebase from '../Firebase';

import WithMenu from 'HOC/WithMenu';



class Explore extends Component {

	constructor(props) {
		super(props);

		this.state = {
			'openMenu': false,
			'exploreClass': 'ExploreOpen',
			'headerOpen': true,
			'content': 'explore',
			'restaurants': [],
			'markets': [],
			'viewAll': null,
		}

		let db = firebase.firestore();


		//get all restaurant from firebase
		db.collection('restaurants').get()
		.then(docs => {
			let tmp = [];

			docs.forEach((doc) => {
				//get doc.data with spread operator + firebase id
				tmp.push({
					...doc.data(),
					'id': doc.id
				});
			})
			this.setState({'restaurants': tmp});
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

		//get all markets from firebase
		db.collection('markets').get()
		.then(docs => {
			let tmp = [];

			docs.forEach((doc) => {
				tmp.push({
					...doc.data(),
					'id': doc.id
				});
			})
			this.setState({'markets': tmp});
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

	}

	openMenu = () => {
		console.log('OPEN MENU');
		console.log('OPEN MENU   ', this.state.openMenu);
		console.log('OPEN MENU   ', !this.state.openMenu);

		this.setState({
			'openMenu': !this.state.openMenu
		})
	}

	changeContent = (e) => {
		console.log("hey", e);
		this.setState({
			'content': e
		});
	}

	viewAll = (type) => {
		this.setState({
			'viewAll': type,
		});
	}

	render () {

		console.log('state => ', this.state);
		console.log("state => ", this.state.restaurants);

		let markets = [
			{
				'img': 'market01.jpg',
				'title': 'Vegetables',
				'address': "96, bd bessiere",
			},
			{
				'img': 'market02.jpg',
				'title': 'Vegan Food',
				'address': '132, rue des champs',
			}
		];

		return (
			<div className="PagesLayout">
				{this.state.openMenu && <Menu />}
				<div className={(this.state.openMenu) ? "LayoutContentClose" : "LayoutContent"}>
					<Header openMenu={this.openMenu} title="Explore" />

					{!this.state.viewAll &&
						<CardsListRow
							title="Markets"
							items={this.state.markets}
							viewAll={this.viewAll}
						/>
					}

					{!this.state.viewAll &&
						<CardsListRow
							title="Restaurants"
							items={this.state.restaurants}
							viewAll={this.viewAll}
						/>
					}

					{this.state.viewAll == 'Markets'
						&& <CardsListColumn title="Markets" items={this.state.markets}/>
					}

					{this.state.viewAll == 'Restaurants'
						&& <CardsListColumn title="Restaurants" items={this.state.restaurants}/>
					}

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
