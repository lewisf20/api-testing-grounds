import React, { useEffect } from 'react';
import classes from './index.module.css';

const GuardianHeader = (props) => {
	return (
		<div className={classes.Header}>
			<p>Search for articles from the guardian!</p>
			<div className={classes.SearchContainer}>
				<input
					type="search"
					name="search"
					value={props.searchString}
					onChange={(e) => props.setSearch(e.target.value)}
					onKeyPress={(e) => props.handleKeyPress(e.key)}
				/>

				<button
					type="submit"
					onClick={() => {
						props.setLoading(true);
						props.search();
					}}
				>
					Search
				</button>
				<p>How many results?</p>
				<input
					type="number"
					name="number-results"
					placeholder="10"
					className={classes.NumberInput}
					max={50}
					min={1}
					onChange={(e) => props.setPages(e.target.value)}
					value={props.pages}
				/>
			</div>
		</div>
	);
};

export default GuardianHeader;
