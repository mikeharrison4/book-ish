import React, {useEffect, useState} from 'react';
import {Alert, Button} from 'react-bootstrap'

const Notification = ({ warning, message }) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setShow(false), 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
			<Alert
				variant={warning}
				show={show}
				className="d-flex align-items-center justify-content-between"
			>
				<div>{message}</div>
				<div className="d-inline-flex">
					<Button onClick={() => setShow(false)} variant="outline-danger">
						X
					</Button>
				</div>
			</Alert>
	);
};

export default Notification;
