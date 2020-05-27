import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn about the main topic' },
    { id: 'cg3', text: 'help in QandA' },
  ]);

  const addNewGoal = newGoal => {
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };
  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onGoalAdd={addNewGoal} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
