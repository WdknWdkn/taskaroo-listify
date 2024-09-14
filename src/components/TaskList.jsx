import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li key={index} className="bg-white p-3 rounded shadow">
          {task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;