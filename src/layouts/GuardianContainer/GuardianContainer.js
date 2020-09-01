import React, { useEffect, useState } from 'react';
import classes from './GuardianContainer.module.css';

import Header from '../../components/Guardian/GuardianHeader';
import Article from '../../components/Guardian/GuardianArticle';

const GuardianContainer = (props) => {
	const api_key = process.env.REACT_APP_GUARDIAN_API_KEY;
	const base_url = process.env.REACT_APP_GUARDIAN_BASE_URL;

	//State
	const [searchString, setSearchString] = useState('');
	const [response, setResponse] = useState([]);

	useEffect(() => {
		//make network request
		getSearchResults();
		return () => {
			//cleanup???
		};
	}, []);

	const getSearchResults = () => {
		const url = base_url + `search?q=${searchString}&api-key=${api_key}`;
		fetch(url)
			.then((res) => res.json())
			.then(
				(res) => {
					const results = res.response.results;
					console.log(results);
					setResponse(results);
				},
				(error) => {
					console.err(error);
				}
			);
	};

	return (
		<div className={classes.GuardianContainer}>
			<Header
				searchString={searchString}
				setSearch={setSearchString}
				search={getSearchResults}
			/>
			<div className={classes.ArticleContainer}>
				{response.map((article, index) => {
					return (
						<Article
							key={article.id}
							title={article.webTitle}
							url={article.webUrl}
							tag={article.sectionName}
							date={article.webPublicationDate}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default GuardianContainer;
