import React, { useState } from 'react';
import Header from './other/Header';
import AllTasks from './other/AllTask';
import CreateTask from './CreateTask';

const AdminDashboard = ({ data ,changeUser }) => {
  const [tasks, setTasks] = useState([]);

  // Handle the creation of a new task
  const handleCreateTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);  // Add the new task to the task list
  };

  return (
    <>
      <Header data={data} changeUser={changeUser} />
      <div>
        <main className="p-6">
          {/* Task Creation Section */}
          <CreateTask onCreate={handleCreateTask} />
          
          {/* Task List Section */}
          <AllTasks tasks={tasks} />
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
