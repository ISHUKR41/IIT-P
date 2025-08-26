import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, User } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Former Directors page component
 * Showcases the legacy and contributions of past directors
 * Features: Timeline design, animations, achievement highlights
 */
const FormerDirectors: React.FC = () => {
  // Sample former directors data - replace with actual data
  const formerDirectors = [
    {
      id: 1,
      name: 'Prof. Pushpak Bhattacharyya',
      tenure: '2009 - 2016',
      specialization: 'Computer Science & Engineering',
      achievements: [
        'Established foundational academic programs',
        'Set up initial research facilities',
        'Built strong industry partnerships',
        'Developed campus infrastructure'
      ],
      keyInitiatives: [
        'Launch of B.Tech programs',
        'Formation of key departments',
        'Industry collaboration framework',
        'Student placement cell establishment'
      ],
      image: '/placeholder-director.jpg'
    },
    {
      id: 2,
      name: 'Prof. Timothy A. Gonsalves',
      tenure: '2016 - 2021',
      specialization: 'Computer Science & Engineering',
      achievements: [
        'Expanded research programs significantly',
        'Enhanced international collaborations',
        'Improved campus facilities',
        'Strengthened alumni network'
      ],
      keyInitiatives: [
        'Research park development',
        'International exchange programs',
        'Advanced laboratory setup',
        'Startup incubation center'
      ],
      image: '/placeholder-director.jpg'
    }
  ];

  // Timeline milestones
  const milestones = [
    {
      year: '2009',
      event: 'IIT Patna Established',
      description: 'Institution founded as the newest IIT in India'
    },
    {
      year: '2010',
      event: 'First Batch Admitted',
      description: 'Inaugural batch of students began their academic journey'
    },
    {
      year: '2012',
      event: 'Permanent Campus',
      description: 'Moved to permanent campus at Bihta'
    },
    {
      year: '2015',
      event: 'Research Expansion',
      description: 'Major expansion in research facilities and programs'
    },
    {
      year: '2018',
      event: 'International Recognition',
      description: 'Gained significant international academic partnerships'
    },
    {
      year: '2020',
      event: 'Innovation Hub',
      description: 'Established technology innovation and startup ecosystem'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Former Directors - IIT Patna | Leadership Legacy</title>
        <meta 
          name="description" 
          content="Honor the visionary leadership of former directors of IIT Patna who shaped the institution's foundation and growth over the years."
        />
        <meta name="keywords" content="IIT Patna, former directors, leadership, institutional history, academic leadership, vision" />
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
                  <Award className="h-12 w-12 mr-4" />
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Former Directors
                  </h1>
                </div>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                  Honoring the visionary leaders who shaped IIT Patna's foundation and growth
                </p>
              </motion.div>
            </div>
          </section>

          {/* Directors Section */}
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
                  Leadership Legacy
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Distinguished academicians who led IIT Patna through its formative years
                </p>
              </motion.div>

              {/* Directors Timeline */}
              <div className="space-y-12">
                {formerDirectors.map((director, index) => (
                  <motion.div
                    key={director.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.3 + (index * 0.2),
                      ease: "easeOut"
                    }}
                  >
                    <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 ${
                        index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
                      }`}>
                        
                        {/* Director Info */}
                        <div className={`lg:col-span-3 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                          <CardHeader className="p-0 pb-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                                <User className="h-8 w-8 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-2xl font-bold text-card-foreground">
                                  {director.name}
                                </CardTitle>
                                <div className="flex items-center space-x-2 mt-2">
                                  <Calendar className="h-4 w-4 text-primary" />
                                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                                    {director.tenure}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground font-medium">
                              {director.specialization}
                            </p>
                          </CardHeader>
                          
                          <CardContent className="p-0 space-y-6">
                            {/* Key Achievements */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {director.achievements.map((achievement, idx) => (
                                  <div 
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-muted-foreground">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Key Initiatives */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Major Initiatives</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {director.keyInitiatives.map((initiative, idx) => (
                                  <div 
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-muted-foreground">{initiative}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </div>

                        {/* Timeline Indicator */}
                        <div className={`lg:col-span-2 flex items-center justify-center ${
                          index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                        }`}>
                          <div className="text-center">
                            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                              <div className="text-white font-bold text-lg lg:text-xl">
                                Director
                              </div>
                            </div>
                            <div className="text-2xl lg:text-3xl font-bold text-primary">
                              {director.tenure.split(' - ')[0]} - {director.tenure.split(' - ')[1]}
                            </div>
                            <div className="text-sm text-muted-foreground mt-2">
                              Tenure Period
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Institutional Timeline */}
          <section className="py-16 bg-secondary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Institutional Milestones
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Key achievements and developments during the leadership of our former directors
                </p>
              </motion.div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>
                
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + (index * 0.15),
                        ease: "easeOut"
                      }}
                      className={`flex items-center ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                    >
                      {/* Content Card */}
                      <div className="flex-1 lg:w-5/12">
                        <Card className={`bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 ${
                          index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                        }`}>
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-bold">
                                {milestone.year}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">
                              {milestone.event}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline Node */}
                      <div className="hidden lg:flex w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                      
                      {/* Spacer for opposite side */}
                      <div className="hidden lg:block flex-1 lg:w-5/12"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Legacy Message */}
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
                    <h3 className="text-3xl font-bold text-foreground mb-6">
                      Continuing the Legacy
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      The visionary leadership of our former directors has established strong foundations 
                      for IIT Patna's continued growth and excellence. Their contributions continue to 
                      guide our institution's mission of academic excellence and innovation.
                    </p>
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

export default FormerDirectors;