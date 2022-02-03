import React from 'react';
import PrimarySearchAppBar from '../components/nav/AppBar';

const Alerte = () => {
	return (
		<div>
			<PrimarySearchAppBar />
			<div className='form-component'>
				<div className='form-container'>
					<form>
						<select>
							<option value='stationnement'>Stationnement</option>
							<option value='travaux'>Travaux</option>
							<option selected value='voirie'>
								Voirie
							</option>
							<option value='autre'>Autre</option>
						</select>

						<label>
							<input
								type='text'
								placeholder='Description'
								id='desc
              '
							/>
						</label>
						<label>
							<input type='text' placeholder='Date' id='date' />
						</label>
						<label>
							<input type='text' placeholder='Heure' id='time' />
						</label>
						<label>
							<input type='text' placeholder='Adresse' id='adress' />
						</label>

						<input type='submit' value='Envoyer' />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Alerte;
