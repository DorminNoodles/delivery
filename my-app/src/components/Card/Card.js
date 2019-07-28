import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title/Title';
import StarIcon from 'components/StarIcon';

import styles from './Card.module.css';


const CardsBig = (props) => {


	console.log('heyr', styles.Bob);

	let ranking = [];

	for (let i = 0; i < 5; i++) {
		if (i < props.ranking)
			ranking.push(<StarIcon key={i} style="" />);
		else
			ranking.push(<StarIcon key={i} blank />);

	}

	return (
		<div>
			<Link to={props.link}>
				<div className={styles.Card}>
					<div className={styles.CardImg}>
						<img src={props.img} />
					</div>
					<div className={styles.CardText}>
						<div className={styles.Header}>
							<div className={styles.Title}>
								{props.title}
							</div>
							<div className={styles.Distance}>
								{props.distance}
								<span>75 m</span>
							</div>
						</div>
						<div className={styles.Address}>
							{props.address}
						</div>
						<div className={styles.Ranking}>
							<StarIcon />
							<StarIcon />
							<StarIcon blank/>
							<StarIcon blank/>
							<StarIcon blank/>
							<span>4.9 (268)</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);

}

export default CardsBig;

// {(i > props.ranking) && <StarIcon key={i} style="blank" />}

// <div className="CardsBigImg">
// 	<img src={props.img} />
// </div>
//
// <div className="CardsBigDescription">
// 	<div className="CardsBigHeader">
// 		<Title style="CardsBigTitle" text={props.title} />
// 		<div className="CardsBigDistance">
// 			{props.distance} m
// 		</div>
// 	</div>
// 	<div className="CardsBigAddress">
// 		{props.address}
// 	</div>
// 	<div className="BigCardsRanking">
// 		{ranking}
// 	</div>
// </div>
// </div>
// </div>
