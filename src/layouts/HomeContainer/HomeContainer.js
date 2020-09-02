import React from 'react';
import classes from './HomeContainer.module.css';

const HomeContainer = (props) => {
	return (
		<div className={classes.HomeContainer}>
			<h1>Home</h1>
			<p>This Web App has been created to test out different API's.</p>
		</div>
	);
};

export default HomeContainer;
