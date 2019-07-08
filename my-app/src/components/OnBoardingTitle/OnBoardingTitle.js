import React from 'react';

import styles from './OnBoardingTitle.module.css';

const OnBoardingTitle = (props) => {
	return (
		<div className={styles.OnBoardingTitle}>
			<h1>{props.children}</h1>
		</div>
	);
};

export default OnBoardingTitle;
