import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addNewGoal = newGoal => {
    setCourseGoals(prevCourseGoals => {
      var arr = prevCourseGoals.concat(); //this needs to be done so that a new array is present in arr and not just a refernece to the array of prev course goals
      arr.unshift(newGoal);
      console.log(prevCourseGoals);
      console.log(arr);
      console.log(courseGoals);
      return arr;
    });
  };

  //CODE PRESENT INITIALLY IN ADDNEWGOAL WHICH ADDED THE GOAL TO THE BOTTOM OF THE LIST AND NOT THE TOP
  //console.log(prevCourseGoals.concat(newGoal));
  //return prevCourseGoals.concat(newGoal);

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
