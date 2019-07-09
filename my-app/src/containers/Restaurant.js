import React, { Component } from 'react';

import AddressHeader from 'components/AddressHeader';
import CardsListRow from 'components/CardsListRow';
import CardsListColumn from 'components/CardsListColumn';
import SearchBar from 'components/SearchBar/SearchBar';
import DownMenu from 'components/DownMenu';
import Markets from 'components/Markets';
import Title from 'components/Title';
import Menu from 'containers/Menu/Menu';

import Card from 'components/Card/Card';
import FoodCard from 'components/FoodCard/FoodCard';


class Restaurant extends Component {

	constructor(props) {
		super(props);

		this.state = {
			'openMenu': false,
			'exploreClass': 'ExploreOpen',
			'headerOpen': true,
			'content': 'explore'
		}
	}

	componentDidMount() {
		const { id } = this.props.match.params
		console.log('here >', id);
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

		return (
			<div className={this.state.exploreClass}>
				<div>
					{(this.state.headerOpen) &&
						<div className="ContentHeader">
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
					</div>

					<DownMenu />

					<FoodCard
						img='/TortelliniSoup.jpg'
					/>

				</div>
			</div>
		)
	}

}

export default Restaurant;


// ,
// {
// 	'img': 'restaurants02.jpg',
// 	'title': 'Bagel Food',
// 	'address': '132, rue des champs',
// 	'distance': '800'
// }
