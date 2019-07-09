import React, { Component } from 'react';

import AddressHeader from 'components/AddressHeader';
import CardsListRow from 'components/CardsListRow';
import CardsListColumn from 'components/CardsListColumn';
import SearchBar from 'components/SearchBar/SearchBar';
import DownMenu from 'components/DownMenu';
import Markets from 'components/Markets';
import Title from 'components/Title';
import Menu from 'containers/Menu/Menu';
import Header from 'components/Header/Header';

import BigCard from 'components/Card/CardsBig';



class Restaurants extends Component {

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

				<Header />

					<BigCard
						img='/restaurants01.jpg'
						title='Sushiland'
						distance='72m'
						address='125, rue du commerce'
					/>

					<DownMenu />

			</div>
		)
	}

}

export default Restaurants;


// ,
// {
// 	'img': 'restaurants02.jpg',
// 	'title': 'Bagel Food',
// 	'address': '132, rue des champs',
// 	'distance': '800'
// }
