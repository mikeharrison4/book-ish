import React, { useEffect, useState } from 'react';
import { getAllBooks } from "../../api/client";

export const BookContext = React.createContext({});

export const BookContextProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
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

	return (
		<BookContext.Provider value={{
			books,
			isLoading,
			errorMsg
		}}>
			{ children }
		</BookContext.Provider>
	);
};
