import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import AlertButton from '../buttons/AlertButton';
import { Paper } from '@mui/material';
import UploadButtons from '../buttons/CameraButton';

const schema = yup
	.object()
	.shape({
		type: yup.string().required('Champ requis'),
		description: yup.string().required('Champ requis'),
		date: yup
			.date()
			.default(function () {
				return new Date();
			})
			.required('Champ requis'),
		adress: yup.string().required('Champ requis'),
	})
	.required();

const AlertForm = () => {
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
							justifyContent: 'center',
						},
					}}
					noValidate
					autoComplete='off'>
					<div>
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
									SelectedProps={{
										native: true,
									}}>
									<option value>Voirie</option>
									<option value>Stationnement</option>
									<option value>Travaux</option>
									<option value>Autre</option>
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
							name='adress'
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
					</div>
					<AlertButton />
				</Box>
			</div>
		</Paper>
	);
};

export default AlertForm;
