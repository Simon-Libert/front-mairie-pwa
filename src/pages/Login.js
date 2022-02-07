import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import PrimarySearchAppBar from '../components/nav/AppBar';
import { FormProvider } from 'react-hook-form';

const Login = () => {
	const form = (event) => {};

	return (
		<FormProvider {...form}>
			<PrimarySearchAppBar />
			<LoginForm />
		</FormProvider>
	);
};

export default Login;