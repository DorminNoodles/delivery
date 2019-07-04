import React, { useState } from 'react';

import Header from 'components/Header/Header';
import Menu from 'containers/Menu/Menu';


const WithMenu = (Component) => {
	const newComponentWithMenu = () => (
		<div>
			<div>
				<Menu />
				<Header openMenu={setOpenMenu(true)}/>
				<Component />
			</div>
		</div>
	);
	return newComponentWithMenu;
}

export default WithMenu;
