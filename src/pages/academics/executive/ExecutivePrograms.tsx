import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Clock, Users, Award, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Executive Programs Page - IIT Patna
 * Features executive education programs for working professionals
 * Animations: Floating elements, staggered reveals, interactive cards
 */

const executivePrograms = [
  {
    title: 'Executive MBA in Technology Management',
    duration: '18 months',
    mode: 'Weekend Classes',
    participants: '40 per batch',
    description: 'Designed for technology professionals seeking management expertise while continuing their careers.',
    highlights: [
      'Strategic Technology Management',
      'Innovation and Entrepreneurship',
      'Digital Transformation',
      'Leadership Development'
    ],
    eligibility: 'Minimum 5 years work experience in technology sector',
    nextBatch: 'July 2024',
    fees: '₹8,50,000',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Executive Program in Data Science & Analytics',
    duration: '12 months',
    mode: 'Hybrid (Online + Campus)',
    participants: '35 per batch',
    description: 'Comprehensive program covering advanced data science techniques for business applications.',
    highlights: [
      'Machine Learning & AI',
      'Big Data Analytics',
      'Business Intelligence',
      'Statistical Modeling'
    ],
    eligibility: 'Engineering/Science background with 3+ years experience',
    nextBatch: 'September 2024',
    fees: '₹6,75,000',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Executive Certificate in Artificial Intelligence',
    duration: '8 months',
    mode: 'Online with Lab Sessions',
    participants: '50 per batch',
    description: 'Intensive program focusing on AI implementation in business and industry applications.',
    highlights: [
      'Deep Learning Applications',
      'Computer Vision',
      'Natural Language Processing',
      'AI Ethics and Governance'
    ],
    eligibility: 'Technical background with programming knowledge',
    nextBatch: 'October 2024',
    fees: '₹4,50,000',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Executive Program in Sustainable Engineering',
    duration: '10 months',
    mode: 'Weekend + Online',
    participants: '30 per batch',
    description: 'Focus on sustainable practices and green technologies for engineering professionals.',
    highlights: [
      'Green Technology Solutions',
      'Environmental Impact Assessment',
      'Sustainable Development Goals',
      'Policy and Regulations'
    ],
    eligibility: 'Engineering professionals with 4+ years experience',
    nextBatch: 'November 2024',
    fees: '₹5,25,000',
    color: 'from-emerald-500 to-emerald-600'
  }
];

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Faculty',
    description: 'Learn from IIT Patna faculty and industry experts'
  },
  {
    icon: Users,
    title: 'Peer Learning',
    description: 'Network with professionals from diverse industries'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Certificates recognized by leading organizations'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Designed for working professionals'
  }
];

const ExecutivePrograms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Executive Programs | IIT Patna - Professional Education</title>
        <meta 
          name="description" 
          content="Executive education programs at IIT Patna for working professionals. MBA, Data Science, AI, and Sustainable Engineering programs with flexible schedules." 
        />
        <meta name="keywords" content="IIT Patna executive programs, professional education, executive MBA, data science, AI certification" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
          
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <GraduationCap className="h-8 w-8 text-primary" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                  Executive Programs
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Advance your career with world-class executive education programs designed for 
                  working professionals at IIT Patna.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="text-center h-full card-modern">
                      <CardContent className="p-6">
                        <motion.div
                          className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          <feature.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Programs Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                  Our Executive Programs
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose from our range of specialized programs designed to enhance your expertise
                </p>
              </motion.div>

              {/* Programs Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {executivePrograms.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full card-feature group-hover:shadow-glow transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                            <GraduationCap className="h-6 w-6 text-white" />
                          </div>
                          <Badge variant="secondary" className="animate-pulse-glow">
                            {program.mode}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                          {program.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {program.description}
                        </p>

                        {/* Program Details */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{program.participants}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{program.nextBatch}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-secondary">{program.fees}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-3">Program Highlights:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {program.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span className="text-sm text-muted-foreground">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Eligibility */}
                        <div className="bg-muted/50 rounded-lg p-4">
                          <h4 className="font-semibold text-card-foreground mb-2">Eligibility:</h4>
                          <p className="text-sm text-muted-foreground">{program.eligibility}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button 
                            className={`flex-1 bg-gradient-to-r ${program.color} hover:scale-105 transition-all duration-300`}
                            size="lg"
                          >
                            Apply Now
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="hover:bg-muted/50 transition-all duration-300"
                          >
                            Download Brochure
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-card-foreground mb-6">
                  Ready to Advance Your Career?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get in touch with our admissions team for more information about our executive programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-hero">
                    Contact Admissions
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule a Call
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ExecutivePrograms;