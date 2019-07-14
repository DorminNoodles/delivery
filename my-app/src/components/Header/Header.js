import React from 'react';

import SearchBar from 'components/SearchBar/SearchBar';
import BurgerButton from 'components/BurgerButton/BurgerButton';
import AddressHeader from 'components/AddressHeader';
import Title from 'components/Title/Title';

import styles from './Header.module.css';



const Header = (props) => {

	return (
		<div className={styles.Header}>
			<div className={styles.TopBar}>
				<BurgerButton onClick={props.openMenu} />
				<AddressHeader />
				<div className={styles.ClockLogo}>
					<img src="/clock-logo.png" />
				</div>
			</div>
			{props.title &&
				<Title class={styles.Title}>{props.title}</Title>}
			<div className={styles.SearchBarContainer}>
				<SearchBar />
			</div>
		</div>
	);
}

export default Header;
