import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import studentsData from '../data/students.json';

/**
 * Authentication Context for Student Portal
 * Handles login, logout, and session management
 */

interface Student {
  reg_no: string;
  password: string;
  name: string;
  profile: {
    email: string;
    phone: string;
    course: string;
    year: string;
    rollNo: string;
    address: string;
  };
  attendance: {
    overall: number;
    subjects: Array<{
      name: string;
      percentage: number;
      total: number;
      present: number;
    }>;
  };
  schedule: Array<{
    day: string;
    time: string;
    subject: string;
    room: string;
  }>;
  assignments: Array<{
    id: number;
    subject: string;
    title: string;
    dueDate: string;
    status: string;
  }>;
  exams: Array<{
    subject: string;
    date: string;
    time: string;
    room: string;
    type: string;
  }>;
  resources: Array<{
    title: string;
    type: string;
    url: string;
    subject: string;
  }>;
  events: Array<{
    title: string;
    date: string;
    time: string;
    venue: string;
    type: string;
  }>;
  notice: Array<{
    title: string;
    date: string;
    content: string;
    priority: string;
  }>;
  lostAndFound: Array<{
    id: number;
    type: string;
    item: string;
    location: string;
    date: string;
    contact: string;
  }>;
  settings: {
    notifications: boolean;
    emailUpdates: boolean;
    theme: string;
  };
}

interface AuthContextType {
  user: Student | null;
  login: (regNo: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('studentPortalUser');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('studentPortalUser');
      }
    }
  }, []);

  const login = async (regNo: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Find student in data
      const student = studentsData.students.find(
        (s) => s.reg_no === regNo && s.password === password
      );

      if (student) {
        // Remove password from user object for security
        const { password: _, ...userWithoutPassword } = student;
        const userObj = userWithoutPassword as Student;
        
        setUser(userObj);
        localStorage.setItem('studentPortalUser', JSON.stringify(userObj));
        setIsLoading(false);
        return true;
      } else {
        setError('Invalid Registration Number or Password');
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('studentPortalUser');
    setError(null);
    // Redirect to main auth page instead of old login page
    window.location.href = '/auth';
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};