import React from 'react';
import PrimarySearchAppBar from '../components/nav/AppBar';
import { FormProvider } from 'react-hook-form';
import AlertForm from '../components/forms/AlertForm';

const Alerte = () => {
	const form = (event) => {};
	return (
		<FormProvider {...form}>
			<PrimarySearchAppBar />

			<AlertForm />
		</FormProvider>
	);
};

export default Alerte;
