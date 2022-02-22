import { Container } from '@mui/material';
import React from 'react';
import AlertCards from '../components/AlertCards';
import PrimarySearchAppBar from '../components/nav/AppBar';

export default function ProfileAlert() {
	return (
		<Container>
			<h1>Mes alertes</h1>

			<AlertCards />
			<PrimarySearchAppBar />
		</Container>
	);
}
