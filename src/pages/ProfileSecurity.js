import { Container } from '@mui/material';
import React from 'react';
import FormSecurity from '../components/forms/FormSecurity';
import PrimarySearchBar from '../components/nav/AppBar';

export default function ProfileSecurity() {
	return (
		<Container>
			<FormSecurity />
			<PrimarySearchBar />
		</Container>
	);
}
