import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import classes from './App.module.css';

import Home from './layouts/HomeContainer/HomeContainer';
import Guardian from './layouts/GuardianContainer/GuardianContainer';
import Article from './components/Guardian/Article';

function App() {
	return (
		<Router>
			<div className={classes.App}>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/guardian/:id">
						<Article />
					</Route>
					<Route exact path="/guardian">
						<Guardian />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
