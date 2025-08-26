import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Book, Calendar, Download, Eye, Share2 } from 'lucide-react';
import gsap from 'gsap';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/common/AnimatedSection';
import GradientText from '@/components/common/GradientText';
import ParticleBackground from '@/components/common/ParticleBackground';

/**
 * Base Magazine component for IIT Patna publications
 * Features:
 * - Modern magazine showcase design
 * - Interactive magazine covers
 * - Download and sharing functionality
 * - Responsive grid layout
 * - GSAP animations and effects
 */

interface MagazineIssue {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  publishDate: string;
  volume: string;
  issue: string;
  downloadUrl: string;
  featured: boolean;
}

interface MagazineProps {
  magazineName: string;
  magazineDescription: string;
  tagline: string;
  bgColor: string;
  accentColor: string;
  issues: MagazineIssue[];
  seoTitle: string;
  seoDescription: string;
}

const Magazine: React.FC<MagazineProps> = ({
  magazineName,
  magazineDescription,
  tagline,
  bgColor,
  accentColor,
  issues,
  seoTitle,
  seoDescription,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Enhanced GSAP animations for magazine showcase
    const tl = gsap.timeline();
    
    // Hero animation
    tl.fromTo(heroRef.current, 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    // Cards stagger animation
    gsap.fromTo(cardsRef.current,
      { y: 100, opacity: 0, rotateX: 15 },
      { 
        y: 0, 
        opacity: 1, 
        rotateX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.4)",
        delay: 0.5
      }
    );
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${magazineName}, IIT Patna, magazine, publication, research, academic`} />
      </Helmet>

      <Layout>
        {/* Hero Section with Particle Background */}
        <section className={`relative min-h-[80vh] flex items-center justify-center ${bgColor} overflow-hidden`}>
          <ParticleBackground />
          
          <div ref={heroRef} className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Book className="mx-auto mb-6 h-20 w-20 text-white/90" />
              <GradientText 
                className="text-5xl md:text-7xl mb-6"
                gradient="custom"
                customGradient="linear-gradient(135deg, #ffffff, #f0f9ff)"
              >
                {magazineName}
              </GradientText>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto"
              >
                {tagline}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
              >
                {magazineDescription}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Magazine Issues Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText>Latest Issues</GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of academic publications and research insights
              </p>
            </AnimatedSection>

            {/* Featured Issue */}
            {issues.filter(issue => issue.featured).map((issue, index) => (
              <AnimatedSection key={issue.id} className="mb-16" delay={0.2}>
                <div ref={addToRefs}>
                  <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative overflow-hidden">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          src={issue.coverImage}
                          alt={`${issue.title} Cover`}
                          className="w-full h-80 lg:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-secondary text-secondary-foreground px-3 py-1">
                            Featured
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4">
                          <Badge variant="outline" className="mb-4">
                            Volume {issue.volume} • Issue {issue.issue}
                          </Badge>
                          <h3 className="text-3xl font-bold mb-4 text-foreground">
                            {issue.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-6">
                            {issue.description}
                          </p>
                          <div className="flex items-center text-sm text-muted-foreground mb-8">
                            <Calendar className="h-4 w-4 mr-2" />
                            {issue.publishDate}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                          <Button className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300">
                            <Eye className="h-4 w-4 mr-2" />
                            Read Online
                          </Button>
                          <Button variant="outline" className="hover:scale-105 transition-all duration-300">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                          <Button variant="ghost" className="hover:scale-105 transition-all duration-300">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            ))}

            {/* Regular Issues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {issues.filter(issue => !issue.featured).map((issue, index) => (
                <AnimatedSection key={issue.id} delay={0.1 * index}>
                  <div ref={addToRefs}>
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105">
                      <div className="relative overflow-hidden">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          src={issue.coverImage}
                          alt={`${issue.title} Cover`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">
                            Vol {issue.volume} • No {issue.issue}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{issue.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {issue.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          {issue.publishDate}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Eye className="h-3 w-3 mr-1" />
                            Read
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <AnimatedSection>
          <section className={`py-20 ${bgColor} text-white`}>
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to receive notifications about new issues and publications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300">
                  Subscribe Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Archive
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </Layout>
    </>
  );
};

export default Magazine;