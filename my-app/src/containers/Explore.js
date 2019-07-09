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
		}

		let db = firebase.firestore();
		const myPost = db.collection('restaurants');

		let tmp = [];


		//get all restaurant from firebase
		myPost.get()
		.then(docs => {
			console.log("Hello");
			docs.forEach((doc) => {
				tmp.push(doc.data());
			})
			console.log(tmp);
			this.setState({'restaurants': tmp});
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


		// if (this.state.openMenu === false) {
		// 	this.setState({
		// 		'exploreClass': 'ExploreClose',
		// 		'openMenu': true,
		// 		'headerOpen': false
		// 	});
		// }
		// else {
		// 	this.setState({
		// 		'exploreClass': 'ExploreOpen',
		// 		'openMenu': false,
		// 		'headerOpen': true
		// 	});
		// }
	}

	changeContent = (e) => {
		console.log("hey", e);
		this.setState({
			'content': e
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
				'distance': '75'
			},
			{
				'img': 'market02.jpg',
				'title': 'Vegan Food',
				'address': '132, rue des champs',
				'distance': '800'
			}
		];

		return (
			<div className="PagesLayout">
				{this.state.openMenu && <Menu />}
				<div className={(this.state.openMenu) ? "LayoutContentClose" : "LayoutContent"}>
					<Header openMenu={this.openMenu} />
					<CardsListRow items={this.state.restaurants}/>
				</div>
			</div>
		)
	}
}

export default Explore;

// <div className={this.state.exploreClass}>
// 	{this.state.openMenu && <Menu />}
// 	<div>
// 		<div className="Content">
// 			<Header openMenu={this.openMenu}/>
// 			{(this.state.content == 'explore') &&
// 				<CardsListRow
// 					title="Markets"
// 					viewAll={this.changeContent}
// 					changeContent="markets"
// 					items={markets}
// 				/>}
// 			{(this.state.content == 'explore') &&
// 				<CardsListRow
// 					title="Restaurants"
// 					viewAll={this.changeContent}
// 					changeContent="restaurant"
// 					items={this.state.restaurants}
// 				/>}
// 			{(this.state.content == 'restaurant') &&
// 				<CardsListColumn
// 					title="Restaurants"
// 					items={this.restaurants}
// 				/>}
// 		</div>
// 		<DownMenu />
// 	</div>
// </div>



// ,
// {
// 	'img': 'restaurants02.jpg',
// 	'title': 'Bagel Food',
// 	'address': '132, rue des champs',
// 	'distance': '800'
// }
