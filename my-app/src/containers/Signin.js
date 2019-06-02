import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Title from 'components/Title';
import Button from 'components/Button';


class Signin extends Component {

	anim () {
		console.log("test anim");
	}


	render() {

		return (

			<div className="Signin">
				<Title title="Sign In"/>
				<div className="forgot">
					<Link to="/forgotPassword">Forgot password?</Link>
				</div>
				<div className="Card">
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email or Phone" />
					<input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
				</div>
				<div className="ButtonContainer">
					<Button onClick={this.anim} text="Sign In" style="Button" />
				</div>
				<p>
					Don't have an account? <Link to="/pouet">Sign Up</Link>
				</p>
				<div className="SeparateLine">
				</div>
				<div className="ButtonContainer">
					<Button text="Sign In with Google" img="logo-google-g.png" style="Button2"/>
				</div>
			</div>

		);
	}

}

export default Signin;
