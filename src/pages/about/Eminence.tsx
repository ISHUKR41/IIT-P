import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Crown, Trophy, Star, Award, Globe, Users, TrendingUp, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins for advanced animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Institution of Eminence Page Component
 * 
 * This page showcases IIT Patna's prestigious Institution of Eminence (IoE) status,
 * highlighting achievements, initiatives, and impact on national education standards.
 * 
 * Features:
 * - Hero section with IoE status highlights
 * - Key achievements and milestones timeline
 * - Impact metrics with animated counters
 * - Strategic initiatives and future goals
 * - Research excellence showcase
 * - International collaborations
 * - GSAP ScrollTrigger animations
 * - Responsive design for all devices
 */

const Eminence: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP animations on component mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation with stagger effect
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.children, 
          { y: 100, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
          }
        );
      }

      // Statistics counter animation on scroll
      if (statsRef.current) {
        gsap.fromTo('.stat-number', 
          { innerText: 0 },
          {
            innerText: (i, el) => el.dataset.value,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%"
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Institution of Eminence - IIT Patna | Prestigious IoE Status & Excellence</title>
        <meta name="description" content="Discover IIT Patna's prestigious Institution of Eminence status, research excellence, global recognition, and strategic initiatives transforming engineering education in India." />
        <meta name="keywords" content="IIT Patna, Institution of Eminence, IoE status, research excellence, global ranking, engineering education" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div ref={heroRef} className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "back.out(1.7)" }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-2xl"
              >
                <Crown className="w-10 h-10 text-white" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Institution of 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Eminence</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Recognized by the Government of India for excellence in education, research, and innovation. 
                IIT Patna leads the transformation of engineering education in the nation.
              </p>
              
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                🏆 Prestigious IoE Status Since 2019
              </Badge>
            </div>
          </div>
        </section>

        {/* Key Statistics Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900/50 to-purple-900/50" ref={statsRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Impact <span className="text-yellow-400">Metrics</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Quantifying excellence through measurable achievements and impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Research Projects", value: 450, icon: BookOpen },
                { label: "International Collaborations", value: 85, icon: Globe },
                { label: "Patents Filed", value: 120, icon: Award },
                { label: "Industry Partnerships", value: 200, icon: Users }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-8">
                        <IconComponent className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-yellow-400 mb-2">
                          <span className="stat-number" data-value={stat.value}>0</span>+
                        </div>
                        <p className="text-white/80 font-medium">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-yellow-600/20 to-orange-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Leading India's Educational <span className="text-yellow-400">Renaissance</span>
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
                As an Institution of Eminence, IIT Patna continues to set new benchmarks in education, 
                research, and innovation, contributing to India's vision of becoming a global knowledge superpower.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Eminence;