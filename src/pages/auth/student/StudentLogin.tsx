import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, GraduationCap, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import AuthLayout from '@/components/auth/AuthLayout';
import { RippleEffect } from '@/components/effects/ModernEffects';
import { useAuth } from '@/context/AuthContext';

/**
 * Student Login Page Component
 * 
 * Features:
 * - Student-specific login form with registration number
 * - Form validation using React Hook Form + Zod
 * - Password visibility toggle
 * - Beautiful AuthLayout with campus background
 * - Ripple effect on login button
 * - Remember me functionality
 * - Forgot password link
 * - Responsive design with mobile optimization
 * 
 * Form Fields:
 * - Registration Number (required, specific format)
 * - Password (required, minimum 6 characters)
 * - Remember Me checkbox
 */

// Zod schema for form validation
const studentLoginSchema = z.object({
  registrationNumber: z
    .string()
    .min(1, 'Registration number is required')
    .regex(/^[0-9]{11}$/, 'Registration number must be 11 digits (e.g., 24104156040)'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be less than 50 characters'),
  rememberMe: z.boolean().optional()
});

type StudentLoginForm = z.infer<typeof studentLoginSchema>;

const StudentLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, isLoading, error, user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/student-portal/dashboard', { replace: true });
    }
  }, [user, navigate]);

  // Check for saved credentials in localStorage on mount
  useEffect(() => {
    const savedRegNo = localStorage.getItem('savedRegNo');
    const savedPassword = localStorage.getItem('savedPassword');
    if (savedRegNo && savedPassword) {
      setValue('registrationNumber', savedRegNo);
      setValue('password', atob(savedPassword)); // Decode base64 password
      setValue('rememberMe', true);
    }
  }, []);

  // React Hook Form setup with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<StudentLoginForm>({
    resolver: zodResolver(studentLoginSchema),
    defaultValues: {
      registrationNumber: '',
      password: '',
      rememberMe: false
    }
  });

  /**
   * Handle form submission - Direct authentication without double login
   */
  const onSubmit = async (data: StudentLoginForm) => {
    // Save credentials if remember me is checked
    if (data.rememberMe) {
      localStorage.setItem('savedRegNo', data.registrationNumber);
      localStorage.setItem('savedPassword', btoa(data.password)); // Encode password in base64
    } else {
      localStorage.removeItem('savedRegNo');
      localStorage.removeItem('savedPassword');
    }

    // Directly authenticate using AuthContext
    const success = await login(data.registrationNumber, data.password);
    
    if (success) {
      toast.success('Login successful! Welcome to IIT Patna Student Portal');
      navigate('/student-portal/dashboard', { replace: true });
    } else {
      toast.error(error || 'Invalid Registration Number or Password');
    }
  };

  /**
   * Handle forgot password action
   */
  const handleForgotPassword = () => {
    toast.info('Password reset link will be sent to your registered email.');
    // Implement forgot password functionality
  };

  return (
    <AuthLayout 
      title="Student Portal"
      subtitle="Login with your registration credentials"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-500/20 rounded-full">
              <GraduationCap className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Student Login
          </h2>
          <p className="text-white/80 text-sm">
            Access your academic portal and services
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Registration Number Field */}
          <div className="space-y-2">
            <Label htmlFor="registrationNumber" className="text-white font-medium">
              Registration Number
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input
                id="registrationNumber"
                type="text"
                placeholder="e.g., 24104156040"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                {...register('registrationNumber')}
              />
            </div>
            {errors.registrationNumber && (
              <p className="text-red-400 text-sm">{errors.registrationNumber.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="rememberMe"
                type="checkbox"
                className="rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400 focus:ring-offset-0"
                {...register('rememberMe')}
              />
              <Label htmlFor="rememberMe" className="text-white/80 text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button with Ripple Effect */}
          <RippleEffect color="rgba(59, 130, 246, 0.4)">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </Button>
          </RippleEffect>
        </form>

        {/* Additional Links */}
        <div className="text-center space-y-3">
          <div className="h-px bg-white/20"></div>
          <p className="text-white/70 text-sm">
            New student? 
            <button className="text-blue-400 hover:text-blue-300 font-medium ml-1 transition-colors">
              Register here
            </button>
          </p>
          <p className="text-white/60 text-xs">
            Having trouble? Contact IT Support: 
            <span className="text-blue-400"> support@iitp.ac.in</span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default StudentLogin;