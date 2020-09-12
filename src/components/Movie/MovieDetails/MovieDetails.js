import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './MovieDetails.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faStar,
	faUser,
	faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';
import { CircularProgress } from '@material-ui/core';

const MovieDetails = (props) => {
	const api_key = process.env.REACT_APP_MOVIE_API_KEY;
	const base_url = process.env.REACT_APP_MOVIE_BASE_URL;
	const image_url = 'https://image.tmdb.org/t/p/original';
	const location = useLocation();
	const movie_id = location.pathname.substring(8); // remove first part of pathname '/movies/' to get id from path parameters

	//state
	const [movieData, setMovieData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	//Fetch Movie Data
	useEffect(() => {
		// get/movie/{movie_id}
		const movieUrl = base_url + `movie/${movie_id}?api_key=${api_key}`;
		// get/movie/{movie_id}/images

		fetch(movieUrl)
			.then((res) => res.json())
			.then((res) => {
				const results = res;
				console.log(results);
				setMovieData(res);
				// const imageUrl = `https://image.tmdb.org/t/p/original${movieImagePath}`;
				setIsLoading(false);

				//fetch images
				// fetch(imageUrl)
				// 	.then((res) => res.json())
				// 	.then((res) => {});
			})
			.catch((err) => {
				console.error(err);
			});
	}, [base_url, api_key, movie_id]);

	let content = (
		<div className={classes.container}>
			<CircularProgress size={80} color="primary" />
		</div>
	);
	if (!isLoading)
		content = (
			<div className={classes.container}>
				<div
					className={classes.bgImage}
					style={{
						background: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'top',
						backgroundAttachment: 'fixed',
					}}
				></div>
				<div className={classes.movieContainer}>
					<div className={classes.poster}>
						<img
							src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
							alt="movie poster"
						/>
					</div>
					<div className={classes.details}>
						<h1 style={{ color: 'white' }}>{movieData.original_title}</h1>
						<span style={{ fontSize: '16px', color: '#fff' }}>
							"{movieData.tagline}"
						</span>
						<p className={classes.overview}>
							<span
								style={{
									textDecoration: 'underline',
									marginTop: '1rem',

									lineHeight: '3',
									fontWeight: 'bolder',
								}}
							>
								Description
							</span>
							<br />
							{movieData.overview}
						</p>
						<div className={classes.ratings}>
							<span>
								<FontAwesomeIcon icon={faCalendarDay} />
								<br />
								{movieData.release_date}
							</span>
							<span>
								<FontAwesomeIcon icon={faClock} />
								<br />
								{movieData.runtime}m
							</span>
							<span>
								<FontAwesomeIcon icon={faStar} color="gold" />
								<br />
								{movieData.vote_average}/10
							</span>
							<span>
								<FontAwesomeIcon icon={faUser} />
								<br />
								{movieData.vote_count}
							</span>
						</div>
					</div>
				</div>
			</div>
		);

	return content;
};

export default MovieDetails;
