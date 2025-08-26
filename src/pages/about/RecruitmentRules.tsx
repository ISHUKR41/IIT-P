import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Users, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Recruitment Rules and Promotion Policy page component
 * Displays detailed information about institutional recruitment and promotion policies
 * Features: Modern design, animations, document downloads
 */
const RecruitmentRules: React.FC = () => {
  // Sample recruitment categories - replace with actual data
  const recruitmentCategories = [
    {
      id: 1,
      category: 'Faculty Positions',
      icon: GraduationCap,
      description: 'Guidelines for recruiting academic faculty members',
      rules: [
        'Assistant Professor recruitment rules',
        'Associate Professor promotion criteria',
        'Professor advancement guidelines',
        'Visiting faculty appointment procedures'
      ],
      documents: [
        { name: 'Faculty Recruitment Rules 2024', size: '2.1 MB' },
        { name: 'Promotion Policy for Faculty', size: '1.8 MB' }
      ]
    },
    {
      id: 2,
      category: 'Administrative Staff',
      icon: Briefcase,
      description: 'Recruitment procedures for non-teaching staff',
      rules: [
        'Administrative officer recruitment',
        'Technical staff selection criteria',
        'Support staff hiring guidelines',
        'Contractual employee policies'
      ],
      documents: [
        { name: 'Administrative Staff Rules', size: '1.9 MB' },
        { name: 'Staff Promotion Guidelines', size: '1.5 MB' }
      ]
    },
    {
      id: 3,
      category: 'Research Personnel',
      icon: Users,
      description: 'Guidelines for research staff recruitment',
      rules: [
        'Research Associate positions',
        'Project staff recruitment',
        'Post-doctoral fellow criteria',
        'Research scholar guidelines'
      ],
      documents: [
        { name: 'Research Staff Policy', size: '1.6 MB' },
        { name: 'Fellowship Guidelines', size: '1.3 MB' }
      ]
    }
  ];

  // Key policies overview
  const keyPolicies = [
    {
      title: 'Equal Opportunity Employment',
      description: 'Commitment to fair and inclusive recruitment practices'
    },
    {
      title: 'Merit-Based Selection',
      description: 'Transparent selection process based on qualifications and performance'
    },
    {
      title: 'Career Progression',
      description: 'Clear pathways for professional growth and advancement'
    },
    {
      title: 'Regular Updates',
      description: 'Policies updated in accordance with government regulations'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Recruitment Rules & Promotion Policy - IIT Patna | Employment Guidelines</title>
        <meta 
          name="description" 
          content="Access comprehensive recruitment rules and promotion policies for faculty, staff, and research personnel at IIT Patna. Merit-based, transparent procedures."
        />
        <meta name="keywords" content="IIT Patna, recruitment rules, promotion policy, faculty jobs, staff employment, career advancement" />
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
                  <FileText className="h-12 w-12 mr-4" />
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Recruitment Rules & Promotion Policy
                  </h1>
                </div>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                  Comprehensive guidelines for employment and career advancement at IIT Patna
                </p>
              </motion.div>
            </div>
          </section>

          {/* Key Policies Overview */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Our Employment Principles
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Building a diverse, talented, and motivated workforce through transparent processes
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyPolicies.map((policy, index) => (
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
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Card className="h-full bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                      <CardContent className="py-6">
                        <h3 className="font-bold text-foreground mb-3">
                          {policy.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {policy.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Recruitment Categories */}
          <section className="py-16 bg-secondary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Recruitment Categories
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Detailed guidelines for different categories of positions at our institute
                </p>
              </motion.div>

              {/* Categories Grid */}
              <div className="space-y-8">
                {recruitmentCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  
                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + (index * 0.2),
                        ease: "easeOut"
                      }}
                    >
                      <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                          
                          {/* Category Info */}
                          <div className="lg:col-span-2">
                            <CardHeader className="p-0 pb-4">
                              <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                                  <IconComponent className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-card-foreground">
                                  {category.category}
                                </CardTitle>
                              </div>
                              <p className="text-muted-foreground">
                                {category.description}
                              </p>
                            </CardHeader>
                            
                            <CardContent className="p-0">
                              <h4 className="font-semibold text-foreground mb-3">Key Areas Covered:</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {category.rules.map((rule, idx) => (
                                  <div 
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-muted-foreground">{rule}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </div>

                          {/* Documents */}
                          <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">Available Documents:</h4>
                            <div className="space-y-3">
                              {category.documents.map((doc, idx) => (
                                <div 
                                  key={idx}
                                  className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg border border-border/30"
                                >
                                  <div className="flex-1">
                                    <div className="font-medium text-sm text-foreground">{doc.name}</div>
                                    <div className="text-xs text-muted-foreground">{doc.size}</div>
                                  </div>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    className="ml-3 hover:scale-105 transition-all duration-300"
                                  >
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-4xl mx-auto">
                  <CardContent className="py-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Need More Information?
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      For specific queries regarding recruitment procedures, promotion criteria, 
                      or employment opportunities, please contact our Human Resources department.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="text-center">
                        <Badge variant="secondary" className="mb-2">
                          HR Department
                        </Badge>
                        <div className="text-sm text-muted-foreground">hr@iitp.ac.in</div>
                        <div className="text-sm text-muted-foreground">+91-612-3028-400</div>
                      </div>
                      <div className="text-center">
                        <Badge variant="secondary" className="mb-2">
                          Faculty Affairs
                        </Badge>
                        <div className="text-sm text-muted-foreground">faculty@iitp.ac.in</div>
                        <div className="text-sm text-muted-foreground">+91-612-3028-405</div>
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

export default RecruitmentRules;