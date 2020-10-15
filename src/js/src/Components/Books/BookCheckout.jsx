import React, {useContext} from 'react';
import {UserContext} from "../Context/UserContext";

const BookCheckout = () => {
	const { users } = useContext(UserContext);

	console.log(users);

	return (
		<div>
			<h1>Checkout this book</h1>
		</div>
	);
};

export default BookCheckout;
