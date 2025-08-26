import React from 'react';
import { LogOut, User, Bell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/button';
import { toast } from 'sonner';

/**
 * Top Navigation Bar Component for Student Portal
 * Features:
 * - Welcome message with student name
 * - Logout button
 * - Profile quick access
 * - Notification indicator
 * - Fixed top position
 */

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 fixed top-0 right-0 left-64 z-40">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Welcome Message */}
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Welcome, {user?.name || 'Student'}
              </h2>
              <p className="text-sm text-slate-600">
                {user?.profile.course} • {user?.profile.year}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notification Button */}
            <Button
              variant="ghost"
              size="sm"
              className="relative p-2"
            >
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
            </Button>

            {/* Profile Button */}
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 p-2"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden md:block text-sm font-medium text-slate-700">
                {user?.profile.rollNo}
              </span>
            </Button>

            {/* Logout Button */}
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;