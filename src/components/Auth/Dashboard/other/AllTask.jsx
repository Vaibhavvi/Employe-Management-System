import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';


const AllTasks = () => {
  const [userData,setUserData] = useContext(AuthContext); // Access authentication data
  console.log(userData.employees)

  return (
    <section className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className='text-lg font-medium bg-red-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium bg-red-500 w-1/2'>Task Name</h2>
        <h5 className='text-lg font-medium bg-red-500 w-1/2'>New Task</h5>
        <h5 className='text-lg font-medium bg-red-500 w-1/2'>Accept Task</h5>
        <h5 className='text-lg font-medium bg-red-500 w-1/2'>Failed Task</h5>
        <h3 className='text-lg font-medium bg-red-500 w-1/2'>Complete Task</h3>
      </div>
      <div className=''>
      {userData.employees.map((e, index) => {
  // Count "newTask" for each employee
  const newTaskCount = e.task.filter(task => task.active).length;
  const AcceptTaskCount = e.task.filter(task => task.newTask).length;
  const FailedTaskCount = e.task.filter(task => task.failed).length;
  const CompleteTaskCount = e.task.filter(task => task.complete).length;

  return (
    <div key={index} className="border-2 mb-2 py-2 px-4 flex justify-between rounded">
      <h2 className="text-lg font-medium w-1/2">{e.firstName}</h2>
      <h3 className="w-1/2">{newTaskCount}</h3>  {/* Count of new tasks */}
      <h5 className="w-1/2">{AcceptTaskCount}</h5>
      <h5 className="w-1/2">{FailedTaskCount}</h5>
      <h5 className="w-1/2">{CompleteTaskCount}</h5>
    </div>
  );
})}
      </div>
    </section>
  );
};

export default AllTasks;
