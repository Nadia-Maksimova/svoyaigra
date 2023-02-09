import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Components/Login/Login';
import MainGame from '../Components/MainGame/MainGame';
import Navbar from '../Components/Navbar/Navbar';
import Registration from '../Components/Registration/Registration';
import './App.css';
import { useDispatch } from 'react-redux';
import * as api from '../api';
import { TopicAction, TopicItem } from '../Components/MainGame/questionTypes';

function App(): JSX.Element {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function getThemes(): Promise<TopicItem[]> {
  //     const response = await fetch('http://localhost:4000/api/topics', {mode:'no-cors'});
  //     const allThemes = await response.json();
  //     const action: TopicAction = { type: 'GET_TOPIC', payload: allThemes };
  //     dispatch(action);
  //   }
  //   getThemes();
  // }, [])

  useEffect(() => {
    api.loadTopics().then((data) => 
    dispatch({
      type: 'GET_TOPIC', payload: data
    }))
  }, [])
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
