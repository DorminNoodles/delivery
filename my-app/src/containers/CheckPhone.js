import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title/Title';
import Button from 'components/Button';
import PreviousButton from 'components/PreviousButton';


class CheckPhone extends Component {

	constructor(props) {
		super(props);

		this.state = {
			'currentSquare': 1,
			'number1': '',
			'number2': '',
			'number3': '',
			'number4': ''
		};
	}

	componentDidMount() {
		let input = document.getElementById('number1');
		input.focus();
		input.select();
	}

	handleInputNumber = (event) => {
		// let currentSquare = this.state.currentSquare + 1;

		let currentSquare = parseInt(event.target.id[6]);

		console.log('CS >', currentSquare);

		console.log(event.target.value);
		console.log(event.target.id);


		if (currentSquare + 1 < 5) {
			this.setState({
				[event.target.id]: event.target.value
			});
			if (event.target.value != '') {
				let input = document.getElementById('number' + (currentSquare + 1));
				input.focus();
				input.select();
			}
		}
	}

	testo(e) {
		console.log("heyhey");
	}

	render() {
		return (

			<div className="CheckNumber">
				<PreviousButton link="/signup"/>
				<Title text="Verify Your Number" />
				<div className="SquareContainer" >
					<div className="Square">
						<input id="number1" type="tel" maxLength="1" onChange={this.handleInputNumber} />
					</div>
					<div className="Square">
						<input id="number2" type="tel" maxLength="1" onChange={this.handleInputNumber} />
					</div>
					<div className="Square">
						<input id="number3" type="tel" maxLength="1" onChange={this.handleInputNumber} />
					</div>
					<div className="Square">
						<input id="number4" type="tel" maxLength="1" onChange={this.handleInputNumber} />
					</div>
				</div>
				<div className="ButtonContainer">
					<Button style="Button" text='Verify Now' />
				</div>
				<p>
					<Link to="">Resend confirmation code (1:08)</Link>
				</p>
			</div>

		)
	}

}

export default CheckPhone;
