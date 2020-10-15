import React from 'react';
import {Link} from "react-router-dom";
import Notification from "../Notification";
import SuccessMessage from "../SuccessMessage";
import withBookContext from "../../hoc/withBookContext";

const Books = ({ location: { state }, bookContext: { books, isLoading, errorMsg }, }) => {

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

export default withBookContext(Books);
