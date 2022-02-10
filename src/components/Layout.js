/* import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/material';
import { Container } from '@mui/material';

const useStyles = makeStyles({
	btn: {
		fontSize: 60,
		backgroundColor: '#FAF287',
		'&:hover': {
			backgroundColor: '#E0AF53',
		},
	},
	title: {
		textDecoration: 'underline',
		marginBottom: 20,
	},
});

export default function Layout() {
	const classes = useStyles();
	return (
		<Container>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Paper>xs=8</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper>xs=4</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper>xs=4</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper>xs=8</Paper>
					</Grid>
				</Grid>
			</Box>
			);
			<Button className={classes} onClick={() => console.log('you clicked me')} type='submit'>
				Envoyer
			</Button>
			;<Typography className={classes.title} variant='h6'></Typography>;
		</Container>
	);
}
 */
