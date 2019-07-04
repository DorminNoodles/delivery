import React from 'react';


import WithMenu from 'HOC/WithMenu';

const TestHoc = (props) => {

	return (
		<div>
			Hello dogs
		</div>
	);
}

export default WithMenu(TestHoc);
