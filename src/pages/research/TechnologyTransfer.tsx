import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { 
  Lightbulb, 
  TrendingUp,
  Users,
  Target,
  Award,
  Briefcase,
  Globe,
  Building,
  FileText,
  ArrowRight,
  CheckCircle,
  Rocket,
  Zap,
  Shield,
  DollarSign
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import GradientText from '@/components/common/GradientText';
import { AnimatedReveal, StaggeredAnimation } from '@/components/common/AdvancedAnimations';

/**
 * ====================================================================
 * TECHNOLOGY TRANSFER PAGE - IIT PATNA WEBSITE
 * ====================================================================
 * 
 * Comprehensive showcase of technology transfer initiatives, success stories,
 * and commercialization opportunities at IIT Patna.
 * 
 * Features:
 * - Interactive success story timeline
 * - Technology portfolio showcase
 * - Partnership opportunities display
 * - Process flow visualization
 * - Impact metrics and statistics
 * - Industry collaboration highlights
 * - IP management information
 * - Contact forms for partnerships
 * 
 * Design Highlights:
 * - Modern glassmorphism effects
 * - Dynamic progress indicators
 * - Interactive hover animations
 * - Responsive grid layouts
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

// Register GSAP plugins for advanced animations
gsap.registerPlugin(ScrollTrigger);

// Technology transfer statistics and metrics
const transferStats = [
  {
    icon: Lightbulb,
    number: "250+",
    label: "Innovations Developed",
    description: "Cutting-edge technologies ready for commercialization",
    color: "from-yellow-500 to-amber-600"
  },
  {
    icon: Building,
    number: "150+",
    label: "Industry Partners",
    description: "Active collaborations with leading companies",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Award,
    number: "50+",
    label: "Patents Filed",
    description: "Intellectual property protection for innovations",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: DollarSign,
    number: "₹100Cr+",
    label: "Revenue Generated",
    description: "Economic impact through technology transfer",
    color: "from-purple-500 to-violet-600"
  }
];

// Technology transfer process steps
const transferProcess = [
  {
    step: 1,
    title: "Innovation Discovery",
    description: "Identifying and evaluating promising research outcomes with commercial potential",
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-600",
    duration: "2-4 weeks"
  },
  {
    step: 2,
    title: "IP Protection",
    description: "Filing patents and securing intellectual property rights for the innovation",
    icon: Shield,
    color: "from-blue-500 to-cyan-600",
    duration: "3-6 months"
  },
  {
    step: 3,
    title: "Market Analysis",
    description: "Conducting thorough market research and identifying potential industry partners",
    icon: Target,
    color: "from-emerald-500 to-teal-600",
    duration: "4-8 weeks"
  },
  {
    step: 4,
    title: "Partnership Development",
    description: "Establishing collaborations with industry partners for commercialization",
    icon: Users,
    color: "from-purple-500 to-violet-600",
    duration: "2-6 months"
  },
  {
    step: 5,
    title: "Technology Transfer",
    description: "Successful transfer of technology and ongoing support for implementation",
    icon: Rocket,
    color: "from-orange-500 to-red-600",
    duration: "6-12 months"
  }
];

// Success stories and case studies
const successStories = [
  {
    title: "AI-Powered Medical Diagnostics",
    partner: "HealthTech Solutions Pvt. Ltd.",
    category: "Healthcare Technology",
    impact: "40% faster diagnosis accuracy",
    revenue: "₹25 Crores",
    year: "2023",
    description: "Revolutionary AI system for early disease detection and diagnosis, now being used in 200+ hospitals across India",
    image: "/api/placeholder/400/250",
    technologies: ["Machine Learning", "Computer Vision", "Medical Imaging"],
    status: "Commercial Success"
  },
  {
    title: "Smart Grid Optimization",
    partner: "Power Systems Corp.",
    category: "Energy Technology",
    impact: "30% energy efficiency improvement",
    revenue: "₹40 Crores",
    year: "2022",
    description: "Advanced algorithms for optimizing power distribution in smart grids, deployed across 15 states",
    image: "/api/placeholder/400/250",
    technologies: ["IoT", "Data Analytics", "Power Systems"],
    status: "Market Leader"
  },
  {
    title: "Nano-materials for Water Purification",
    partner: "CleanWater Technologies",
    category: "Environmental Technology",
    impact: "99.9% contaminant removal",
    revenue: "₹15 Crores",
    year: "2023",
    description: "Novel nano-materials for removing heavy metals and pollutants from water, serving 1M+ people",
    image: "/api/placeholder/400/250",
    technologies: ["Nanotechnology", "Materials Science", "Environmental Engineering"],
    status: "Scaling Up"
  }
];

// Available technologies for transfer
const availableTechnologies = [
  {
    title: "Quantum Computing Algorithms",
    department: "Computer Science & Engineering",
    maturity: 85,
    applications: ["Cryptography", "Optimization", "Simulation"],
    readiness: "Prototype Ready",
    contact: "Dr. Rajesh Kumar"
  },
  {
    title: "Biodegradable Polymer Composites",
    department: "Materials Science",
    maturity: 92,
    applications: ["Packaging", "Automotive", "Medical Devices"],
    readiness: "Market Ready",
    contact: "Prof. Meera Singh"
  },
  {
    title: "Wireless Power Transfer System",
    department: "Electrical Engineering",
    maturity: 78,
    applications: ["Electric Vehicles", "IoT Sensors", "Medical Implants"],
    readiness: "Pilot Testing",
    contact: "Dr. Amit Patel"
  },
  {
    title: "Drone Surveillance Network",
    department: "Mechanical Engineering",
    maturity: 88,
    applications: ["Security", "Agriculture", "Disaster Management"],
    readiness: "Field Testing",
    contact: "Prof. Suresh Reddy"
  }
];

/**
 * Statistics card component with animated counters
 */
const StatCard: React.FC<{
  stat: typeof transferStats[0];
  index: number;
}> = ({ stat, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = stat.icon;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Animate the counter on scroll
    ScrollTrigger.create({
      trigger: card,
      start: "top 80%",
      onEnter: () => {
        const counter = card.querySelector('.counter');
        if (counter) {
          gsap.fromTo(counter, 
            { textContent: "0" },
            { 
              textContent: stat.number,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 }
            }
          );
        }
      }
    });

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [stat.number]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full overflow-hidden bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-md border-primary/20 group-hover:border-primary/40 transition-colors">
        <CardContent className="p-6 text-center">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="w-8 h-8" />
          </div>
          
          <div className="counter text-3xl font-bold text-primary mb-2">
            {stat.number}
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {stat.label}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {stat.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/**
 * Process step component with animated flow
 */
const ProcessStep: React.FC<{
  step: typeof transferProcess[0];
  index: number;
  isLast: boolean;
}> = ({ step, index, isLast }) => {
  const IconComponent = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex items-center space-x-6">
        {/* Step indicator */}
        <div className="relative flex-shrink-0">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center shadow-lg`}>
            <IconComponent className="w-8 h-8" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
            {step.step}
          </div>
        </div>
        
        {/* Step content */}
        <div className="flex-1">
          <Card className="p-6 border-l-4 border-l-primary bg-gradient-to-r from-background to-muted/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              {step.description}
            </p>
            <Badge variant="secondary" className="text-xs">
              Duration: {step.duration}
            </Badge>
          </Card>
        </div>
      </div>
      
      {/* Connecting arrow */}
      {!isLast && (
        <div className="flex justify-center mt-6 mb-6">
          <ArrowRight className="w-6 h-6 text-primary" />
        </div>
      )}
    </motion.div>
  );
};

/**
 * Success story card component
 */
const SuccessStoryCard: React.FC<{
  story: typeof successStories[0];
  index: number;
}> = ({ story, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="group"
  >
    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={story.image} 
          alt={story.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <Badge variant="default" className="text-xs">
            {story.status}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium">{story.year}</p>
          <p className="text-xs opacity-90">{story.category}</p>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {story.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Partner: {story.partner}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {story.description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-muted/30 rounded-lg text-center">
            <p className="text-sm font-medium text-foreground">{story.impact}</p>
            <p className="text-xs text-muted-foreground">Impact</p>
          </div>
          <div className="p-3 bg-muted/30 rounded-lg text-center">
            <p className="text-sm font-medium text-foreground">{story.revenue}</p>
            <p className="text-xs text-muted-foreground">Revenue</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {story.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

/**
 * Available technology card component
 */
const TechnologyCard: React.FC<{
  tech: typeof availableTechnologies[0];
  index: number;
}> = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-foreground mb-2">
              {tech.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {tech.department}
            </p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {tech.readiness}
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Technology Maturity</span>
              <span className="font-medium text-foreground">{tech.maturity}%</span>
            </div>
            <Progress value={tech.maturity} className="h-2" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">Applications</h4>
          <div className="grid grid-cols-1 gap-1">
            {tech.applications.map((app, idx) => (
              <div key={idx} className="text-sm text-muted-foreground flex items-center">
                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                {app}
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-muted/30">
          <p className="text-xs text-muted-foreground mb-3">
            Contact: {tech.contact}
          </p>
          <Button size="sm" className="w-full">
            <Zap className="w-3 h-3 mr-1" />
            Explore Partnership
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

/**
 * Main Technology Transfer component
 */
const TechnologyTransfer: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Hero animation timeline
    const tl = gsap.timeline();
    
    tl.fromTo(hero.querySelector('.hero-title'), 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(hero.querySelector('.hero-subtitle'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(hero.querySelector('.hero-cta'),
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Technology Transfer | IIT Patna</title>
        <meta name="description" content="Explore IIT Patna's technology transfer initiatives, innovation commercialization, and industry partnerships for bringing research to market." />
        <meta name="keywords" content="technology transfer, innovation commercialization, industry partnerships, IIT Patna research, patents, licensing" />
        <link rel="canonical" href="https://iitp.ac.in/research/technology-transfer" />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title text-4xl md:text-7xl font-bold mb-8">
              <GradientText className="bg-gradient-to-r from-primary via-secondary to-accent">
                Technology Transfer
              </GradientText>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Bridging the gap between innovative research and real-world applications, 
              transforming breakthrough discoveries into commercial success stories
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Opportunities
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <FileText className="w-5 h-5 mr-2" />
                Partnership Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <AnimatedReveal>
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <GradientText>Impact & Achievements</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technology transfer initiatives have created significant impact 
                across industries and contributed to societal development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transferStats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      {/* Transfer Process Section */}
      <AnimatedReveal>
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <GradientText>Transfer Process</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our systematic approach ensures successful technology transfer 
                from laboratory to market
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {transferProcess.map((step, index) => (
                <ProcessStep 
                  key={step.step} 
                  step={step} 
                  index={index} 
                  isLast={index === transferProcess.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      {/* Success Stories Section */}
      <AnimatedReveal>
        <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <GradientText>Success Stories</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover how our innovations have transformed into successful 
                commercial products and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <SuccessStoryCard key={story.title} story={story} index={index} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      {/* Available Technologies Section */}
      <AnimatedReveal>
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <GradientText>Available Technologies</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our portfolio of ready-to-transfer technologies 
                awaiting commercialization partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {availableTechnologies.map((tech, index) => (
                <TechnologyCard key={tech.title} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      {/* Call to Action Section */}
      <AnimatedReveal>
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <GradientText>Ready to Partner with Us?</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in transforming cutting-edge research into market-ready solutions 
              that make a difference in the world
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                Start Partnership
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Globe className="w-5 h-5 mr-2" />
                Contact TTO
              </Button>
            </div>
          </div>
        </section>
      </AnimatedReveal>
    </Layout>
  );
};

export default TechnologyTransfer;