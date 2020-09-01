import React from 'react';
import classes from './GuardianArticle.module.css';
const GuardianArticle = (props) => {
	return (
		<div className={classes.GuardianArticle}>
			<h3>
				<a href={props.url} target="_blank" rel="noopener noreferrer">
					{props.title}
				</a>
			</h3>
			<p className={classes.tag}>{props.tag}</p>
			<p className={classes.date}>{new Date(props.date).toDateString()}</p>
		</div>
	);
};

export default GuardianArticle;
