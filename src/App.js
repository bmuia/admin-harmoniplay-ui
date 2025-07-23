import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/UseContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />

          {/* Protected Dashboard Route */}
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path='/error' element={<Error />} />
          <Route path='*' element={<div>Path does not exist</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
