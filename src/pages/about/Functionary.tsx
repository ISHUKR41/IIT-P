import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Other Institute Functionary page component
 * Displays information about various institutional functionaries and their roles
 * Features: Modern design, animations, contact information
 */
const Functionary: React.FC = () => {
  // Sample functionary data - replace with actual data
  const functionaries = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar Sharma',
      designation: 'Chief Vigilance Officer',
      department: 'Administration',
      email: 'cvo@iitp.ac.in',
      phone: '+91-612-3028-401',
      office: 'Main Administrative Block',
      responsibilities: [
        'Institutional vigilance activities',
        'Anti-corruption measures',
        'Transparency initiatives',
        'Grievance redressal'
      ]
    },
    {
      id: 2,
      name: 'Prof. Anita Singh',
      designation: 'Chief Proctor',
      department: 'Student Affairs',
      email: 'proctor@iitp.ac.in',
      phone: '+91-612-3028-402',
      office: 'Student Affairs Building',
      responsibilities: [
        'Student discipline and welfare',
        'Campus security coordination',
        'Hostel administration oversight',
        'Student grievance handling'
      ]
    },
    {
      id: 3,
      name: 'Dr. Manoj Kumar Verma',
      designation: 'Internal Audit Officer',
      department: 'Finance & Accounts',
      email: 'audit@iitp.ac.in',
      phone: '+91-612-3028-403',
      office: 'Finance Block',
      responsibilities: [
        'Internal audit activities',
        'Financial compliance',
        'Risk assessment',
        'Process improvement'
      ]
    },
    {
      id: 4,
      name: 'Ms. Priya Kumari',
      designation: 'Legal Advisor',
      department: 'Legal Affairs',
      email: 'legal@iitp.ac.in',
      phone: '+91-612-3028-404',
      office: 'Administrative Complex',
      responsibilities: [
        'Legal consultation',
        'Contract vetting',
        'Litigation support',
        'Policy compliance'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Other Institute Functionary - IIT Patna | Administrative Officers</title>
        <meta 
          name="description" 
          content="Meet the key functionaries of IIT Patna who ensure smooth administrative operations, student welfare, and institutional governance."
        />
        <meta name="keywords" content="IIT Patna, functionaries, administration, officers, governance, student affairs" />
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
                  <Users className="h-12 w-12 mr-4" />
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Institute Functionaries
                  </h1>
                </div>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                  Key administrative officers ensuring institutional excellence and student welfare
                </p>
              </motion.div>
            </div>
          </section>

          {/* Functionaries Section */}
          <section className="py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Administrative Leadership
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Dedicated professionals working behind the scenes to ensure smooth institutional operations
                </p>
              </motion.div>

              {/* Functionaries Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {functionaries.map((functionary, index) => (
                  <motion.div
                    key={functionary.id}
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
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                              {functionary.name}
                            </CardTitle>
                            <Badge 
                              variant="secondary" 
                              className="mb-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
                            >
                              {functionary.designation}
                            </Badge>
                            <p className="text-sm text-muted-foreground">
                              {functionary.department}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        {/* Contact Information */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Contact Information</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <a 
                                href={`mailto:${functionary.email}`}
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                              >
                                {functionary.email}
                              </a>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">{functionary.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">{functionary.office}</span>
                            </div>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Key Responsibilities</h4>
                          <ul className="space-y-1">
                            {functionary.responsibilities.map((responsibility, idx) => (
                              <li 
                                key={idx}
                                className="text-sm text-muted-foreground flex items-start space-x-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional Information */}
              <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-4xl mx-auto">
                  <CardContent className="py-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Need Assistance?
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Our functionaries are here to help with various administrative matters. 
                      Please feel free to reach out to the appropriate officer for your specific needs.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-foreground">General Enquiries</div>
                        <div className="text-muted-foreground">admin@iitp.ac.in</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">Student Affairs</div>
                        <div className="text-muted-foreground">students@iitp.ac.in</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">Finance</div>
                        <div className="text-muted-foreground">finance@iitp.ac.in</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">Legal Affairs</div>
                        <div className="text-muted-foreground">legal@iitp.ac.in</div>
                      </div>
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

export default Functionary;