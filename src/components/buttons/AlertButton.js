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
`;

const AlertButton = () => {
	return (
		<MyButton
			variant='contained'
			size='large'
			type='submit'
			value='Submit'
			sx={{ my: '1em', mx: 'calc(50% - 50px)' }}>
			Valider
		</MyButton>
	);
};

export default AlertButton;
