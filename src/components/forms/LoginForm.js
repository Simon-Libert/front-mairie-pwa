import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import LoginButton from '../buttons/LoginButton';
import { Paper } from '@mui/material';

const schema = yup
	.object()
	.shape({
		email: yup.string().email('Merci de saisir un email valide.').required('Champ requis'),
		password: yup
			.string()
			.min(6)
			.max(15)
			.matches(
				/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/gim,
				'Le mot de passe doit contenir au moins une majuscule et un caractère spécial'
			)
			.required('Champ requis'),
		passwordConfirm: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre')
			.required('Champ requis'),
	})
	.required();

export default function LoginForm() {
	const { handleSubmit, control } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		navigate('/'); // faire un axios post pour envoyer les données à l'api
	};

	let navigate = useNavigate();

	return (
		<Paper
			elevation={1}
			sx={{
				my: '50%',
				mx: '3%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}>
			<div className='MyLoginForm'>
				<Box
					onSubmit={handleSubmit(onSubmit)}
					component='form'
					sx={{
						'& .MuiTextField-root': {
							m: 1,
							width: '39ch',
						},
					}}
					noValidate
					autoComplete='off'>
					<div>
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
					<LoginButton />
				</Box>
			</div>
		</Paper>
	);
}
