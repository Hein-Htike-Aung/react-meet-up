import React, { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = ({ meetup }) => {
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(meetup.id);

	const toggleFavoritesStatusHandler = () => {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(meetup.id);
		} else {
			favoritesCtx.addFavorite(meetup);
		}
	};

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={meetup.image} alt={meetup.title} />
				</div>
				<div className={classes.content}>
					<h3>{meetup.title}</h3>
					<address>{meetup.address}</address>
					<p>{meetup.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoritesStatusHandler}>
						{!itemIsFavorite ? 'To favorites' : 'Remove from favorites'}
					</button>
				</div>
			</Card>
		</li>
	);
};

export default MeetupItem;
