import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import classes from './Navigation.module.css';
//Import components
import Home from '../../../layouts/HomeContainer/HomeContainer';
import Guardian from '../../../layouts/GuardianContainer/GuardianContainer';
import Article from '../../Guardian/Article';
import { useState } from 'react';

const Navigation = (props) => {
	const [title, setTitle] = useState('API Testing Grounds');

	return (
		<>
			<nav className={classes.Navigation}>
				<li className={classes.link}>
					<Link to="/"> Home </Link>
				</li>
				<h1>{title}</h1>
			</nav>
			<Switch>
				<Route path="/guardian/:id">
					<Article />
				</Route>
				<Route exact path="/guardian">
					<Guardian title={setTitle} />
				</Route>
				<Route exact path="/">
					<Home title={setTitle} />
				</Route>
			</Switch>
		</>
	);
};

export default Navigation;
