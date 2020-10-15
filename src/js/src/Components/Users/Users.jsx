import React, {useContext, useEffect, useState} from 'react';
import {getAllUsers} from "../../api/client";
import SuccessMessage from "../SuccessMessage";
import {Link} from "react-router-dom";
import {UserContext} from "../Context/UserContext";
import withUserContext from "../../hoc/withUserContext";

const Users = ({ userContext: { users, isLoading, errorMsg } }) => {

	if(isLoading) {
		return (
			<p>...Loading</p>
		)
	}

	if(users && users.length) {
		return (
			<React.Fragment>
				{/*{ state && <SuccessMessage book={state} /> }*/}
				{ users.map(({ user_id, first_name, last_name }) => (
					<div key={user_id} className="user">
						<h1>{`${first_name} ${last_name}`}</h1>
						<Link to={`/users/${user_id}`}>Click here for more detail</Link>
					</div>
				)) }
			</React.Fragment>
		)
	}

	return (
		<div>
			<p>No Users found</p>
		</div>
	);
};

export default withUserContext(Users);
