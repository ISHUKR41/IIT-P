import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Microscope, BookOpen, Users, Award, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * PhD Programs page showcasing doctoral research opportunities
 * Features comprehensive information about research areas and admission process
 */
const PhD: React.FC = () => {
  // Research areas by department
  const researchAreas = [
    {
      department: 'Computer Science & Engineering',
      areas: [
        'Artificial Intelligence & Machine Learning',
        'Data Science & Big Data Analytics',
        'Cybersecurity & Privacy',
        'Human-Computer Interaction',
        'Software Engineering',
        'Computer Networks & Distributed Systems'
      ],
      faculty: 18,
      projects: 45
    },
    {
      department: 'Electrical Engineering',
      areas: [
        'Power Systems & Smart Grid',
        'Control Systems & Automation',
        'Signal Processing & Communications',
        'VLSI Design & Embedded Systems',
        'Renewable Energy Systems',
        'Biomedical Engineering'
      ],
      faculty: 15,
      projects: 38
    },
    {
      department: 'Mechanical Engineering',
      areas: [
        'Thermal & Fluid Sciences',
        'Design & Manufacturing',
        'Materials Science & Engineering',
        'Robotics & Automation',
        'Sustainable Engineering',
        'Biomechanics'
      ],
      faculty: 14,
      projects: 32
    },
    {
      department: 'Civil Engineering',
      areas: [
        'Structural Engineering',
        'Geotechnical Engineering',
        'Transportation Engineering',
        'Environmental Engineering',
        'Water Resources Engineering',
        'Construction Management'
      ],
      faculty: 12,
      projects: 28
    },
    {
      department: 'Physics',
      areas: [
        'Condensed Matter Physics',
        'High Energy Physics',
        'Quantum Optics',
        'Computational Physics',
        'Materials Physics',
        'Astrophysics'
      ],
      faculty: 10,
      projects: 25
    },
    {
      department: 'Chemistry',
      areas: [
        'Organic Chemistry',
        'Inorganic Chemistry',
        'Physical Chemistry',
        'Analytical Chemistry',
        'Materials Chemistry',
        'Biochemistry'
      ],
      faculty: 8,
      projects: 22
    }
  ];

  const admissionDetails = [
    {
      category: 'Eligibility',
      items: [
        'Master\'s degree in relevant field',
        'GATE/NET qualification (preferred)',
        'Minimum 60% marks in qualifying degree',
        'Research proposal (for direct PhD)'
      ]
    },
    {
      category: 'Application Process',
      items: [
        'Online application through institute portal',
        'Written test (if applicable)',
        'Interview with research committee',
        'Research proposal presentation'
      ]
    },
    {
      category: 'Financial Support',
      items: [
        'Institute fellowships available',
        'MHRD/UGC fellowships',
        'Research assistantships',
        'Industry-sponsored projects'
      ]
    }
  ];

  const phdBenefits = [
    {
      icon: Microscope,
      title: 'Cutting-edge Research',
      description: 'Access to state-of-the-art laboratories and research facilities'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Guidance from renowned faculty with international experience'
    },
    {
      icon: Award,
      title: 'Publication Support',
      description: 'Support for high-impact journal publications and conferences'
    },
    {
      icon: DollarSign,
      title: 'Financial Assistance',
      description: 'Competitive fellowships and research assistantships'
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>PhD Programs - IIT Patna | Doctoral Research Opportunities</title>
        <meta 
          name="description" 
          content="Pursue doctoral research at IIT Patna. Explore PhD opportunities in engineering, sciences, and interdisciplinary areas with world-class faculty and facilities."
        />
        <meta 
          name="keywords" 
          content="PhD IIT Patna, doctoral programs, research opportunities, engineering research, science research, fellowship"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/phd" />
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
                  PhD Programs
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                  Embark on a journey of discovery and innovation with our doctoral programs, 
                  shaping the future of technology and science
                </p>
              </motion.div>
            </div>
          </section>

          {/* PhD Benefits */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Pursue PhD at IIT Patna
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Join a vibrant research community and contribute to cutting-edge innovations
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {phdBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + (index * 0.1) 
                      }}
                    >
                      <Card className="card-feature text-center h-full">
                        <CardHeader className="pb-4">
                          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                            <IconComponent className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <CardTitle className="text-xl font-bold text-foreground">
                            {benefit.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {benefit.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Research Areas */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Research Areas
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Explore diverse research opportunities across multiple departments
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {researchAreas.map((dept, index) => (
                  <motion.div
                    key={dept.department}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + (index * 0.1) 
                    }}
                  >
                    <Card className="card-modern h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-bold text-foreground">
                            {dept.department}
                          </h3>
                          <div className="flex space-x-4 text-sm text-muted-foreground">
                            <span>{dept.faculty} Faculty</span>
                            <span>{dept.projects} Projects</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {dept.areas.map((area, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">{area}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6">
                          <Button className="btn-outline w-full">
                            Explore Research
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Admission Information */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Admission Information
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to know about applying for our PhD programs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {admissionDetails.map((section, index) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7 + (index * 0.1) 
                    }}
                  >
                    <Card className="card-modern h-full">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                          {section.category}
                        </h3>
                        
                        <ul className="space-y-4">
                          {section.items.map((item, idx) => (
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

          {/* Application Timeline */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="card-modern">
                  <CardContent className="p-12">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Application Timeline
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Key dates for PhD admissions - Plan your application accordingly
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Spring Admission</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Application Opens: August</li>
                          <li>• Application Deadline: October</li>
                          <li>• Interview Period: November</li>
                          <li>• Results Announced: December</li>
                          <li>• Session Starts: January</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Autumn Admission</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Application Opens: February</li>
                          <li>• Application Deadline: April</li>
                          <li>• Interview Period: May</li>
                          <li>• Results Announced: June</li>
                          <li>• Session Starts: July</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button className="btn-hero mr-4">
                        Apply for PhD
                      </Button>
                      <Button variant="outline">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Application Guidelines
                      </Button>
                    </div>
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

export default PhD;