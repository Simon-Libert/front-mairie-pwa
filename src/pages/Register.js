import React from 'react';
import { FormProvider } from 'react-hook-form';
import RegisterForm from '../components/forms/RegisterForm';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';

const MyRegisterForm = () => {
	const form = (event) => {};

	return (
		<Container>
			<BottomNavigationAction
				component={Link}
				to='/'
				label=''
				icon={<KeyboardReturnIcon fontSize='large' sx={{ color: 'white' }} />}
			/>

			<h1>Inscription</h1>
			<FormProvider {...form}>
				<RegisterForm />
			</FormProvider>
		</Container>
	);
};
export default MyRegisterForm;
