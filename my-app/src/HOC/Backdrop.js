import React, { useState } from 'react';


const Backdrop = (WrappedComponent, Modal) => (props) => {



	let NewComponent = () => {

		const [active, setActive] = useState(false);

		const fuck = (e) => {
			console.log("HELLO");
			console.log(e);
		}

		return (
			<div>
				{active &&
					<div className="Backdrop">
						<Modal />
					</div>
				}
				<WrappedComponent backdrop={setActive} />
			</div>
		);
	}

	return <NewComponent />;
};


export default Backdrop;
