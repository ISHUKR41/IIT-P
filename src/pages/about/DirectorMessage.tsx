import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Award, Users, Lightbulb } from 'lucide-react';
import SEO from '@/components/common/SEO';
import { AnimatedReveal } from '@/components/common/AdvancedAnimations';

/**
 * ====================================================================
 * DIRECTOR'S MESSAGE PAGE - IIT PATNA WEBSITE
 * ====================================================================
 * 
 * Features comprehensive director's message with:
 * - Director's vision and leadership message
 * - Academic achievements and milestones  
 * - Interactive animations with GSAP
 * - Modern design with glassmorphism effects
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

gsap.registerPlugin(ScrollTrigger);

const DirectorMessage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      gsap.fromTo(hero, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <>
      <SEO 
        title="Director's Message - IIT Patna"
        description="Message from the Director of IIT Patna outlining vision, mission, and future goals."
        keywords="IIT Patna Director, Leadership, Vision, Mission, Academic Excellence"
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/30">
        <section ref={heroRef} className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <div className="w-64 h-64 mx-auto lg:mx-0 relative mb-8">
                  <img
                    src="/api/placeholder/256/256"
                    alt="Director of IIT Patna"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                  />
                </div>
                
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Prof. [Director Name]
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Director, Indian Institute of Technology Patna
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <Badge variant="secondary">Ph.D.</Badge>
                  <Badge variant="secondary">Fellow IEEE</Badge>
                  <Badge variant="secondary">Distinguished Scientist</Badge>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/30" />
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
                    <CardContent className="p-8">
                      <blockquote className="text-lg italic text-foreground leading-relaxed">
                        "Education is the most powerful weapon which you can use to change the world. 
                        At IIT Patna, we strive to create not just engineers and scientists, but leaders 
                        who will shape the future of technology and society."
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="w-12 h-12 text-primary" />,
                  title: "Academic Excellence",
                  description: "Fostering culture of academic rigor and innovation for global leadership."
                },
                {
                  icon: <Lightbulb className="w-12 h-12 text-primary" />,
                  title: "Research Innovation", 
                  description: "Promoting cutting-edge research addressing real-world problems."
                },
                {
                  icon: <Users className="w-12 h-12 text-primary" />,
                  title: "Community Impact",
                  description: "Building partnerships for meaningful technological advancement."
                }
              ].map((item, index) => (
                <AnimatedReveal key={index} direction="up" delay={index * 0.2}>
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      {item.icon}
                      <h3 className="text-xl font-bold text-foreground mb-4 mt-4">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DirectorMessage;