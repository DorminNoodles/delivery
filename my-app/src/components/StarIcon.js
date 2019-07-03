import React from 'react';


const StarIcon = (props) => {

	return (
		<div className="StarIcon">
			{(props.blank) && <img src="/starIconBlank.png" />}
			{(!props.blank) && <img src="/starIcon.png" />}
		</div>
	);

}

export default StarIcon;
