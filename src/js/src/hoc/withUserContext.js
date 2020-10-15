import React from 'react';
import { UserContext } from '../Components/Context/UserContext';

export default function withUserContext(Component) {
	return function ContextComponent(props) {
		return (
			<UserContext.Consumer>
				{state => <Component {...props} userContext={state} />}
			</UserContext.Consumer>
		);
	};
}
