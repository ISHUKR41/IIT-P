import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, FileText, CheckCircle, Archive } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Past MOUs page component
 * Displays completed and expired memorandums of understanding
 * Features: Historical timeline, achievements showcase, modern design
 */
const PastMOUs: React.FC = () => {
  // Sample past MOU data - replace with actual data
  const pastMOUs = [
    {
      id: 1,
      partner: 'Massachusetts Institute of Technology',
      country: 'USA',
      category: 'Research Collaboration',
      signedDate: '2018-02-15',
      completedDate: '2023-02-15',
      duration: '5 years',
      achievements: [
        '15 joint research papers published',
        '8 student exchanges completed',
        '3 joint PhD programs established',
        '2 international conferences organized'
      ],
      outcomes: 'Successful collaboration leading to breakthrough research in AI and Machine Learning',
      status: 'Completed Successfully'
    },
    {
      id: 2,
      partner: 'University of Cambridge',
      country: 'UK',
      category: 'Academic Exchange',
      signedDate: '2017-09-10',
      completedDate: '2022-09-10',
      duration: '5 years',
      achievements: [
        '25 students participated in exchange program',
        '10 faculty collaborative projects',
        '12 joint publications',
        '1 technology transfer agreement'
      ],
      outcomes: 'Enhanced international exposure for students and faculty development programs',
      status: 'Completed Successfully'
    },
    {
      id: 3,
      partner: 'Siemens Technology',
      country: 'Germany',
      category: 'Industry Partnership',
      signedDate: '2019-05-20',
      completedDate: '2022-05-20',
      duration: '3 years',
      achievements: [
        '50+ student internships provided',
        '5 industry-sponsored research projects',
        '3 technology demonstrations',
        '1 startup incubation program'
      ],
      outcomes: 'Successful industry-academia collaboration with high placement rates',
      status: 'Completed Successfully'
    },
    {
      id: 4,
      partner: 'Korea Advanced Institute of Science and Technology',
      country: 'South Korea',
      category: 'Research Partnership',
      signedDate: '2016-11-08',
      completedDate: '2021-11-08',
      duration: '5 years',
      achievements: [
        '20 joint research initiatives',
        '30 student mobility programs',
        '18 collaborative publications',
        '4 technology patents filed'
      ],
      outcomes: 'Strengthened research capabilities in engineering and technology',
      status: 'Completed Successfully'
    },
    {
      id: 5,
      partner: 'Australian National University',
      country: 'Australia',
      category: 'Academic Collaboration',
      signedDate: '2015-03-12',
      completedDate: '2020-03-12',
      duration: '5 years',
      achievements: [
        '12 dual degree programs',
        '40 research collaborations',
        '25 student exchanges',
        '6 joint workshops conducted'
      ],
      outcomes: 'Enhanced academic programs and international research visibility',
      status: 'Completed Successfully'
    },
    {
      id: 6,
      partner: 'Infosys Limited',
      country: 'India',
      category: 'Industry Collaboration',
      signedDate: '2018-08-15',
      completedDate: '2021-08-15',
      duration: '3 years',
      achievements: [
        '100+ students placed in the company',
        '10 industry projects completed',
        '5 skill development programs',
        '2 innovation labs established'
      ],
      outcomes: 'Successful industry partnership with high employment generation',
      status: 'Completed Successfully'
    }
  ];

  // Statistics from past MOUs
  const stats = [
    { number: pastMOUs.length.toString(), label: 'Completed MOUs' },
    { 
      number: pastMOUs.reduce((acc, mou) => acc + mou.achievements.length, 0).toString(), 
      label: 'Total Achievements' 
    },
    { 
      number: new Set(pastMOUs.map(mou => mou.country)).size.toString(), 
      label: 'Countries Involved' 
    },
    { 
      number: Math.round(pastMOUs.reduce((acc, mou) => acc + parseInt(mou.duration), 0) / pastMOUs.length).toString(), 
      label: 'Avg Duration (Years)' 
    }
  ];

  return (
    <>
      <Helmet>
        <title>Past MOUs - IIT Patna | Partnership History & Achievements</title>
        <meta 
          name="description" 
          content="Explore IIT Patna's successful past partnerships and their achievements. Learn about completed MOUs with international universities and industry partners."
        />
        <meta name="keywords" content="IIT Patna, past MOUs, partnership history, achievements, international collaboration, completed agreements" />
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
                  <Archive className="h-12 w-12 mr-4" />
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Past MOUs
                  </h1>
                </div>
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                  Celebrating successful partnerships and their lasting impact on our institutional growth
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

          {/* Past MOUs Section */}
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
                  Partnership Legacy
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Successful collaborations that have contributed to our institutional excellence and global recognition
                </p>
              </motion.div>

              {/* MOUs Timeline */}
              <div className="space-y-8">
                {pastMOUs.map((mou, index) => (
                  <motion.div
                    key={mou.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.3 + (index * 0.15),
                      ease: "easeOut"
                    }}
                    className="group"
                  >
                    <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                        
                        {/* MOU Info */}
                        <div className="lg:col-span-2">
                          <CardHeader className="p-0 pb-4">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                                  <Building className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                                    {mou.partner}
                                  </CardTitle>
                                  <p className="text-sm text-muted-foreground">{mou.country}</p>
                                </div>
                              </div>
                              <Badge 
                                variant="secondary" 
                                className="bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-600"
                              >
                                <CheckCircle className="h-3 w-3 mr-1" />
                                {mou.status}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                              <div>
                                <div className="flex items-center space-x-1 mb-1">
                                  <Calendar className="h-3 w-3 text-primary" />
                                  <span className="font-semibold text-foreground">Duration:</span>
                                </div>
                                <span className="text-muted-foreground">{mou.duration}</span>
                              </div>
                              <div>
                                <div className="flex items-center space-x-1 mb-1">
                                  <Calendar className="h-3 w-3 text-primary" />
                                  <span className="font-semibold text-foreground">Started:</span>
                                </div>
                                <span className="text-muted-foreground">{mou.signedDate}</span>
                              </div>
                              <div>
                                <div className="flex items-center space-x-1 mb-1">
                                  <Calendar className="h-3 w-3 text-primary" />
                                  <span className="font-semibold text-foreground">Completed:</span>
                                </div>
                                <span className="text-muted-foreground">{mou.completedDate}</span>
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="p-0 space-y-4">
                            {/* Category */}
                            <div>
                              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                                {mou.category}
                              </Badge>
                            </div>

                            {/* Outcomes */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Key Outcomes</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {mou.outcomes}
                              </p>
                            </div>
                          </CardContent>
                        </div>

                        {/* Achievements */}
                        <div className="bg-secondary/5 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <span>Major Achievements</span>
                          </h4>
                          <div className="space-y-2">
                            {mou.achievements.map((achievement, idx) => (
                              <div 
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Impact Summary */}
          <section className="py-16 bg-secondary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Collective Impact
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The cumulative achievements from our past partnerships have significantly contributed to our institutional growth
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Research Publications', value: '80+', description: 'Joint papers published' },
                  { title: 'Student Exchanges', value: '150+', description: 'International mobility programs' },
                  { title: 'Technology Transfers', value: '12+', description: 'Successful commercializations' },
                  { title: 'Global Recognition', value: '100%', description: 'Successful partnership completion rate' }
                ].map((impact, index) => (
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
                      <CardContent className="py-8">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {impact.value}
                        </div>
                        <h3 className="font-bold text-foreground mb-2">
                          {impact.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {impact.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
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
                    <h3 className="text-3xl font-bold text-foreground mb-6">
                      Building on Success
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                      Our successful partnership history demonstrates our commitment to international collaboration 
                      and academic excellence. We continue to seek new opportunities for meaningful partnerships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <a href="/about/current-mous" className="inline-block">
                          <Badge 
                            variant="outline" 
                            className="px-6 py-2 text-base hover:bg-primary hover:text-white transition-colors duration-300"
                          >
                            View Current MOUs
                          </Badge>
                        </a>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <Badge 
                          variant="outline" 
                          className="px-6 py-2 text-base hover:bg-secondary hover:text-white transition-colors duration-300 cursor-pointer"
                        >
                          Partnership Guidelines
                        </Badge>
                      </motion.div>
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

export default PastMOUs;