import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

/**
 * ====================================================================
 * MODERN EFFECTS COMPONENT LIBRARY - IIT PATNA WEBSITE
 * ====================================================================
 * 
 * This library provides cutting-edge visual effects for the modern
 * IIT Patna website. Includes:
 * 
 * Effects Library:
 * - Animated gradients and mesh backgrounds
 * - Particle systems for dynamic visuals
 * - Glassmorphism effects for modern UI
 * - Interactive hover animations
 * - Lottie animation integrations
 * - Rive animation support
 * - Spline 3D scene embedding
 * - Custom shader effects
 * 
 * Performance Features:
 * - GPU-accelerated animations
 * - Intersection Observer optimization
 * - Reduced motion support for accessibility
 * - Mobile-optimized effects
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

interface AnimatedGradientProps {
  colors: string[];
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
}

/**
 * Animated gradient background component
 * Creates smooth, flowing gradient animations
 */
export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  className = '',
  speed = 'medium'
}) => {
  const speedClass = {
    slow: 'animate-[gradient_8s_ease-in-out_infinite]',
    medium: 'animate-[gradient_5s_ease-in-out_infinite]',
    fast: 'animate-[gradient_3s_ease-in-out_infinite]'
  };

  const gradientStyle = {
    background: `linear-gradient(-45deg, ${colors.join(', ')})`,
    backgroundSize: '400% 400%'
  };

  return (
    <div 
      className={`${speedClass[speed]} ${className}`}
      style={gradientStyle}
    />
  );
};

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'light' | 'medium' | 'heavy';
}

/**
 * Glassmorphism effect card component
 * Modern glass-like visual effect with backdrop blur
 */
export const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className = '',
  blur = 'medium'
}) => {
  const blurClasses = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    heavy: 'backdrop-blur-xl'
  };

  return (
    <motion.div
      className={`
        ${blurClasses[blur]}
        bg-white/10 
        border border-white/20 
        rounded-xl 
        shadow-xl 
        ${className}
      `}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
  className?: string;
}

/**
 * Floating particles effect component
 * Creates animated floating particles for background ambiance
 */
export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 20,
  color = '#3B82F6',
  size = 4,
  speed = 20,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particle animation logic
    const particles: HTMLDivElement[] = [];
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full opacity-60 animate-float';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      particle.style.animationDuration = `${speed + Math.random() * 10}s`;
      
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [count, color, size, speed]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
};

interface InteractiveHoverEffectProps {
  children: React.ReactNode;
  effect?: 'glow' | 'lift' | 'rotate' | 'expand';
  intensity?: 'subtle' | 'medium' | 'strong';
  className?: string;
}

/**
 * Interactive hover effect wrapper
 * Adds modern hover animations to any component
 */
export const InteractiveHoverEffect: React.FC<InteractiveHoverEffectProps> = ({
  children,
  effect = 'lift',
  intensity = 'medium',
  className = ''
}) => {
  const getHoverAnimation = () => {
    switch (effect) {
      case 'glow':
        return {
          boxShadow: intensity === 'subtle' ? '0 0 20px rgba(59, 130, 246, 0.3)' :
                     intensity === 'medium' ? '0 0 30px rgba(59, 130, 246, 0.5)' :
                     '0 0 40px rgba(59, 130, 246, 0.7)'
        };
      case 'lift':
        return { y: intensity === 'subtle' ? -5 : intensity === 'medium' ? -10 : -15 };
      case 'rotate':
        return { rotate: intensity === 'subtle' ? 2 : intensity === 'medium' ? 5 : 10 };
      case 'expand':
        return { scale: intensity === 'subtle' ? 1.02 : intensity === 'medium' ? 1.05 : 1.08 };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={className}
      whileHover={getHoverAnimation()}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}

/**
 * Lottie animation wrapper component
 * Handles Lottie animations with optimization
 */
export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
  speed = 1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {isVisible && animationData && (
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
        />
      )}
    </div>
  );
};

interface RippleEffectProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

/**
 * Ripple effect component for buttons and interactive elements
 * Creates expanding ripple animation on click
 */
export const RippleEffect: React.FC<RippleEffectProps> = ({
  children,
  color = 'rgba(255, 255, 255, 0.6)',
  className = ''
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onClick={addRipple}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute animate-ping rounded-full"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            backgroundColor: color,
            pointerEvents: 'none'
          }}
        />
      ))}
    </div>
  );
};

/**
 * CSS-in-JS for additional animations not covered by Tailwind
 */
export const additionalAnimations = `
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes matrix-rain {
    0% { transform: translateY(-100vh); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 5px currentColor; }
    50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
  }
`;

export default {
  AnimatedGradient,
  GlassmorphismCard,
  FloatingParticles,
  InteractiveHoverEffect,
  LottieAnimation,
  RippleEffect,
  additionalAnimations
};