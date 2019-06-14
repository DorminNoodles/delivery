import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './containers/Home/Home';
import Signin from './containers/Signin';
import ForgotPassword from './containers/ForgotPassword';
import Signup from './containers/Signup';
import CheckPhone from './containers/CheckPhone';
import Explore from './containers/Explore';
import Restaurants from './containers/Restaurants';

const Test = () => {
	return (
		<div>
			test de merde
		</div>
	);
}

const AppRouter = () => {
	return (
		<Router>
			<div>
			</div>

			<Route path="/" exact component={Home} />
			<Route path="/test" component={Test} />
			<Route path="/signin" component={Signin} />
			<Route path="/signup" component={Signup} />
			<Route path="/forgotPassword" component={ForgotPassword} />
			<Route path="/checkPhone" component={CheckPhone} />
			<Route path="/Explore" component={Explore} />
			<Route path="/restaurants/:id" component={Restaurants} />
		</Router>
	);
}

export default AppRouter;
