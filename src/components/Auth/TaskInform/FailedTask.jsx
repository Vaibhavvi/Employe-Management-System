// src/components/TaskInform/FailedTask.js
import React from 'react';

const FailedTask = ({data}) => {
  return (
    <div className="p-6 bg-red-100 rounded-lg">
      <h3 className="text-xl text-black bg-red-100 font-semibold">{data.taskTitle}</h3>
      <p className='bg-red-100 text-black'>{data.taskDescription}</p>
    </div>
  );
};

export default FailedTask;
