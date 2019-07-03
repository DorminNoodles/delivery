import React, { Component } from 'react';

import Title from 'components/Title';
import PreviousButton from 'components/PreviousButton';
import Button from 'components/Button';

class NoMatch extends Component {

	constructor (props) {
		super(props);

	}



	render() {

		return (
			<div className="ForgotPassword">
				<div>
					404
				</div>
			</div>
		)
	}

}

export default NoMatch;
