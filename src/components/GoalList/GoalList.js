import React from 'react';
import './GoalList.css';

const GoalList = props => {
  console.log(props);
  return (
    <ul className='list-group-flush'>
      {props.goals.map(goal => {
        return (
          <li className='list-group-item list-group-item-success' key={goal.id}>
            {goal.text}
            <button onClick={() => props.deleteHandler(goal.id)}>
              <i className='fas fa-trash' />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default GoalList;
