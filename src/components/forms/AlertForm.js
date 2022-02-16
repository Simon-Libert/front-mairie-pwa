import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import AlertButton from '../buttons/AlertButton';
import { Paper } from '@mui/material';
import { MenuItem } from '@mui/material';

const baseURL = `${process.env.REACT_APP_API_URL}`;

const schema = yup
	.object()
	.shape({
		description: yup.string().required('Champ requis'),
		date: yup
			.date()
			.default(function () {
				return new Date();
			})
			.required('Champ requis'),
		alertAddress: yup.string().required('Champ requis'),
	})
	.required();

const AlertForm = () => {
	const { handleSubmit, control } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		axios
			.post(`${baseURL}/reports`, data, {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			})
			.then((response) => {
				alert(
					'Votre alerte a bien été enregistrée, vous allez être redirigé vers votre page profil'
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
				zIndex: 2,
				my: '20%',
				mx: '10%',
				display: 'flex',
				flexFlow: 'column wrap',
				justifyContent: 'center',
				opacity: '0.9',
			}}>
			<div className='MyAlertForm'>
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
					<Controller
						name='type'
						control={control}
						defaultValue=''
						render={({
							field: { value, onChange, onBlur, ref },
							fieldState: { error },
						}) => (
							<TextField
								required
								id='filled-select-currency-native-required'
								select
								label='Type'
								variant='standard'
								value={value}
								onChange={onChange}
								error={!!error}
								helperText={error ? error.message : null}
								selectedprops={{
									native: true,
								}}>
								<MenuItem value={'voirie'}>Voirie</MenuItem>
								<MenuItem value={'stationnement'}>Stationnement</MenuItem>
								<MenuItem value={'travaux'}>Travaux</MenuItem>
								<MenuItem value={'autre'}>Autre</MenuItem>
							</TextField>
						)}
						rules={{ required: "Merci de sélectionner un type d'alerte." }}
					/>

					<Controller
						name='description'
						control={control}
						defaultValue=''
						render={({
							field: { value, onChange, onBlur, ref },
							fieldState: { error },
						}) => (
							<TextField
								required
								id='filled-multiline-flexible-required'
								label='Description'
								multiline
								maxRows={4}
								type='text'
								variant='standard'
								value={value}
								onChange={onChange}
								error={!!error}
								helperText={error ? error.message : null}
							/>
						)}
						rules={{ required: 'Merci de renseigner une description.' }}
					/>
					<Controller
						name='date'
						control={control}
						defaultValue=''
						render={({
							field: { value, onChange, onBlur, ref },
							fieldState: { error },
						}) => (
							<TextField
								required
								id='standard-required'
								label='Date'
								type='Date'
								variant='standard'
								value={value}
								onChange={onChange}
								error={!!error}
								helperText={error ? error.message : null}
							/>
						)}
						rules={{ required: 'Merci de renseigner la date.' }}
					/>
					<Controller
						name='alertAddress'
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
								type='text'
								variant='standard'
								value={value}
								onChange={onChange}
								error={!!error}
								helperText={error ? error.message : null}
							/>
						)}
						rules={{ required: 'Merci de renseigner une adresse.' }}
					/>

					<AlertButton />
				</Box>
			</div>
		</Paper>
	);
};

export default AlertForm;
