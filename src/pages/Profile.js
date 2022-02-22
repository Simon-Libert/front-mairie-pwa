import { Container } from '@mui/material';
import React from 'react';
import ProfileButtonAlerts from '../components/buttons/ProfileButtonAlerts';
import ProfileButtonCo from '../components/buttons/ProfileButtonCo';
import ProfileButtonInf from '../components/buttons/ProfileButtonInf';
import PrimarySearchAppBar from '../components/nav/AppBar';

const Profile = () => {
	return (
		<Container>
			<h1>mon profil</h1>
			<ProfileButtonAlerts />
			<ProfileButtonInf />
			<ProfileButtonCo />
			<PrimarySearchAppBar />
		</Container>
	);
};

export default Profile;
