import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../../store';
import Modal from '../Modal/Modal';

export default function MainGame(): JSX.Element {
  const { topics } = useSelector((store: RootState) => store.questionState);
  console.log(topics);

  return (
    <div className="container">
      {topics.map((topic) => (
        <div key={topic.id}>
          {topic.title}
          <div className="row">
            {topic.Questions &&
              topic.Questions.map((question) => <Modal question={question} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
