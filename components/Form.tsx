import React from 'react';
import { useForm } from 'react-hook-form';
import EventHandler from '../types/EventHandler';
import IKaizen from '../types/IKaizen';

const Form: React.FC = () => {
  const [title, setTitle] = React.useState('');
  const [choices, setChoices] = React.useState('');
  const [myChoice, setMyChoice] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const onSaveSubmit = async (e: React.SyntheticEvent) => {
    try {
      const body = { title, choices, myChoice, answer };
      await fetch('/api/kaizen', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className='flex flex-col' onSubmit={onSaveSubmit}>
      <label className='ml-5'>Problem</label>
      <input
        type="text"
        id="problem"
        name="problem"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label className='ml-5'>Choices</label>
      <input
        type="text"
        id="choices"
        name="choices"
        onChange={(e) => setChoices(e.target.value)}
        value={choices}
      />
      <label className='ml-5'>My Choice</label>
      <input
        type="text"
        id="my-choice"
        name="my-choice"
        onChange={(e) => setMyChoice(e.target.value)}
        value={myChoice}
      />
      <label className='ml-5'>Answer</label>
      <input
        type="text"
        id="answer"
        name="answer"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
      />
      <button
        className='bg-blue-300'
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
