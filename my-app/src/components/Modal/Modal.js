import React from 'react';

import Backdrop from 'HOC/Backdrop';

import styles from './Modal.module.css';

const Modal = (props) => {

	return (
		<div className={styles.Modal}>
			{props.children}
		</div>
	);

}

export default Backdrop(Modal);
