import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, BookOpen, Microscope, GraduationCap, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '@/assets/hero-campus.jpg';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Enhanced Hero section component for IIT Patna homepage
 * Features:
 * - Modern GSAP animations with scroll triggers
 * - Engaging hero banner with campus image background
 * - Interactive statistics cards with hover effects
 * - Responsive design with fluid animations
 * - Advanced gradient overlays and effects
 * - Academic institution focus with professional styling
 */
const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero title animation with stagger
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
      });

      // Call-to-action buttons animation
      gsap.from(".cta-button", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.8
      });

      // Stats cards animation with scroll trigger
      gsap.from(".stat-card", {
        y: 80,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

      // Background parallax effect
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Enhanced statistics data with colors and icons
  const stats = [
    { 
      icon: GraduationCap, 
      label: 'Students', 
      value: '3500+', 
      color: 'from-blue-500 to-blue-600',
      description: 'Brilliant minds shaping the future' 
    },
    { 
      icon: Users, 
      label: 'Faculty', 
      value: '250+', 
      color: 'from-green-500 to-green-600',
      description: 'Expert educators and researchers'
    },
    { 
      icon: FlaskConical, 
      label: 'Research Labs', 
      value: '45+', 
      color: 'from-purple-500 to-purple-600',
      description: 'State-of-the-art facilities'
    },
    { 
      icon: Award, 
      label: 'NIRF Ranking', 
      value: 'Top 45', 
      color: 'from-orange-500 to-orange-600',
      description: 'Excellence in education'
    }
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="hero-bg absolute inset-0 scale-110">
          <img 
            src={heroImage}
            alt="IIT Patna Campus - Modern Educational Excellence"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-secondary/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-2/3 right-1/3 w-36 h-36 bg-secondary/8 rounded-full blur-xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading with Enhanced Typography */}
        <div ref={titleRef} className="mb-12">
          <motion.h1 
            className="hero-title text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent drop-shadow-lg">
              IIT Patna
            </span>
            <span className="hero-title block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 mt-4">
              Excellence in Engineering Education
            </span>
          </motion.h1>
          
          <motion.p 
            className="hero-title text-lg md:text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Indian Institute of Technology Patna - Fostering innovation, research, 
            and academic excellence since 2008. Join India's premier technological institution 
            where dreams meet reality.
          </motion.p>
        </div>

        {/* Enhanced Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <motion.div 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/admissions/why-choose">
              <Button className="relative bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 shadow-lg hover:shadow-glow group overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Explore Admissions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/research/rd-home">
              <Button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Research & Innovation
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/academics/undergraduate">
              <Button className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Academic Programs
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Enhanced Key Statistics Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="stat-card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-white/80 font-medium mb-1">
                  {stat.label}
                </p>
                <p className="text-white/60 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;