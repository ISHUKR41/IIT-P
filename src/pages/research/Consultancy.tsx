import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, TrendingUp, Award, ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Consultancy page for IIT Patna
 * Features:
 * - Consultancy services overview
 * - Areas of expertise
 * - Industry partnerships
 * - Contact information for projects
 */
const Consultancy: React.FC = () => {
  // Sample consultancy areas data
  const consultancyAreas = [
    {
      title: "Technical Consulting",
      description: "Engineering solutions, design optimization, and technical feasibility studies",
      expertise: ["Structural Analysis", "Thermal Systems", "Process Optimization", "Material Testing"],
      icon: "🔧"
    },
    {
      title: "Software Development",
      description: "Custom software solutions, system integration, and digital transformation",
      expertise: ["Web Applications", "Mobile Apps", "Data Analytics", "AI/ML Solutions"],
      icon: "💻"
    },
    {
      title: "Research & Development",
      description: "Collaborative research projects and innovation-driven solutions",
      expertise: ["Product Development", "Patent Filing", "Technology Transfer", "Prototype Development"],
      icon: "🔬"
    },
    {
      title: "Training & Education",
      description: "Professional development programs and skill enhancement workshops",
      expertise: ["Corporate Training", "Faculty Development", "Certification Programs", "Workshops"],
      icon: "📚"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      projects: 25,
      icon: "🏭"
    },
    {
      name: "Information Technology",
      projects: 40,
      icon: "💾"
    },
    {
      name: "Energy & Power",
      projects: 18,
      icon: "⚡"
    },
    {
      name: "Healthcare",
      projects: 15,
      icon: "🏥"
    },
    {
      name: "Transportation",
      projects: 12,
      icon: "🚗"
    },
    {
      name: "Construction",
      projects: 20,
      icon: "🏗️"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: Briefcase },
    { label: "Industry Partners", value: "80+", icon: Users },
    { label: "Revenue Generated", value: "₹2.5Cr+", icon: TrendingUp },
    { label: "Years of Experience", value: "10+", icon: Award }
  ];

  return (
    <>
      <Helmet>
        <title>Consultancy Services - IIT Patna | Industry Solutions</title>
        <meta 
          name="description" 
          content="IIT Patna consultancy services offer technical consulting, R&D solutions, and training programs for industry partners. Expert solutions for complex challenges."
        />
        <meta 
          name="keywords" 
          content="IIT Patna consultancy, technical consulting, industry solutions, R&D services, training programs"
        />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-subtle py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Page Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Consultancy Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leverage IIT Patna's expertise to solve complex technical challenges, 
                drive innovation, and accelerate your business growth through our comprehensive consultancy services.
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="card-feature text-center">
                      <CardContent className="pt-8">
                        <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                        <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                        <p className="text-muted-foreground text-sm">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Consultancy Areas */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-8">
                <Briefcase className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Our Expertise Areas</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {consultancyAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="card-feature h-full">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-4">{area.icon}</span>
                          <CardTitle className="text-xl">{area.title}</CardTitle>
                        </div>
                        <p className="text-muted-foreground">{area.description}</p>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-3">Key Services:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {area.expertise.map((service) => (
                            <div key={service} className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                              <span className="text-sm text-foreground">{service}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="btn-outline mt-4 w-full">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Industry Partnerships */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <Users className="h-8 w-8 text-secondary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Industry Partnerships</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="card-modern text-center">
                      <CardContent className="pt-6">
                        <div className="text-3xl mb-3">{industry.icon}</div>
                        <h3 className="font-semibold text-sm mb-2">{industry.name}</h3>
                        <p className="text-xs text-muted-foreground">{industry.projects} Projects</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Process Overview */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Our Consultancy Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                      { step: "1", title: "Initial Consultation", desc: "Understanding your requirements and challenges" },
                      { step: "2", title: "Proposal Development", desc: "Detailed project scope and timeline" },
                      { step: "3", title: "Project Execution", desc: "Expert implementation with regular updates" },
                      { step: "4", title: "Delivery & Support", desc: "Final delivery with ongoing support" }
                    ].map((process, index) => (
                      <motion.div
                        key={process.step}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                          {process.step}
                        </div>
                        <h3 className="font-semibold mb-2">{process.title}</h3>
                        <p className="text-sm text-muted-foreground">{process.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Contact CTA */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Card className="card-feature bg-gradient-primary text-primary-foreground">
                <CardContent className="text-center py-12">
                  <Briefcase className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Start Your Consultancy Project</h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Ready to leverage IIT Patna's expertise for your next project? 
                    Contact our consultancy team to discuss your requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: +91-612-302-8073
                    </Button>
                    <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Mail className="h-4 w-4 mr-2" />
                      Email: consultancy@iitp.ac.in
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Consultancy;