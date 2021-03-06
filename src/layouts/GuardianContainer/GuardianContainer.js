import React, { useState, useEffect, useCallback } from 'react';
import classes from './GuardianContainer.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from '../../components/Guardian/Header';
import ArticleCard from '../../components/Guardian/Article/Card';
import { Link } from 'react-router-dom';

const GuardianContainer = (props) => {
	const api_key = process.env.REACT_APP_GUARDIAN_API_KEY;
	const base_url = process.env.REACT_APP_GUARDIAN_BASE_URL;
	const show_fields = 'show-fields=body,thumbnail';
	const { title } = props;

	//State
	const [searchString, setSearchString] = useState('');
	const [response, setResponse] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const [pageSize, setPageSize] = useState(10);

	const getSearchResults = () => {
		const url =
			base_url +
			`search?q=${searchString}&page-size=${pageSize}&${show_fields}&api-key=${api_key}`;
		fetch(url)
			.then((res) => res.json())
			.then(
				(res) => {
					const results = res.response.results;
					//filter results
					// Content of article is longer than 1000 characters
					const filteredResults = results.filter((article) => {
						//console.log(article.fields.body.length);
						return article.fields.body.length > 1000;
					});

					//console.log(filteredResults);
					//console.log(results);
					setResponse(filteredResults);
					setIsloading(false);
				},
				(error) => {
					console.err(error);
				}
			)
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
	//Save to local storage
	const saveLocalResponse = useCallback(() => {
		localStorage.setItem('response', JSON.stringify(response));
	}, [response]);

	//get from local storage
	const getLocalResponse = () => {
		if (localStorage.getItem('response') === null) {
			localStorage.setItem('response', JSON.stringify([]));
		} else {
			let responseLocal = JSON.parse(localStorage.getItem('response'));
			setResponse(responseLocal);
		}
	};

	//didMount
	useEffect(() => {
		//Set title of page in the navigation..
		title('Guardian API');
		getLocalResponse();

		//cleanup when component unmounts
		return () => {
			console.log('Guardian page cleanup...');
		};
	}, [title]);

	//didUpdate
	useEffect(() => {
		console.log('Guardian page didupdate');
		//save in the callback to update so a page refresh
		//does not save the response - only when the user
		//presses back on the browser it will be saved..
		return () => {
			saveLocalResponse();
		};
	}, [response, saveLocalResponse]);

	let content = response.map((article, index) => {
		return (
			<Link
				key={article.id}
				to={{
					pathname: `/guardian/${article.id}`,
				}}
			>
				<ArticleCard
					title={article.webTitle}
					url={article.webUrl}
					tag={article.sectionName}
					date={article.webPublicationDate}
					thumbnail={article.fields.thumbnail}
					body={article.fields.body}
				/>
			</Link>
		);
	});
	if (isLoading) content = <CircularProgress size={80} color="secondary" />;

	return (
		<div className={classes.GuardianContainer}>
			<Header
				searchString={searchString}
				setSearch={setSearchString}
				search={getSearchResults}
				setLoading={setIsloading}
				setPages={setPageSize}
				pages={pageSize}
				handleKeyPress={handleKeyPress}
			/>
			<div className={classes.ArticleContainer}>{content}</div>
		</div>
	);
};

export default GuardianContainer;
