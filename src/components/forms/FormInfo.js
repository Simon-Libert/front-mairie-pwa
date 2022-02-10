import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { Paper } from '@mui/material';
import ModifInfosBtn from '../buttons/ModifInfosBtn';

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
	})
	.required();

export default function FormInfo() {
	const { handleSubmit, control } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		navigate('/profile'); // faire un axios post pour envoyer les données à l'api
	};

	let navigate = useNavigate();

	return (
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
							rules={{ required: 'Merci de renseigner votre numéro de téléphone.' }}
						/>
						<Controller
							name='email'
							control={control}
							defaultValue=''
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
					</div>
					<ModifInfosBtn />
				</Box>
			</div>
		</Paper>
	);
}
