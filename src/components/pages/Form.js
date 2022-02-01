import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
	.object()
	.shape({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		adress: yup.string().required(),
		postCode: yup.string().required(),
		city: yup.string().required(),
		phone: yup.string().required(),
		email: yup.string().required(),
		password: yup.string().required(),
		passwordConfirm: yup.string().required(),
	})
	.required();

export default function SignUpForm() {
	const { handleSubmit, control } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Box
			onSubmit={handleSubmit(onSubmit)}
			component='form'
			sx={{
				'& .MuiTextField-root': {
					m: 1,
					width: '25ch',
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
					name='Adress'
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
					rules={{ required: 'Merci de renseigner votre numéro de téléphone.' }}
				/>
				<Controller
					name='email'
					control={control}
					defaultValue=''
					render={({
						field: { value, onChange, onBlur, ref },
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
						field: { value, onChange, onBlur, ref },
						fieldState: { error },
					}) => (
						<TextField
							required
							id='standard-required'
							label='Mot de passe'
							type='password'
							f
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
							label='Confirmation'
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
			<Button variant='contained' type='submit' color='secondary' value='Submit'>
				Valider
			</Button>
		</Box>
	);
}
