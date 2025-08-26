import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ====================================================================
 * ADVANCED ANIMATIONS COMPONENT - IIT PATNA WEBSITE
 * ====================================================================
 * 
 * This component provides advanced animation utilities and effects
 * for the IIT Patna website. It includes:
 * 
 * Features:
 * - GSAP-powered scroll animations
 * - Particle effects for modern appeal
 * - Smooth reveal animations
 * - Interactive hover effects
 * - Performance-optimized animation loops
 * - Mobile-responsive animation scaling
 * 
 * Usage:
 * - Import and wrap sections that need advanced animations
 * - Use individual animation components for specific effects
 * - Customize timing and easing for different sections
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

// Register GSAP plugins for advanced animations
gsap.registerPlugin(ScrollTrigger);

interface AnimatedRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Advanced reveal animation component using GSAP
 * Creates smooth, hardware-accelerated animations on scroll
 */
export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Define animation start positions based on direction
    const animations = {
      up: { y: 80, opacity: 0 },
      down: { y: -80, opacity: 0 },
      left: { x: -80, opacity: 0 },
      right: { x: 80, opacity: 0 }
    };

    // Set initial state
    gsap.set(element, animations[direction]);

    // Create scroll-triggered animation
    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      end: "bottom 15%",
      animation: gsap.to(element, {
        x: 0,
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
      }),
      toggleActions: "play none none reverse"
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

interface StaggeredAnimationProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}

/**
 * Staggered animation component for lists and grids
 * Animates children with sequential delays for smooth cascade effect
 */
export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  staggerDelay = 0.1,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const childElements = container.children;

    // Set initial state for all children
    gsap.set(childElements, { y: 60, opacity: 0 });

    // Create staggered animation
    ScrollTrigger.create({
      trigger: container,
      start: "top 80%",
      animation: gsap.to(childElements, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "back.out(1.7)",
      }),
      toggleActions: "play none none reverse"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [staggerDelay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  className?: string;
}

/**
 * Floating animation component for hero elements
 * Creates smooth up-and-down floating motion
 */
export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  amplitude = 20,
  duration = 3,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create infinite floating animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(element, {
      y: -amplitude,
      duration: duration,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
    };
  }, [amplitude, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Parallax scrolling effect component
 * Creates depth by moving elements at different speeds
 */
export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create parallax scroll animation
    ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      animation: gsap.fromTo(element, 
        { y: 0 },
        { y: (index, target) => -ScrollTrigger.maxScroll(window) * speed }
      )
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

/**
 * Motion variants for Framer Motion animations
 * Pre-defined animation patterns for consistency
 */
export const motionVariants = {
  // Container animations for staggered children
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  },

  // Item animations for individual elements
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  },

  // Fade in animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },

  // Scale animations for buttons and cards
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    }
  },

  // Slide animations for panels and modals
  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }
};

/**
 * Hook for creating custom GSAP animations
 * Provides a clean API for component-specific animations
 */
export const useGSAPAnimation = (
  animationFunction: (element: HTMLElement) => GSAPTimeline,
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const timeline = animationFunction(element);
    
    return () => {
      timeline.kill();
    };
  }, dependencies);

  return elementRef;
};

export default {
  AnimatedReveal,
  StaggeredAnimation,
  FloatingElement,
  ParallaxElement,
  motionVariants,
  useGSAPAnimation
};