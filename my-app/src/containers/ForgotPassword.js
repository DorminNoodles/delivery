import React, { Component } from 'react';

import Title from 'components/Title';
import PreviousButton from 'components/PreviousButton';
import Button from 'components/Button';

class ForgotPassword extends Component {

	constructor (props) {
		super(props);

	}

	handleChange = () => {
		console.log("HEY");
	}

	render() {

		return (
			<div className="ForgotPassword">
				<PreviousButton />
				<Title title="Forgot Password?" />
				<div className="Card">
					<input name="email" onChange={this.handleChange} type="email" className={'form-control '} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email or Phone" />
				</div>
				<div className="BtnContainer">
					<Button style="Button" to=" " text="Send" />
				</div>
			</div>
		)
	}

}

export default ForgotPassword;
