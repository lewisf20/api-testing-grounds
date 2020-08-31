import React, { useEffect, useState } from 'react';

const GuardianContainer = (props) => {
	const api_key = process.env.REACT_APP_GUARDIAN_API_KEY;
	const base_url = process.env.REACT_APP_GUARDIAN_BASE_URL;

	//State
	const [searchString, setSearchString] = useState('');
	const [response, setResponse] = useState(null);

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
		<div>
			<h1>Guardian</h1>
			<label htmlFor="">Search</label>
			<input
				type="search"
				name="search"
				value={searchString}
				onChange={(e) => setSearchString(e.target.value)}
			/>
			<button type="submit" onClick={getSearchResults}>
				Search
			</button>
		</div>
	);
};

export default GuardianContainer;
