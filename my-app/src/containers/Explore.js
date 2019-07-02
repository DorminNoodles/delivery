import React, { Component } from 'react';

import * as firebase from 'firebase';

import AddressHeader from 'components/AddressHeader';
import CardsListRow from 'components/CardsListRow';
import CardsListColumn from 'components/CardsListColumn';
import BurgerButton from 'components/BurgerButton';
import SearchBar from 'components/SearchBar';
import DownMenu from 'components/DownMenu';
import Markets from 'components/Markets';
import Title from 'components/Title';
import Menu from 'containers/Menu';

const firebaseConfig = {
	apiKey: "AIzaSyAOlDqnHmfEEmtvIuLw3iXlkUQBF2TdCZY",
	authDomain: "pouet-d0726.firebaseapp.com",
	databaseURL: "https://pouet-d0726.firebaseio.com",
	projectId: "pouet-d0726",
	storageBucket: "pouet-d0726.appspot.com",
	messagingSenderId: "563615870536",
	appId: "1:563615870536:web:2468203809723a33"
};

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

		let app = firebase.initializeApp(firebaseConfig);
		let db = firebase.firestore();
		const myPost = db.collection('restaurants');

		let tmp = [];

		myPost.get()
		.then(docs => {
			console.log("Hello");
			docs.forEach((doc) => {
				tmp.push(doc.data());
			})
			// console.log("hey");
			console.log(tmp);
			this.setState({'restaurants': tmp});
		})
		.catch((error) => {
			console.log("Error getting documents: ", error);
		});

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
								items={this.state.restaurants}
							/>}
						{(this.state.content == 'restaurant') &&
							<CardsListColumn
								title="Restaurants"
								items={this.restaurants}
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
