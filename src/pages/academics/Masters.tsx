import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Masters Programs page showcasing M.Tech and M.Sc programs
 * Features comprehensive information about postgraduate opportunities
 */
const Masters: React.FC = () => {
  // Masters programs data
  const mtechPrograms = [
    {
      title: 'Computer Science & Engineering',
      specializations: ['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering'],
      duration: '2 Years',
      intake: '30 students',
      highlights: ['Industry Projects', 'Research Opportunities', 'Placement Support']
    },
    {
      title: 'Electrical Engineering',
      specializations: ['Power Systems', 'Control Systems', 'Electronics', 'Signal Processing'],
      duration: '2 Years',
      intake: '25 students',
      highlights: ['Lab Facilities', 'Industry Connect', 'Innovation Projects']
    },
    {
      title: 'Mechanical Engineering',
      specializations: ['Thermal Engineering', 'Design & Manufacturing', 'Materials', 'Robotics'],
      duration: '2 Years',
      intake: '20 students',
      highlights: ['Modern Labs', 'Research Focus', 'Industrial Training']
    },
    {
      title: 'Civil Engineering',
      specializations: ['Structural Engineering', 'Geotechnical', 'Transportation', 'Environmental'],
      duration: '2 Years',
      intake: '18 students',
      highlights: ['Field Studies', 'Practical Training', 'Consultancy Projects']
    }
  ];

  const mscPrograms = [
    {
      title: 'Physics',
      areas: ['Condensed Matter Physics', 'High Energy Physics', 'Quantum Optics'],
      duration: '2 Years',
      intake: '15 students'
    },
    {
      title: 'Chemistry',
      areas: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
      duration: '2 Years',
      intake: '15 students'
    },
    {
      title: 'Mathematics',
      areas: ['Applied Mathematics', 'Pure Mathematics', 'Statistics'],
      duration: '2 Years',
      intake: '12 students'
    }
  ];

  const admissionProcess = [
    {
      step: '1',
      title: 'GATE Qualification',
      description: 'Valid GATE score in relevant discipline'
    },
    {
      step: '2',
      title: 'Application',
      description: 'Online application through CCMT/COAP portal'
    },
    {
      step: '3',
      title: 'Counseling',
      description: 'Centralized counseling and seat allocation'
    },
    {
      step: '4',
      title: 'Admission',
      description: 'Document verification and fee payment'
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Masters Programs - IIT Patna | M.Tech & M.Sc Postgraduate Courses</title>
        <meta 
          name="description" 
          content="Explore M.Tech and M.Sc programs at IIT Patna. Advanced postgraduate education in engineering and sciences with research opportunities and industry connections."
        />
        <meta 
          name="keywords" 
          content="M.Tech IIT Patna, M.Sc programs, postgraduate courses, masters degree, engineering, sciences, research"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/masters" />
      </Helmet>

      <Layout>
        <main className="min-h-screen bg-gradient-subtle">
          
          {/* Hero Section */}
          <section className="hero-gradient py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Masters Programs
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                  Advanced postgraduate education in engineering and sciences, 
                  preparing you for leadership in technology and research
                </p>
              </motion.div>
            </div>
          </section>

          {/* Program Overview */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose Masters at IIT Patna
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: GraduationCap, title: 'World-Class Faculty', desc: 'Learn from renowned experts' },
                  { icon: BookOpen, title: 'Research Focus', desc: 'Cutting-edge research opportunities' },
                  { icon: Users, title: 'Industry Connect', desc: 'Strong industry partnerships' },
                  { icon: Award, title: 'Excellence Track Record', desc: 'High placement success rate' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    >
                      <Card className="card-feature text-center h-full">
                        <CardHeader className="pb-4">
                          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                            <IconComponent className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <CardTitle className="text-xl font-bold text-foreground">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* M.Tech Programs */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  M.Tech Programs
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Advanced engineering programs with research and industry focus
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {mtechPrograms.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  >
                    <Card className="card-modern h-full">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {program.title}
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{program.intake}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Specializations:</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.specializations.map((spec, idx) => (
                              <span 
                                key={idx}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Program Highlights:</h4>
                          <ul className="space-y-2">
                            {program.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-muted-foreground text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="btn-outline w-full">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* M.Sc Programs */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  M.Sc Programs
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Advanced science programs with strong research foundation
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {mscPrograms.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                  >
                    <Card className="card-modern h-full">
                      <CardContent className="p-8 text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          M.Sc {program.title}
                        </h3>
                        
                        <div className="flex justify-center items-center space-x-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{program.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{program.intake}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Research Areas:</h4>
                          <ul className="space-y-2">
                            {program.areas.map((area, idx) => (
                              <li key={idx} className="text-muted-foreground text-sm">
                                {area}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="btn-outline w-full">
                          Explore Program
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Admission Process */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Admission Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Step-by-step guide to join our masters programs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {admissionProcess.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                  >
                    <Card className="card-modern text-center h-full">
                      <CardContent className="p-8">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Button className="btn-hero">
                  Apply Now
                </Button>
              </motion.div>
            </div>
          </section>

        </main>
      </Layout>
    </>
  );
};

export default Masters;