import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { RootState } from '../../store';
import './MainGame.scss';
import QuestionCard from '../QuestionCard/QuestionCard';

export default function MainGame(): JSX.Element {
  const { topics } = useSelector((store: RootState) => store.questionState);

  const [value, setValue] = useState(0);

  return (
    <div className="main__container">
      <div style={{ fontSize: '22px' }}>Ваш счет: {value}</div>
      {topics.map((topic) => (
        <div className="main__topic" key={topic.id}>
          <div
            className="main__title"
            style={{ color: '#006064', fontSize: '20px', fontWeight: 'bold' }}
          >
            {topic.title}
          </div>
          {topic.Questions &&
            topic.Questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                value={value}
                setValue={setValue}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
