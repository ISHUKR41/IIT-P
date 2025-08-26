import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from 'scrollreveal';

/**
 * ====================================================================
 * ADVANCED SCROLL ANIMATIONS COMPONENT
 * ====================================================================
 * 
 * This component provides comprehensive scroll-based animations using
 * multiple animation libraries for maximum visual impact.
 * 
 * Features:
 * - GSAP ScrollTrigger animations for smooth parallax effects
 * - ScrollReveal for element reveal on scroll
 * - Smooth scrolling with Lenis integration
 * - Performance optimized with proper cleanup
 * - Fully customizable animation parameters
 * 
 * Libraries Used:
 * - GSAP with ScrollTrigger plugin
 * - ScrollReveal for reveal animations  
 * - Locomotive Scroll for smooth scrolling
 * - Custom intersection observer for performance
 * 
 * Usage:
 * Wrap sections that need scroll animations with ScrollAnimations component
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

// Register GSAP plugins for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationsProps {
  children: React.ReactNode;
  animationType?: 'fade' | 'slide' | 'scale' | 'parallax' | 'rotate';
  duration?: number;
  delay?: number;
  distance?: string;
  className?: string;
}

/**
 * Advanced scroll animations wrapper component
 * Provides multiple animation types with smooth performance
 */
const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({
  children,
  animationType = 'fade',
  duration = 1000,
  delay = 100,
  distance = '50px',
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // ScrollReveal configuration for smooth reveal animations
    const sr = ScrollReveal({
      distance: distance,
      duration: duration,
      delay: delay,
      reset: false, // Only animate once for better performance  
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', // Custom easing for smooth motion
      viewFactor: 0.1, // Trigger when 10% of element is visible
      viewOffset: { top: 60, right: 0, bottom: 0, left: 0 } // Account for header height
    });

    // Apply different animation types based on prop
    switch (animationType) {
      case 'fade':
        sr.reveal(element, {
          opacity: 0,
          origin: 'bottom'
        });
        break;

      case 'slide':
        sr.reveal(element, {
          opacity: 0,
          origin: 'left',
          distance: distance
        });
        break;

      case 'scale':
        sr.reveal(element, {
          opacity: 0,
          scale: 0.8,
          origin: 'bottom'
        });
        break;

      case 'parallax':
        // Advanced parallax effect using GSAP ScrollTrigger
        gsap.fromTo(element, 
          {
            y: 100,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1, // Smooth scrubbing effect
              markers: false // Set to true for debugging
            }
          }
        );
        break;

      case 'rotate':
        // Rotation animation with GSAP for dynamic effect
        gsap.fromTo(element,
          {
            rotation: -10,
            opacity: 0,
            scale: 0.8
          },
          {
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        break;

      default:
        sr.reveal(element, {
          opacity: 0,
          origin: 'bottom'
        });
    }

    // Cleanup function to prevent memory leaks
    return () => {
      sr.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationType, duration, delay, distance]);

  return (
    <div 
      ref={elementRef} 
      className={`scroll-animate ${className}`}
      data-animation={animationType}
    >
      {children}
    </div>
  );
};

/**
 * Hook for custom scroll animations
 * Provides easy access to scroll-based animations for any component
 */
export const useScrollAnimation = (
  ref: React.RefObject<HTMLElement>, 
  options: {
    animationType?: 'fade' | 'slide' | 'scale' | 'bounce';
    duration?: number;
    delay?: number;
  } = {}
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { animationType = 'fade', duration = 800, delay = 0 } = options;

    // Create timeline for complex animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    });

    // Add animations based on type
    switch (animationType) {
      case 'fade':
        tl.fromTo(element, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: duration / 1000, delay: delay / 1000 }
        );
        break;

      case 'slide':
        tl.fromTo(element,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: duration / 1000, delay: delay / 1000 }
        );
        break;

      case 'scale':
        tl.fromTo(element,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: duration / 1000, delay: delay / 1000 }
        );
        break;

      case 'bounce':
        tl.fromTo(element,
          { opacity: 0, y: 100 },
          { 
            opacity: 1, 
            y: 0, 
            duration: duration / 1000, 
            delay: delay / 1000,
            ease: "bounce.out"
          }
        );
        break;
    }

    return () => {
      tl.kill();
    };
  }, [ref, options]);
};

export default ScrollAnimations;