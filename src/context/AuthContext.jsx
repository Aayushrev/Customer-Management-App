import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if there's a saved token in localStorage
    return localStorage.getItem('authToken') !== null;
  });

  const login = (email, password) => {
    // Perform login logic here (e.g., API call)
    const token = 'some-token';  // Replace with actual token
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // Check authentication status on component mount
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
