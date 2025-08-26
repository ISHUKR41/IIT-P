import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

/**
 * ====================================================================
 * MODERN LOADER COMPONENT - IIT PATNA WEBSITE
 * ====================================================================
 * 
 * Advanced loading component with multiple animation types and styles.
 * Features smooth animations, customizable appearances, and performance
 * optimized rendering for modern web applications.
 * 
 * Features:
 * - Multiple loading animation types (spinner, dots, wave, pulse)
 * - GSAP-powered smooth animations for premium feel
 * - Framer Motion integration for enhanced micro-interactions
 * - Customizable colors, sizes, and animation speeds
 * - Accessibility compliant with proper ARIA labels
 * - Performance optimized with minimal re-renders
 * 
 * Animation Libraries Used:
 * - GSAP for timeline-based animations
 * - Framer Motion for React-specific animations
 * - CSS3 transforms for hardware acceleration
 * - Custom easing functions for natural motion
 * 
 * Usage Examples:
 * <ModernLoader type="spinner" size="large" />
 * <ModernLoader type="dots" color="primary" />
 * <ModernLoader type="wave" message="Loading content..." />
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

interface ModernLoaderProps {
  type?: 'spinner' | 'dots' | 'wave' | 'pulse' | 'institutional';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent';
  message?: string;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

/**
 * Institutional branded loader with IIT Patna colors and styling
 * Provides a premium loading experience that matches the website's design
 */
const InstitutionalLoader: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // Create sophisticated GSAP timeline for institutional loader
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    tl.fromTo(logo, 
      { 
        scale: 0.8, 
        opacity: 0.6,
        rotationY: 0
      },
      { 
        scale: 1.1, 
        opacity: 1,
        rotationY: 360,
        duration: 2,
        ease: "power2.inOut"
      }
    )
    .to(logo, {
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div 
        ref={logoRef}
        className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-glow"
      >
        <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full"></div>
        </div>
      </div>
      <div className="text-primary font-medium">IIT Patna</div>
    </div>
  );
};

/**
 * Animated dots loader with smooth wave effect
 * Creates engaging loading animation using staggered dot animations
 */
const DotsLoader: React.FC<{ color: string; speed: number }> = ({ color, speed }) => {
  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`w-3 h-3 bg-${color} rounded-full`}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

/**
 * Wave loader with smooth liquid-like animation
 * Creates flowing wave effect for dynamic loading states
 */
const WaveLoader: React.FC<{ color: string; speed: number }> = ({ color, speed }) => {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wave = waveRef.current;
    if (!wave) return;

    // Advanced wave animation using GSAP morphing
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(wave, {
      scaleX: 1.5,
      scaleY: 0.5,
      duration: speed / 2,
      ease: "sine.inOut"
    })
    .to(wave, {
      scaleX: 0.5,
      scaleY: 1.5,
      duration: speed / 2,
      ease: "sine.inOut"
    });

    return () => {
      tl.kill();
    };
  }, [speed]);

  return (
    <div className="relative">
      <div 
        ref={waveRef}
        className={`w-12 h-12 bg-gradient-to-r from-${color} to-${color}-glow rounded-full opacity-70`}
      />
      <div className={`absolute inset-0 w-12 h-12 bg-${color} rounded-full animate-ping`} />
    </div>
  );
};

/**
 * Modern spinner with enhanced styling and smooth rotation
 * Provides classic loading animation with contemporary design
 */
const SpinnerLoader: React.FC<{ size: string; color: string; speed: number }> = ({ 
  size, 
  color, 
  speed 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8', 
    large: 'w-12 h-12'
  };

  return (
    <motion.div
      className={`${sizeClasses[size as keyof typeof sizeClasses]} border-2 border-${color}/20 border-t-${color} rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

/**
 * Main ModernLoader component
 * Orchestrates different loader types with consistent API
 */
const ModernLoader: React.FC<ModernLoaderProps> = ({
  type = 'spinner',
  size = 'medium',
  color = 'primary',
  message,
  className = '',
  speed = 'normal'
}) => {
  // Convert speed to duration values
  const speedMap = {
    slow: 2,
    normal: 1,
    fast: 0.5
  };

  const animationSpeed = speedMap[speed];

  // Render different loader types
  const renderLoader = () => {
    switch (type) {
      case 'institutional':
        return <InstitutionalLoader />;
      
      case 'dots':
        return <DotsLoader color={color} speed={animationSpeed} />;
      
      case 'wave':
        return <WaveLoader color={color} speed={animationSpeed} />;
      
      case 'pulse':
        return (
          <motion.div
            className={`w-16 h-16 bg-gradient-to-br from-${color} to-${color}-glow rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: animationSpeed * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      
      case 'spinner':
      default:
        return <SpinnerLoader size={size} color={color} speed={animationSpeed} />;
    }
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center space-y-4 ${className}`}
      role="status"
      aria-label={message || "Loading content"}
    >
      {renderLoader()}
      
      {message && (
        <motion.p
          className="text-sm text-muted-foreground font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
};

export default ModernLoader;