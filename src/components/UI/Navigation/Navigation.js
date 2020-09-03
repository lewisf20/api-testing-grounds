import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import classes from './Navigation.module.css';

//Import components
import Home from '../../../layouts/HomeContainer/HomeContainer';
//Guardian API
import Guardian from '../../../layouts/GuardianContainer/GuardianContainer';
import Article from '../../Guardian/Article';
//Movie API
import MoviePage from '../../../layouts/MovieContainer/MovieContainer';
import MovieDetails from '../../Movie/MovieDetails/MovieDetails';

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
				<Route path="/movies/:id">
					<MovieDetails />
				</Route>
				<Route exact path="/movies">
					<MoviePage title={setTitle} />
				</Route>
				<Route exact path="/">
					<Home title={setTitle} />
				</Route>
			</Switch>
		</>
	);
};

export default Navigation;
