import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' exact element={<AllMeetups />} />
				<Route path='/new-meetup' element={<NewMeetup />} />6gV1SU5YE A HY 7
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</Layout>
	);
};

export default App;
