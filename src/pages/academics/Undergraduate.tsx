import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { GraduationCap, Clock, Users, BookOpen, Award, Download } from 'lucide-react';

/**
 * Undergraduate Programs page component
 * Features:
 * - B.Tech program details
 * - Department-wise programs
 * - Eligibility criteria
 * - Duration and structure
 * - SEO optimized content
 */
const Undergraduate: React.FC = () => {
  const programs = [
    {
      department: "Computer Science & Engineering",
      code: "CSE",
      duration: "4 Years",
      seats: 60,
      specializations: ["Artificial Intelligence", "Data Science", "Software Engineering"]
    },
    {
      department: "Electrical Engineering",
      code: "EE",
      duration: "4 Years",
      seats: 50,
      specializations: ["Power Systems", "Electronics", "Communication"]
    },
    {
      department: "Mechanical Engineering",
      code: "ME",
      duration: "4 Years",
      seats: 50,
      specializations: ["Thermal Engineering", "Design", "Manufacturing"]
    },
    {
      department: "Civil Engineering",
      code: "CE",
      duration: "4 Years",
      seats: 40,
      specializations: ["Structural Engineering", "Environmental", "Geotechnical"]
    },
    {
      department: "Chemical Engineering",
      code: "ChE",
      duration: "4 Years",
      seats: 35,
      specializations: ["Process Engineering", "Materials", "Biotechnology"]
    },
    {
      department: "Materials Science & Engineering",
      code: "MSE",
      duration: "4 Years",
      seats: 30,
      specializations: ["Nanomaterials", "Biomaterials", "Electronic Materials"]
    }
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "World-Class Education",
      description: "Comprehensive curriculum designed by industry experts and academic leaders"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from distinguished professors with extensive research and industry experience"
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "Updated syllabus incorporating latest technological advancements and industry trends"
    },
    {
      icon: Award,
      title: "Excellent Placements",
      description: "Outstanding placement record with top national and international companies"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Undergraduate Programs - IIT Patna | B.Tech Courses</title>
        <meta 
          name="description" 
          content="Explore undergraduate B.Tech programs at IIT Patna across various engineering disciplines. World-class education with excellent placement opportunities."
        />
        <meta 
          name="keywords" 
          content="IIT Patna B.Tech, undergraduate programs, engineering courses, computer science, electrical, mechanical, civil engineering"
        />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
          <div className="container mx-auto px-4 py-12">
            
            {/* Page Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Undergraduate Programs
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bachelor of Technology (B.Tech) programs designed to create future engineers and innovators
              </p>
            </motion.div>

            {/* Program Highlights */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                          <p className="text-muted-foreground text-sm">{highlight.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Programs Grid */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Available Programs</h2>
                <p className="text-lg text-muted-foreground">
                  Choose from our diverse range of B.Tech programs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.code}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {program.code}
                          </Badge>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-muted-foreground mb-1">
                              <Clock className="h-4 w-4 mr-1" />
                              {program.duration}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Users className="h-4 w-4 mr-1" />
                              {program.seats} seats
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-xl">{program.department}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-sm">Specializations:</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.specializations.map((spec) => (
                              <Badge key={spec} variant="secondary" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" className="w-full" size="sm">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Eligibility & Admission */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Eligibility Criteria */}
                <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">
                      Eligibility Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Educational Qualification:</h4>
                      <p className="text-muted-foreground text-sm">
                        12th Standard (or equivalent) with Physics, Chemistry, and Mathematics
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Minimum Marks:</h4>
                      <p className="text-muted-foreground text-sm">
                        75% aggregate (65% for SC/ST candidates)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Entrance Exam:</h4>
                      <p className="text-muted-foreground text-sm">
                        JEE Advanced qualification required
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Age Limit:</h4>
                      <p className="text-muted-foreground text-sm">
                        Maximum 25 years (30 for SC/ST candidates)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Downloads */}
                <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">
                      Downloads & Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      B.Tech Curriculum & Syllabus
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Academic Regulations
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Fee Structure
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Placement Statistics
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default Undergraduate;