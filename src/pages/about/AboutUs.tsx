import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * About Us page - Overview of IIT Patna institution
 * Features:
 * - Institution overview with statistics
 * - Mission and values
 * - Key achievements and recognition
 * - Animated card layouts with smooth transitions
 */
const AboutUs: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Students', value: '3000+', color: 'text-blue-600' },
    { icon: Building, label: 'Departments', value: '15+', color: 'text-green-600' },
    { icon: Award, label: 'Awards', value: '50+', color: 'text-purple-600' },
    { icon: Globe, label: 'International Collaborations', value: '25+', color: 'text-orange-600' }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Us - IIT Patna | Leading Technical Education Institute</title>
        <meta 
          name="description" 
          content="Learn about IIT Patna - a premier technical education institute committed to excellence in engineering, technology, and research."
        />
        <meta name="keywords" content="IIT Patna, about us, technical education, engineering college, research institute" />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative bg-gradient-primary text-primary-foreground py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About IIT Patna
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Pioneering excellence in technical education and research since 2008
              </p>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="card-modern text-center h-full">
                      <CardContent className="pt-6">
                        <IconComponent className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                        <div className="text-3xl font-bold text-primary mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* About Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-foreground">
                  <p>
                    Indian Institute of Technology Patna (IIT Patna) is one of the newest IITs, 
                    established in 2008 by the Government of India. Located in the historic city 
                    of Patna, Bihar, we are committed to excellence in technical education, 
                    research, and innovation.
                  </p>
                  <p>
                    Our institute has grown rapidly since its inception, developing into a 
                    center of academic excellence that attracts the brightest minds from 
                    across the country and beyond. We offer undergraduate, postgraduate, 
                    and doctoral programs in various engineering and technology disciplines.
                  </p>
                  <p>
                    With state-of-the-art facilities, world-class faculty, and a vibrant 
                    campus life, IIT Patna is shaping the future leaders of technology and 
                    innovation in India and the world.
                  </p>
                </div>
              </motion.div>

              {/* Mission & Values */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="card-feature">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Our Mission & Values
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Excellence</h3>
                      <p className="text-muted-foreground">
                        Striving for the highest standards in education, research, and innovation.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Innovation</h3>
                      <p className="text-muted-foreground">
                        Fostering creativity and technological advancement for societal benefit.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Integrity</h3>
                      <p className="text-muted-foreground">
                        Maintaining the highest ethical standards in all our endeavors.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Inclusivity</h3>
                      <p className="text-muted-foreground">
                        Creating an environment that welcomes diversity and promotes equality.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Key Achievements
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Milestones that mark our journey of excellence and growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "NIRF Ranking",
                  description: "Consistently improving performance in national rankings",
                  year: "2023"
                },
                {
                  title: "Research Publications",
                  description: "500+ research papers published in international journals",
                  year: "2023"
                },
                {
                  title: "Industry Partnerships",
                  description: "Strategic collaborations with leading corporations",
                  year: "Ongoing"
                },
                {
                  title: "Alumni Success",
                  description: "Graduates placed in top companies and research institutions",
                  year: "Since 2012"
                },
                {
                  title: "Patent Filing",
                  description: "Growing portfolio of intellectual property",
                  year: "2023"
                },
                {
                  title: "International Recognition",
                  description: "Global partnerships and student exchange programs",
                  year: "2023"
                }
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-primary">
                          {achievement.title}
                        </CardTitle>
                        <span className="text-sm text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded">
                          {achievement.year}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;