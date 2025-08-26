import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { Beaker, Cpu, Zap, Microscope } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GradientText from '@/components/common/GradientText';

/**
 * ====================================================================
 * LABORATORIES PAGE - IIT PATNA WEBSITE
 * ====================================================================
 * 
 * Comprehensive showcase of research and academic laboratories.
 * Features interactive lab browsing, equipment details, and virtual tours.
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

gsap.registerPlugin(ScrollTrigger);

const Labs: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline();
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Research Laboratories | IIT Patna</title>
        <meta name="description" content="Explore IIT Patna's world-class research laboratories and scientific equipment." />
      </Helmet>

      <section ref={heroRef} className="min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
            <GradientText className="bg-gradient-to-r from-primary via-secondary to-accent">
              Research Laboratories
            </GradientText>
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default Labs;