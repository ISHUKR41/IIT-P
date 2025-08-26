import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Globe, Calendar, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Current MOUs page component
 * Displays active memorandums of understanding with various institutions
 * Features: Categorized display, search functionality, modern animations
 */
const CurrentMOUs: React.FC = () => {
  // Sample MOU data - replace with actual data
  const currentMOUs = [
    {
      id: 1,
      partner: 'Stanford University',
      country: 'USA',
      category: 'Academic Collaboration',
      signedDate: '2023-03-15',
      validUntil: '2028-03-15',
      scope: [
        'Student exchange programs',
        'Joint research initiatives',
        'Faculty exchange',
        'Collaborative publications'
      ],
      status: 'Active',
      contactPerson: 'Dr. International Affairs'
    },
    {
      id: 2,
      partner: 'RWTH Aachen University',
      country: 'Germany',
      category: 'Research Partnership',
      signedDate: '2023-06-20',
      validUntil: '2026-06-20',
      scope: [
        'Joint PhD programs',
        'Research collaboration in Engineering',
        'Technology transfer',
        'Conference participation'
      ],
      status: 'Active',
      contactPerson: 'Prof. Research Coordinator'
    },
    {
      id: 3,
      partner: 'National University of Singapore',
      country: 'Singapore',
      category: 'Academic & Research',
      signedDate: '2023-01-10',
      validUntil: '2027-01-10',
      scope: [
        'Dual degree programs',
        'Research internships',
        'Faculty development',
        'Innovation partnerships'
      ],
      status: 'Active',
      contactPerson: 'Dr. Academic Affairs'
    },
    {
      id: 4,
      partner: 'Indian Space Research Organisation',
      country: 'India',
      category: 'Industry Partnership',
      signedDate: '2023-08-05',
      validUntil: '2025-08-05',
      scope: [
        'Space technology research',
        'Student internships',
        'Joint projects',
        'Skill development programs'
      ],
      status: 'Active',
      contactPerson: 'Prof. Space Technology'
    },
    {
      id: 5,
      partner: 'Tata Consultancy Services',
      country: 'India',
      category: 'Industry Collaboration',
      signedDate: '2023-11-12',
      validUntil: '2026-11-12',
      scope: [
        'Industry-academia projects',
        'Placement opportunities',
        'Technology consultation',
        'Training programs'
      ],
      status: 'Active',
      contactPerson: 'Dr. Industry Relations'
    },
    {
      id: 6,
      partner: 'University of Tokyo',
      country: 'Japan',
      category: 'Research Collaboration',
      signedDate: '2023-09-30',
      validUntil: '2027-09-30',
      scope: [
        'AI and robotics research',
        'Student mobility',
        'Joint conferences',
        'Publication collaboration'
      ],
      status: 'Active',
      contactPerson: 'Prof. AI Research'
    }
  ];

  // MOU categories for filtering
  const categories = [
    'All',
    'Academic Collaboration',
    'Research Partnership', 
    'Industry Partnership',
    'Academic & Research',
    'Industry Collaboration',
    'Research Collaboration'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  // Filter MOUs based on selected category
  const filteredMOUs = selectedCategory === 'All' 
    ? currentMOUs 
    : currentMOUs.filter(mou => mou.category === selectedCategory);

  // Statistics
  const stats = [
    { number: currentMOUs.length.toString(), label: 'Active MOUs' },
    { number: new Set(currentMOUs.map(mou => mou.country)).size.toString(), label: 'Countries' },
    { number: currentMOUs.filter(mou => mou.category.includes('Academic')).length.toString(), label: 'Academic Partners' },
    { number: currentMOUs.filter(mou => mou.category.includes('Industry')).length.toString(), label: 'Industry Partners' }
  ];

  return (
    <>
      <Helmet>
        <title>Current MOUs - IIT Patna | Active Partnerships</title>
        <meta 
          name="description" 
          content="Explore IIT Patna's current memorandums of understanding with international universities, research institutions, and industry partners worldwide."
        />
        <meta name="keywords" content="IIT Patna, MOUs, partnerships, international collaboration, research agreements, industry partnerships" />
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
                  <Globe className="h-12 w-12 mr-4" />
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Current MOUs
                  </h1>
                </div>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                  Active partnerships driving innovation, research, and academic excellence globally
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

          {/* Filter Section */}
          <section className="py-8 bg-secondary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">Filter by Category</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="hover:scale-105 transition-all duration-300"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* MOUs Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Active Partnerships
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {selectedCategory === 'All' 
                    ? 'All current memorandums of understanding fostering global collaboration'
                    : `Current partnerships in ${selectedCategory}`
                  }
                </p>
              </motion.div>

              {/* MOUs Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredMOUs.map((mou, index) => (
                  <motion.div
                    key={mou.id}
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
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                              <Building className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                                {mou.partner}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground flex items-center space-x-1">
                                <Globe className="h-3 w-3" />
                                <span>{mou.country}</span>
                              </p>
                            </div>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
                          >
                            {mou.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        {/* Duration & Status */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="flex items-center space-x-1 mb-1">
                              <Calendar className="h-3 w-3 text-primary" />
                              <span className="font-semibold text-foreground">Signed:</span>
                            </div>
                            <span className="text-muted-foreground">{mou.signedDate}</span>
                          </div>
                          <div>
                            <div className="flex items-center space-x-1 mb-1">
                              <Calendar className="h-3 w-3 text-primary" />
                              <span className="font-semibold text-foreground">Valid Until:</span>
                            </div>
                            <span className="text-muted-foreground">{mou.validUntil}</span>
                          </div>
                        </div>

                        {/* Scope of Collaboration */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <span>Scope of Collaboration</span>
                          </h4>
                          <div className="grid grid-cols-1 gap-1">
                            {mou.scope.map((item, idx) => (
                              <div 
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-semibold text-foreground">Contact Person</div>
                              <div className="text-xs text-muted-foreground">{mou.contactPerson}</div>
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="hover:scale-105 transition-all duration-300"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* No Results Message */}
              {filteredMOUs.length === 0 && (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="bg-secondary/5 border-secondary/20 max-w-md mx-auto">
                    <CardContent className="py-8">
                      <p className="text-muted-foreground">
                        No MOUs found in the selected category.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-secondary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-4xl mx-auto">
                  <CardContent className="py-12">
                    <h3 className="text-3xl font-bold text-foreground mb-6">
                      Interested in Partnership?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                      We welcome collaboration opportunities with academic institutions, 
                      research organizations, and industry partners worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Partnership Inquiry
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="hover:scale-105 transition-all duration-300"
                      >
                        View Guidelines
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

export default CurrentMOUs;