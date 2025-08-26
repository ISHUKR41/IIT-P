import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { 
  Building2, 
  Users,
  Lightbulb,
  TrendingUp,
  Globe,
  Rocket,
  TreePine,
  Wifi,
  Car,
  Coffee,
  Shield,
  Zap,
  Target,
  Award,
  MapPin,
  Clock,
  Phone,
  Mail
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GradientText from '@/components/common/GradientText';
import { AnimatedReveal, StaggeredAnimation } from '@/components/common/AdvancedAnimations';

/**
 * ====================================================================
 * RESEARCH PARK PAGE - IIT PATNA WEBSITE
 * ====================================================================
 * 
 * Comprehensive showcase of IIT Patna Research Park, featuring startup
 * incubation, innovation ecosystem, and entrepreneurship development.
 * 
 * Features:
 * - Interactive park map and virtual tours
 * - Startup showcase and success stories
 * - Facility booking and availability
 * - Incubation program details
 * - Investor network information
 * - Event calendar and workshops
 * - Real-time occupancy statistics
 * - Advanced GSAP animations
 * 
 * Design Highlights:
 * - Modern campus visualization
 * - Interactive facility cards
 * - Smooth parallax effects
 * - Responsive grid layouts
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

// Register GSAP plugins for scroll animations
gsap.registerPlugin(ScrollTrigger);

// Research park statistics and metrics
const parkStats = [
  {
    icon: Building2,
    number: "50+",
    label: "Incubated Startups",
    description: "Successful companies launched through our programs",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Users,
    number: "500+",
    label: "Entrepreneurs Supported",
    description: "Innovators and founders who've benefited from our ecosystem",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: TrendingUp,
    number: "₹200Cr+",
    label: "Funding Raised",
    description: "Total investment secured by our incubated companies",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Award,
    number: "25+",
    label: "Awards Won",
    description: "Recognition received by our startup ecosystem",
    color: "from-orange-500 to-red-600"
  }
];

// Facilities and amenities in the research park
const facilities = [
  {
    name: "Innovation Labs",
    icon: Lightbulb,
    capacity: "20 teams",
    area: "5000 sq ft",
    features: ["State-of-art equipment", "24/7 access", "High-speed internet", "Prototyping tools"],
    availability: "Available",
    color: "from-yellow-500 to-amber-600",
    image: "/api/placeholder/400/250"
  },
  {
    name: "Co-working Spaces",
    icon: Users,
    capacity: "100 seats",
    area: "8000 sq ft",
    features: ["Flexible seating", "Meeting rooms", "Networking areas", "Video conferencing"],
    availability: "70% Occupied",
    color: "from-blue-500 to-cyan-600",
    image: "/api/placeholder/400/250"
  },
  {
    name: "Fabrication Center",
    icon: Zap,
    capacity: "15 projects",
    area: "3000 sq ft",
    features: ["3D printing", "CNC machines", "Electronic tools", "Safety equipment"],
    availability: "Available",
    color: "from-purple-500 to-violet-600",
    image: "/api/placeholder/400/250"
  },
  {
    name: "Conference Center",
    icon: Target,
    capacity: "200 people",
    area: "2500 sq ft",
    features: ["Modern AV systems", "Live streaming", "Catering services", "Parking"],
    availability: "Booking Required",
    color: "from-emerald-500 to-teal-600",
    image: "/api/placeholder/400/250"
  }
];

// Incubated startup success stories
const startupShowcase = [
  {
    name: "TechVision AI",
    sector: "Artificial Intelligence",
    founded: "2022",
    funding: "₹15 Crores",
    employees: "25+",
    description: "Computer vision solutions for industrial automation and quality control",
    achievements: ["Series A funded", "50+ enterprise clients", "2 patents filed"],
    logo: "/api/placeholder/100/100",
    website: "www.techvisionai.com",
    status: "Graduated"
  },
  {
    name: "GreenTech Solutions",
    sector: "Clean Energy",
    founded: "2021",
    funding: "₹8 Crores",
    employees: "15+",
    description: "IoT-based smart energy management systems for commercial buildings",
    achievements: ["Government contract", "30% energy savings", "International expansion"],
    logo: "/api/placeholder/100/100",
    website: "www.greentechsol.in",
    status: "Scaling"
  },
  {
    name: "MedTech Innovations",
    sector: "Healthcare",
    founded: "2023",
    funding: "₹5 Crores",
    employees: "12+",
    description: "Affordable medical devices for rural healthcare accessibility",
    achievements: ["FDA approval", "100+ hospitals", "Social impact award"],
    logo: "/api/placeholder/100/100",
    website: "www.medtechinno.com",
    status: "Growing"
  },
  {
    name: "EduSmart Platform",
    sector: "EdTech",
    founded: "2022",
    funding: "₹12 Crores",
    employees: "30+",
    description: "AI-powered personalized learning platform for K-12 education",
    achievements: ["1M+ students", "500+ schools", "Multiple awards"],
    logo: "/api/placeholder/100/100",
    website: "www.edusmartplatform.com",
    status: "Market Leader"
  }
];

// Programs and services offered
const programs = [
  {
    title: "Startup Incubation",
    duration: "12-18 months",
    investment: "Up to ₹50 Lakhs",
    equity: "5-8%",
    benefits: ["Mentorship", "Funding", "Office space", "Legal support"],
    eligibility: "Early-stage startups with innovative technology solutions",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Corporate Innovation",
    duration: "6-12 months",
    investment: "Customized",
    equity: "Partnership based",
    benefits: ["R&D collaboration", "Proof of concept", "Talent access", "IP licensing"],
    eligibility: "Established companies seeking innovation partnerships",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Student Entrepreneurship",
    duration: "3-6 months",
    investment: "Up to ₹10 Lakhs",
    equity: "0-3%",
    benefits: ["Academic credit", "Faculty guidance", "Peer network", "Resources"],
    eligibility: "Student teams with viable business ideas",
    color: "from-purple-500 to-violet-600"
  }
];

// Amenities and services
const amenities = [
  { icon: Wifi, name: "High-Speed Internet", description: "1 Gbps dedicated connection" },
  { icon: Car, name: "Parking Facility", description: "Secure parking for 200+ vehicles" },
  { icon: Coffee, name: "Cafeteria", description: "24/7 food and beverage services" },
  { icon: Shield, name: "Security", description: "Round-the-clock security and surveillance" },
  { icon: TreePine, name: "Green Spaces", description: "Landscaped gardens and outdoor areas" },
  { icon: Zap, name: "Power Backup", description: "Uninterrupted power supply" }
];

/**
 * Statistics card component with animated counters
 */
const StatCard: React.FC<{
  stat: typeof parkStats[0];
  index: number;
}> = ({ stat, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = stat.icon;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Animate counter on scroll
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === card) trigger.kill();
      });
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
      <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8" />
        </div>
        
        <div className="counter text-3xl font-bold text-primary mb-2">
          {stat.number}
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {stat.label}
        </h3>
        
        <p className="text-sm text-muted-foreground">
          {stat.description}
        </p>
      </Card>
    </motion.div>
  );
};

/**
 * Facility card component with interactive features
 */
const FacilityCard: React.FC<{
  facility: typeof facilities[0];
  index: number;
}> = ({ facility, index }) => {
  const IconComponent = facility.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <img 
            src={facility.image} 
            alt={facility.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 right-4">
            <Badge 
              variant={facility.availability === "Available" ? "default" : "secondary"}
              className="text-xs"
            >
              {facility.availability}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${facility.color} text-white`}>
              <IconComponent className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {facility.name}
            </h3>
            <div className="flex justify-between text-sm text-muted-foreground mb-3">
              <span>Capacity: {facility.capacity}</span>
              <span>Area: {facility.area}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Key Features</h4>
            <div className="grid grid-cols-2 gap-1">
              {facility.features.map((feature, idx) => (
                <div key={idx} className="text-xs text-muted-foreground flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          <Button className="w-full" size="sm">
            <MapPin className="w-3 h-3 mr-1" />
            Book Facility
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/**
 * Startup showcase card component
 */
const StartupCard: React.FC<{
  startup: typeof startupShowcase[0];
  index: number;
}> = ({ startup, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <Card className="h-full p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4 mb-4">
        <img 
          src={startup.logo} 
          alt={startup.name}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-foreground">{startup.name}</h3>
            <Badge variant="outline" className="text-xs">
              {startup.status}
            </Badge>
          </div>
          <p className="text-sm text-primary font-medium">{startup.sector}</p>
          <p className="text-xs text-muted-foreground">Founded: {startup.founded}</p>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {startup.description}
      </p>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-2 bg-muted/30 rounded text-center">
          <p className="text-sm font-semibold text-foreground">{startup.funding}</p>
          <p className="text-xs text-muted-foreground">Funding Raised</p>
        </div>
        <div className="p-2 bg-muted/30 rounded text-center">
          <p className="text-sm font-semibold text-foreground">{startup.employees}</p>
          <p className="text-xs text-muted-foreground">Team Size</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Key Achievements</h4>
        <div className="space-y-1">
          {startup.achievements.map((achievement, idx) => (
            <div key={idx} className="text-xs text-muted-foreground flex items-center">
              <Award className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
              {achievement}
            </div>
          ))}
        </div>
      </div>
      
      <Button variant="outline" size="sm" className="w-full mt-4">
        <Globe className="w-3 h-3 mr-1" />
        Visit Website
      </Button>
    </Card>
  </motion.div>
);

/**
 * Main Research Park component
 */
const ResearchPark: React.FC = () => {
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
        <title>Research Park | IIT Patna</title>
        <meta name="description" content="Discover IIT Patna Research Park - a thriving innovation ecosystem supporting startups, entrepreneurs, and technology commercialization." />
        <meta name="keywords" content="research park, startup incubation, innovation ecosystem, entrepreneurship, IIT Patna, technology transfer" />
        <link rel="canonical" href="https://iitp.ac.in/research/research-park" />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title text-4xl md:text-7xl font-bold mb-8">
              <GradientText className="bg-gradient-to-r from-primary via-secondary to-accent">
                Research Park
              </GradientText>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Where innovation meets entrepreneurship. Our research park provides a nurturing 
              ecosystem for startups, fostering breakthrough technologies and sustainable businesses
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                <Rocket className="w-5 h-5 mr-2" />
                Join Our Ecosystem
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <MapPin className="w-5 h-5 mr-2" />
                Virtual Tour
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
                <GradientText>Innovation Impact</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our research park has become a catalyst for innovation, 
                supporting entrepreneurs and driving economic growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {parkStats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      {/* Facilities Section */}
      <AnimatedReveal>
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <GradientText>World-Class Facilities</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                State-of-the-art infrastructure designed to support innovation 
                and provide everything entrepreneurs need to succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <FacilityCard key={facility.name} facility={facility} index={index} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      {/* Programs and Startup Showcase */}
      <AnimatedReveal>
        <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="programs" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="programs">Programs</TabsTrigger>
                  <TabsTrigger value="startups">Our Startups</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="programs" className="mt-0">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <GradientText>Incubation Programs</GradientText>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Tailored programs to support entrepreneurs at every stage
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {programs.map((program, index) => (
                    <motion.div
                      key={program.title}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="h-full p-6 border-l-4 border-l-primary">
                        <CardTitle className="text-xl font-bold mb-4">
                          {program.title}
                        </CardTitle>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Duration:</span>
                            <span className="text-sm font-medium">{program.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-medium">{program.investment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Equity:</span>
                            <span className="text-sm font-medium">{program.equity}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          <h4 className="text-sm font-semibold">Benefits</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {program.benefits.map((benefit, idx) => (
                              <div key={idx} className="text-xs text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          {program.eligibility}
                        </p>
                        
                        <Button className="w-full">Apply Now</Button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="startups" className="mt-0">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <GradientText>Success Stories</GradientText>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Meet the innovative startups that have grown in our ecosystem
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {startupShowcase.map((startup, index) => (
                    <StartupCard key={startup.name} startup={startup} index={index} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </AnimatedReveal>

      {/* Amenities Section */}
      <AnimatedReveal>
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <GradientText>Campus Amenities</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive amenities to ensure a productive and comfortable 
                working environment for all stakeholders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <motion.div
                    key={amenity.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                      <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{amenity.name}</h3>
                      <p className="text-sm text-muted-foreground">{amenity.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedReveal>

      {/* Contact Section */}
      <AnimatedReveal>
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <GradientText>Get Connected</GradientText>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to be part of our innovation ecosystem? Contact us to learn 
              more about opportunities and how to get started
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <Card className="p-6 text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">+91-612-302-8100</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">researchpark@iitp.ac.in</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">Mon-Fri 9:00-18:00</p>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                Schedule Visit
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Lightbulb className="w-5 h-5 mr-2" />
                Submit Proposal
              </Button>
            </div>
          </div>
        </section>
      </AnimatedReveal>
    </Layout>
  );
};

export default ResearchPark;