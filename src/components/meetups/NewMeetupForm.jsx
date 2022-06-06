import React, { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = ({ onAddMeetup }) => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();

		const title = titleInputRef.current.value;
		const image = imageInputRef.current.value;
		const address = addressInputRef.current.value;
		const description = descriptionInputRef.current.value;

		onAddMeetup({
			title,
			image,
			address,
			description,
		});
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={(event) => onSubmit(event)}>
				<div className={classes.control}>
					<label htmlFor='title'>Title</label>
					<input type='text' required id='title' ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Image</label>
					<input type='url' required id='image' ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>Address</label>
					<input type='text' required id='address' ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>Description</label>
					<textarea
						id='description'
						required
						rows='5'
						ref={descriptionInputRef}
					/>
				</div>
				<div className={classes.actions}>
					<button type='onSubmit' className='btn btn-alt'>
						Add Meetup
					</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupForm;
