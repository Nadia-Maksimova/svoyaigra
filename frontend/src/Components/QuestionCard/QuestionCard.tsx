import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import { borderBottom, padding } from '@mui/system';
import React, { useState } from 'react';
import { QuestionItem } from '../MainGame/questionTypes';
import '../MainGame/MainGame.scss'

type Props = {
  question: QuestionItem;
};

function QuestionCard({ question }: Props): JSX.Element {
  const [open, setOpen] = useState(false);
  const [isAnswerRight, setIsAnswerRight] = useState<boolean>();
  const [userAnswer, setUserAnswer] = useState('');

  //это надо заменить на score из БД
  const [score, setScore] = useState(0);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const sendAnswer = (q: QuestionItem): void => {
    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
      setIsAnswerRight(true);
      setScore((prevValue) => prevValue + question.score);
    } else {
      setIsAnswerRight(false);
      setScore((prevValue) => prevValue - question.score);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setUserAnswer(event.target.value);
  };

  return (
    <div className="card" style={{ width: '19%' }}>
      <Box
        sx={{
          borderRight: '1px solid #ced5dd',
          height: 150,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: 0.9,
          },
        }}
      >
        <Button
          onClick={handleOpen}
          sx={{
            color: '#000',
            display: 'flex',
            width: '100%',
            height: '100%',
            fontSize: '30px',
            backgroundColor: '#80deea',
          }}
          disabled={isAnswerRight !== undefined}
        >
          {question.score}
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            background: '#fff',
            margin: '10em auto',
            width: '50%',
            boxSizing: 'border-box',
            padding: '1em',
            borderRadius: '5px',
            boxShadow: '1px 1px 16px #000',
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: '24px', color: '#006064' }}
          >
            {question.text}
          </Typography>
          <TextField
            onChange={handleInputChange}
            id="filled-basic"
            variant="filled"
            sx={{ width: '100%', margin: '20px 0' }}
          />
          <br />
          <Button
            onClick={(): void => sendAnswer(question)}
            variant="contained"
            sx={{backgroundColor: '#b2ebf2', color: 'black', fontWeight: 'bold'}}
          >
            Ответить
          </Button>
          {isAnswerRight === undefined ? (
            ''
          ) : (
            <div style={{ fontSize: '22px' }}>
              {!isAnswerRight ? (
                <p>Неверно! Правильный ответ: {question.answer}</p>
              ) : (
                <p>Верно!</p>
              )}
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default QuestionCard;
