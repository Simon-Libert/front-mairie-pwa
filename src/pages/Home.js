import React from 'react';
import HomeButton from '../components/buttons/HomeButton';
import HomeLogButton from '../components/buttons/HomeLogButton';

const Home = () => {
	return (
		<>
			<h1>SIMPLONVILLE</h1>
			<div className='home'>
				<p class='blocktext'>Devenons citoyens-acteurs de notre ville !</p>
			</div>
			<div className='home-buttons'>
				<HomeButton />
				<HomeLogButton />
			</div>
		</>
	);
};

export default Home;
