import PrimarySearchAppBar from '../nav/AppBar';
import React from 'react';

const Home = () => {
	return (
		<div>
			<PrimarySearchAppBar />
			<h1>SIMPLONVILLE</h1>
			<p>Devenons citoyens-acteurs de notre ville !</p>
			<button>M'inscrire</button>
		</div>
	);
};

export default Home;
