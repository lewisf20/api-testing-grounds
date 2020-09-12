import React, { useEffect } from 'react';
import classes from './HomeContainer.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

const HomeContainer = (props) => {
	const { title } = props;

	//Update title upon first render
	useEffect(() => {
		title('API Testing Grounds');
	}, [title]);

	return (
		<div className={classes.HomeContainer}>
			<Particles
				className={classes.particles}
				params={{
					particles: {
						color: {
							value: '#F4B23F',
						},
						size: {
							random: true,
							value: 8,
						},
						number: {
							value: 50,
							density: {
								enable: false,
								value_area: 400,
							},
						},
						move: {
							direction: 'none',
							enable: true,
							outMode: 'bounce',
							random: true,
							speed: 4,
							straight: false,
						},
						shape: {
							type: ['star'],
						},
						line_linked: {
							enable: true,
							distance: 100,
							color: '#3498db',
							opacity: 1,
							width: 5,
						},
						opacity: {
							value: 1,
							random: false,
							anim: {
								enable: false,
								speed: 1,
								opacity_min: 0.1,
								sync: false,
							},
						},
					},
				}}
			/>
			<div
				style={{
					display: 'flex',
					height: '70px',
					flexDirection: 'column',
					justifyContent: 'space-between',
					marginTop: '3rem',
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
