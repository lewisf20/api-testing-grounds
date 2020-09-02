import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from './index.module.css';

const ArticlePage = (props) => {
	let location = useLocation();
	let id = location.pathname.substring(9); // remove first part of pathname '/guardian'
	const api_key = process.env.REACT_APP_GUARDIAN_API_KEY;
	const base_url = process.env.REACT_APP_GUARDIAN_BASE_URL;

	//state
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const getArticleInformation = () => {
		const url =
			base_url +
			id +
			`?show-fields=body,thumbnail&show-tags=contributor&api-key=${api_key}`;
		fetch(url)
			.then((res) => res.json())
			.then(
				(res) => {
					const results = res.response.content;
					console.log(res.response.content.tags[0].webTitle);
					setArticle(results);
				},
				(error) => {
					console.error(error);
				}
			);
		setIsLoading(false);
	};

	//Load article
	useEffect(() => {
		getArticleInformation();
	}, []);

	//console.log(article);

	return (
		<div className={classes.Article}>
			{article.fields ? (
				<>
					<img
						src={article.fields.thumbnail}
						alt="main pic for article"
						className={classes.mainImage}
					/>
					<h1>{article.webTitle}</h1>
					<hr style={{ width: '100%', margin: '1.5rem 0' }} />
					<div className={classes.details}>
						<p className={classes.contributor}>
							By{' '}
							<a
								href={article.tags[0].webUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{article.tags[0].webTitle}
							</a>
						</p>
						<p className={classes.date}>
							{new Date(article.webPublicationDate).toDateString()}
						</p>
					</div>
					<hr style={{ width: '100%', margin: '1.5rem 0 2rem 0' }} />
					<div
						className={classes.body}
						dangerouslySetInnerHTML={{ __html: article.fields.body }}
					></div>
				</>
			) : (
				<CircularProgress size={80} color="secondary" />
			)}
		</div>
	);
};

export default ArticlePage;
