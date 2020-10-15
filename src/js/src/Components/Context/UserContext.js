import React, { useEffect, useState } from 'react';
import { getAllUsers } from "../../api/client";

export const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	useEffect(() => {
		const fetchUsers = () => {
			setIsLoading(true);
			getAllUsers()
				.then(res => res.json()
					.then(users => {
						setUsers(users);
						setIsLoading(false);
					}))
				.catch(error => {
					setErrorMsg(`${error.error.message} (${error.error.error})`);
					setIsLoading(false);
				})
		};
		fetchUsers();
	}, []);

	return (
		<UserContext.Provider value={{
			users,
			isLoading,
			errorMsg
		}}>
			{ children }
		</ UserContext.Provider>
	);
};
