import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
/* import AuthService from '../../services/Auth-service'; */

export default function FixedBottomNavigation() {
	const [value, setValue] = React.useState(0);
	const ref = React.useRef(null);

	/* const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
	}, []);

	const logOut = () => {
		AuthService.logout();
	}; */

	return (
		<Box sx={{ pb: 7 }} ref={ref}>
			<CssBaseline />

			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}>
					<BottomNavigationAction
						component={Link}
						to='/'
						label='Accueil'
						icon={<HomeIcon sx={{ color: 'black' }} />}
					/>

					<BottomNavigationAction
						component={Link}
						to='/alert-form'
						label='Alerte'
						icon={<AddAlertIcon sx={{ color: 'black' }} />}
					/>
					<BottomNavigationAction
						component={Link}
						to='/login'
						label='Login'
						icon={<VpnKeyIcon sx={{ color: 'black' }} />}
					/>
					<BottomNavigationAction
						component={Link}
						to='/profile'
						label='Profil'
						icon={<AccountCircleIcon sx={{ color: 'black' }} />}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	);
}
