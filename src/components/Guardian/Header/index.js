import React from 'react';
import classes from './index.module.css';
import { TextField, Button, MenuItem } from '@material-ui/core';

const GuardianHeader = (props) => {
	return (
		<div className={classes.Header}>
			<div className={classes.SearchContainer}>
				<TextField
					type="search"
					name="search"
					value={props.searchString}
					onChange={(e) => props.setSearch(e.target.value)}
					onKeyPress={(e) => props.handleKeyPress(e.key)}
				/>

				<Button
					type="submit"
					onClick={() => {
						props.setLoading(true);
						props.search();
					}}
				>
					Search
				</Button>
				<TextField
					id="select"
					label="Results"
					value={props.pages}
					select
					onChange={(e) => props.setPages(e.target.value)}
				>
					<MenuItem value="10">10</MenuItem>
					<MenuItem value="25">25</MenuItem>
					<MenuItem value="50">50</MenuItem>
				</TextField>
			</div>
		</div>
	);
};

export default GuardianHeader;
