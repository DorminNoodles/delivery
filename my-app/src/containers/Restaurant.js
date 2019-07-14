import React, { Component } from 'react';

import AddressHeader from 'components/AddressHeader';
import CardsListRow from 'components/CardsListRow';
import CardsListColumn from 'components/CardsListColumn';
import SearchBar from 'components/SearchBar/SearchBar';
import RestaurantHeader from 'components/RestaurantHeader/RestaurantHeader';
import DownMenu from 'components/DownMenu';
import Markets from 'components/Markets';
import Title from 'components/Title/Title';
import Menu from 'containers/Menu/Menu';
import * as firebase from 'firebase';
import Firebase from '../Firebase';
import Backdrop from 'HOC/Backdrop';


import Card from 'components/Card/Card';
import FoodCard from 'components/FoodCard/FoodCard';
import FoodCardsListColumn from 'components/FoodCardsListColumn/FoodCardsListColumn';
import Summary from 'components/Summary/Summary';
import Modal from 'components/Modal/Modal';

import ModalStoreInfos from 'components/ModalStoreInfos/ModalStoreInfos';


class Restaurant extends Component {

	constructor(props) {
		super(props);

		this.state = {
			'openMenu': false,
			'exploreClass': 'ExploreOpen',
			'headerOpen': true,
			'content': 'explore',
			'products': [],
			'tab': 'Popular',
			'openInfos': false,
			'infos': {}
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

		db.collection('markets')
		.doc('2quIqsgYumq67d9fNJN5').get().
		then(docs => {

			console.log(docs.data());
			this.setState({
				'infos': docs.data()
			})
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

	openInfos = () => {
		this.setState({'openInfos': !this.state.openInfos});
	}

	render () {
		return (
			<div className="PagesLayout">

				{this.state.openInfos &&
					<Modal>
						<ModalStoreInfos
							logo={this.state.infos.logo}
							name={this.state.infos.name}
							ranking={this.state.infos.rank}
							address={this.state.infos.address}
						/>
					</Modal>
				}
				{this.state.openMenu && <Menu />}
				<div className={(this.state.openMenu) ? "LayoutContentClose" : "LayoutContent"}>
					<RestaurantHeader
						openMenu={this.openMenu}
						onClick={this.openInfos}
						logo={this.state.infos.logo}
						name={this.state.infos.name}
					/>
					<Summary active={this.state.tab} changeTab={this.changeTab}/>
					<FoodCardsListColumn items={this.state.products} />
				</div>
			</div>
		);
	}
}

export default Restaurant;
