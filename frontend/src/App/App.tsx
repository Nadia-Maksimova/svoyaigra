import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Components/Login/Login';
import MainGame from '../Components/MainGame/MainGame';
import Navbar from '../Components/Navbar/Navbar';
import Registration from '../Components/Registration/Registration';
import './App.css';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainGame />} />
        <Route path="/auth/registration" element={<Registration />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
