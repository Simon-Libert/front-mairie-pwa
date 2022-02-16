import React from 'react';
import AlertCards from '../components/AlertCards';
import PrimarySearchAppBar from '../components/nav/AppBar';

export default function ProfileAlert() {
	return (
		<div>
			<h1>Mes alertes</h1>

			<AlertCards />
			<PrimarySearchAppBar />
		</div>
	);
}
