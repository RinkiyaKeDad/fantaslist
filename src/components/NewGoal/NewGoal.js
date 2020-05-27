import React, { useState } from 'react';
import './NewGoal.css';
const NewGoal = props => {
  const [enteredText, setEnteredText] = useState('');

  const addGoal = event => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    props.onGoalAdd(newGoal);
    setEnteredText('');
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    <form className='new-goal form-inline' onSubmit={addGoal}>
      <input
        type='text'
        className='form-control'
        value={enteredText}
        required
        onChange={textChangeHandler}
      />
      <button
        className='btn btn-success'
        style={{ margin: '1rem' }}
        type='submit'
      >
        Add Goal
      </button>
    </form>
  );
};

export default NewGoal;
