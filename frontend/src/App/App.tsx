import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Components/Auth/Login';
import MainGame from '../Components/MainGame/MainGame';
import Navbar from '../Components/Navbar/Navbar';
import Registration from '../Components/Auth/Registration';
import './App.css';
import * as api from '../api';

import { RootState } from '../store';

function App(): JSX.Element {
  const dispatch = useDispatch();

  const { user } = useSelector((store: RootState) => store.userState);

  useEffect(() => {
    api.loadTopics().then((data) =>
      dispatch({
        type: 'GET_TOPIC',
        payload: data,
      })

      }),
    );
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {'id' in user ? (
          <Route path="/" element={<MainGame />} />
        ) : (
          <>
            <Route path="/auth/sign-up" element={<Registration />} />
            <Route path="/auth/login" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
