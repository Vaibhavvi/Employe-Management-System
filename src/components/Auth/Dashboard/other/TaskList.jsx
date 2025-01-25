import React from 'react'

const TaskList = ({ title, description, bgColor}) => {
  return (
    <div className='main-container'>
      <div className="task-container border-2 border-gray-300 rounded-lg shadow-lg p-4 mb-4 " style={{ backgroundColor: bgColor , width: '230px' }} >
        <h1 className='font-bold text-2xl' style={{ backgroundColor: bgColor }} >{title}</h1>
        <h3 className='text-lg ' style={{ backgroundColor: bgColor }} >{description}</h3>
      </div>
    </div>
  )
}

export default TaskList
