import fetch from 'unfetch';

const checkStatus = (response) => {
	if(response.ok) {
		return response;
	} else {
		const error = new Error(response.statusText);
		error.response = response;
		response.json().then(e => {
			error.error = e;
		});
		return Promise.reject(error);
	}
};

export const getAllUsers = () => fetch("/api/users");

export const getUserWithUserId = (userId) => fetch(`/api/users/${userId}`);

export const getUserOrders = (userId) => fetch(`/api/users/${userId}/orders`);

export const getAllBooks = () =>
	fetch("/api/books")
		.then(checkStatus);

export const getBookWithIsbn = (isbn) => fetch(`/api/books/${isbn}`);

export const updateBook = (isbn, book) =>
	fetch(`/api/books/${isbn}`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(book)
	});

export const addBook = (book) =>
	fetch(`/api/books/addBook`, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(book)
	}).then(checkStatus);

export const deleteBook = (isbn) =>
	fetch(`/api/books/${isbn}`, {
		method: 'DELETE'
	}).then(checkStatus);
