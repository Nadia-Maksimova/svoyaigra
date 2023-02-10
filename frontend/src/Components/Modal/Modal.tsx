import React from 'react';
import { QuestionItem } from '../MainGame/questionTypes';

type Props = {
  question: QuestionItem;
};

function Modal({ question }: Props): JSX.Element {
  return (
    <div>
      {question.score}
    </div>
  );
}

export default Modal;
