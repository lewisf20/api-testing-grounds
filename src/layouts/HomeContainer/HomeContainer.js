import React from 'react';
import classes from './HomeContainer.module.css';
import { Link } from 'react-router-dom';

const HomeContainer = (props) => {
	return (
		<div className={classes.HomeContainer}>
			<h1>Made By Lewis Frater</h1>
			<p className={classes.projectDetail}>
				This ReactJS web application has been created to test different APIs on
				the internet.
			</p>

			<div>
				<h2>List of Current APIs</h2>
				<ul>
					<li>
						<Link to="/guardian">Guardian API</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomeContainer;
