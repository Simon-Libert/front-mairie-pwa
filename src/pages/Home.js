import React from 'react';
import HomeButton from '../components/buttons/HomeButton';
import HomeLogButton from '../components/buttons/HomeLogButton';
import PrimarySearchAppBar from '../components/nav/AppBar';

const Home = () => {
	return (
		<>
			<h1>SIMPLONVILLE</h1>
			<div className='home'>
				<p className='blocktext'>Devenons citoyens-acteurs de notre ville !</p>
			</div>
			<div className='home-buttons'>
				<HomeButton />
				<HomeLogButton />
				<nav>{localStorage.getItem('token') ? <PrimarySearchAppBar /> : null}</nav>
			</div>
		</>
	);
};

export default Home;
