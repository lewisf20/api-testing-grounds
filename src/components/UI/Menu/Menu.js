import React from 'react';
import { Button, MenuItem, Menu } from '@material-ui/core';

const NavMenu = (props) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(false);
	};
	return (
		<div>
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
				variant="outlined"
				color="primary"
			>
				API
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{props.children.map((child, index) => {
					return (
						<MenuItem key={index} onClick={handleClose}>
							{child}
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
};

export default NavMenu;
