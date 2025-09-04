import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/common/ParticleBackground';
import heroCampusImage from '@/assets/hero-campus.jpg';
import logoImage from '@/assets/iit-patna-logo.png';
import gsap from 'gsap';
import Typed from 'typed.js';

/**
 * Authentication Layout Component
 * Features:
 * - Beautiful campus background with overlay effects
 * - Animated particle system for modern look
 * - Responsive design for all device sizes
 * - Smooth animations and transitions
 * - Typing effect for dynamic content
 * - Floating statistics and achievements
 * - Glassmorphism design elements
 */

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle = "Access your academic portal",
  showBackButton = true
}) => {
  const typedRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    // Initialize GSAP animations
    const tl = gsap.timeline();

    // Animate layout entrance
    tl.fromTo('.auth-container', {
      opacity: 0,
      scale: 0.9,
      y: 30
    }, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out'
    }).fromTo('.auth-content', {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.8').fromTo('.auth-stats', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, '-=0.4');

    // Initialize Typed.js for dynamic subtitle
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Excellence in Engineering Education', 'Innovation & Research Hub', 'Shaping Future Leaders', 'Academic Excellence Since 2008'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
      return () => {
        typed.destroy();
        tl.kill();
      };
    }
    return () => {
      tl.kill();
    };
  }, []);

  // Floating statistics data
  const stats = [{
    icon: BookOpen,
    label: 'Academic Programs',
    value: '25+',
    color: 'text-blue-400'
  }, {
    icon: Users,
    label: 'Faculty Members',
    value: '200+',
    color: 'text-green-400'
  }, {
    icon: Award,
    label: 'Research Projects',
    value: '150+',
    color: 'text-yellow-400'
  }, {
    icon: Globe,
    label: 'Industry Partners',
    value: '100+',
    color: 'text-purple-400'
  }];
  return <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Particle Background */}
      <ParticleBackground />
      
      {/* Campus Background with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroCampusImage})`,
      filter: 'brightness(0.3) contrast(1.2)'
    }} />
      
      {/* Gradient Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/40" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float" style={{
        animationDelay: '4s'
      }} />
      </div>

      {/* Main Content Container */}
      <div className="auth-container relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Section - Branding and Information */}
          <div className="auth-content space-y-8 text-white">
            
            {/* Back Button */}
            {showBackButton && <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 hover:text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>}

            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <img src={logoImage} alt="IIT Patna Logo" className="h-16 w-16 lg:h-20 lg:w-20 object-contain animate-pulse-glow" />
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold">
                  IIT Patna
                </h1>
                <p className="text-lg text-white/80">
                  Indian Institute of Technology
                </p>
              </div>
            </div>

            {/* Dynamic Subtitle with Typing Effect */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-semibold">
                {title}
              </h2>
              <div className="text-lg text-white/90 h-8">
                <span ref={typedRef}></span>
              </div>
            </div>

            {/* Floating Statistics */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return <div key={stat.label} className="auth-stats bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`h-6 w-6 ${stat.color}`} />
                      <div>
                        <p className="text-xl font-bold">{stat.value}</p>
                        <p className="text-sm text-white/70">{stat.label}</p>
                      </div>
                    </div>
                  </div>;
            })}
            </div>

            {/* Large Statistics for Desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return <div key={stat.label} className="auth-stats bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-500 hover:scale-110 group cursor-pointer">
                    <div className="flex items-center space-x-4 bg-slate-700">
                      <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                        <IconComponent className={`h-8 w-8 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className="text-white/80 font-medium">{stat.label}</p>
                      </div>
                    </div>
                  </div>;
            })}
            </div>

            {/* Additional Information */}
            <div className="hidden lg:block space-y-3 text-white/80">
              <p className="text-lg leading-relaxed">
                "Empowering minds to innovate, discover, and create solutions for tomorrow's challenges."
              </p>
              <p className="text-sm">
                Join the legacy of excellence at one of India's premier technological institutions.
              </p>
            </div>
          </div>

          {/* Right Section - Authentication Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl bg-stone-950">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute bottom-4 left-4 right-4 text-center text-white/60 text-sm">
        <p>© 2024 Indian Institute of Technology Patna. All rights reserved.</p>
      </div>
    </div>;
};
export default AuthLayout;