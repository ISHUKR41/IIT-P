import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Users, Search, Phone, Mail, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Administrators Page - IIT Patna
 * Features:
 * - Complete list of administrative staff
 * - Search and filter functionality
 * - Contact information and organizational structure
 * - Department-wise categorization
 */

interface Administrator {
  id: string;
  name: string;
  designation: string;
  department: string;
  category: 'senior' | 'middle' | 'junior';
  qualifications?: string[];
  experience?: string;
  responsibilities?: string[];
  contact: {
    email: string;
    phone?: string;
    office?: string;
  };
  joinDate?: string;
}

const Administrators: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const administrators: Administrator[] = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      designation: 'Registrar',
      department: 'Administration',
      category: 'senior',
      qualifications: ['PhD in Management', 'MBA', 'B.Tech'],
      experience: '15+ years in educational administration',
      responsibilities: [
        'Overall administrative coordination',
        'Academic affairs management', 
        'Student services oversight',
        'Policy implementation'
      ],
      contact: {
        email: 'registrar@iitp.ac.in',
        phone: '+91-612-302-8002',
        office: 'Administration Building, Room 101'
      },
      joinDate: '2019-07-15'
    },
    {
      id: '2',  
      name: 'Mr. Rajesh Kumar',
      designation: 'Deputy Registrar',
      department: 'Academic Affairs',
      category: 'senior',
      qualifications: ['MBA', 'M.Com', 'B.Com'],
      experience: '12+ years in academic administration',
      responsibilities: [
        'Examination coordination',
        'Academic record management',
        'Degree verification',
        'Student registration'
      ],
      contact: {
        email: 'deputy.registrar@iitp.ac.in',
        phone: '+91-612-302-8003',
        office: 'Academic Block, Room 205'
      },
      joinDate: '2020-03-10'
    },
    {
      id: '3',
      name: 'Ms. Anita Singh',
      designation: 'Finance Officer',
      department: 'Finance & Accounts',
      category: 'senior',
      qualifications: ['CA', 'M.Com', 'B.Com'],
      experience: '10+ years in financial management',
      responsibilities: [
        'Budget planning and management',
        'Financial reporting',
        'Audit coordination',
        'Vendor payments'
      ],
      contact: {
        email: 'finance@iitp.ac.in',
        phone: '+91-612-302-8004',
        office: 'Finance Office, Room 301'
      },
      joinDate: '2021-01-20'
    },
    {
      id: '4',
      name: 'Dr. Suresh Gupta',
      designation: 'Medical Officer',
      department: 'Health Services',
      category: 'senior',
      qualifications: ['MBBS', 'MD'],
      experience: '8+ years in healthcare',
      responsibilities: [
        'Student and staff health services',
        'Medical emergency management',
        'Health awareness programs',
        'Medical facility administration'
      ],
      contact: {
        email: 'medical@iitp.ac.in',
        phone: '+91-612-302-8005',
        office: 'Health Center'
      },
      joinDate: '2022-06-01'
    },
    {
      id: '5',
      name: 'Mr. Arun Prasad',
      designation: 'Assistant Registrar',
      department: 'Student Affairs',
      category: 'middle',
      qualifications: ['MBA', 'B.Tech'],
      experience: '7+ years in student affairs',
      responsibilities: [
        'Student welfare programs',
        'Hostel administration',
        'Disciplinary matters',
        'Student grievance handling'
      ],
      contact: {
        email: 'student.affairs@iitp.ac.in',
        phone: '+91-612-302-8006',
        office: 'Student Affairs Office, Room 102'
      },
      joinDate: '2020-08-15'
    },
    {
      id: '6',
      name: 'Ms. Kavita Devi',
      designation: 'System Administrator',
      department: 'IT Services',
      category: 'middle',
      qualifications: ['M.Tech CSE', 'B.Tech CSE'],
      experience: '6+ years in IT administration',
      responsibilities: [
        'Network infrastructure management',
        'Software deployment and maintenance',
        'IT security coordination',
        'User support services'
      ],
      contact: {
        email: 'it.admin@iitp.ac.in',
        phone: '+91-612-302-8007',
        office: 'IT Center, Room 201'
      },
      joinDate: '2021-09-01'
    }
  ];

  const departments = ['all', 'Administration', 'Academic Affairs', 'Finance & Accounts', 'Health Services', 'Student Affairs', 'IT Services'];

  const filteredAdministrators = administrators.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || admin.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'senior': return 'bg-primary text-primary-foreground';
      case 'middle': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <Helmet>
        <title>Administrators - IIT Patna | Administrative Staff Directory</title>
        <meta 
          name="description" 
          content="Meet the dedicated administrative team at IIT Patna. Find contact information and details about our administrative staff across various departments."
        />
        <meta name="keywords" content="IIT Patna administrators, administrative staff, registrar, finance officer, student affairs, IT services" />
        <link rel="canonical" href="https://iitp.ac.in/about/administrators" />
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
                <div className="flex justify-center mb-6">
                  <div className="bg-primary-foreground/10 rounded-full p-6">
                    <Users className="h-16 w-16 text-primary-foreground" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Administrators
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
                  Dedicated professionals ensuring smooth institutional operations and student success
                </p>
              </motion.div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-4 items-center justify-between"
              >
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search administrators..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {departments.map((department) => (
                    <Button
                      key={department}
                      variant={selectedDepartment === department ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDepartment(department)}
                      className="capitalize"
                    >
                      {department === 'all' ? 'All Departments' : department}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Overview Statistics */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{administrators.length}</h3>
                  <p className="text-muted-foreground">Total Staff</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-secondary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">{departments.length - 1}</h3>
                  <p className="text-muted-foreground">Departments</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-accent rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent">24/7</h3>
                  <p className="text-muted-foreground">Support</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-success rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-success-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-success">95%</h3>
                  <p className="text-muted-foreground">Satisfaction</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Administrators Directory */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Administrative Team
                </h2>
                <p className="text-lg text-muted-foreground">
                  {filteredAdministrators.length} staff members found
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredAdministrators.map((admin, index) => (
                  <motion.div
                    key={admin.id}
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
                              {admin.name}
                            </CardTitle>
                            <p className="text-lg font-medium text-foreground mt-1">
                              {admin.designation}
                            </p>
                            <p className="text-muted-foreground">
                              {admin.department}
                            </p>
                          </div>
                          <Badge className={getCategoryColor(admin.category)}>
                            {admin.category.charAt(0).toUpperCase() + admin.category.slice(1)} Level
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {admin.qualifications && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Qualifications</h4>
                            <div className="flex flex-wrap gap-2">
                              {admin.qualifications.map((qual, qualIndex) => (
                                <Badge key={qualIndex} variant="outline" className="text-xs">
                                  {qual}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {admin.experience && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                            <p className="text-sm text-muted-foreground">{admin.experience}</p>
                          </div>
                        )}

                        {admin.responsibilities && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Key Responsibilities</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {admin.responsibilities.slice(0, 3).map((resp, respIndex) => (
                                <li key={respIndex} className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="pt-4 border-t border-border">
                          <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground break-all">
                                {admin.contact.email}
                              </span>
                            </div>
                            {admin.contact.phone && (
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">
                                  {admin.contact.phone}
                                </span>
                              </div>
                            )}
                            {admin.contact.office && (
                              <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">
                                  {admin.contact.office}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredAdministrators.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-lg text-muted-foreground">
                    No administrators found matching your criteria.
                  </p>
                </motion.div>
              )}
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
                  Administrative Support
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                  Our administrative team is here to assist you with all institutional matters
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="bg-primary-foreground/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Mail className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      General Inquiries
                    </h3>
                    <p className="text-primary-foreground/80">
                      info@iitp.ac.in
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-foreground/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      Main Office
                    </h3>
                    <p className="text-primary-foreground/80">
                      +91-612-302-8000
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-foreground/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      Office Hours
                    </h3>
                    <p className="text-primary-foreground/80">
                      Mon-Fri: 9:00 AM - 6:00 PM
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

export default Administrators;