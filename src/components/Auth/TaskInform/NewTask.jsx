// src/components/TaskInform/NewTask.js
import React from 'react';

const NewTask = ({data}) => {
  return (
    <div className="p-6 bg-yellow-100 rounded-lg">
      <h3 className="text-xl text-black bg-yellow-100 font-semibold">{data.taskTitle}</h3>
      <p className='text-black bg-yellow-100'>{data.taskDescription}</p>
    </div>
  );
};

export default NewTask;
