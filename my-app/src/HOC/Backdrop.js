import React, { useState } from 'react';

const Backdrop = (WrappedComponent) => (props) => {

	let NewComponent = () => {

		const [active, setActive] = useState(false);

		return (
			<div className="Backdrop">
				<WrappedComponent {...props}/>
			</div>
		);
	}

	return <NewComponent />;
};

export default Backdrop;
