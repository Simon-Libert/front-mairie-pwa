import { Card } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import AlertCards from '../components/AlertCards';
import { Notes } from '@mui/icons-material';
import PrimarySearchAppBar from '../components/nav/AppBar';

const MyCard = styled(Card)`
	background-color: #f8f0ec;
	border-radius: 10px;
	width: 96%;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	position: absolute;
`;

export default function ProfileAlert() {
	return (
		<div>
			<h1>Mes alertes</h1>
			{/* <Notes /> */}
			<AlertCards />
			<PrimarySearchAppBar />
		</div>
	);
}
