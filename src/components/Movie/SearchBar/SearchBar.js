import React from 'react';
import classes from './SearchBar.module.css';

import { TextField, Button } from '@material-ui/core';

const SearchBar = (props) => {
	return (
		<div className={classes.searchBar}>
			<TextField
				id="outlined-basic"
				label="Search"
				variant="outlined"
				value={props.searchString}
				onChange={(e) => props.setSearchString(e.target.value)}
				onKeyPress={(e) => props.handleKeyPress(e.key)}
			/>
			<Button color="primary" variant="contained" onClick={props.search}>
				Search
			</Button>
		</div>
	);
};

export default SearchBar;
