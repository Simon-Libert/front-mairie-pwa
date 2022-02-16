import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Alerte from './pages/Alerte';
import Profile from './pages/Profile';
import MyRegisterForm from './pages/Register';
import ProfileAlert from './pages/ProfileAlert';
import ProfileInfos from './pages/ProfileInfos';
import ProfileSecurity from './pages/ProfileSecurity';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/alert-form' element={<Alerte />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/profile-alerts' element={<ProfileAlert />} />
				<Route path='/profile-infos' element={<ProfileInfos />} />
				<Route path='/profile-security' element={<ProfileSecurity />} />
				<Route path='/register' element={<MyRegisterForm />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
