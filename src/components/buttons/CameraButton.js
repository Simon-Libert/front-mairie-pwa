/* import * as React from 'react';
import { styled } from '@mui/material/styles';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
	display: 'none',
});

export default function UploadButtons() {
	return (
		<Stack direction='row' alignItems='center' spacing={2}>
			<label htmlFor='contained-button-file'>
				<Input accept='image/*' id='contained-button-file' multiple type='file' />
			</label>
			<label htmlFor='icon-button-file'>
				<Input accept='image/*' id='icon-button-file' type='file' />
				<IconButton aria-label='upload picture' component='span'>
					<PhotoCameraIcon
						sx={{
							fontSize: 60,
							position: 'relative',
							left: '180px',
							top: '-40px',
							color: 'black',
						}}
					/>
				</IconButton>
			</label>
		</Stack>
	);
}
 */
