import React from 'react';
import { Card, CardHeader, CardContent, IconButton, Typography } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

export default function NoteCard({ data }) {
	return (
		<div>
			<Card
				elevation={3}
				sx={{
					zIndex: '1',
					my: '25%',
					mx: '10%',
					display: 'flex',
					flexFlow: 'column wrap',
					justifyContent: 'center',
					opacity: 0.9,
				}}>
				<CardHeader
					action={
						<IconButton>
							<DeleteOutlined />
						</IconButton>
					}
				/>
				<Typography variant='body2'>{data.description}</Typography>
			</Card>
		</div>
	);
}
