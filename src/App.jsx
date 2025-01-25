import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Auth/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);  // Handle loading state
  const [userData,setUserData] = useContext(AuthContext); // Destructure data from context
  const [userLoggedInData , setLoggedInData] = useState(null)

 {/* useEffect(() => {

    if(authData){
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  },[authData]) */}

  useEffect (() => {
    const userLoggedInData = localStorage.getItem('userLoggedInData')

    if(userLoggedInData){
      const userData = JSON.parse(userLoggedInData)
      setUser(userData.role)
      setLoggedInData(userData.data)
    }
  },[])

  useEffect(() => {
    // Simulate data loading and remove loading indicator
    setIsLoading(false);
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'Admin@vaibhav.com' && password === '1234') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } else if (userData){
      const employee =  userData.employees.find((e) => email == e.email && e.password==password)
      if(employee){
        setUser('employee');
        setLoggedInData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee' , data:employee}))
      }
    } else {
      alert('Invalid User');
    }
  };

  // Show loading indicator while fetching context data (you can replace it with a spinner or something else)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Display Login if no user is logged in */}
      {!user && <Login handleLogin={handleLogin} />}

      {/* Render respective dashboard based on user role */}
      {user === 'admin' ? <AdminDashboard  changeUser={setUser} /> : user === 'employee' && <EmployeeDashboard changeUser={setUser} data={userLoggedInData} />}
    </>
  );
};

export default App;
