import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Alerte from './components/pages/Alerte';
import Profile from './components/pages/Profile';
import Signup from './components/pages/Signup';

import './App.css';
import MyForm from './components/pages/Form';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Signup />} />
				<Route path='/form-alert' element={<Alerte />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/test' element={<MyForm />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
