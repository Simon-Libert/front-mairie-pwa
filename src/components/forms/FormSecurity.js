import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { Paper } from '@mui/material';
import ModifInfosBtn from '../buttons/ModifInfosBtn';
import axios from 'axios';

const schema = yup
	.object()
	.shape({
		password: yup
			.string()
			.min(6)
			.max(15)
			.matches(
				/^[0-9A-Za-z]*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?][0-9a-zA-Z]*$/gim,
				'Le mot de passe doit contenir au moins une majuscule et un caractère spécial'
			)
			.required('Champ requis'),
		passwordConfirm: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre')
			.required('Champ requis'),
	})
	.required();

export default function FormSecurity() {
	const { handleSubmit, control } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		axios
			.put(`${process.env.REACT_APP_API_URL}/users/update`, data, {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			})
			.then((response) => {
				alert(
					'Votre mot de passe a bien été modifié, vous allez être redirigé vers votre page profil'
				);
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
				placeItems: 'center',
				opacity: 0.9,
			}}>
			<div className='MyLoginForm'>
				<Box
					onSubmit={handleSubmit(onSubmit)}
					component='form'
					sx={{
						'& .MuiTextField-root': {
							m: 1,
							width: '32ch',
						},
					}}
					noValidate
					autoComplete='off'>
					<>
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
						<Controller
							name='passwordConfirm'
							control={control}
							defaultValue=''
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<TextField
									required
									id='standard-password-required'
									label='Confirmation mot de passe'
									type='password'
									variant='standard'
									value={value}
									onChange={onChange}
									error={!!error}
									helperText={error ? error.message : null}
								/>
							)}
							rules={{ required: 'Merci de confirmer votre password.' }}
						/>
					</>
					<ModifInfosBtn />
				</Box>
			</div>
		</Paper>
	);
}
