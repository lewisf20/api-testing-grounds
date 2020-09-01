import React, { useState } from 'react';
import classes from './GuardianContainer.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from '../../components/Guardian/GuardianHeader';
import Article from '../../components/Guardian/GuardianArticle';

const GuardianContainer = (props) => {
	const api_key = process.env.REACT_APP_GUARDIAN_API_KEY;
	const base_url = process.env.REACT_APP_GUARDIAN_BASE_URL;

	//State
	const [searchString, setSearchString] = useState('');
	const [response, setResponse] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const [pageSize, setPageSize] = useState(10);

	const getSearchResults = () => {
		const url =
			base_url +
			`search?q=${searchString}&page-size=${pageSize}&api-key=${api_key}`;
		fetch(url)
			.then((res) => res.json())
			.then(
				(res) => {
					const results = res.response.results;
					console.log(results);
					setResponse(results);
					setIsloading(false);
				},
				(error) => {
					console.err(error);
				}
			);
	};
	let content = response.map((article, index) => {
		return (
			<Article
				key={article.id}
				title={article.webTitle}
				url={article.webUrl}
				tag={article.sectionName}
				date={article.webPublicationDate}
			/>
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
			/>
			<div className={classes.ArticleContainer}>{content}</div>
		</div>
	);
};

export default GuardianContainer;
