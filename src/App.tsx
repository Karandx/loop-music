import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import Layout from './components/layout/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/artist/Dashboard';
import SubmitMusic from './pages/artist/SubmitMusic';
import MyReleases from './pages/artist/MyReleases';
import Analytics from './pages/artist/Analytics';
import AdminDashboard from './pages/admin/AdminDashboard';

const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRoles?: string[] }> = ({ 
  children, 
  allowedRoles = [] 
}) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={user ? (
          user.role === 'artist' ? <Navigate to="/dashboard" replace /> : <Navigate to="/admin" replace />
        ) : <Landing />} />
        
        <Route path="/login" element={!user ? <Login /> : (
          user.role === 'artist' ? <Navigate to="/dashboard" replace /> : <Navigate to="/admin" replace />
        )} />
        
        {/* Artist Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={['artist']}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/submit-music" element={
          <ProtectedRoute allowedRoles={['artist']}>
            <SubmitMusic />
          </ProtectedRoute>
        } />
        <Route path="/my-releases" element={
          <ProtectedRoute allowedRoles={['artist']}>
            <MyReleases />
          </ProtectedRoute>
        } />
        <Route path="/analytics" element={
          <ProtectedRoute allowedRoles={['artist']}>
            <Analytics />
          </ProtectedRoute>
        } />
        
        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;