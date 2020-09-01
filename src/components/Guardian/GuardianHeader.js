import React from 'react';
import classes from './GuardianHeader.module.css';

const GuardianHeader = (props) => {
	return (
		<div className={classes.Header}>
			<h1>Guardian</h1>
			<p>Search for articles from the guardian!</p>
			<div className={classes.SearchContainer}>
				<input
					type="search"
					name="search"
					value={props.searchString}
					onChange={(e) => props.setSearch(e.target.value)}
				/>
				<button type="submit" onClick={props.search}>
					Search
				</button>
			</div>
		</div>
	);
};

export default GuardianHeader;
