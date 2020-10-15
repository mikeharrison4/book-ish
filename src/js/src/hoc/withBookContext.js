import React from 'react';
import { BookContext } from '../Components/Context/BookContext';

export default function withBookContext(Component) {
	return function ContextComponent(props) {
		return (
			<BookContext.Consumer>
				{state => <Component {...props} bookContext={state} />}
			</BookContext.Consumer>
		);
	};
}
