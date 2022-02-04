import PrimarySearchAppBar from '../components/nav/AppBar';
import React from 'react';
import HomeButton from '../components/buttons/HomeButton';

const Home = () => {
	return (
		<div>
			<h1>SIMPLONVILLE</h1>
			<p>Devenons citoyens-acteurs de notre ville !</p>
			<HomeButton />
		</div>
	);
};

export default Home;
