export const disableBtn = (touched, isValid) => {
	const touchedLength = Object.keys(touched).length;
	return !(touchedLength && isValid);
};

export const validation = () => {
	return values => {
		let errors = {};
		if (!values.title) {
			errors.title = 'First name is required'
		}
		if (!values.author) {
			errors.author = 'Author is required'
		}
		if (!values.book_description) {
			errors.book_description = 'Book description is required'
		}
		if (!values.num_copies) {
			errors.num_copies = 'Number of copies is required'
		}
		if (!values.availability) {
			errors.availability = 'Availability is required'
		}
		return errors;
	};
};
