import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { User, GraduationCap, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AuthLayout from '@/components/auth/AuthLayout';
import { motion } from 'framer-motion';
import gsap from 'gsap';

/**
 * Main authentication gateway for IIT Patna portal system
 * Features role-based login selection with modern animations
 */
const LoginMain: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    // GSAP animations for login cards - entrance animations with stagger effect
    const tl = gsap.timeline();
    tl.fromTo(cardsRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.8
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.4)"
    });

    // Cleanup function to prevent memory leaks
    return () => {
      tl.kill();
    };
  }, []);
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  const loginOptions = [{
    id: 'student',
    title: 'Student Login',
    description: 'Access your academic portal and student services',
    path: '/auth/student',
    icon: GraduationCap,
    bgGradient: 'from-blue-500/20 to-cyan-500/20'
  }, {
    id: 'faculty',
    title: 'Faculty Login',
    description: 'Manage courses and research activities',
    path: '/auth/faculty',
    icon: User,
    bgGradient: 'from-green-500/20 to-emerald-500/20'
  }, {
    id: 'admin',
    title: 'Admin Login',
    description: 'Access administrative dashboard and settings',
    path: '/auth/admin',
    icon: Shield,
    bgGradient: 'from-purple-500/20 to-violet-500/20'
  }];
  return <>
      <Helmet>
        <title>Login Portal - IIT Patna | Student, Faculty & Admin Access</title>
        <meta name="description" content="Secure login portal for IIT Patna community with role-based authentication." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <AuthLayout title="Welcome to IIT Patna Portal" subtitle="Choose your login type to access your dashboard">
        <div className="space-y-6">
          <div className="text-center mb-8">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
              Select Login Type
            </motion.h2>
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3
          }} className="text-white/90 text-lg font-medium">
              Secure access to your academic portal
            </motion.p>
          </div>

          <div className="grid gap-4">
            {loginOptions.map((option, index) => {
            const IconComponent = option.icon;
            return <motion.div key={option.id} ref={addToRefs} whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.98
            }}>
                  <Card className={`relative overflow-hidden border border-white/20 bg-gradient-to-br ${option.bgGradient} backdrop-blur-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:border-white/40`}>
                    <Link to={option.path} className="block">
                      <CardHeader className="pb-3 bg-blue-500">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-4 rounded-full bg-white/15 backdrop-blur-sm group-hover:bg-white/25 transition-all duration-300 group-hover:scale-110">
                              <IconComponent className="h-7 w-7 text-white drop-shadow-lg" />
                            </div>
                            <CardTitle className="text-white text-xl font-bold drop-shadow-md">
                              {option.title}
                            </CardTitle>
                          </div>
                          <ArrowRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <p className="text-base font-medium drop-shadow-sm text-violet-800">{option.description}</p>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>;
          })}
          </div>

          {/* Test Credentials Section - Enhanced Visibility */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8
        }} className="mt-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
            <h3 className="text-white font-bold text-lg mb-4 text-center drop-shadow-md">
              🔑 Test Login Credentials
            </h3>
            <div className="grid gap-4 text-sm">
              <div className="bg-blue-500/20 p-4 rounded-xl border border-blue-300/30">
                <h4 className="font-bold text-blue-100 mb-2">Student Portal:</h4>
                <p className="text-blue-100"><strong>Reg No:</strong> 24104156040</p>
                <p className="text-blue-100"><strong>Password:</strong> ISHUkr75@</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-xl border border-green-300/30">
                <h4 className="font-bold text-green-100 mb-2">Faculty Portal:</h4>
                <p className="text-green-100"><strong>Employee ID:</strong> FAC001</p>
                <p className="text-green-100"><strong>Password:</strong> faculty123</p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-xl border border-purple-300/30">
                <h4 className="font-bold text-purple-100 mb-2">Admin Portal:</h4>
                <p className="text-purple-100"><strong>Admin ID:</strong> ADMIN001</p>
                <p className="text-purple-100"><strong>Password:</strong> admin123</p>
              </div>
            </div>
          </motion.div>
        </div>
      </AuthLayout>
    </>;
};
export default LoginMain;