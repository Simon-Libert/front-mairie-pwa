import * as React from 'react';

import { Grid } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';

export default function AlertCards() {
	const [notes, setNotes] = React.useState([
		{
			status: '',
			type: '',
			description: '',
			date: '',
			alertAddress: '',
		},
	]);

	useEffect(() => {
		console.log(process.env.REACT_APP_API_URL);
		axios
			.get(`${process.env.REACT_APP_API_URL}/reports/user`, {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			})
			.then((res) => setNotes(res.data.reports))
			.catch((err) => console.log(err));
	}, []);

	return (
		<Grid container>
			<Grid item xs={12} sm={6} md={3}>
				{notes.map((note, key) => (
					<NoteCard key={key} data={note} />
				))}
			</Grid>
		</Grid>
	);
}
