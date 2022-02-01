import React from 'react';
import PrimarySearchAppBar from '../nav/AppBar';

const Login = () => {
	return (
		<div>
			<PrimarySearchAppBar />
			<div className='form-component'>
				<div className='form-container'>
					<form>
						<label>
							<input type='text' placeholder='Email' id='email' />
						</label>
						<label>
							<input type='text' placeholder='Mot de passe' id='password' />
						</label>

						<input type='submit' value='Envoyer' />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
