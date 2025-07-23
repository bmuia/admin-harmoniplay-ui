// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/UseContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />; 
  if (adminOnly && !user.admin) return <Navigate to="/error" />; // Not admin

  return children;
};

export default ProtectedRoute;
