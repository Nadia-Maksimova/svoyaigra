import React from 'react';
import { useSelector } from 'react-redux';
import store, { RootState } from '../../store';

export default function MainGame(): JSX.Element {
  const { topics } = useSelector((store: RootState) => store.questionState);

  return (
    <div>
      {topics.map((topic) => (
        <li key={topic.id}>
          {topic.title}

          {/* {topic.questions.map((el) => (
            <li key={el.id}>{el.text}</li>
          ))} */}
        </li>
      ))}
    </div>
  );
}
