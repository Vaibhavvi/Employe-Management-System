import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignTo, setAssignTo] = useState('');  // New state to store the assigned employee's name

  const [userData, setUserData] = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault(); // This prevents the page from reloading on form submission

    // Create a new task object
    const newTask = { 
      id: Date.now(),  // Using current timestamp as a unique ID for the task
      taskTitle, 
      taskDescription, 
      dateCreated: new Date().toLocaleDateString(), 
      active: false, 
      newTask: true, 
      failed: true, 
      complete: false 
    };

    // Create a copy of the employees array to modify
    const data = [...userData.employees];

    // Loop through the employees and assign task to the selected employee
    data.forEach((e) => {
      if (assignTo === e.firstName) {
        // Check if taskNumber exists, if not, initialize it
        if (!e.taskNumber) {
          e.taskNumber = { newTask: 0, active: 0, complete: 0, failed: 0 };  // Initialize taskNumber if it's undefined
        }
        
        // Add the new task and update the newTask count
        e.task.push(newTask);
        e.taskNumber.newTask = e.taskNumber.newTask + 1;  // Increment the newTask count for the employee
      }
    });

    // Update the userData with the modified employees array
    setUserData({ ...userData, employees: data });

    // Save the updated data to localStorage (optional)
    localStorage.setItem('userData', JSON.stringify(userData));

    console.log(data);  // Check the updated employee data in the console

    // Clear the form fields after submission
    setTaskTitle('');
    setTaskDescription('');
    setAssignTo('');  // Reset the assignTo field
  };

  return (
    <section className="bg-black p-6 rounded-lg shadow-lg mb-10 border-solid border-2">
      <h2 className="text-xl font-semibold mb-4">Create a Task</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label htmlFor="taskTitle" className="block text-white">Task Title</label>
          <input
            type="text"
            id="taskTitle"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="taskDescription" className="block text-white">Task Description</label>
          <textarea
            id="taskDescription"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="assignTo" className="block text-white">Assign To</label>
          <select
            id="assignTo"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            required
          >
            <option value="">Select Employee</option>
            {userData?.employees?.map((employee) => (
              <option key={employee.firstName} value={employee.firstName}>
                {employee.firstName} {employee.lastName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
        >
          Create Task
        </button>
      </form>
    </section>
  );
};

export default CreateTask;
