import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './containers/Home/Home';
import Signin from './containers/Signin';

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
		</Router>
	);
}

export default AppRouter;
