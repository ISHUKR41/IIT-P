import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Calendar, Users, Trophy, Download, Video, Image as ImageIcon, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Convocation page component
 * Information about IIT Patna convocation ceremonies, achievements, and celebrations
 * Features tabbed layout with ceremony details, statistics, and media gallery
 */

// Convocation data structure
const convocationData = {
  upcoming: {
    ceremony: '16th Annual Convocation',
    date: '2024-06-15',
    venue: 'IIT Patna Campus Auditorium',
    chiefGuest: 'Dr. A.P.J. Abdul Kalam Memorial Lecture by Padma Vibhushan Dr. K. Radhakrishnan',
    registrationDeadline: '2024-05-30',
    expectedGraduates: 850,
    description: 'The 16th Annual Convocation of IIT Patna will celebrate the achievements of our graduating students across all programs.',
    highlights: [
      'Distinguished Chief Guest Address',
      'Award Ceremony for Outstanding Achievements',
      'Research Excellence Recognition',
      'Industry Partnership Announcements'
    ]
  },
  recent: [
    {
      id: 1,
      ceremony: '15th Annual Convocation',
      date: '2023-06-10',
      chiefGuest: 'Dr. Harsh Vardhan, Former Union Minister',
      totalGraduates: 782,
      btech: 450,
      mtech: 180,
      msc: 85,
      phd: 67,
      highlights: [
        '15 Gold Medals awarded for academic excellence',
        'Special recognition for COVID-19 research contributions',
        'Launch of Alumni Mentorship Program'
      ],
      mediaLinks: {
        photos: '#',
        videos: '#',
        speeches: '#'
      }
    },
    {
      id: 2,
      ceremony: '14th Annual Convocation',
      date: '2022-08-20',
      chiefGuest: 'Prof. V. Ramgopal Rao, Director IIT Delhi',
      totalGraduates: 720,
      btech: 420,
      mtech: 165,
      msc: 78,
      phd: 57,
      highlights: [
        '12 Gold Medals for outstanding academic performance',
        'Recognition of pandemic heroes among graduates',
        'Innovation awards for startup initiatives'
      ],
      mediaLinks: {
        photos: '#',
        videos: '#',
        speeches: '#'
      }
    },
    {
      id: 3,
      ceremony: '13th Annual Convocation',
      date: '2021-09-15',
      chiefGuest: 'Dr. Shekhar C. Mande, Director General CSIR',
      totalGraduates: 680,
      btech: 390,
      mtech: 155,
      msc: 72,
      phd: 63,
      highlights: [
        'Virtual ceremony due to COVID-19 pandemic',
        '18 Gold Medals awarded',
        'Special COVID research contribution awards'
      ],
      mediaLinks: {
        photos: '#',
        videos: '#',
        speeches: '#'
      }
    }
  ],
  awards: [
    {
      category: 'Director\'s Gold Medal',
      description: 'Awarded to the student with highest overall performance in the graduating batch',
      criteria: 'Overall academic excellence, leadership, and contribution to institute'
    },
    {
      category: 'Institute Silver Medal',
      description: 'Awarded to students with exceptional academic performance in their respective programs',
      criteria: 'Highest CGPA in each program category'
    },
    {
      category: 'Best Thesis Award',
      description: 'Recognition for outstanding research contribution at UG, PG, and PhD levels',
      criteria: 'Innovation, research impact, and academic rigor'
    },
    {
      category: 'Excellence in Sports',
      description: 'Awarded to students with exceptional achievements in sports and athletics',
      criteria: 'Outstanding performance in inter-collegiate and national level competitions'
    },
    {
      category: 'Leadership Award',
      description: 'Recognition for exceptional leadership in student activities and social initiatives',
      criteria: 'Leadership in student governance, cultural activities, and social service'
    },
    {
      category: 'Innovation Award',
      description: 'Awarded for outstanding innovation, entrepreneurship, and patent filing',
      criteria: 'Novel innovations, startup initiatives, and intellectual property creation'
    }
  ],
  statistics: {
    totalConvocations: 15,
    totalGraduates: 8750,
    goldMedals: 145,
    silverMedals: 320,
    phdGraduates: 680,
    internationalStudents: 125
  }
};

const Convocation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <>
      <Helmet>
        <title>Convocation - IIT Patna | Celebrating Academic Excellence</title>
        <meta 
          name="description" 
          content="IIT Patna Convocation ceremonies celebrating academic achievements, research excellence, and the graduation of future leaders in technology and innovation."
        />
        <meta name="keywords" content="IIT Patna convocation, graduation ceremony, academic excellence, gold medals, degree ceremony" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          
          {/* Header Section */}
          <section className="pt-20 pb-12 bg-gradient-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <GraduationCap className="h-12 w-12 text-primary-foreground mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                    Convocation
                  </h1>
                </div>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Celebrating academic excellence, research achievements, and the graduation of future leaders who will shape tomorrow's world
                </p>
              </motion.div>
            </div>
          </section>

          {/* Statistics Overview */}
          <section className="py-12 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{convocationData.statistics.totalConvocations}</div>
                    <div className="text-sm text-muted-foreground">Convocations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{convocationData.statistics.totalGraduates.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Total Graduates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">{convocationData.statistics.goldMedals}</div>
                    <div className="text-sm text-muted-foreground">Gold Medals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">{convocationData.statistics.silverMedals}</div>
                    <div className="text-sm text-muted-foreground">Silver Medals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{convocationData.statistics.phdGraduates}</div>
                    <div className="text-sm text-muted-foreground">PhD Graduates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{convocationData.statistics.internationalStudents}</div>
                    <div className="text-sm text-muted-foreground">International</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Tabs for different sections */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="upcoming" className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Upcoming</span>
                  </TabsTrigger>
                  <TabsTrigger value="recent" className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Recent</span>
                  </TabsTrigger>
                  <TabsTrigger value="awards" className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4" />
                    <span>Awards</span>
                  </TabsTrigger>
                  <TabsTrigger value="gallery" className="flex items-center space-x-2">
                    <ImageIcon className="h-4 w-4" />
                    <span>Gallery</span>
                  </TabsTrigger>
                </TabsList>

                {/* Upcoming Convocation */}
                <TabsContent value="upcoming" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="card-modern hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-2xl font-bold text-foreground mb-2">
                              {convocationData.upcoming.ceremony}
                            </CardTitle>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(convocationData.upcoming.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{convocationData.upcoming.venue}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-green-500/10 text-green-600" variant="secondary">
                            Upcoming
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {convocationData.upcoming.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Event Details</h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium text-foreground">Chief Guest:</span>
                                <p className="text-muted-foreground mt-1">{convocationData.upcoming.chiefGuest}</p>
                              </div>
                              <div>
                                <span className="font-medium text-foreground">Expected Graduates:</span>
                                <span className="text-muted-foreground ml-2">{convocationData.upcoming.expectedGraduates}</span>
                              </div>
                              <div>
                                <span className="font-medium text-foreground">Registration Deadline:</span>
                                <span className="text-muted-foreground ml-2">
                                  {new Date(convocationData.upcoming.registrationDeadline).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Ceremony Highlights</h4>
                            <ul className="space-y-2">
                              {convocationData.upcoming.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-sm">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button className="btn-hero">
                            Register for Convocation
                          </Button>
                          <Button variant="outline" className="btn-outline">
                            Download Invitation
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Recent Convocations */}
                <TabsContent value="recent" className="space-y-6">
                  {convocationData.recent.map((convocation, index) => (
                    <motion.div
                      key={convocation.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="card-modern hover:shadow-elegant transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-xl font-bold text-foreground">
                                {convocation.ceremony}
                              </CardTitle>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(convocation.date).toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              Completed
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-primary">{convocation.totalGraduates}</div>
                              <div className="text-xs text-muted-foreground">Total Graduates</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-secondary">{convocation.btech}</div>
                              <div className="text-xs text-muted-foreground">B.Tech</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-accent">{convocation.mtech}</div>
                              <div className="text-xs text-muted-foreground">M.Tech</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-primary">{convocation.phd}</div>
                              <div className="text-xs text-muted-foreground">PhD</div>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground mb-2">
                              <span className="font-medium text-foreground">Chief Guest:</span> {convocation.chiefGuest}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium text-foreground mb-2">Ceremony Highlights</h4>
                            <ul className="space-y-1">
                              {convocation.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-sm">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-2 pt-2">
                            <Button size="sm" variant="outline" className="flex items-center space-x-1">
                              <ImageIcon className="h-4 w-4" />
                              <span>Photos</span>
                            </Button>
                            <Button size="sm" variant="outline" className="flex items-center space-x-1">
                              <Video className="h-4 w-4" />
                              <span>Videos</span>
                            </Button>
                            <Button size="sm" variant="outline" className="flex items-center space-x-1">
                              <Download className="h-4 w-4" />
                              <span>Speeches</span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>

                {/* Awards and Recognition */}
                <TabsContent value="awards" className="space-y-6">
                  <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Awards and Recognition
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Excellence awards recognizing outstanding achievements in academics, research, leadership, and innovation
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {convocationData.awards.map((award, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        <Card className="card-modern h-full hover:shadow-elegant transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-center space-x-3">
                              <Trophy className="h-8 w-8 text-secondary" />
                              <CardTitle className="text-lg font-bold text-foreground">
                                {award.category}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {award.description}
                            </p>
                            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 rounded-lg">
                              <h4 className="font-medium text-foreground text-sm mb-1">Selection Criteria</h4>
                              <p className="text-xs text-muted-foreground">
                                {award.criteria}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                {/* Gallery */}
                <TabsContent value="gallery" className="space-y-6">
                  <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Convocation Gallery
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Memories and moments from our convocation ceremonies celebrating academic achievements
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        <Card className="card-modern overflow-hidden hover:shadow-elegant transition-all duration-300">
                          <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                            <div className="text-center text-primary-foreground">
                              <ImageIcon className="h-12 w-12 mx-auto mb-2" />
                              <p className="text-sm">Convocation {15 - Math.floor(index / 2)} Gallery</p>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-medium text-foreground mb-2">
                              {index % 2 === 0 ? 'Ceremony Moments' : 'Award Presentations'}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {index % 2 === 0 
                                ? 'Highlights from the graduation ceremony and degree conferment'
                                : 'Recognition of academic excellence and special achievements'
                              }
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Convocation;