import React from 'react';
import classes from './MovieCard.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { CircularProgress } from '@material-ui/core';

const MovieCard = (props) => {
	const { id, title, overview, release, voteCount, rating, imagePath } = props;
	const base_url = 'https://image.tmdb.org/t/p/w300';

	//STATE
	const [isLoading, setIsLoading] = useState(true);
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		//Get the poster image for the movie
		const url = base_url + imagePath;
		//if imagepath has a value
		if (imagePath) {
			fetch(url)
				.then((res) => {
					console.log(res.url);
					setImageUrl(res.url);
					setIsLoading(false);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			setIsLoading(false);
		}

		return () => {
			//cleanup
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
			></div>
			<div className={classes.titleWrapper}>
				<h2>{title}</h2>
				<div className={classes.details}>
					<p>{voteCount}</p>
					<p>{rating}</p>
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
