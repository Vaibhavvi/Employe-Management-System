import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage,setLocalStorage } from '../utilis/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  localStorage.clear()

  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    const { employees} = getLocalStorage();
    setUserData({ employees});
  }, []);

  useEffect(() => {
    // Call this only once when the app loads to set the data
    setLocalStorage();
  }, []);
  

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
