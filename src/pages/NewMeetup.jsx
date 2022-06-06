import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';

const API_URL = `${'https://react-meetup-2df9c-default-rtdb.firebaseio.com'}`;

const NewMeetup = () => {
	const navigate = useNavigate();

	const onAddMeetup = (meetup) => {
		fetch(`${API_URL}/meetups.json`, {
			method: 'POST',
			body: JSON.stringify(meetup),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			navigate('/');
		});
	};

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={onAddMeetup} />
		</section>
	);
};

export default NewMeetup;
