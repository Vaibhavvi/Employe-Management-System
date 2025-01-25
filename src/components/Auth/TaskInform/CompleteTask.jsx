import React from 'react';

const CompleteTask = ({data}) => {
  return (
    <div className="p-6 bg-green-100 rounded-lg">
      <h3 className="text-xl font-semibold bg-green-100 text-black">{data.taskTitle}</h3>
      <p className='bg-green-100 text-black'>{data.taskDescription}</p>
    </div>
  );
};

export default CompleteTask;
