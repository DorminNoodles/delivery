import React from 'react';


import styles from './Summary.module.css';


const Summary = (props) => {

	let categories = [
		'Popular',
		'Salads',
		'Soup',
		'Hot Meals',
		'Something'
	];

	let tabs = categories.map((el, index) => {

		let css = '';


		if (props.active === el)
			css = styles.Active;

		return (
			<div
				key={index}
				className={css}
				onClick={() => props.changeTab(el)}>
				{el}
			</div>
		)
	})


	return (
		<div className={styles.Summary}>
			{tabs}
		</div>
	);

}

export default Summary;
