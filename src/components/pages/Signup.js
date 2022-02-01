import React from 'react';
import PrimarySearchAppBar from '../nav/AppBar';
import { useForm, FormProvider } from 'react-hook-form';
import SignUpForm from './Form';

const MyForm = () => {
	const form = (event) => {};

	return (
		<FormProvider {...form}>
			<PrimarySearchAppBar />
			<SignUpForm />
		</FormProvider>
	);
};
export default MyForm;
