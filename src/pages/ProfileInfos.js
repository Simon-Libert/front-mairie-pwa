import { Container } from '@mui/material';
import React from 'react';
import FormInfo from '../components/forms/FormInfo';
import PrimarySearchBar from '../components/nav/AppBar';

export default function ProfileInfos() {
	return (
		<Container>
			<FormInfo />
			<PrimarySearchBar />
		</Container>
	);
}
