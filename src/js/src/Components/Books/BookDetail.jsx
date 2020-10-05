import React, {useEffect, useState} from 'react';
import {deleteBook, getBookWithIsbn} from "../../api/client";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const BookDetail = (
	{
		match: { params: id },
		history
	}
) => {
	const { isbn } = id;
	const [isLoading, setIsLoading] = useState(false);
	const [book, setBook] = useState({});

	useEffect(() => {
		const fetchBookWithIsbn = () => {
			setIsLoading(true);
			getBookWithIsbn(isbn)
				.then(res => res.json()
					.then(book => {
						setBook(book);
						setIsLoading(false);
					}))
		};
		fetchBookWithIsbn();
	}, [isbn]);

	if(isLoading) {
		return (
			<p>...Loading</p>
		)
	}

	const { isbn: bookIsbn, title, author, book_description, num_copies, availability } = book;

	const handleDelete = (isbn) => {
		deleteBook(isbn).then(() => {
			history.push(`/books`, { bookTitle: title, method: 'delete' })
		});
	};

	return (
		<div className="d-flex justify-content-between">
				<div>
					<h1>{title}</h1>
					<h5>{author}</h5>
					<h5>{`In stock: ${availability}`}</h5>
					<p>{book_description}</p>
					<h6>{bookIsbn}</h6>
					<Link to={{
						pathname: `/books/${isbn}/edit`,
						state: {
							isbn: bookIsbn,
							title,
							author,
							book_description,
							num_copies,
							availability
						}
					}}
					>
						Edit
					</Link>
				</div>
				<div>
					<Button
						variant="danger"
						onClick={() => handleDelete(isbn)}
					>
						Delete
					</Button>
				</div>
		</div>
	);
};

export default BookDetail;
