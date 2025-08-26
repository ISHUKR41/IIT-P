import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, UserCheck, Lock, Mail, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import AuthLayout from '@/components/auth/AuthLayout';
import { RippleEffect } from '@/components/effects/ModernEffects';

/**
 * Admin Login Page Component
 * 
 * Features:
 * - Admin-specific login form with admin ID and email
 * - Enhanced security measures for admin access
 * - Form validation using React Hook Form + Zod
 * - Password visibility toggle
 * - Beautiful AuthLayout with campus background
 * - Ripple effect on login button
 * - Two-factor authentication ready
 * - Security warnings and notices
 * - Responsive design with mobile optimization
 * 
 * Form Fields:
 * - Admin ID (required, specific format)
 * - Email Address (required, valid email)
 * - Password (required, minimum 8 characters)
 * - Remember Me checkbox
 */

// Zod schema for form validation with stricter admin requirements
const adminLoginSchema = z.object({
  adminId: z
    .string()
    .min(1, 'Admin ID is required')
    .regex(/^ADM[0-9]{4,6}$/, 'Invalid Admin ID format (e.g., ADM123456)'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address')
    .refine((email) => email.endsWith('@iitp.ac.in'), {
      message: 'Must use official IIT Patna email address'
    }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be less than 50 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number'),
  rememberMe: z.boolean().optional()
});

type AdminLoginForm = z.infer<typeof adminLoginSchema>;

const AdminLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // React Hook Form setup with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AdminLoginForm>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      adminId: '',
      email: '',
      password: '',
      rememberMe: false
    }
  });

  /**
   * Handle form submission
   * Currently shows success message - integrate with actual authentication later
   */
  const onSubmit = async (data: AdminLoginForm) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Here you would integrate with your authentication API
      console.log('Admin login attempt:', {
        adminId: data.adminId,
        email: data.email,
        rememberMe: data.rememberMe
      });
      
      toast.success(`Welcome back, Administrator ${data.adminId}!`);
      
      // Reset form after successful login
      reset();
      
      // Redirect to admin dashboard (implement routing later)
      // navigate('/admin/dashboard');
      
    } catch (error) {
      toast.error('Login failed. Please verify your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle forgot password action
   */
  const handleForgotPassword = () => {
    toast.info('Password reset requires security verification. Contact System Administrator.');
    // Implement forgot password functionality with enhanced security
  };

  return (
    <AuthLayout 
      title="Admin Portal"
      subtitle="Secure administrative system access"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-purple-500/20 rounded-full">
              <UserCheck className="h-8 w-8 text-purple-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Admin Login
          </h2>
          <p className="text-white/80 text-sm">
            Authorized personnel only - Secure system access
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-yellow-400 font-medium text-sm">Security Notice</h4>
              <p className="text-yellow-300/80 text-xs mt-1">
                All admin activities are logged and monitored. Unauthorized access attempts will be reported.
              </p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Admin ID Field */}
          <div className="space-y-2">
            <Label htmlFor="adminId" className="text-white font-medium">
              Admin ID
            </Label>
            <div className="relative">
              <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input
                id="adminId"
                type="text"
                placeholder="e.g., ADM123456"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                {...register('adminId')}
              />
            </div>
            {errors.adminId && (
              <p className="text-red-400 text-sm">{errors.adminId.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-medium">
              Official Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input
                id="email"
                type="email"
                placeholder="admin@iitp.ac.in"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                {...register('email')}
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
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
                placeholder="Enter your secure password"
                className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
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
            <p className="text-white/60 text-xs">
              Password must contain uppercase, lowercase, and number
            </p>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="rememberMe"
                type="checkbox"
                className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-400 focus:ring-offset-0"
                {...register('rememberMe')}
              />
              <Label htmlFor="rememberMe" className="text-white/80 text-sm cursor-pointer">
                Remember me (this device)
              </Label>
            </div>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button with Ripple Effect */}
          <RippleEffect color="rgba(147, 51, 234, 0.4)">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Secure Login</span>
                </div>
              )}
            </Button>
          </RippleEffect>
        </form>

        {/* Additional Security Information */}
        <div className="text-center space-y-3">
          <div className="h-px bg-white/20"></div>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
            <p className="text-red-400 text-xs">
              <strong>Authorized Personnel Only:</strong> Unauthorized access is prohibited and will be prosecuted. 
              All sessions are monitored and logged.
            </p>
          </div>
          <p className="text-white/60 text-xs">
            System Administrator: 
            <span className="text-purple-400"> sysadmin@iitp.ac.in</span> | 
            Emergency: <span className="text-purple-400">+91-612-302-8000</span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AdminLogin;