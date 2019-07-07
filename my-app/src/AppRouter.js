import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Signin from './containers/Signin';
import ForgotPassword from './containers/ForgotPassword';
import Signup from './containers/Signup';
import CheckPhone from './containers/CheckPhone';
import Explore from './containers/Explore';
import Restaurants from './containers/Restaurants';
import Restaurant from './containers/Restaurant';
import NoMatch from './containers/NoMatch';


// const AppRouter = () => {
// 	return (
// 		<div className="PagesLayout">
// 			HELLLLLLOOOOOO
// 		</div>
// 	);
// }

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
				<Route path="/forgotPassword" component={ForgotPassword} />
				<Route path="/checkPhone" component={CheckPhone} />
				<Route path="/explore" component={Explore} />
				<Route path="/restaurant/:id" component={Restaurant} />
				<Route path="/restaurants" exact component={Restaurants} />
				<Route component={NoMatch} />
			</Switch>
		</Router>
	);
}

export default AppRouter;
