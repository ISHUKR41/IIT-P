import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Finance Committee Page - IIT Patna
 * Features:
 * - Committee member information
 * - Meeting schedules and minutes
 * - Financial governance overview
 * - Contact information
 */

interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  category: 'chairman' | 'member' | 'secretary';
  institution?: string;
  expertise?: string[];
  contact?: {
    email?: string;
    phone?: string;
  };
}

const FinanceCommittee: React.FC = () => {
  const committeeMembers: CommitteeMember[] = [
    {
      id: '1',
      name: 'Prof. A.K. Chaturvedi',
      designation: 'Director, IIT Patna',
      category: 'chairman',
      institution: 'IIT Patna',
      expertise: ['Strategic Planning', 'Financial Management', 'Academic Leadership'],
      contact: {
        email: 'director@iitp.ac.in',
        phone: '+91-612-302-8000'
      }
    },
    {
      id: '2',
      name: 'Dr. R.K. Sharma',
      designation: 'Financial Advisor',
      category: 'member',
      institution: 'Ministry of Education',
      expertise: ['Financial Planning', 'Budget Management', 'Policy Development'],
      contact: {
        email: 'fa@iitp.ac.in'
      }
    },
    {
      id: '3',
      name: 'Prof. S.N. Singh',
      designation: 'Dean (Administration)',
      category: 'member',
      institution: 'IIT Patna',
      expertise: ['Administrative Affairs', 'Resource Management', 'Strategic Planning']
    },
    {
      id: '4',
      name: 'Ms. Priya Gupta',
      designation: 'Registrar',
      category: 'secretary',
      institution: 'IIT Patna',
      expertise: ['Administrative Coordination', 'Record Management', 'Compliance'],
      contact: {
        email: 'registrar@iitp.ac.in',
        phone: '+91-612-302-8002'
      }
    }
  ];

  const meetings = [
    {
      id: '1',
      date: '2024-09-15',
      agenda: 'Annual Budget Review and Approval',
      status: 'scheduled'
    },
    {
      id: '2',
      date: '2024-06-20',
      agenda: 'Infrastructure Development Fund Allocation',
      status: 'completed'
    },
    {
      id: '3',
      date: '2024-03-15',
      agenda: 'Research Grant Distribution and Monitoring',
      status: 'completed'
    }
  ];

  const responsibilities = [
    {
      title: 'Budget Planning',
      description: 'Oversight of annual budget preparation and financial planning strategies'
    },
    {
      title: 'Financial Oversight',
      description: 'Monitoring and evaluation of financial performance and compliance'
    },
    {
      title: 'Resource Allocation',
      description: 'Strategic allocation of resources across academic and administrative functions'
    },
    {
      title: 'Audit Coordination',
      description: 'Coordination with internal and external audit processes'
    },
    {
      title: 'Policy Development',
      description: 'Development and review of financial policies and procedures'
    },
    {
      title: 'Investment Decisions',
      description: 'Strategic decisions regarding institutional investments and endowments'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'chairman': return 'bg-primary text-primary-foreground';
      case 'secretary': return 'bg-secondary text-secondary-foreground'; 
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <Helmet>
        <title>Finance Committee - IIT Patna | Financial Governance & Oversight</title>
        <meta 
          name="description" 
          content="Learn about IIT Patna's Finance Committee, responsible for financial governance, budget oversight, and strategic resource allocation for the institution."
        />
        <meta name="keywords" content="IIT Patna finance committee, financial governance, budget oversight, institutional finance, committee members" />
        <link rel="canonical" href="https://iitp.ac.in/about/finance-committee" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-subtle">
          {/* Hero Section */}
          <section className="bg-gradient-primary text-primary-foreground py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Finance Committee
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
                  Ensuring transparent financial governance and strategic resource management
                </p>
              </motion.div>
            </div>
          </section>

          {/* Committee Overview */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Financial Governance
                </h2>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  The Finance Committee of IIT Patna plays a crucial role in ensuring effective financial 
                  management, strategic budget allocation, and maintaining the highest standards of 
                  financial transparency and accountability in line with institutional excellence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-feature h-full">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">
                          {responsibility.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {responsibility.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Committee Members */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Committee Members
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Distinguished professionals ensuring effective financial governance and strategic oversight
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {committeeMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-modern h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <CardTitle className="text-xl text-primary">
                              {member.name}
                            </CardTitle>
                            <p className="text-muted-foreground mt-1">
                              {member.designation}
                            </p>
                            {member.institution && (
                              <p className="text-sm text-muted-foreground">
                                {member.institution}
                              </p>
                            )}
                          </div>
                          <Badge className={getCategoryColor(member.category)}>
                            {member.category.charAt(0).toUpperCase() + member.category.slice(1)}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {member.expertise && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Areas of Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.expertise.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {member.contact && (
                          <div className="pt-4 border-t border-border">
                            <h4 className="font-semibold text-foreground mb-2">Contact Information</h4>
                            <div className="space-y-2">
                              {member.contact.email && (
                                <div className="flex items-center space-x-2">
                                  <Mail className="h-4 w-4 text-primary" />
                                  <span className="text-sm text-muted-foreground">
                                    {member.contact.email}
                                  </span>
                                </div>
                              )}
                              {member.contact.phone && (
                                <div className="flex items-center space-x-2">
                                  <Phone className="h-4 w-4 text-primary" />
                                  <span className="text-sm text-muted-foreground">
                                    {member.contact.phone}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Meeting Schedule */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Meeting Schedule
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Regular meetings to ensure continuous oversight and strategic decision-making
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto space-y-6">
                {meetings.map((meeting, index) => (
                  <motion.div
                    key={meeting.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-modern">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge 
                                variant={meeting.status === 'scheduled' ? 'default' : 'secondary'}
                                className={meeting.status === 'scheduled' ? 'bg-primary' : ''}
                              >
                                {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                              </Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-2" />
                                {new Date(meeting.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold text-primary">
                              {meeting.agenda}
                            </h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Committee Secretariat
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                  For inquiries related to finance committee matters
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="bg-primary-foreground/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Mail className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      Email Contact
                    </h3>
                    <p className="text-primary-foreground/80">
                      financecommittee@iitp.ac.in
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-foreground/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      Phone Contact
                    </h3>
                    <p className="text-primary-foreground/80">
                      +91-612-302-8002
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default FinanceCommittee;