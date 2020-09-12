import React from 'react';
import classes from './MovieCard.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';

const MovieCard = (props) => {
	const { title, voteCount, rating, imagePath } = props;
	const base_url = 'https://image.tmdb.org/t/p/w300';

	//STATE
	const [isLoading, setIsLoading] = useState(true);
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		//Get the poster image for the movie
		const url = base_url + imagePath;
		let timer;
		if (imagePath) {
			timer = setTimeout(() => {
				fetch(url)
					.then((res) => {
						setImageUrl(res.url);
						setIsLoading(false);
					})
					.catch((err) => {
						console.error(err);
					});
			}, 1000);
		} else {
			setIsLoading(false);
		}

		return () => {
			//cleanup - cancel subscription
			clearTimeout(timer);
		};
	}, [imagePath]);
	let content = (
		<div className={classes.wrapper}>
			<div
				className={classes.container}
				style={{
					background: imageUrl !== '' ? `url(${imageUrl})` : '#fff',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{imageUrl !== '' ? null : (
					<h1 style={{ margin: 'auto 0' }}>Image N/A</h1>
				)}
			</div>
			<div className={classes.titleWrapper}>
				<h2>{title}</h2>
				<div className={classes.details}>
					<span>
						<FontAwesomeIcon icon={faUser} color="black" />
						<p>{voteCount}</p>
					</span>
					<span>
						<FontAwesomeIcon icon={faStar} color="gold" />
						<p>{rating}</p>
					</span>
				</div>
			</div>
		</div>
	);
	if (isLoading)
		content = (
			<div
				className={classes.container}
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<CircularProgress size={80} color="primary" />
			</div>
		);

	return content;
};

export default MovieCard;
