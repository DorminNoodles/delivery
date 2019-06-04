import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Title from 'components/Title';
import Button from 'components/Button';


class Signup extends Component {

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

			<div className="Signup">
				<Title title="Sign Up"/>
				<div className="forgot">
					<Link to="/forgotPassword">Forgot password?</Link>
				</div>
				<div className="Card">
					<input name="email" onChange={this.handleChange} type="email" className={'form-control ' + this.state.classEmail} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
					<input name="email" onChange={this.handleChange} type="email" className={'form-control ' + this.state.classEmail} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Phone Number" />
					<input name="email" onChange={this.handleChange} type="email" className={'form-control ' + this.state.classEmail} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location" />
					<input name="email" onChange={this.handleChange} type="email" className={'form-control ' + this.state.classEmail} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
				</div>
				<div className="ButtonContainer">
					<Button onClick={this.anim} text="Sign In" style="Button" />
				</div>
				<div className="SeparateLine">
				</div>
				<div className="ButtonContainer">
					<Button to="null" text="Sign In with Google" img="logo-google-g.png" style="Button2"/>
				</div>
			</div>

		);
	}

}

export default Signup;


// <input name="password" onChange={this.handleChange} type="password" className={'form-control password-eye'} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
