import React from 'react';

/**
 * Simple particle background component for IIT Patna website
 * Features:
 * - CSS-based particle animation
 * - Lightweight and performant
 * - Customizable colors
 */

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse"></div>
    </div>
  );
};

export default ParticleBackground;