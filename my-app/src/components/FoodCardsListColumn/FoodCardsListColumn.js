import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import Firebase from '../../Firebase';
import FoodCard from 'components/FoodCard/FoodCard';

import styles from './FoodCardsListColumn.module.css';


const FoodCardsListColumn = (props) => {

	let items;

	if (props.items) {
		items = props.items.map((item, index) => {
			return (
				<FoodCard
					title={item.name}
					img={item.img}
				/>
			)
		})

	}


	return (
		<div className={styles.FoodCardsListColumn}>
			{items}
		</div>
	);

}


export default FoodCardsListColumn;
