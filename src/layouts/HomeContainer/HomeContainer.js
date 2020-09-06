import React, { useEffect } from 'react';
import classes from './HomeContainer.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Typed from 'react-typed';

const HomeContainer = (props) => {
	const { title } = props;

	//Update title upon first render
	useEffect(() => {
		title('API Testing Grounds');
	}, [title]);

	return (
		<div className={classes.HomeContainer}>
			<div
				style={{
					display: 'flex',
					height: '70px',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<Typed
					strings={['<h1>Made By Lewis Frater</h1>']}
					typeSpeed={40}
					showCursor={false}
				/>
				<Typed
					strings={[
						'This ReactJS web application has been created to test different APIs on the internet.',
					]}
					typeSpeed={20}
					showCursor={false}
					startDelay={1500}
				/>
			</div>

			<div
				style={{
					marginTop: '2rem',
				}}
			>
				<h2>List of Current APIs</h2>
				<ul>
					<Button color="primary" className={classes.btn}>
						<Link to="/guardian">Guardian</Link>
					</Button>
					<Button color="primary" className={classes.btn}>
						<Link to="/movies">MovieDB</Link>
					</Button>
				</ul>
			</div>
		</div>
	);
};

export default HomeContainer;
