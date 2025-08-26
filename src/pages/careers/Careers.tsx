import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Award, 
  Target,
  MapPin,
  Clock,
  IndianRupee,
  GraduationCap,
  Building2,
  TrendingUp,
  FileText,
  Send
} from 'lucide-react';

/**
 * Careers page component for job opportunities at IIT Patna
 * Features:
 * - Current job openings
 * - Faculty positions
 * - Staff positions
 * - Application process
 * - Benefits and perks
 * - SEO optimized content
 */
const Careers: React.FC = () => {
  const currentOpenings = [
    {
      title: "Assistant Professor - Computer Science",
      department: "Computer Science & Engineering",
      type: "Faculty",
      experience: "PhD + 2 years",
      location: "Patna, Bihar",
      salary: "As per UGC norms",
      deadline: "2024-03-15",
      requirements: ["PhD in Computer Science or related field", "Strong research background", "Teaching experience preferred"]
    },
    {
      title: "Associate Professor - Mechanical Engineering", 
      department: "Mechanical Engineering",
      type: "Faculty",
      experience: "PhD + 8 years",
      location: "Patna, Bihar",
      salary: "As per UGC norms",
      deadline: "2024-03-20",
      requirements: ["PhD in Mechanical Engineering", "Excellent publication record", "Industry experience valued"]
    },
    {
      title: "Research Associate - Materials Science",
      department: "Materials Science & Engineering",
      type: "Research",
      experience: "PhD + 1 year",
      location: "Patna, Bihar", 
      salary: "₹50,000 - ₹60,000",
      deadline: "2024-03-10",
      requirements: ["PhD in Materials Science", "Research experience in nanomaterials", "Strong analytical skills"]
    },
    {
      title: "Administrative Officer",
      department: "Administration",
      type: "Staff",
      experience: "Master's + 5 years",
      location: "Patna, Bihar",
      salary: "₹40,000 - ₹50,000",
      deadline: "2024-03-25",
      requirements: ["Master's degree", "Administrative experience", "Good communication skills"]
    }
  ];

  const benefits = [
    {
      icon: IndianRupee,
      title: "Competitive Salary",
      description: "Attractive compensation packages as per UGC/Government norms"
    },
    {
      icon: Award,
      title: "Research Support",
      description: "Generous research grants and funding opportunities"
    },
    {
      icon: BookOpen,
      title: "Professional Development",
      description: "Opportunities for conferences, workshops, and skill enhancement"
    },
    {
      icon: Building2,
      title: "Campus Facilities",
      description: "Access to world-class infrastructure and research facilities"
    },
    {
      icon: GraduationCap,
      title: "Academic Environment",
      description: "Collaborative and intellectually stimulating work environment"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression pathways and promotion opportunities"
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "Review job requirements and ensure you meet the eligibility criteria"
    },
    {
      step: "2",
      title: "Prepare Documents",
      description: "Gather all required documents including CV, certificates, and research portfolio"
    },
    {
      step: "3",
      title: "Online Application",
      description: "Submit your application through our online portal with all required information"
    },
    {
      step: "4",
      title: "Initial Screening",
      description: "Applications are reviewed and shortlisted candidates are informed"
    },
    {
      step: "5",
      title: "Interview Process",
      description: "Technical presentation, interview, and interaction with the selection committee"
    },
    {
      step: "6",
      title: "Final Selection",
      description: "Results announced and offer letters issued to selected candidates"
    }
  ];

  const whyJoinUs = [
    {
      title: "Premier Institution",
      description: "Be part of one of India's leading technological institutions with a growing reputation"
    },
    {
      title: "Research Excellence",
      description: "Opportunity to conduct cutting-edge research with adequate funding and resources"
    },
    {
      title: "Bright Students",
      description: "Work with some of the brightest minds in the country - motivated and talented students"
    },
    {
      title: "Collaborative Environment",
      description: "Interdisciplinary research opportunities and collaboration with industry partners"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - IIT Patna | Job Opportunities and Faculty Positions</title>
        <meta 
          name="description" 
          content="Join IIT Patna faculty and staff. Explore current job openings, faculty positions, research opportunities, and build your career with us."
        />
        <meta 
          name="keywords" 
          content="IIT Patna jobs, faculty positions, careers, job openings, academic jobs, research positions, staff recruitment"
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
                Careers at IIT Patna
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our team of distinguished faculty and staff to shape the future of technology and education
              </p>
            </motion.div>

            {/* Why Join Us */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose IIT Patna?</h2>
                <p className="text-lg text-muted-foreground">
                  Discover what makes IIT Patna an ideal place to build your career
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyJoinUs.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-primary">{reason.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Current Openings */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Current Job Openings</h2>
                <p className="text-lg text-muted-foreground">
                  Explore exciting career opportunities available at IIT Patna
                </p>
              </div>

              <div className="space-y-6">
                {currentOpenings.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                          <div>
                            <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Building2 className="h-4 w-4 mr-1" />
                                {job.department}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Badge variant={job.type === 'Faculty' ? 'default' : job.type === 'Research' ? 'secondary' : 'outline'}>
                              {job.type}
                            </Badge>
                            <div className="text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 inline mr-1" />
                              Deadline: {job.deadline}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Experience Required:</h4>
                            <p className="text-muted-foreground text-sm">{job.experience}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Salary Range:</h4>
                            <p className="text-muted-foreground text-sm">{job.salary}</p>
                          </div>
                          <div>
                            <Button className="w-full">
                              <Send className="h-4 w-4 mr-2" />
                              Apply Now
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Key Requirements:</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Benefits & Perks */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Benefits & Perks</h2>
                <p className="text-lg text-muted-foreground">
                  Comprehensive benefits package for our faculty and staff
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Application Process */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Application Process</h2>
                <p className="text-lg text-muted-foreground">
                  Simple and transparent recruitment process
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applicationProcess.map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            {process.step}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                            <p className="text-muted-foreground text-sm">{process.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Ready to Join Our Team?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Take the next step in your career and become part of the IIT Patna community. 
                    We look forward to welcoming talented individuals like you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Users className="h-5 w-5 mr-2" />
                      View All Openings
                    </Button>
                    <Button variant="outline" size="lg">
                      <FileText className="h-5 w-5 mr-2" />
                      Download Application Form
                    </Button>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default Careers;