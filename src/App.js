import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import classes from './App.module.css';

import Navigation from './components/UI/Navigation/Navigation';

function App() {
	return (
		<Router>
			<div className={classes.App}>
				<Navigation />
			</div>
		</Router>
	);
}

export default App;
