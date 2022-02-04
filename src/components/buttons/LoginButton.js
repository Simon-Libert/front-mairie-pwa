import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const MyButton = styled(Button)`
	background-color: #faf287;
	color: black;

	&:hover {
		background-color: #e0af53;
	}

	font-weight: bold;
`;

const LoginButton = () => {
	return (
		<MyButton variant='contained' size='small' type='submit' value='Submit'>
			Valider
		</MyButton>
	);
};

export default LoginButton;
