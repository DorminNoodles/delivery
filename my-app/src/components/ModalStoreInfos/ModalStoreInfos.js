import React from 'react';
import { Link } from 'react-router-dom';


import Title from 'components/Title/Title';
import StarIcon from 'components/StarIcon';

import styles from './ModalStoreInfos.module.css';

const ModalStoreInfos = (props) => {

	console.log('NASA ', props);

	// let stars = props.ranking.map((el) => {
	//
	// })

	let stars = [];

	for (let i = 0; i < 5; i++) {
		console.log("hey");
		stars.push(
			<div key={i}>
				{props.ranking <= i &&
					<StarIcon blank/>
				}
				{props.ranking > i &&
					<StarIcon />
				}
			</div>
		);
	}



	return (
		<div className={styles.ModalStoreInfos}>
			<div className={styles.StoreName}>
				<img src={'/' + props.logo} />
				<Title>{props.name}</Title>
			</div>
			<div className={styles.SeparateLine} />
			<div className={styles.Ranking}>
				<div className={styles.Stars}>
					{stars}
					<span>4,9 (268)</span>
				</div>
				<div className={styles.AllReviews}>
					<Link to=''>All Reviews</Link>
				</div>
			</div>
			<div className={styles.Infos}>
				<div className={styles.Address}>
					<img src="/locationIcon.png" />
					<span>{props.address.substring(0, 12) + '...'}</span>
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
			<div className={styles.SeparateLine} />
		</div>
	);
}

export default ModalStoreInfos;
