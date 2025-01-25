import React, { useState} from 'react';
import CompleteTask from '../../TaskInform/CompleteTask';
import FailedTask from '../../TaskInform/FailedTask';
import AcceptTask from '../../TaskInform/AcceptTask';
import NewTask from '../../TaskInform/NewTask';

const TaskDetails = ({ data }) => {
  // Track the selected task type
  const [selectedTask, setSelectedTask] = useState(''); // Empty means no task is selected initially

  const handleSelectTask = (task) => {
    setSelectedTask(task); // Set selected task to the clicked task
  };

  // Function to conditionally render task components based on task status
  const renderTaskComponent = (task, index) => {
    // Unique key prop added to each rendered task component
    return (
      <div className='bg-white' key={index}>
        {selectedTask === 'complete' && task.complete && <CompleteTask data={task} />}
        {selectedTask === 'failed' && task.failed && <FailedTask data={task} />}
        {selectedTask === 'accept' && task.active && <AcceptTask data={task} />}
        {selectedTask === 'new' && task.newTask && <NewTask data={task} />}
      </div>
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl bg-white text-black font-semibold mb-4">Task Details</h2>
      <p className="text-lg bg-white text-gray-700 mb-4">
        Choose a task to view its details or perform actions.
      </p>

      {/* Buttons to select task type */}
      <div className="flex flex-row gap-4 overflow-auto no-scrollbar bg-white space-x-4 mb-6">
        <button
          onClick={() => handleSelectTask('complete')}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Complete Task
        </button>
        <button
          onClick={() => handleSelectTask('failed')}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Failed Task
        </button>
        <button
          onClick={() => handleSelectTask('accept')}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Accept Task
        </button>
        <button
          onClick={() => handleSelectTask('new')}
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          New Task
        </button>
      </div>

      {/* Conditionally render task components */}
      <div className="flex flex-row bg-white gap-4 overflow-auto no-scrollbar">
        {data.task.length > 0 ? (
          data.task.map((task, index) => {
            return renderTaskComponent(task, index); // Render task component based on selected task
          })
        ) : (
          <p className="text-gray-700">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default TaskDetails;
