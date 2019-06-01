import React from 'react';
import logo from './logo.svg';
import './App.css';

import Signin from './containers/Signin';
import Home from './containers/Home/Home';

import AppRouter from './AppRouter';

function App() {
  return (
		<AppRouter />
  );
}

export default App;
