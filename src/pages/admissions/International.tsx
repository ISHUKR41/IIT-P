import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Plane, Home, Users, BookOpen, DollarSign, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * International Applicants page for global students
 * Features comprehensive information about admission process and support services
 */
const International: React.FC = () => {
  // Programs available for international students
  const programs = [
    {
      level: 'Undergraduate',
      programs: ['B.Tech (4 Years)', 'B.Tech + M.Tech (5 Years)'],
      eligibility: 'High School completion with Science/Mathematics',
      duration: '4-5 Years'
    },
    {
      level: 'Postgraduate',
      programs: ['M.Tech', 'M.Sc', 'MBA'],
      eligibility: 'Bachelor\'s degree in relevant field',
      duration: '2 Years'
    },
    {
      level: 'Doctoral',
      programs: ['PhD', 'MS by Research'],
      eligibility: 'Master\'s degree or exceptional Bachelor\'s',
      duration: '3-5 Years'
    },
    {
      level: 'Exchange',
      programs: ['Semester Exchange', 'Research Internship'],
      eligibility: 'Enrolled in partner universities',
      duration: '6 months - 1 Year'
    }
  ];

  // Support services for international students
  const supportServices = [
    {
      icon: Home,
      title: 'Accommodation',
      description: 'On-campus hostel facilities with all amenities',
      details: ['Furnished rooms', 'Internet connectivity', 'Mess facilities', '24/7 security']
    },
    {
      icon: Users,
      title: 'Student Support',
      description: 'Dedicated international student office for assistance',
      details: ['Orientation programs', 'Academic counseling', 'Cultural integration', 'Buddy system']
    },
    {
      icon: MapPin,
      title: 'Visa Assistance',
      description: 'Complete support for visa application and documentation',
      details: ['Document guidance', 'Invitation letters', 'Embassy coordination', 'Renewal support']
    },
    {
      icon: DollarSign,
      title: 'Financial Aid',
      description: 'Scholarships and financial assistance programs',
      details: ['Merit scholarships', 'Fee waivers', 'Research assistantships', 'Part-time opportunities']
    }
  ];

  // Application requirements
  const requirements = [
    {
      category: 'Academic Documents',
      items: [
        'Official transcripts from all institutions',
        'Degree certificates (original + translated)',
        'English proficiency test scores (TOEFL/IELTS)',
        'Standardized test scores (SAT/GRE/GMAT if applicable)'
      ]
    },
    {
      category: 'Personal Documents',
      items: [
        'Valid passport (minimum 6 months validity)',
        'Passport-size photographs',
        'Statement of Purpose',
        'Letters of Recommendation (2-3)'
      ]
    },
    {
      category: 'Financial Documents',
      items: [
        'Bank statements or financial guarantee',
        'Scholarship/funding proof (if applicable)',
        'Sponsor affidavit (if sponsored)',
        'Income proof of sponsor'
      ]
    }
  ];

  const countries = [
    { name: 'United States', students: 45, flag: '🇺🇸' },
    { name: 'Germany', students: 32, flag: '🇩🇪' },
    { name: 'Canada', students: 28, flag: '🇨🇦' },
    { name: 'Australia', students: 25, flag: '🇦🇺' },
    { name: 'United Kingdom', students: 22, flag: '🇬🇧' },
    { name: 'France', students: 18, flag: '🇫🇷' },
    { name: 'Singapore', students: 15, flag: '🇸🇬' },
    { name: 'Others', students: 35, flag: '🌍' }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>International Admissions - IIT Patna | Global Students Welcome</title>
        <meta 
          name="description" 
          content="Join IIT Patna as an international student. Comprehensive admission information, support services, and opportunities for global students in engineering and sciences."
        />
        <meta 
          name="keywords" 
          content="international admissions IIT Patna, global students, study in India, engineering programs, international support"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/admissions/international" />
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
                  International Admissions
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                  Welcome to IIT Patna - Your gateway to world-class education in 
                  engineering, science, and technology in the heart of India
                </p>
                <div className="mt-8">
                  <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Students from 25+ countries • English-taught programs • Global opportunities
                  </span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Global Community */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Join Our Global Community
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Be part of a diverse international community of students from around the world
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
                {countries.map((country, index) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + (index * 0.1) 
                    }}
                  >
                    <Card className="card-modern text-center">
                      <CardContent className="p-4">
                        <div className="text-2xl mb-2">{country.flag}</div>
                        <div className="text-lg font-bold text-primary">{country.students}</div>
                        <div className="text-xs text-muted-foreground">{country.name}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">220+</div>
                    <div className="text-muted-foreground">International Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-muted-foreground">Countries Represented</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Programs Available */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Programs for International Students
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive academic programs designed for global students
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.level}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + (index * 0.1) 
                    }}
                  >
                    <Card className="card-modern h-full">
                      <CardContent className="p-8">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {program.level}
                          </h3>
                          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{program.duration}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Programs:</h4>
                            <ul className="space-y-1">
                              {program.programs.map((prog, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">
                                  • {prog}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Eligibility:</h4>
                            <p className="text-sm text-muted-foreground">
                              {program.eligibility}
                            </p>
                          </div>
                        </div>

                        <Button className="btn-outline w-full mt-6">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Support Services */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Comprehensive Support Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  From arrival to graduation, we support international students at every step
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {supportServices.map((service, index) => {
                  const IconComponent = service.icon;
                  
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.7 + (index * 0.1) 
                      }}
                    >
                      <Card className="card-modern h-full">
                        <CardContent className="p-8">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                {service.title}
                              </h3>
                              <p className="text-muted-foreground mb-4">
                                {service.description}
                              </p>
                              <ul className="space-y-2">
                                {service.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-sm text-muted-foreground">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Application Requirements */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Application Requirements
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Complete checklist for international student applications
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {requirements.map((req, index) => (
                  <motion.div
                    key={req.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.9 + (index * 0.1) 
                    }}
                  >
                    <Card className="card-modern h-full">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-foreground mb-6">
                          {req.category}
                        </h3>
                        
                        <ul className="space-y-3">
                          {req.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Apply Now Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Card className="card-modern">
                  <CardContent className="p-12 text-center">
                    <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Ready to Join IIT Patna?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Start your journey with us today. Our international admissions team 
                      is here to guide you through every step of the application process.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <Plane className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h4 className="font-semibold text-foreground mb-2">Easy Arrival</h4>
                        <p className="text-sm text-muted-foreground">
                          Airport pickup and orientation support
                        </p>
                      </div>
                      <div className="text-center">
                        <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h4 className="font-semibold text-foreground mb-2">Academic Excellence</h4>
                        <p className="text-sm text-muted-foreground">
                          World-class education and research
                        </p>
                      </div>
                      <div className="text-center">
                        <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h4 className="font-semibold text-foreground mb-2">Global Network</h4>
                        <p className="text-sm text-muted-foreground">
                          Alumni network across 50+ countries
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Button className="btn-hero mr-4">
                        Start Application
                      </Button>
                      <Button variant="outline">
                        Contact International Office
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-6">
                      Have questions? Email us at international@iitp.ac.in
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

        </main>
      </Layout>
    </>
  );
};

export default International;