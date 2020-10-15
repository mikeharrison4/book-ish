import React, {useState} from 'react';
import {Alert} from "react-bootstrap";

const SuccessMessage = ({ book: { bookTitle, method } }) => {
	const [showAlert, setShowAlert] = useState(true);

	let message;
	if(method === 'delete') {
		message = 'has been successfully deleted';
	} else if (method === 'added') {
		message = 'has been successfully added';
	}
	return (
		showAlert &&
		<Alert
			variant="success"
			onClose={() => setShowAlert(false)}
			dismissible
		>
			{`${bookTitle} ${message}`}
		</Alert>
	)
};

export default SuccessMessage;
