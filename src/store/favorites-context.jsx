import { createContext, useState } from 'react';

// Context only store in memory, will get disappear if the page is reloaded
const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupId) => {},
	itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
	const [userFavorites, setUserFavorites] = useState([]);

	const addFavoriteHandler = (favoriteMeetup) => {
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.concat(favoriteMeetup);
		});
	};

	const removeFavoriteHandler = (meetupId) => {
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
		});
	};

	const itemIsFavoriteHandler = (meetupId) => {
		return userFavorites.some((meetup) => meetup.id === meetupId);
	};

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContext;
