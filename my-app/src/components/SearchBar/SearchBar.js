import React from 'react';
import styles from './SearchBar.module.css';


const SearchBar = () => {

	return (
		<div className={styles.SearchBar}>
			<img src="/magnifyingGlass.png" />
			<input type="text" placeholder="Search"/>
			<img src="/optionsIcone2.png" />
		</div>
	);
}

export default SearchBar;
