import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import OnBoardingTitle from 'components/OnBoardingTitle/OnBoardingTitle';
import Button from 'components/Button';

import styles from './Signin.module.css';


class Signin extends Component {

	constructor (props) {
		super(props);

		this.state = {
			'classEmail': '',
			'classPassword': '',
			'password': '',
			'email': '',
			'passwordType': 'password'
		};
	}

	anim () {
		console.log("test anim");
	}

	// handleChange (event) {
	// 	console.log(event.target.value);
	// 	if (this.checkEmail(event.target.value)) {
	// 		this.setState({
	// 			'emailClass': 'is-valid'
	// 		});
	// 	}
	// }

	handleChange = (event) => {
		let valid = {};

		// console.log(event.target.name);

		this.setState({
			[event.target.name]: event.target.value
		}, () => {
			this.checkValues();
		})



	}

	checkValues = () => {
		console.log("Eeeeyhe");

		let check = {};

		check.classEmail = this.checkEmail(this.state.email);
		check.classPassword = this.checkPassword(this.state.password);
		this.setState(check);
	}

	checkPassword = (password) => {
		if (password == '')
			return '';
		if (password.length > 5)
			return 'is-valid';
		else
			return 'is-invalid';
	}

	checkEmail = (email) => {
		if (email == '')
			return '';
		if (email.length > 5)
			return 'is-valid';
		else
			return 'is-invalid';
	}

	showPassword = () => {
		if (this.state.passwordType == 'password') {
			this.setState({
				'passwordType': 'text'
			});
		}
		else {
			this.setState({
				'passwordType': 'password'
			});
		}
	}


	render() {

		return (
			<div className="Signin">
				<OnBoardingTitle>Sign In</OnBoardingTitle>
				<div className="forgot">
					<Link to="/forgotPassword">Forgot password?</Link>
				</div>
				<div className="Card">
					<input name="email" onChange={this.handleChange} type="email" className={'form-control ' + this.state.classEmail} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email or Phone" />
					<div className="input-group mb-3">
	  					<input name="password" onChange={this.handleChange} type={this.state.passwordType} className={'form-control ' + this.state.classPassword} placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						<div className="input-group-append">
		  					<button className="btn password-eye" type="button" onClick={this.showPassword}></button>
						</div>
					</div>
				</div>
				<div className="ButtonContainer">
					<Button link="explore" onClick={this.anim} text="Sign In" style="Button" />
				</div>
				<p>
					Don't have an account? <Link to="/signup">Sign Up</Link>
				</p>
				<div className="SeparateLine">
				</div>
				<div className="ButtonContainer">
					<Button link="null" text="Sign In with Google" img="logo-google-g.png" style="Button2"/>
				</div>
			</div>

		);
	}

}

export default Signin;


// <input name="password" onChange={this.handleChange} type="password" className={'form-control password-eye'} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
