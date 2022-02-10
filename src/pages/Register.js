import React from 'react';
import PrimarySearchAppBar from '../components/nav/AppBar';
import { FormProvider } from 'react-hook-form';
import RegisterForm from '../components/forms/RegisterForm';

const MyRegisterForm = () => {
	const form = (event) => {};

	return (
		<>
			<h1>Inscription</h1>
			<FormProvider {...form}>
				<RegisterForm />
				<PrimarySearchAppBar />
			</FormProvider>
		</>
	);
};
export default MyRegisterForm;
