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
		axios
			.get('https://powerful-sea-00313.herokuapp.com/api/v1/reports/:userId ')
			.then((res) => setNotes(res.data.results));
	}, []);

	return (
		<Grid container>
			<Grid item xs={12} sm={6} md={3}>
				{notes.map((note) => (
					<NoteCard data={note} />
				))}
			</Grid>
		</Grid>
	);
}
