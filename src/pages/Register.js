import React from 'react';
import PrimarySearchAppBar from '../components/nav/AppBar';
import { useForm, FormProvider } from 'react-hook-form';
import FormRegister from '../components/forms/FormRegister';

const MyForm = () => {
	const form = (event) => {};

	return (
		<FormProvider {...form}>
			<PrimarySearchAppBar />
			<FormRegister />
		</FormProvider>
	);
};
export default MyForm;
