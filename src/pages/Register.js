import React from 'react';
import { FormProvider } from 'react-hook-form';
import RegisterForm from '../components/forms/RegisterForm';

const MyRegisterForm = () => {
	const form = (event) => {};

	return (
		<>
			<h1>Inscription</h1>
			<FormProvider {...form}>
				<RegisterForm />
			</FormProvider>
		</>
	);
};
export default MyRegisterForm;
