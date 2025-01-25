import React from 'react';
import Header from './other/Header';
import TaskList from './other/TaskList';
import TaskDetail from './other/TaskDetail';

const EmployeeDashboard = ({data,changeUser}) => {

  // Initialize task counts
  let activeTasks = 0;
  let completeTasks = 0;
  let acceptedTasks = 0;
  let failedTasks = 0;

  // Loop through the tasks and sum up taskNumber values
  if (data?.task) {
    data.task.forEach((task) => {
      if (task.taskNumber) {
        activeTasks += task.taskNumber.active || 0;
        completeTasks += task.taskNumber.complete || 0;
        acceptedTasks += task.taskNumber.newTask || 0;  // Assuming 'newTask' is the accepted task count
        failedTasks += task.taskNumber.failed || 0;
      }
    });
  }

  return (
    <div>
      <Header changeUser={changeUser} data={data} />
      
      {/* Task Lists */}
      <div className="flex flex-row gap-4 overflow-auto no-scrollbar">
        <TaskList 
          title={activeTasks}   // Task count for active tasks
          description='New Task' 
          bgColor='green' 
          data={data} 
        />
        <TaskList 
          title={completeTasks}   // Task count for completed tasks
          description='Completed Task' 
          bgColor='red' 
          data={data} 
        />
        <TaskList 
          title={acceptedTasks}   // Task count for accepted tasks
          description='Accepted Task' 
          bgColor='orange' 
          data={data} 
        />
        <TaskList 
          title={failedTasks}   // Task count for failed tasks
          description='Failed Task' 
          bgColor='blue' 
          data={data} 
        />
      </div>

      <TaskDetail data={data} />
    </div>
  );
};

export default EmployeeDashboard;
