import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Users, Lock, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import AuthLayout from '@/components/auth/AuthLayout';
import { RippleEffect } from '@/components/effects/ModernEffects';

/**
 * Faculty Login Page Component
 * 
 * Features:
 * - Faculty-specific login form with employee ID or email
 * - Dual login options: Employee ID or Email Address
 * - Form validation using React Hook Form + Zod
 * - Password visibility toggle
 * - Beautiful AuthLayout with campus background
 * - Ripple effect on login button
 * - Remember me functionality
 * - Forgot password link
 * - Responsive design with mobile optimization
 * 
 * Form Fields:
 * - Login Type selector (Employee ID / Email)
 * - Employee ID or Email (based on selection)
 * - Password (required, minimum 6 characters)
 * - Remember Me checkbox
 */

// Zod schema for form validation
const facultyLoginSchema = z.object({
  loginType: z.enum(['employeeId', 'email']),
  identifier: z.string().min(1, 'This field is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be less than 50 characters'),
  rememberMe: z.boolean().optional()
}).refine((data) => {
  // Validate based on login type
  if (data.loginType === 'email') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.identifier);
  } else {
    return /^[A-Z]{2}[0-9]{4,6}$/.test(data.identifier); // Employee ID format
  }
}, {
  message: 'Invalid format',
  path: ['identifier']
});

type FacultyLoginForm = z.infer<typeof facultyLoginSchema>;

const FacultyLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState<'employeeId' | 'email'>('employeeId');

  // React Hook Form setup with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<FacultyLoginForm>({
    resolver: zodResolver(facultyLoginSchema),
    defaultValues: {
      loginType: 'employeeId',
      identifier: '',
      password: '',
      rememberMe: false
    }
  });

  const watchedLoginType = watch('loginType');

  /**
   * Handle login type change
   */
  const handleLoginTypeChange = (type: 'employeeId' | 'email') => {
    setLoginType(type);
    setValue('loginType', type);
    setValue('identifier', ''); // Clear identifier when switching types
  };

  /**
   * Handle form submission
   * Currently shows success message - integrate with actual authentication later
   */
  const onSubmit = async (data: FacultyLoginForm) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with your authentication API
      console.log('Faculty login attempt:', {
        loginType: data.loginType,
        identifier: data.identifier,
        rememberMe: data.rememberMe
      });
      
      toast.success(`Welcome back, Faculty Member!`);
      
      // Reset form after successful login
      reset();
      
      // Redirect to faculty dashboard (implement routing later)
      // navigate('/faculty/dashboard');
      
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle forgot password action
   */
  const handleForgotPassword = () => {
    toast.info('Password reset instructions will be sent to your registered email.');
    // Implement forgot password functionality
  };

  return (
    <AuthLayout 
      title="Faculty Portal"
      subtitle="Access your teaching and research portal"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-green-500/20 rounded-full">
              <Users className="h-8 w-8 text-green-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Faculty Login
          </h2>
          <p className="text-white/80 text-sm">
            Access your teaching and research portal
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Login Type Selector */}
          <div className="space-y-3">
            <Label className="text-white font-medium">
              Login with
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleLoginTypeChange('employeeId')}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  loginType === 'employeeId'
                    ? 'bg-green-500/20 border-green-400 text-green-400'
                    : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/15'
                }`}
              >
                <User className="h-5 w-5 mx-auto mb-1" />
                <span className="text-sm font-medium">Employee ID</span>
              </button>
              <button
                type="button"
                onClick={() => handleLoginTypeChange('email')}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  loginType === 'email'
                    ? 'bg-green-500/20 border-green-400 text-green-400'
                    : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/15'
                }`}
              >
                <Mail className="h-5 w-5 mx-auto mb-1" />
                <span className="text-sm font-medium">Email Address</span>
              </button>
            </div>
          </div>

          {/* Identifier Field (Employee ID or Email) */}
          <div className="space-y-2">
            <Label htmlFor="identifier" className="text-white font-medium">
              {loginType === 'employeeId' ? 'Employee ID' : 'Email Address'}
            </Label>
            <div className="relative">
              {loginType === 'employeeId' ? (
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              ) : (
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              )}
              <Input
                id="identifier"
                type="text"
                placeholder={
                  loginType === 'employeeId' 
                    ? 'e.g., CS123456' 
                    : 'e.g., faculty@iitp.ac.in'
                }
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring-green-400/20"
                {...register('identifier')}
              />
            </div>
            {errors.identifier && (
              <p className="text-red-400 text-sm">
                {loginType === 'employeeId' 
                  ? 'Please enter a valid Employee ID (e.g., CS123456)'
                  : 'Please enter a valid email address'
                }
              </p>
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
                className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-green-400 focus:ring-green-400/20"
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
                className="rounded border-white/20 bg-white/10 text-green-500 focus:ring-green-400 focus:ring-offset-0"
                {...register('rememberMe')}
              />
              <Label htmlFor="rememberMe" className="text-white/80 text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button with Ripple Effect */}
          <RippleEffect color="rgba(34, 197, 94, 0.4)">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
            New faculty member? 
            <button className="text-green-400 hover:text-green-300 font-medium ml-1 transition-colors">
              Contact HR
            </button>
          </p>
          <p className="text-white/60 text-xs">
            Need assistance? Contact IT Support: 
            <span className="text-green-400"> support@iitp.ac.in</span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default FacultyLogin;