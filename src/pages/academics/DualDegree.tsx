import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Clock, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Dual Degree Programs page for IIT Patna
 * Features:
 * - Program overview and structure
 * - Available specializations
 * - Admission requirements
 * - Career prospects
 */
const DualDegree: React.FC = () => {
  // Sample dual degree programs data
  const programs = [
    {
      title: "B.Tech + M.Tech in Computer Science",
      duration: "5 years",
      specializations: ["AI & ML", "Data Science", "Cybersecurity", "Software Engineering"],
      intake: 25,
      eligibility: "JEE Advanced"
    },
    {
      title: "B.Tech + M.Tech in Electronics & Communication",
      duration: "5 years", 
      specializations: ["VLSI Design", "Signal Processing", "Communication Systems", "IoT"],
      intake: 20,
      eligibility: "JEE Advanced"
    },
    {
      title: "B.Tech + M.Tech in Mechanical Engineering",
      duration: "5 years",
      specializations: ["Design Engineering", "Thermal Engineering", "Manufacturing", "Robotics"],
      intake: 20,
      eligibility: "JEE Advanced"
    },
    {
      title: "B.Tech + M.Tech in Chemical Engineering", 
      duration: "5 years",
      specializations: ["Process Engineering", "Biochemical Engineering", "Environmental Engineering"],
      intake: 15,
      eligibility: "JEE Advanced"
    }
  ];

  const advantages = [
    {
      title: "Integrated Curriculum",
      description: "Seamless transition from undergraduate to postgraduate level without gaps",
      icon: GraduationCap
    },
    {
      title: "Time Efficient",
      description: "Complete both degrees in 5 years instead of traditional 6 years",
      icon: Clock
    },
    {
      title: "Research Exposure",
      description: "Early exposure to research and advanced topics in the chosen field",
      icon: Award
    },
    {
      title: "Industry Ready",
      description: "Graduate with advanced skills and specialized knowledge for industry leadership",
      icon: Users
    }
  ];

  const features = [
    "No separate entrance for M.Tech component",
    "Guaranteed progression to M.Tech with minimum CGPA",
    "Access to advanced laboratories and research facilities",
    "Opportunity to work with industry partners",
    "Thesis work in final year with faculty mentorship",
    "Enhanced placement opportunities with dual qualification"
  ];

  return (
    <>
      <Helmet>
        <title>Dual Degree Programs - IIT Patna | B.Tech + M.Tech Integrated Courses</title>
        <meta 
          name="description" 
          content="Explore IIT Patna's integrated dual degree programs combining B.Tech and M.Tech in 5 years. Advanced engineering education with specialization opportunities."
        />
        <meta 
          name="keywords" 
          content="IIT Patna dual degree, integrated B.Tech M.Tech, 5 year program, engineering education, specialization"
        />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-subtle py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Page Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Dual Degree Programs
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Accelerate your engineering career with our integrated B.Tech + M.Tech programs. 
                Complete two degrees in just five years with advanced specialization.
              </p>
            </motion.div>

            {/* Program Overview */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Why Choose Dual Degree?
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Our dual degree programs offer an integrated approach to engineering education, 
                    combining the breadth of undergraduate study with the depth of postgraduate specialization.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Program Duration", value: "5 Years" },
                      { label: "Total Intake", value: "80 Students" },
                      { label: "Specializations", value: "15+ Options" },
                      { label: "Research Projects", value: "Mandatory" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center p-4 bg-card rounded-lg border"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={advantage.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Card className="card-modern h-full">
                        <CardContent className="p-6">
                          <advantage.icon className="h-8 w-8 text-primary mb-4" />
                          <h3 className="font-semibold mb-2">{advantage.title}</h3>
                          <p className="text-sm text-muted-foreground">{advantage.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Available Programs */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Available Programs</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="card-feature h-full">
                      <CardHeader>
                        <CardTitle className="text-xl mb-4">{program.title}</CardTitle>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Duration: {program.duration}</span>
                          <span>Intake: {program.intake} students</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Specializations:</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.specializations.map((spec) => (
                              <span 
                                key={spec}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Eligibility: {program.eligibility}
                          </span>
                          <Button size="sm" className="btn-outline">
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Program Features */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Program Features & Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="card-feature bg-gradient-primary text-primary-foreground">
                <CardContent className="text-center py-12">
                  <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Dual Degree Journey?</h3>
                  <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                    Join the next generation of engineers with advanced specialization and research experience. 
                    Applications for dual degree programs open with JEE Advanced counseling.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Admission Process
                    </Button>
                    <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DualDegree;