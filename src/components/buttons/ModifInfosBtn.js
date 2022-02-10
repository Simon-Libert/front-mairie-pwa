import React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const MyButton = styled(Button)`
	background-color: #fb4c26;
	color: black;
	drop-shadow: 0px 5px 5px 0px #000000;
	&:hover {
		background-color: #c62828;
	}
	font-weight: bold;
`;

const ModifInfosBtn = () => {
	return (
		<MyButton
			variant='contained'
			size='large'
			type='submit'
			value='Submit'
			sx={{ my: '1em', mx: 'calc(50% - 50px)' }}>
			Modifier
		</MyButton>
	);
};

export default ModifInfosBtn;
