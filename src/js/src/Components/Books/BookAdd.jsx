import React, {useState} from 'react';
import { addBook } from "../../api/client";
import { Formik } from "formik";
import {Form, Button, Badge, Alert, OverlayTrigger, Tooltip} from "react-bootstrap";
import {disableBtn, validation} from "../../utils/helperMethods";

const BookAdd = ({ history }) => {
	const [showAlert, setShowAlert] = useState(false);

	const handleSubmit = (book, { setStatus, setSubmitting, resetForm }) => {
		addBook(book).then(() => {
			resetForm();
			setSubmitting(false);
			history.push(`/books`, { bookTitle: book.title, method: 'added' });
		}).catch(error => {
			setStatus({
				message: `${error.error.message} (${error.error.error})`,
				warning: 'danger',
			})});
		setShowAlert(true);
	};

	return (
		<React.Fragment>
			<h1>Add a book</h1>
			<Formik
				initialValues={{ title: '', author: '', book_description: '', num_copies: '', availability: '' }}
				validate={validation()}
				onSubmit={handleSubmit}
			>
				{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						submitForm,
						isValid,
						status,
					}) => (
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								name="title"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.title}
							/>
							{errors.title && touched.title && <Badge variant="danger">{errors.title}</Badge>}
						</Form.Group>
						<Form.Group controlId="author">
							<Form.Label>Author</Form.Label>
							<Form.Control
								type="text"
								name="author"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.author}
							/>
							{errors.author && touched.author && <Badge variant="danger">{errors.author}</Badge>}
						</Form.Group>
						<Form.Group controlId="bookDescription">
							<Form.Label>Book Description</Form.Label>
							<Form.Control
								type="text"
								name="book_description"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.book_description}
							/>
							{errors.book_description && touched.book_description && <Badge variant="danger">{errors.book_description}</Badge>}
						</Form.Group>
						<Form.Group controlId="numCopies">
							<Form.Label>Number of Copies</Form.Label>
							<Form.Control
								type="number"
								name="num_copies"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.num_copies}
							/>
							{errors.num_copies && touched.num_copies && <Badge variant="danger">{errors.num_copies}</Badge>}
						</Form.Group>
						<Form.Group controlId="availability">
							<Form.Label>Availability</Form.Label>
							<Form.Control
								type="number"
								name="availability"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.availability}
							/>
							{errors.availability && touched.availability && <Badge variant="danger">{errors.availability}</Badge>}
						</Form.Group>
						<OverlayTrigger
							overlay={<Tooltip id="tooltip-disabled">{ disableBtn(touched, isValid) ? 'Please make sure all fields are filled out' : 'Save' }</Tooltip>}
						>
							<span className="d-inline-block">
								<Button
									onClick={() => submitForm()}
									type="submit"
									disabled={isSubmitting || disableBtn(touched, isValid)}
									style={{ pointerEvents: !disableBtn(touched, isValid) ? 'auto' : 'none' }}
								>
									Add Book
								</Button>
							</span>
						</OverlayTrigger>
						{ status && status.message && showAlert && (
							<Alert
								variant={status.warning}
								onClose={() => setShowAlert(false)}
								dismissible
							>
								{status.message}
							</Alert>
						) }
					</Form>
				)}
			</Formik>
		</React.Fragment>
	);
};

export default BookAdd;
