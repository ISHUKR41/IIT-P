import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Building2, 
  Users, 
  Award, 
  Target,
  BarChart3,
  Calendar,
  MapPin,
  IndianRupee,
  BrainCircuit
} from 'lucide-react';

/**
 * Placements page component
 * Features:
 * - Placement statistics and achievements
 * - Top recruiting companies
 * - Salary trends and packages
 * - Placement process information
 * - Student testimonials
 * - SEO optimized content
 */
const Placements: React.FC = () => {
  const placementStats = [
    {
      icon: TrendingUp,
      number: "95%+",
      title: "Placement Rate",
      description: "Students successfully placed"
    },
    {
      icon: IndianRupee,
      number: "₹45L",
      title: "Highest Package",
      description: "Annual package offered"
    },
    {
      icon: IndianRupee,
      number: "₹18L",
      title: "Average Package",
      description: "Average annual package"
    },
    {
      icon: Building2,
      number: "200+",
      title: "Companies",
      description: "Recruiting partners"
    }
  ];

  const topRecruiters = [
    { name: "Google", sector: "Technology", logo: "G" },
    { name: "Microsoft", sector: "Technology", logo: "M" },
    { name: "Amazon", sector: "E-commerce", logo: "A" },
    { name: "Goldman Sachs", sector: "Finance", logo: "GS" },
    { name: "TCS", sector: "IT Services", logo: "T" },
    { name: "Intel", sector: "Semiconductors", logo: "I" },
    { name: "Flipkart", sector: "E-commerce", logo: "F" },
    { name: "Samsung", sector: "Electronics", logo: "S" },
    { name: "Qualcomm", sector: "Technology", logo: "Q" },
    { name: "Adobe", sector: "Software", logo: "Ad" },
    { name: "Oracle", sector: "Database", logo: "O" },
    { name: "Uber", sector: "Transportation", logo: "U" }
  ];

  const placementProcess = [
    {
      step: "1",
      title: "Pre-Placement Talks",
      description: "Companies present their profiles and opportunities to students"
    },
    {
      step: "2", 
      title: "Written Test",
      description: "Technical and aptitude assessment conducted by companies"
    },
    {
      step: "3",
      title: "Group Discussion",
      description: "Evaluation of communication and teamwork skills"
    },
    {
      step: "4",
      title: "Technical Interview",
      description: "In-depth technical knowledge and problem-solving assessment"
    },
    {
      step: "5",
      title: "HR Interview",
      description: "Final interview focusing on personality and cultural fit"
    },
    {
      step: "6",
      title: "Final Selection",
      description: "Offer letters and joining formalities"
    }
  ];

  const sectorWiseData = [
    { sector: "Information Technology", percentage: 45, companies: 80 },
    { sector: "Core Engineering", percentage: 25, companies: 50 },
    { sector: "Finance & Consulting", percentage: 15, companies: 30 },
    { sector: "Research & Development", percentage: 10, companies: 25 },
    { sector: "Government & PSU", percentage: 5, companies: 15 }
  ];

  const testimonials = [
    {
      name: "Arjun Mehta",
      company: "Google",
      package: "₹42L",
      branch: "Computer Science",
      text: "The placement cell at IIT Patna provided excellent support throughout the process. The mock interviews and guidance were invaluable."
    },
    {
      name: "Sneha Patel",
      company: "Microsoft",
      package: "₹38L", 
      branch: "Electrical Engineering",
      text: "Thanks to the strong industry connections and preparation sessions, I was able to secure my dream job at Microsoft."
    },
    {
      name: "Raj Kumar",
      company: "Goldman Sachs",
      package: "₹45L",
      branch: "Mathematics & Computing",
      text: "The placement team's dedication and the institute's reputation opened doors to top-tier companies for me."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Placements - IIT Patna | Career Opportunities and Success Stories</title>
        <meta 
          name="description" 
          content="Explore excellent placement opportunities at IIT Patna. High placement rates, top companies, attractive packages, and successful career outcomes."
        />
        <meta 
          name="keywords" 
          content="IIT Patna placements, campus recruitment, job opportunities, placement statistics, top companies, salary packages"
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
                Placements
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Exceptional career opportunities with leading companies worldwide
              </p>
            </motion.div>

            {/* Placement Statistics */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {placementStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                            {stat.number}
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                          <p className="text-sm text-muted-foreground">{stat.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Top Recruiters */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Top Recruiters</h2>
                <p className="text-lg text-muted-foreground">
                  Leading companies that regularly recruit from IIT Patna
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {topRecruiters.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardContent className="p-4 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="text-lg font-bold text-primary">
                            {company.logo}
                          </span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{company.name}</h3>
                        <p className="text-xs text-muted-foreground">{company.sector}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Sector-wise Distribution */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Sector-wise Placements</h2>
                <p className="text-lg text-muted-foreground">
                  Distribution of placements across different industry sectors
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectorWiseData.map((sector, index) => (
                  <motion.div
                    key={sector.sector}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-lg">{sector.sector}</h3>
                          <Badge variant="secondary">{sector.percentage}%</Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mb-3">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${sector.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building2 className="h-4 w-4 mr-2" />
                          {sector.companies} Companies
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Placement Process */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Placement Process</h2>
                <p className="text-lg text-muted-foreground">
                  Step-by-step guide to our placement procedure
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {placementProcess.map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
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
            </motion.section>

            {/* Student Testimonials */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
                <p className="text-lg text-muted-foreground">
                  Hear from our successful graduates about their placement experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                            <span className="font-bold text-primary">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span>{testimonial.branch}</span>
                              <span>•</span>
                              <span className="text-primary font-semibold">{testimonial.company}</span>
                            </div>
                            <Badge variant="outline" className="mt-1 text-xs">
                              {testimonial.package}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Ready to Launch Your Career?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Join IIT Patna and be part of our successful placement tradition. 
                    Your dream career is just a step away.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      <Target className="h-5 w-5 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline" size="lg">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      View Detailed Statistics
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

export default Placements;