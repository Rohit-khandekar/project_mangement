import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false); // Use local state for authentication
  const location = useLocation();

  // Check your authentication logic here
  // For example, you can check if the user is logged in based on a token in localStorage

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
