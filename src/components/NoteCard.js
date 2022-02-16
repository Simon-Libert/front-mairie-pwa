import React from 'react';
import { Card, CardHeader, CardContent, IconButton, Typography } from '@mui/material';
import { CardMedia } from '@mui/material';

export default function NoteCard({ data }) {
	return (
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
			{/* 	<CardHeader
				action={
					<IconButton>
						<DeleteOutlined />
					</IconButton>
				}
			/> */}
			<CardMedia component='img' height='140' image={data.image} />
			<Typography variant='body2'>{data.type}</Typography>
			<Typography variant='body2'>{data.description}</Typography>
			<Typography variant='body2'>{data.date}</Typography>
			<Typography variant='body2'>{data.alertAddress}</Typography>
		</Card>
	);
}
