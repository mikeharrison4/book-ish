import React, {useEffect, useState} from 'react';
import {getUserOrders, getUserWithUserId} from "../../api/client";

const UserDetail = (
	{
		match: { params: id },
		history
	}
) => {
	const { userId } = id;
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState({});
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchUserWithUserId = () => {
			setIsLoading(true);
			getUserWithUserId(userId)
				.then(res => res.json()
					.then(book => {
						setUser(book);
						getUserOrders(userId)
							.then(res => res.json()
								.then(order => setOrders(order)));
						setIsLoading(false);
					}))
		};
		fetchUserWithUserId();
	}, [userId]);

	if(isLoading) {
		return (
			<p>...Loading</p>
		)
	}

	const { first_name, last_name, address } = user;

	return (
		<div className="d-flex justify-content-between">
			<div className="userDetails">
				<h1>{`${first_name} ${last_name}`}</h1>
				<p>{address}</p>
			</div>
			<div className="orders">
				{
					orders.length !== 0 ? (
						<React.Fragment>
							<h1>Orders</h1>
							{ orders.map(({ orderId, isbn, title }) => (
								<div key={orderId} className="order">
									<h4>{orderId}</h4>
									<h4>{title}</h4>
									<h6>{isbn}</h6>
								</div>
							)) }
						</React.Fragment>
					) : 'No orders found'
				}
			</div>
		</div>
	);
};

export default UserDetail;
