import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import classes from './App.module.css';

import Home from './layouts/HomeContainer/HomeContainer';
import Guardian from './layouts/GuardianContainer/GuardianContainer';

function App() {
	return (
		<Router>
			<div className={classes.App}>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/guardian">Guardian</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/guardian">
						<Guardian />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
