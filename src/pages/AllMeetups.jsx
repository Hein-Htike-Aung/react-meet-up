import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const API_URL = `${'https://react-meetup-2df9c-default-rtdb.firebaseio.com/meetups.json'}`;

const AllMeetups = () => {
	const [meetups, setMeetups] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${API_URL}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const meetups = [];

				Object.keys(data).forEach((key) => {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				});

				setIsLoading(false);
				setMeetups([...meetups]);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={meetups} />
		</section>
	);
};

export default AllMeetups;
