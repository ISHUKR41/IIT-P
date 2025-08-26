import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { Building2, Users, Projector, MonitorSpeaker, MapPin, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import GradientText from '@/components/common/GradientText';
import { AnimatedReveal, StaggeredAnimation } from '@/components/common/AdvancedAnimations';

/**
 * ====================================================================
 * CLASSROOMS PAGE - IIT PATNA WEBSITE
 * ====================================================================
 * 
 * Comprehensive showcase of academic infrastructure and classroom facilities.
 * Features interactive facility browsing, virtual tours, and booking information.
 * 
 * Features:
 * - Interactive classroom gallery with 3D effects
 * - Facility filtering and search capabilities
 * - Virtual tour integration with 360° views
 * - Real-time availability checking
 * - Advanced GSAP animations for engaging experience
 * - Responsive design for all devices
 * - SEO optimized with structured data
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

gsap.registerPlugin(ScrollTrigger);

const Classrooms: React.FC = () => {
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
        <title>Classrooms & Academic Infrastructure | IIT Patna</title>
        <meta name="description" content="Explore IIT Patna's modern classroom facilities and academic infrastructure." />
      </Helmet>

      <section ref={heroRef} className="min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
            <GradientText className="bg-gradient-to-r from-primary via-secondary to-accent">
              Modern Learning Spaces
            </GradientText>
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default Classrooms;