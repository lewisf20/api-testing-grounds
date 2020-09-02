import React from 'react';
import classes from './index.module.css';

const GuardianArticle = (props) => {
	const content = (
		<div className={classes.GuardianArticle}>
			<img src={props.thumbnail} alt="header thumbnail" />
			<h3>{props.title}</h3>
			{/* <p className={classes.tag}>{props.tag}</p> */}
			<p className={classes.date}>{new Date(props.date).toDateString()}</p>
		</div>
	);

	return <>{content}</>;
};

export default GuardianArticle;
