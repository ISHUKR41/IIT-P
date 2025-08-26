import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Mail, Phone, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Administrative Units page component
 * Displays information about various administrative departments and their functions
 * Features organized layout with contact details and service descriptions
 */

// Administrative units data structure
const administrativeUnits = [
  {
    id: 1,
    name: 'Academic Section',
    head: 'Dr. Academic Officer',
    description: 'Manages all academic activities, examinations, admissions, and student records',
    services: ['Admission Process', 'Examination Management', 'Academic Records', 'Course Registration'],
    email: 'academic@iitp.ac.in',
    phone: '+91-612-302-8001',
    location: 'Administrative Building, Ground Floor',
    workingHours: '9:00 AM - 5:00 PM',
    category: 'Academic'
  },
  {
    id: 2,
    name: 'Finance & Accounts',
    head: 'Shri Chief Accounts Officer',
    description: 'Handles all financial transactions, budget management, and accounting operations',
    services: ['Budget Planning', 'Salary Processing', 'Vendor Payments', 'Financial Reporting'],
    email: 'accounts@iitp.ac.in',
    phone: '+91-612-302-8002',
    location: 'Administrative Building, First Floor',
    workingHours: '9:00 AM - 5:00 PM',
    category: 'Finance'
  },
  {
    id: 3,
    name: 'Human Resources',
    head: 'Dr. HR Officer',
    description: 'Manages faculty and staff recruitment, promotions, and welfare activities',
    services: ['Recruitment', 'Promotions', 'Leave Management', 'Training & Development'],
    email: 'hr@iitp.ac.in',
    phone: '+91-612-302-8003',
    location: 'Administrative Building, Second Floor',
    workingHours: '9:00 AM - 5:00 PM',
    category: 'Administration'
  },
  {
    id: 4,
    name: 'Estate & Maintenance',
    head: 'Shri Estate Officer',
    description: 'Responsible for campus infrastructure, maintenance, and facility management',
    services: ['Infrastructure Development', 'Maintenance Services', 'Space Allocation', 'Security'],
    email: 'estate@iitp.ac.in',
    phone: '+91-612-302-8004',
    location: 'Estate Office Building',
    workingHours: '24/7 Emergency, Office: 9:00 AM - 5:00 PM',
    category: 'Infrastructure'
  },
  {
    id: 5,
    name: 'Library Services',
    head: 'Dr. Chief Librarian',
    description: 'Manages central library operations, digital resources, and information services',
    services: ['Book Management', 'Digital Resources', 'Research Support', 'Inter-Library Loans'],
    email: 'library@iitp.ac.in',
    phone: '+91-612-302-8005',
    location: 'Central Library Building',
    workingHours: '8:00 AM - 10:00 PM',
    category: 'Academic'
  },
  {
    id: 6,
    name: 'Student Affairs',
    head: 'Dr. Dean Student Affairs',
    description: 'Oversees student welfare, hostel management, and extracurricular activities',
    services: ['Hostel Management', 'Student Welfare', 'Cultural Activities', 'Sports Facilities'],
    email: 'dsa@iitp.ac.in',
    phone: '+91-612-302-8006',
    location: 'Student Activity Center',
    workingHours: '9:00 AM - 8:00 PM',
    category: 'Student Services'
  },
  {
    id: 7,
    name: 'Information Technology',
    head: 'Dr. IT Officer',
    description: 'Manages campus IT infrastructure, network services, and digital systems',
    services: ['Network Management', 'Software Support', 'Digital Services', 'IT Security'],
    email: 'it@iitp.ac.in',
    phone: '+91-612-302-8007',
    location: 'IT Center',
    workingHours: '24/7 Emergency, Office: 9:00 AM - 6:00 PM',
    category: 'Technology'
  },
  {
    id: 8,
    name: 'Research & Development',
    head: 'Prof. Dean R&D',
    description: 'Facilitates research activities, project management, and industry collaborations',
    services: ['Project Management', 'Research Funding', 'Industry Liaison', 'IPR Support'],
    email: 'research@iitp.ac.in',
    phone: '+91-612-302-8008',
    location: 'R&D Building',
    workingHours: '9:00 AM - 5:00 PM',
    category: 'Research'
  },
  {
    id: 9,
    name: 'International Relations',
    head: 'Dr. International Officer',
    description: 'Manages international collaborations, student exchange programs',
    services: ['Student Exchange', 'International Collaborations', 'Visa Assistance', 'Foreign Delegations'],
    email: 'international@iitp.ac.in',
    phone: '+91-612-302-8009',
    location: 'International Affairs Office',
    workingHours: '9:00 AM - 5:00 PM',
    category: 'International'
  },
  {
    id: 10,
    name: 'Training & Placement',
    head: 'Prof. Placement Officer',
    description: 'Coordinates campus placements, career guidance, and industry interactions',
    services: ['Campus Placements', 'Career Counseling', 'Industry Interface', 'Skill Development'],
    email: 'placement@iitp.ac.in',
    phone: '+91-612-302-8010',
    location: 'Placement Office',
    workingHours: '9:00 AM - 6:00 PM',
    category: 'Career Services'
  }
];

// Category colors for badges
const categoryColors = {
  'Academic': 'bg-blue-500/10 text-blue-600',
  'Finance': 'bg-green-500/10 text-green-600',
  'Administration': 'bg-purple-500/10 text-purple-600',
  'Infrastructure': 'bg-orange-500/10 text-orange-600',
  'Student Services': 'bg-pink-500/10 text-pink-600',
  'Technology': 'bg-cyan-500/10 text-cyan-600',
  'Research': 'bg-indigo-500/10 text-indigo-600',
  'International': 'bg-teal-500/10 text-teal-600',
  'Career Services': 'bg-red-500/10 text-red-600'
};

const AdministrativeUnits: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Administrative Units - IIT Patna | Support Services</title>
        <meta 
          name="description" 
          content="Comprehensive overview of administrative units at IIT Patna providing essential support services for academics, research, and campus operations."
        />
        <meta name="keywords" content="IIT Patna, administrative units, support services, campus administration, academic support" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          
          {/* Header Section */}
          <section className="pt-20 pb-12 bg-gradient-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Administrative Units
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive support services ensuring smooth operations and excellence in education, research, and campus life
                </p>
              </motion.div>
            </div>
          </section>

          {/* Administrative Units Grid Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Introduction */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Essential Support Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our dedicated administrative units work together to provide seamless support for all institutional activities
                </p>
              </motion.div>

              {/* Administrative Units Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {administrativeUnits.map((unit, index) => (
                  <motion.div
                    key={unit.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <Card className="card-modern h-full hover:shadow-elegant transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                              <Building className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                              <CardTitle className="text-lg font-bold text-foreground">
                                {unit.name}
                              </CardTitle>
                              <Badge 
                                className={`text-xs mt-1 ${categoryColors[unit.category as keyof typeof categoryColors]}`}
                                variant="secondary"
                              >
                                {unit.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Head:</span> {unit.head}
                          </p>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        
                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {unit.description}
                        </p>

                        {/* Services */}
                        <div>
                          <h4 className="font-medium text-foreground mb-2 flex items-center">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            Key Services
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {unit.services.map((service, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="text-xs bg-background hover:bg-muted/50"
                              >
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-2 pt-2 border-t border-border">
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="h-4 w-4 text-primary" />
                            <a 
                              href={`mailto:${unit.email}`} 
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {unit.email}
                            </a>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{unit.phone}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{unit.location}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{unit.workingHours}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* General Contact Information Section */}
          <section className="py-12 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  General Administrative Contact
                </h2>
                <div className="bg-card p-6 rounded-xl shadow-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Main Administrative Office</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">+91-612-302-8000</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">admin@iitp.ac.in</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Mon-Fri: 9:00 AM - 5:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Emergency Services</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-red-500" />
                          <span className="text-muted-foreground">Security: +91-612-302-8999</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-red-500" />
                          <span className="text-muted-foreground">Medical: +91-612-302-8888</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-red-500" />
                          <span className="text-muted-foreground">Available 24/7</span>
                        </div>
                      </div>
                    </div>
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

export default AdministrativeUnits;