import React from 'react';


const StarIcon = (props) => {

	return (
		<div className="StarIcon">
			{(props.style == "blank") && <img src="starIconBlank.png" />}
			{(props.style != "blank") && <img src="starIcon.png" />}
		</div>
	);

}

export default StarIcon;
