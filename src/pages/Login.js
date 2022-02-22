import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { FormProvider } from 'react-hook-form';
import { Container } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const Login = () => {
	const form = (event) => {};

	return (
		<Container>
			<BottomNavigationAction
				component={Link}
				to='/'
				label=''
				icon={<KeyboardReturnIcon fontSize='large' sx={{ color: 'white' }} />}
			/>
			<h1>Connexion</h1>
			<FormProvider {...form}>
				<LoginForm />
			</FormProvider>
		</Container>
	);
};

export default Login;
