import React from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const MyButton = styled(Button)`
	background-color: #faf287;
	color: black;
	height: 50px;
	width: 149px;
	drop-shadow: 0px 5px 5px 0px #000000;
	&:hover {
		background-color: #e0af53;
	}
	font-weight: bold;
	font-size: 1.3rem;
`;

const ButtonValidation = () => {
	return (
		<MyButton variant='contained' type='submit' value='Submit'>
			Valider
		</MyButton>
	);
};

export default ButtonValidation;
