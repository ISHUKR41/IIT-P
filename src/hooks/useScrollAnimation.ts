import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

/**
 * Custom hook for scroll-based animations using GSAP
 * Provides reusable animation patterns for IIT Patna website components
 * Features:
 * - Fade up animation on scroll
 * - Stagger animations for multiple elements
 * - Custom GSAP timeline integration
 * - Intersection Observer optimization
 */

export const useScrollAnimation = (options?: {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}) => {
  const { ref, inView } = useInView({
    threshold: options?.threshold || 0.1,
    triggerOnce: options?.triggerOnce ?? true,
  });

  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: options?.delay || 0,
          ease: 'power3.out',
        }
      );
    }
  }, [inView, options?.delay]);

  return { ref, elementRef, inView };
};

export const useStaggerAnimation = (itemsCount: number) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (inView && itemsRef.current.length > 0) {
      gsap.fromTo(
        itemsRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)',
        }
      );
    }
  }, [inView]);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el) {
      itemsRef.current[index] = el;
    }
  };

  return { ref, addToRefs, inView };
};