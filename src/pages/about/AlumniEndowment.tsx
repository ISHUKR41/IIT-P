import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Heart, Award, TrendingUp, Building, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Alumni & Endowment page component
 * Showcases alumni achievements and endowment opportunities
 * Features: Modern design, animations, success stories
 */
const AlumniEndowment: React.FC = () => {
  // Sample alumni success stories - replace with actual data
  const successStories = [
    {
      id: 1,
      name: 'Dr. Amit Sharma',
      batch: '2010-2014',
      branch: 'Computer Science',
      position: 'Senior Vice President',
      company: 'Google',
      achievement: 'Leading AI research initiatives globally',
      image: '/placeholder-alumni.jpg'
    },
    {
      id: 2,
      name: 'Ms. Priya Patel',
      batch: '2012-2016',
      branch: 'Electrical Engineering',
      position: 'Founder & CEO',
      company: 'TechStart Solutions',
      achievement: 'Built a successful IoT startup valued at $50M',
      image: '/placeholder-alumni.jpg'
    },
    {
      id: 3,
      name: 'Prof. Rajesh Kumar',
      batch: '2008-2012',
      branch: 'Mechanical Engineering',
      position: 'Research Professor',
      company: 'MIT',
      achievement: 'Pioneering research in renewable energy systems',
      image: '/placeholder-alumni.jpg'
    }
  ];

  // Endowment opportunities
  const endowmentTypes = [
    {
      title: 'Faculty Chair Endowment',
      minAmount: '₹1 Crore',
      description: 'Support distinguished faculty positions and research initiatives',
      icon: Award,
      benefits: [
        'Named professorship',
        'Research fund allocation',
        'Annual recognition ceremony',
        'Direct impact on academic excellence'
      ]
    },
    {
      title: 'Student Scholarship Fund',
      minAmount: '₹50 Lakhs',
      description: 'Enable deserving students to pursue their educational dreams',
      icon: Users,
      benefits: [
        'Merit-based scholarships',
        'Need-based financial aid',
        'Annual scholarship ceremony',
        'Direct student mentorship opportunities'
      ]
    },
    {
      title: 'Infrastructure Development',
      minAmount: '₹2 Crores',
      description: 'Contribute to state-of-the-art facilities and laboratories',
      icon: Building,
      benefits: [
        'Named building/facility',
        'Plaque recognition',
        'Facility inauguration ceremony',
        'Lasting institutional legacy'
      ]
    },
    {
      title: 'Research Endowment',
      minAmount: '₹75 Lakhs',
      description: 'Fund cutting-edge research projects and innovation',
      icon: TrendingUp,
      benefits: [
        'Named research center',
        'Annual research symposium',
        'Publication acknowledgments',
        'Technology transfer opportunities'
      ]
    }
  ];

  // Alumni statistics
  const stats = [
    { number: '5000+', label: 'Alumni Worldwide' },
    { number: '50+', label: 'Countries' },
    { number: '₹25 Cr+', label: 'Total Endowments' },
    { number: '200+', label: 'Scholarship Recipients' }
  ];

  return (
    <>
      <Helmet>
        <title>Alumni & Endowment - IIT Patna | Global Network & Giving</title>
        <meta 
          name="description" 
          content="Connect with IIT Patna's global alumni network and explore endowment opportunities to support education, research, and institutional development."
        />
        <meta name="keywords" content="IIT Patna, alumni network, endowment, scholarships, donations, giving back, education support" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <Heart className="h-12 w-12 mr-4" />
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Alumni & Endowment
                  </h1>
                </div>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                  Celebrating our global alumni network and empowering future generations through strategic giving
                </p>
              </motion.div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-16 bg-white/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Alumni Success Stories */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Alumni Success Stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our graduates are making significant impacts across industries and research worldwide
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <Card className="h-full bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Users className="h-10 w-10 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                          {story.name}
                        </CardTitle>
                        <div className="space-y-1">
                          <Badge variant="secondary" className="text-xs">
                            {story.batch}
                          </Badge>
                          <p className="text-sm text-muted-foreground">
                            {story.branch}
                          </p>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="text-center">
                        <div className="mb-4">
                          <p className="font-semibold text-foreground">{story.position}</p>
                          <p className="text-sm text-primary">{story.company}</p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {story.achievement}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Endowment Opportunities */}
          <section className="py-16 bg-secondary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Endowment Opportunities
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Create a lasting impact on education and research through strategic philanthropic investments
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {endowmentTypes.map((endowment, index) => {
                  const IconComponent = endowment.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + (index * 0.1),
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className="group"
                    >
                      <Card className="h-full bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <Badge 
                              variant="outline" 
                              className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20"
                            >
                              {endowment.minAmount}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                            {endowment.title}
                          </CardTitle>
                          <p className="text-muted-foreground">
                            {endowment.description}
                          </p>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {endowment.benefits.map((benefit, idx) => (
                              <li 
                                key={idx}
                                className="text-sm text-muted-foreground flex items-start space-x-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <Button 
                            className="w-full bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 shadow-md mt-6"
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-4xl mx-auto">
                  <CardContent className="py-12">
                    <div className="flex items-center justify-center mb-6">
                      <Globe className="h-12 w-12 text-primary mr-4" />
                      <h3 className="text-3xl font-bold text-foreground">
                        Join Our Global Network
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                      Whether you're an alumnus looking to give back or interested in supporting 
                      our mission, there are many ways to contribute to our continued excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Alumni Registration
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="hover:scale-105 transition-all duration-300"
                      >
                        Explore Giving Options
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AlumniEndowment;