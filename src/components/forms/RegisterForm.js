import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RegisterButton from '../buttons/RegisterButton';
import { useNavigate } from 'react-router';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';

const baseURL = `${process.env.REACT_APP_API_URL}`;

const schema = yup
	.object()
	.shape({
		firstName: yup.string().required('Champ requis'),
		lastName: yup.string().required('Champ requis'),
		userAddress: yup.string().required('Champ requis'),
		postCode: yup
			.string('Merci de saisir un code postal valide.')
			.min(5)
			.max(5)
			.required('Champ requis'),
		city: yup.string().required('Champ requis'),
		phone: yup
			.string('Merci de saisir un numéro de téléphone valide.')
			.min(10)
			.max(10)
			.required('Champ requis'),
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
		passwordConfirm: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre')
			.required('Champ requis'),
	})
	.required();

export default function RegisterForm() {
	const { handleSubmit, control } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		axios
			.post(`${baseURL}/users/register`, data)
			.then((response) => {
				alert('enregistrement réussi');
				navigate('/profile');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	let navigate = useNavigate();

	return (
		<Grid container>
			<Grid item xs={12} sm={6} md={3}>
				<Paper
					elevation={3}
					sx={{
						zIndex: '1',
						my: '25%',
						mx: '10%',
						display: 'flex',
						flexFlow: 'column wrap',
						justifyContent: 'center',
						opacity: '0.9',
					}}>
					<div className='MyFormRegister'>
						<Box
							onSubmit={handleSubmit(onSubmit)}
							component='form'
							sx={{
								'& .MuiTextField-root': {
									m: 1,
									width: '33ch',
								},
							}}
							noValidate
							autoComplete='off'>
							<div>
								<Controller
									name='firstName'
									control={control}
									defaultValue=''
									render={({
										field: { value, onChange, onBlur, ref },
										fieldState: { error },
									}) => (
										<TextField
											required
											id='standard-required'
											label='Nom'
											variant='standard'
											color='secondary'
											value={value}
											onChange={onChange}
											error={!!error}
											helperText={error ? error.message : null}
											ref={ref}
										/>
									)}
									rules={{ required: 'Merci de renseigner votre nom.' }}
								/>

								<Controller
									name='lastName'
									control={control}
									defaultValue=''
									render={({
										field: { value, onChange, onBlur, ref },
										fieldState: { error },
									}) => (
										<TextField
											required
											id='standard-required'
											label='Prénom'
											variant='standard'
											value={value}
											onChange={onChange}
											error={!!error}
											helperText={error ? error.message : null}
										/>
									)}
									rules={{ required: 'Merci de renseigner votre prénom.' }}
								/>
								<Controller
									name='userAddress'
									control={control}
									defaultValue=''
									render={({
										field: { value, onChange, onBlur, ref },
										fieldState: { error },
									}) => (
										<TextField
											required
											id='standard-required'
											label='Adresse'
											variant='standard'
											value={value}
											onChange={onChange}
											error={!!error}
											helperText={error ? error.message : null}
										/>
									)}
									rules={{ required: 'Merci de renseigner votre adresse.' }}
								/>
								<Controller
									name='postCode'
									control={control}
									defaultValue=''
									render={({
										field: { value, onChange, onBlur, ref },
										fieldState: { error },
									}) => (
										<TextField
											required
											id='standard-required'
											label='Code Postal'
											variant='standard'
											value={value}
											onChange={onChange}
											error={!!error}
											helperText={error ? error.message : null}
										/>
									)}
									rules={{ required: 'Merci de renseigner votre code postal.' }}
								/>
								<Controller
									name='city'
									control={control}
									defaultValue=''
									render={({
										field: { value, onChange, onBlur, ref },
										fieldState: { error },
									}) => (
										<TextField
											required
											id='standard-required'
											label='Ville'
											variant='standard'
											value={value}
											onChange={onChange}
											error={!!error}
											helperText={error ? error.message : null}
										/>
									)}
									rules={{ required: 'Merci de renseigner votre ville.' }}
								/>
								<Controller
									name='phone'
									control={control}
									defaultValue=''
									render={({
										field: { value, onChange, onBlur, ref },
										fieldState: { error },
									}) => (
										<TextField
											required
											id='standard-required'
											label='Téléphone'
											variant='standard'
											value={value}
											onChange={onChange}
											error={!!error}
											helperText={error ? error.message : null}
										/>
									)}
									rules={{
										required: 'Merci de renseigner votre numéro de téléphone.',
									}}
								/>
								<Controller
									name='email'
									control={control}
									defaultValue=''
									render={({
										field: { value, onChange },
										fieldState: { error },
									}) => (
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
									defaultValue=''
									render={({
										field: { value, onChange },
										fieldState: { error },
									}) => (
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
									render={({
										field: { value, onChange, onBlur, ref },
										fieldState: { error },
									}) => (
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
							</div>
							<RegisterButton />
						</Box>
					</div>
				</Paper>
			</Grid>
		</Grid>
	);
}
