import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

/**
 * Dashboard Layout Component
 * Features:
 * - Protected route wrapper
 * - Fixed sidebar and navbar
 * - Main content area with Outlet
 * - Authentication check
 */

const DashboardLayout: React.FC = () => {
  const { user } = useAuth();

  // Redirect to main auth page if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="ml-64 pt-20 p-6">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;