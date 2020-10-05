import React, {useEffect, useState} from 'react';
import {getAllBooks} from "../../api/client";
import {Link} from "react-router-dom";
import Notification from "../Notification";
import SuccessMessage from "./SuccessMessage";

const Books = ({ location: { state } }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [books, setBooks] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");

	useEffect(() => {
		const fetchBooks = () => {
			setIsLoading(true);
			getAllBooks()
				.then(res => res.json()
					.then(books => {
						setBooks(books);
						setIsLoading(false);
					}))
				.catch(error => {
					setErrorMsg(`${error.error.message} (${error.error.error})`);
					setIsLoading(false);
				})
		};
		fetchBooks();
	}, []);

	if(isLoading) {
		return (
			<p>...Loading</p>
		)
	}

	if(books && books.length) {
		return (
			<React.Fragment>
				{ state && <SuccessMessage book={state} /> }
				{ books.map(({ title, isbn }) => (
					<div key={isbn} className="book">
						<h1>{title}</h1>
						<Link to={`/books/${isbn}`}>Click here for more detail</Link>
					</div>
				)) }
			</React.Fragment>
		)
	}

	return (
		<React.Fragment>
			<Notification
				warning="danger"
				message={errorMsg}
			/>
			<p>No Books found</p>
		</React.Fragment>
	)
};

export default Books;
