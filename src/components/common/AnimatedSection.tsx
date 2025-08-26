import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * Reusable animated section component for IIT Patna website
 * Features:
 * - Scroll-triggered animations
 * - Customizable animation variants
 * - GSAP integration for complex animations
 * - Performance optimized with intersection observer
 */

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
}) => {
  const { ref, elementRef, inView } = useScrollAnimation({ delay });

  // Animation variants for different effect types
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants[animation]}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;