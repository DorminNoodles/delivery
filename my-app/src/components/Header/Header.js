import React from 'react';

import SearchBar from 'components/SearchBar/SearchBar';
import BurgerButton from 'components/BurgerButton';
import AddressHeader from 'components/AddressHeader';
import Title from 'components/Title';



const Header = (props) => {

	return (
		<div>
			<div className="ContentHeader">
				{true && <BurgerButton onClick={props.openMenu} />}
				<AddressHeader />
				<div>
					<img src="/clock-logo.png" />
				</div>
			</div>
			<div className="Content">
				{props.title &&
					<Title style="ExploreTitle">{props.title}</Title>}
				<SearchBar />
			</div>
		</div>
	);
}

export default Header;
