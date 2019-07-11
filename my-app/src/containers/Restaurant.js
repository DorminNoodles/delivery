import React, { Component } from 'react';

import AddressHeader from 'components/AddressHeader';
import CardsListRow from 'components/CardsListRow';
import CardsListColumn from 'components/CardsListColumn';
import SearchBar from 'components/SearchBar/SearchBar';
import RestaurantHeader from 'components/RestaurantHeader/RestaurantHeader';
import DownMenu from 'components/DownMenu';
import Markets from 'components/Markets';
import Title from 'components/Title';
import Menu from 'containers/Menu/Menu';
import * as firebase from 'firebase';
import Firebase from '../Firebase';
import Backdrop from 'HOC/Backdrop';


import Card from 'components/Card/Card';
import FoodCard from 'components/FoodCard/FoodCard';
import FoodCardsListColumn from 'components/FoodCardsListColumn/FoodCardsListColumn';
import Summary from 'components/Summary/Summary';


class Restaurant extends Component {

	constructor(props) {
		super(props);

		this.state = {
			'openMenu': false,
			'exploreClass': 'ExploreOpen',
			'headerOpen': true,
			'content': 'explore',
			'products': [],
			'tab': 'Popular'
		}

		let db = firebase.firestore();


		db.collection('markets')
		.doc('2quIqsgYumq67d9fNJN5').collection('products').get().
		then(docs => {
			let tmp = [];

			docs.forEach((doc => {
				console.log(doc.data());
				tmp.push(doc.data());
			}))
			this.setState({'products': tmp});
		})

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

	changeTab = (e) => {
		this.setState({'tab': e});
	}

	render () {

		return (
			<div className="PagesLayout">
				{this.state.openMenu && <Menu />}
				<div className={(this.state.openMenu) ? "LayoutContentClose" : "LayoutContent"}>
					<RestaurantHeader openMenu={this.openMenu} onClick={() => this.props.backdrop(true)} />
					<Summary active={this.state.tab} changeTab={this.changeTab}/>
					<FoodCardsListColumn items={this.state.products} />
				</div>
			</div>
		);
	}
}

export default Backdrop(Restaurant);
