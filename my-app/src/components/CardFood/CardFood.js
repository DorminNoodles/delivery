import React from 'react';

import BuyButton from 'components/BuyButton/BuyButton';

import styles from './CardF.module.css';


const CardF = (props) => {

	return (
		<div className={styles.CardF}>
				<div className={styles.CardImg}>
					<img src={props.img} />
				</div>
				<div className={styles.CardText}>
					<div className={styles.Title}>
						Tortellini Soup
					</div>
					<div className={styles.Description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu commodo leo. Integer tristique imperdiet sapien, quis ultrices metus viverra id. Ut eu orci ut quam ultricies pharetra.
					</div>
					<div className={styles.Price}>
						9.89$
					</div>
					<div>
						<BuyButton />
					</div>
				</div>
		</div>
	)
}

export default CardF;
