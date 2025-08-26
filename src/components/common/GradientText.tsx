import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * Animated gradient text component for IIT Patna website
 * Features:
 * - Customizable gradient colors
 * - Smooth animations
 * - Responsive typography
 * - Accessibility support
 */

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'accent' | 'custom';
  customGradient?: string;
  animate?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  gradient = 'primary',
  customGradient,
  animate = true,
}) => {
  const gradientClasses = {
    primary: 'from-primary via-primary-glow to-accent',
    secondary: 'from-secondary via-secondary/90 to-primary',
    accent: 'from-accent via-primary to-secondary',
    custom: '',
  };

  const gradientClass = customGradient 
    ? '' 
    : `bg-gradient-to-r ${gradientClasses[gradient]}`;

  const customStyle = customGradient 
    ? { backgroundImage: customGradient }
    : {};

  return (
    <motion.span
      initial={animate ? { opacity: 0, y: 20 } : {}}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      className={`
        ${gradientClass}
        bg-clip-text text-transparent
        font-bold leading-tight
        ${className}
      `}
      style={customStyle}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;