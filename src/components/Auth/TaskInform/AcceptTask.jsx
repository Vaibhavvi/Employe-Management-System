import React from 'react';

const AcceptTask = ({data}) => {
  return (
    <div className="p-6 bg-blue-100 rounded-lg" style={{width:'200px', height:'300px'}}>
      <h3 className="text-xl bg-blue-100 text-black font-semibold">{data.taskTitle}</h3>
      <p className='bg-blue-100 text-black'>{data.taskDescription}</p>
    </div>
  );
};

export default AcceptTask;
