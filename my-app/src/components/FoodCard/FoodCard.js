import React from 'react';

import BuyButton from 'components/BuyButton/BuyButton';

import styles from './FoodCard.module.css';


const FoodCard = (props) => {

	return (
		<div className={styles.FoodCard}>
				<div className={styles.CardImg}>
					<img src={'/' + props.img} />
				</div>
				<div className={styles.CardText}>
					<div className={styles.Title}>
						{props.title}
					</div>
					<div className={styles.Description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu commodo leo. Integer tristique imperdiet sapien, quis ultrices metus viverra id.
					</div>
					<div className={styles.Bottom}>
						<div className={styles.Price}>
							9.89$
						</div>
						<div className={styles.Buy}>
							<BuyButton />
						</div>
					</div>
				</div>
		</div>
	)
}

export default FoodCard;
