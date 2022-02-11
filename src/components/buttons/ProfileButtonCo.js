import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

const MyButton = styled(Button)`
	background-color: #faf287;
	color: black;
	&:hover {
		background-color: #e0af53;
	}
	font-weight: bold;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	position: absolute;
	top: 53%;
`;

export default function ProfileButton() {
	let navigate = useNavigate();
	return (
		<div className='profile-button' position='relative'>
			<MyButton
				variant='contained'
				type='submit'
				size='large'
				value='Submit'
				sx={{ my: '1em', width: '33ch', mx: 'calc(50% - 140px)' }}
				onClick={() => navigate('/profile-security')}>
				connexion et sécurité
			</MyButton>
		</div>
	);
}
