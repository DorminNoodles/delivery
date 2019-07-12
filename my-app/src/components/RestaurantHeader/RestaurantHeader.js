import React from 'react';

import SearchBar from 'components/SearchBar/SearchBar';
import BurgerButton from 'components/BurgerButton/BurgerButton';
import AddressHeader from 'components/AddressHeader';
import Title from 'components/Title';
import StarIcon from '../StarIcon';

import styles from './RestaurantHeader.module.css';


const RestaurantHeader = (props) => {

	return (
		<div className={styles.Header}>
			<div className={styles.TopBar}>
				<BurgerButton onClick={props.openMenu} />
				<AddressHeader />
				<div className={styles.ClockLogo}>
					<img src="/clock-logo.png" />
				</div>
			</div>
			<div className={styles.RestaurantInfos} onClick={props.onClick}>
				<div className={styles.Name}>
					<div className={styles.Logo}>
						<img src={'/' + props.logo} />
					</div>
					<Title style={styles.Name}>{props.name}</Title>
				</div>
				<div className={styles.Separator} />
				<div className={styles.SubInfos}>
					<div className={styles.HeaderRanking}>
						<StarIcon />
						<span>4,9 (268)</span>
					</div>
					<div className={styles.OrderLimit}>
						<img src="/basketIcon.png" />
						<span>Order From 10$</span>
					</div>
					<div className={styles.Shipping}>
						<img src="/truckIcon.png" />
						<span>Free Shipping</span>
					</div>
				</div>
			</div>
			<div className={styles.SearchBarContainer}>
				<SearchBar />
			</div>
		</div>
	);
}

export default RestaurantHeader;
