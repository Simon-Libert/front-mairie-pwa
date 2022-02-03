import * as React from 'react';
import { makeStyles } from '@emotion/styled';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ButtonValidation from '../buttons/ButtonValidation';
import { border } from '@mui/system';

const schema = yup
	.object()
	.shape({
		firstName: yup.string().required('Champ requis'),
		lastName: yup.string().required('Champ requis'),
		address: yup.string().required('Champ requis'),
		postCode: yup
			.number('Merci de saisir un code postal valide.')
			.integer()
			.required('Champ requis'),
		city: yup.string().required('Champ requis'),
		phone: yup
			.number('Merci de saisir un numéro de téléphone valide.')
			.required('Champ requis'),
		email: yup.string().email('Merci de saisir un email valide.').required('Champ requis'),
		password: yup
			.string()
			.min(6)
			.max(15)
			.matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/gim)
			.required('Champ requis'),
		passwordConfirm: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre')
			.required('Champ requis'),
	})
	.required();

export default function FormRegister() {
	const { handleSubmit, control } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data); // faire un axios post pour envoyer les données à l'api
	};

	return (
		<div className='MyFormRegister'>
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
						name='address'
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
				<ButtonValidation />
			</Box>
		</div>
	);
}
