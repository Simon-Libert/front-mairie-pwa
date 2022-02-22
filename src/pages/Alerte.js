import React from 'react';
import PrimarySearchAppBar from '../components/nav/AppBar';
import { FormProvider } from 'react-hook-form';
import AlertForm from '../components/forms/AlertForm';
import { Container } from '@mui/material';

const Alerte = () => {
	const form = (event) => {};
	return (
		<Container>
			<h1>Alerte</h1>
			<FormProvider {...form}>
				<AlertForm />
				<PrimarySearchAppBar />
			</FormProvider>
		</Container>
	);
};

export default Alerte;
