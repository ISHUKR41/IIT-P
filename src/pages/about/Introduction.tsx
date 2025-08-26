import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Users, Award, BookOpen, Target, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';
import ParticleBackground from '@/components/common/ParticleBackground';

// Register GSAP plugins for advanced animations
gsap.registerPlugin(ScrollTrigger);

const Introduction: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation with GSAP
    const heroTl = gsap.timeline();
    
    heroTl.fromTo('.hero-title', 
      { opacity: 0, y: 50, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <SEO 
        title="Introduction to IIT Patna - Premier Technology Institute"
        description="Discover IIT Patna's journey from 2008 to becoming a leading technological institution."
        keywords="IIT Patna introduction, technology institute, engineering education"
        canonicalUrl="/about/introduction"
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-secondary/10 relative overflow-hidden">
        <ParticleBackground />
        
        <section ref={heroRef} className="relative z-10 pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="hero-title text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-6"
            >
              IIT Patna
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-4"
            >
              Excellence in Technology & Innovation
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Established in 2008, IIT Patna stands as a beacon of technological advancement and academic excellence. 
              We nurture brilliant minds, foster innovation, and contribute to India's technological leadership.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-white font-medium">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Research Areas
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Introduction;