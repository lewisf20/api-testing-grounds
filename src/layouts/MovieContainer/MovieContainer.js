import React, { useEffect, useState } from 'react';
import classes from './MovieContainer.module.css';

//import components
import SearchBar from '../../components/Movie/SearchBar/SearchBar';
import MovieCard from '../../components/Movie/Card/MovieCard';
import { CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';

const MovieContainer = (props) => {
	const api_key = process.env.REACT_APP_MOVIE_API_KEY;
	const base_url = process.env.REACT_APP_MOVIE_BASE_URL;
	const { title } = props;

	//STATE
	const [searchString, setSearchString] = useState('');
	const [response, setResponse] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const [pageCount, setPageCount] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);

	const getSearchResults = () => {
		setIsloading(true);

		const url =
			base_url + `search/movie?query=${searchString}&api_key=${api_key}&page=1`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				const results = res.results;
				setPageCount(1);
				setIsloading(false);
				setResponse(results);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const handleKeyPress = (key) => {
		if (key === 'Enter') {
			setIsloading(true);
			getSearchResults();
		}
	};

	useEffect(() => {
		//Set title
		title('The MovieDB API ');
		//get list of popular movies
		const url = `${base_url}discover/movie?api_key=${api_key}&include_adult=false&language=en-US&sort_by=vote_count.desc&page=${currentPage}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				const results = res.results;
				setPageCount(res.total_pages);
				setResponse(results);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [title, api_key, currentPage, base_url]);

	let content = response.map((movie, index) => {
		return (
			<Link
				key={movie.id}
				to={{
					pathname: `/movies/${movie.id}`,
				}}
			>
				<MovieCard
					id={movie.id}
					title={movie.title}
					voteCount={movie.vote_count}
					rating={movie.vote_average}
					imagePath={movie.poster_path}
				/>
			</Link>
		);
	});
	if (isLoading) content = <CircularProgress size={80} color="primary" />;

	return (
		<div className={classes.container}>
			<SearchBar
				searchString={searchString}
				setSearchString={setSearchString}
				search={getSearchResults}
				handleKeyPress={handleKeyPress}
			/>
			<div className={classes.movieList}>{content}</div>
			<div className={classes.pagination}>
				<Pagination
					count={pageCount}
					color="primary"
					page={currentPage}
					onChange={(e, page) => {
						setCurrentPage(page);
						window.scrollTo({ top: 0 });
					}}
				/>
			</div>
		</div>
	);
};

export default MovieContainer;
