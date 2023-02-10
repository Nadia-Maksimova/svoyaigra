
import React from 'react';
import { useSelector } from 'react-redux';
import store, { RootState } from '../../store';

import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../../store';
import Modal from '../QuestionCard/QuestionCard';
import './MainGame.scss';
import QuestionCard from '../QuestionCard/QuestionCard';


export default function MainGame(): JSX.Element {
  const { topics } = useSelector((store: RootState) => store.questionState);
  console.log(topics);

  return (
 
    <div className="main__container">
      {topics.map((topic) => (

        <li key={topic.id}>
          {topic.title}

          {/* {topic.questions.map((el) => (
            <li key={el.id}>{el.text}</li>
          ))} */}
        </li>

        <div className="main__topic" key={topic.id}>
          <div className='main__title' style={{color:'#006064', fontSize:'20px', fontWeight:'bold'}}>
          {topic.title}
          </div>
            {topic.Questions &&
              topic.Questions.map((question) => <QuestionCard question={question} />)}
        </div>

      ))}
    </div>
 
  );
}
