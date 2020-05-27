import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addNewGoal = newGoal => {
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };

  const deleteList = id => {
    setCourseGoals(prevCourseGoals =>
      prevCourseGoals.filter(listItem => listItem.id !== id)
    );
  };

  return (
    <div className='course-goals container'>
      <div className='header'>
        <i className='fas fa-list-ol fa-3x' style={{ padding: '1rem' }} />
        <h1 className='display-4' style={{ padding: '1rem' }}>
          Fantas<mark>List</mark>
        </h1>
      </div>
      <NewGoal onGoalAdd={addNewGoal} />
      <GoalList goals={courseGoals} deleteHandler={deleteList} />
    </div>
  );
};

export default App;
