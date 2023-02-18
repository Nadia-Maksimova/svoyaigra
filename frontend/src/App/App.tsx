import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from '../Components/Login/Login';
import MainGame from '../Components/MainGame/MainGame';
import Navbar from '../Components/Navbar/Navbar';
import Registration from '../Components/Registration/Registration';
import './App.css';
import * as api from '../api';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    api.loadTopics().then((data) =>
      dispatch({
        type: 'GET_TOPIC',
        payload: data,
      }),
    );
  }, []);

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
