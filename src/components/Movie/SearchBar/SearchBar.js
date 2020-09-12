import React, { useState } from 'react';
import classes from './SearchBar.module.css';

import { TextField, Button } from '@material-ui/core';

const SearchBar = (props) => {
	const [error, setError] = useState(false);

	let textField = (
		<TextField
			id="outlined-basic"
			label="Search"
			variant="outlined"
			value={props.searchString}
			onChange={(e) => props.setSearchString(e.target.value)}
			onKeyPress={(e) => props.handleKeyPress(e.key)}
		/>
	);
	if (error)
		textField = (
			<TextField
				id="outlined-basic"
				error
				label="Search"
				helperText="Enter at least 1 character"
				variant="outlined"
				value={props.searchString}
				onChange={(e) => props.setSearchString(e.target.value)}
				onKeyPress={(e) => props.handleKeyPress(e.key)}
			/>
		);
	return (
		<div className={classes.searchBar}>
			{textField}
			<Button
				color="primary"
				variant="contained"
				onClick={() => {
					if (props.searchString === '') {
						setError(true);
					} else {
						props.search();
					}
				}}
			>
				Search
			</Button>
		</div>
	);
};

export default SearchBar;
