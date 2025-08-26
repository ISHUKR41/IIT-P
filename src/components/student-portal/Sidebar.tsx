import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  BookOpen,
  FileText,
  Users,
  Bell,
  QrCode,
  Search,
  User,
  Settings,
  GraduationCap
} from 'lucide-react';

/**
 * Sidebar Navigation Component for Student Portal
 * Features:
 * - Fixed sidebar with navigation links
 * - Active route highlighting
 * - Icon-based navigation
 * - Responsive design
 */

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    path: '/student-portal/dashboard'
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: <Calendar className="w-5 h-5" />,
    path: '/student-portal/attendance'
  },
  {
    id: 'schedule',
    label: 'Schedule',
    icon: <ClipboardList className="w-5 h-5" />,
    path: '/student-portal/schedule'
  },
  {
    id: 'assignments',
    label: 'Assignments',
    icon: <BookOpen className="w-5 h-5" />,
    path: '/student-portal/assignments'
  },
  {
    id: 'exams',
    label: 'Exams',
    icon: <FileText className="w-5 h-5" />,
    path: '/student-portal/exams'
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: <BookOpen className="w-5 h-5" />,
    path: '/student-portal/resources'
  },
  {
    id: 'events',
    label: 'Events',
    icon: <Users className="w-5 h-5" />,
    path: '/student-portal/events'
  },
  {
    id: 'notice',
    label: 'Notice',
    icon: <Bell className="w-5 h-5" />,
    path: '/student-portal/notice'
  },
  {
    id: 'qr-scanner',
    label: 'QR Scanner',
    icon: <QrCode className="w-5 h-5" />,
    path: '/student-portal/qr-scanner'
  },
  {
    id: 'lost-found',
    label: 'Lost & Found',
    icon: <Search className="w-5 h-5" />,
    path: '/student-portal/lost-found'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <User className="w-5 h-5" />,
    path: '/student-portal/profile'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="w-5 h-5" />,
    path: '/student-portal/settings'
  }
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 z-50">
      {/* Logo/Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Student Portal</h1>
            <p className="text-sm text-slate-400">IIT Patna</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="mt-6">
        <ul className="space-y-1 px-4">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }
                  `}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="text-xs text-slate-500 text-center">
          <p>&copy; 2024 IIT Patna</p>
          <p>Student Portal v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;