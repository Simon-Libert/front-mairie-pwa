import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import PrimarySearchAppBar from '../components/nav/AppBar';
import { FormProvider } from 'react-hook-form';

const Login = () => {
	const form = (event) => {};

	return (
		<>
			<h1>Connexion</h1>
			<FormProvider {...form}>
				<LoginForm />
				<PrimarySearchAppBar />
			</FormProvider>
		</>
	);
};

export default Login;
