import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

const MyButton = styled(Button)`
	background-color: #faf287;
	color: black;

	drop-shadow: 0px 5px 5px 0px #000000;
	&:hover {
		background-color: #e0af53;
	}

	font-weight: bold;
`;

const HomeButton = () => {
	let navigate = useNavigate();
	return (
		<MyButton
			variant='contained'
			size='small'
			type='submit'
			value='Submit'
			onClick={() => navigate('/register')}>
			Valider
		</MyButton>
	);
};

export default HomeButton;
