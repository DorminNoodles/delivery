import React, { useState } from 'react';

import Header from 'components/Header/Header';
import Menu from 'containers/Menu/Menu';


const WithMenu = (Content) => {


	const newComponentWithMenu = () => (
		<div>
			<div>
				<Menu />
				<Header/>
				<Content />
			</div>
		</div>
	);
	return newComponentWithMenu;
}

export default WithMenu;
