import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import LoginButton from '../buttons/LoginButton';
import { Paper } from '@mui/material';
import axios from 'axios';

const schema = yup
	.object()
	.shape({
		email: yup.string().email('Merci de saisir un email valide.').required('Champ requis'),
		password: yup
			.string()
			.min(6)
			.max(15)
			.matches(
				/^[0-9A-Za-z]*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?][0-9a-zA-Z]*$/gim,
				'Le mot de passe doit contenir au moins une majuscule et un caractère spécial'
			)
			.required('Champ requis'),
	})
	.required();

export default function LoginForm() {
	const { handleSubmit, control } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		axios
			.post(`${process.env.REACT_APP_API_URL}/users/login`, data)
			.then((response) => {
				console.log(response);
				window.localStorage.setItem('token', response.data.token);
				alert('Connexion réussi avec succès, vous allez être redirigé vers votre profil');
				navigate('/profile');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	let navigate = useNavigate();

	return (
		<Paper
			elevation={3}
			sx={{
				my: '25%',
				mx: '10%',
				display: 'flex',
				flexFlow: 'column wrap',
				opacity: 0.9,
				placeItems: 'center',
			}}>
			<div className='MyLoginForm'>
				<Box
					onSubmit={handleSubmit(onSubmit)}
					component='form'
					sx={{
						'& .MuiTextField-root': {
							m: 1,
							width: '30ch',
						},
					}}
					noValidate
					autoComplete='off'>
					<>
						<Controller
							name='email'
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<TextField
									required
									id='standard-required'
									label='Email'
									variant='standard'
									value={value}
									onChange={onChange}
									error={!!error}
									helperText={error ? error.message : null}
								/>
							)}
							rules={{ required: 'Merci de renseigner votre email.' }}
						/>
						<Controller
							name='password'
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<TextField
									required
									id='standard-required'
									label='Mot de passe'
									type='password'
									variant='standard'
									value={value}
									onChange={onChange}
									error={!!error}
									helperText={error ? error.message : null}
								/>
							)}
							rules={{ required: 'Merci de renseigner votre password.' }}
						/>
					</>
					<LoginButton />
				</Box>
			</div>
		</Paper>
	);
}
