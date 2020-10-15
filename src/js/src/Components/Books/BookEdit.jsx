import React from 'react';
import {Formik} from "formik";
import {updateBook} from "../../api/client";
import {Badge, Button, Form} from "react-bootstrap";
import {validation} from "../../utils/helperMethods";

const BookEdit = (
	{
		location: {
			state: {
				isbn,
				title,
				author,
				book_description,
				num_copies,
				availability,
			},
		},
		history,
	}
) => {
	const handleSubmit = (book, { setSubmitting }) => {
		updateBook(isbn, book).then(() => {
			history.push(`/books/${isbn}`);
			setSubmitting(false);
		})
	};

	return (
		<React.Fragment>
			<h1>Edit <i>{title}</i></h1>
			<Formik
				initialValues={{ isbn, title, author, book_description, num_copies, availability }}
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
						</Form.Group>
						{errors.title && touched.title && <Badge variant="danger">{errors.title}</Badge>}
						<Form.Group controlId="author">
							<Form.Label>Author</Form.Label>
							<Form.Control
								type="text"
								name="author"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.author}
							/>
						</Form.Group>
						{errors.author && touched.author && <Badge variant="danger">{errors.author}</Badge>}
						<Form.Group controlId="bookDescription">
							<Form.Label>Book Description</Form.Label>
							<Form.Control
								type="text"
								name="book_description"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.book_description}
							/>
						</Form.Group>
						{errors.book_description && touched.book_description && <Badge variant="danger">{errors.book_description}</Badge>}
						<Form.Group controlId="numCopies">
							<Form.Label>Number of Copies</Form.Label>
							<Form.Control
								type="number"
								name="num_copies"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.num_copies}
							/>
						</Form.Group>
						{errors.num_copies && touched.num_copies && <Badge variant="danger">{errors.num_copies}</Badge>}
						<Form.Group controlId="availability">
							<Form.Label>Availability</Form.Label>
							<Form.Control
								type="number"
								name="availability"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.availability}
							/>
						</Form.Group>
						{errors.availability && touched.availability && <Badge variant="danger">{errors.availability}</Badge>}
						<Button
							onClick={() => submitForm()}
							type="submit"
							disabled={isSubmitting || JSON.stringify(values) === JSON.stringify(history.location.state)}
						>
							Save Changes
						</Button>
					</Form>
				)}
			</Formik>
		</React.Fragment>
	);
};

export default BookEdit;
