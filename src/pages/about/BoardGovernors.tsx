import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Building, Award, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Board of Governors page - Information about IIT Patna's governing body
 * Features:
 * - Complete list of board members with roles
 * - Professional backgrounds and qualifications
 * - Contact information where applicable
 * - Responsive grid layout with animated cards
 */
const BoardGovernors: React.FC = () => {
  const boardMembers = [
    {
      name: "Prof. (Dr.) T. N. Singh",
      position: "Director & Chairman, Board of Governors",
      organization: "IIT Patna",
      category: "Institute Representative",
      description: "Leading the institute with vision for excellence in education and research.",
      expertise: ["Academic Leadership", "Research Management", "Strategic Planning"]
    },
    {
      name: "Shri Rajesh Kumar",
      position: "Secretary, Department of Higher Education",
      organization: "Ministry of Education, Govt. of India",
      category: "Government Representative",
      description: "Government nominee representing policy and administrative oversight.",
      expertise: ["Educational Policy", "Administration", "Government Relations"]
    },
    {
      name: "Dr. Priya Sharma",
      position: "Distinguished Scientist",
      organization: "DRDO",
      category: "Scientific Community",
      description: "Brings extensive experience in defense research and technology development.",
      expertise: ["Defense Technology", "R&D Management", "Innovation"]
    },
    {
      name: "Shri Amit Agarwal",
      position: "Managing Director",
      organization: "Tech Solutions Pvt. Ltd.",
      category: "Industry Representative",
      description: "Industry expert with deep understanding of technology and business.",
      expertise: ["Technology Leadership", "Business Strategy", "Industry Relations"]
    },
    {
      name: "Prof. (Dr.) Meera Patel",
      position: "Professor & Head",
      organization: "IIT Bombay",
      category: "Academic Representative",
      description: "Distinguished academician and researcher in engineering education.",
      expertise: ["Engineering Education", "Academic Excellence", "Research"]
    },
    {
      name: "Shri Vikram Singh",
      position: "Chief Secretary",
      organization: "Government of Bihar",
      category: "State Government",
      description: "State government representative ensuring regional integration and support.",
      expertise: ["State Administration", "Policy Implementation", "Regional Development"]
    }
  ];

  const responsibilities = [
    {
      title: "Strategic Governance",
      description: "Providing strategic direction and oversight for institutional development",
      icon: Building
    },
    {
      title: "Policy Framework",
      description: "Establishing policies for academic, administrative, and financial matters",
      icon: Award
    },
    {
      title: "Quality Assurance",
      description: "Ensuring maintenance of high standards in education and research",
      icon: User
    },
    {
      title: "Resource Management",
      description: "Overseeing effective utilization of resources and infrastructure development",
      icon: Mail
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Board of Governors - IIT Patna | Institutional Governance</title>
        <meta 
          name="description" 
          content="Meet the Board of Governors of IIT Patna - distinguished leaders providing strategic guidance and governance to our institution."
        />
        <meta name="keywords" content="IIT Patna board of governors, institutional governance, leadership team, administration" />
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
                Board of Governors
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Distinguished leaders providing strategic guidance and governance
              </p>
            </motion.div>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Key Responsibilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The Board of Governors ensures effective governance and strategic leadership
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {responsibilities.map((responsibility, index) => {
                const IconComponent = responsibility.icon;
                return (
                  <motion.div
                    key={responsibility.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="card-modern h-full text-center">
                      <CardContent className="pt-6">
                        <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {responsibility.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {responsibility.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Board Members
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the distinguished individuals guiding our institutional excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {member.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-primary">
                        {member.name}
                      </CardTitle>
                      <p className="text-sm font-medium text-secondary">
                        {member.position}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.organization}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {member.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="outline" 
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Structure Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Governance Structure
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our governance framework ensures transparency and accountability
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="card-feature h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Meeting Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Regular Meetings</h3>
                      <p className="text-muted-foreground">
                        The Board meets quarterly to review institutional progress, 
                        approve major decisions, and provide strategic guidance.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Special Sessions</h3>
                      <p className="text-muted-foreground">
                        Additional meetings are convened as needed to address 
                        urgent matters and significant institutional decisions.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Committee Structure</h3>
                      <p className="text-muted-foreground">
                        Specialized committees handle specific areas like finance, 
                        academics, and infrastructure development.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="card-feature h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Decision Making Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Consensus Building</h3>
                      <p className="text-muted-foreground">
                        Decisions are made through collaborative discussion and 
                        consensus among board members from diverse backgrounds.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Expert Input</h3>
                      <p className="text-muted-foreground">
                        Subject matter experts and stakeholders are consulted 
                        to ensure informed decision making.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Implementation Oversight</h3>
                      <p className="text-muted-foreground">
                        The Board monitors implementation of decisions and 
                        ensures accountability at all levels.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BoardGovernors;