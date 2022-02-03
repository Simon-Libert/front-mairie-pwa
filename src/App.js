import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Alerte from './pages/Alerte';
import Profile from './pages/Profile';
import MyForm from './pages/Register';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/form-alert' element={<Alerte />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/register' element={<MyForm />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
