import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserCheck, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Department Heads page component
 * Displays information about all department heads and their contact details
 * Features modern card layout with contact information and expertise areas
 */

// Department heads data structure
const departmentHeads = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar Singh',
    department: 'Computer Science & Engineering',
    designation: 'Head of Department',
    email: 'head.cse@iitp.ac.in',
    phone: '+91-612-302-8XXX',
    office: 'CSE Building, Room 301',
    expertise: ['Machine Learning', 'Data Science', 'Algorithms'],
    joinedYear: '2019',
    education: 'Ph.D. from IIT Delhi'
  },
  {
    id: 2,
    name: 'Prof. Anita Sharma',
    department: 'Electrical Engineering',
    designation: 'Head of Department',
    email: 'head.ee@iitp.ac.in',
    phone: '+91-612-302-8XXX',
    office: 'EE Building, Room 201',
    expertise: ['Power Systems', 'Renewable Energy', 'Smart Grid'],
    joinedYear: '2018',
    education: 'Ph.D. from IIT Bombay'
  },
  {
    id: 3,
    name: 'Dr. Suresh Chand',
    department: 'Mechanical Engineering',
    designation: 'Head of Department',
    email: 'head.me@iitp.ac.in',
    phone: '+91-612-302-8XXX',
    office: 'ME Building, Room 102',
    expertise: ['Thermal Engineering', 'Manufacturing', 'CAD/CAM'],
    joinedYear: '2020',
    education: 'Ph.D. from IIT Kanpur'
  },
  {
    id: 4,
    name: 'Prof. Priya Malhotra',
    department: 'Civil Engineering',
    designation: 'Head of Department',
    email: 'head.ce@iitp.ac.in',
    phone: '+91-612-302-8XXX',
    office: 'CE Building, Room 105',
    expertise: ['Structural Engineering', 'Earthquake Engineering', 'Construction Management'],
    joinedYear: '2017',
    education: 'Ph.D. from IIT Roorkee'
  },
  {
    id: 5,
    name: 'Dr. Vikram Gupta',
    department: 'Chemistry',
    designation: 'Head of Department',
    email: 'head.chemistry@iitp.ac.in',
    phone: '+91-612-302-8XXX',
    office: 'Chemistry Building, Room 204',
    expertise: ['Organic Chemistry', 'Material Science', 'Catalysis'],
    joinedYear: '2021',
    education: 'Ph.D. from IISc Bangalore'
  },
  {
    id: 6,
    name: 'Prof. Ravi Kumar',
    department: 'Physics',
    designation: 'Head of Department',
    email: 'head.physics@iitp.ac.in',
    phone: '+91-612-302-8XXX',
    office: 'Physics Building, Room 301',
    expertise: ['Condensed Matter Physics', 'Quantum Physics', 'Nanotechnology'],
    joinedYear: '2016',
    education: 'Ph.D. from TIFR Mumbai'
  },
  {
    id: 7,
    name: 'Dr. Meera Joshi',
    department: 'Mathematics',
    designation: 'Head of Department',
    email: 'head.math@iitp.ac.in',
    phone: '+91-612-302-8XXX',
    office: 'Mathematics Building, Room 205',
    expertise: ['Applied Mathematics', 'Numerical Analysis', 'Operations Research'],
    joinedYear: '2019',
    education: 'Ph.D. from ISI Kolkata'
  },
  {
    id: 8,
    name: 'Prof. Ashok Kumar',
    department: 'Humanities & Social Sciences',
    designation: 'Head of Department',
    email: 'head.hss@iitp.ac.in',
    phone: '+91-612-302-8XXX',
    office: 'HSS Building, Room 101',
    expertise: ['Economics', 'Public Policy', 'Development Studies'],
    joinedYear: '2018',
    education: 'Ph.D. from JNU Delhi'
  }
];

const DepartmentHeads: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Heads of Department - IIT Patna | Academic Leadership</title>
        <meta 
          name="description" 
          content="Meet the academic leaders at IIT Patna. Department heads with expertise in engineering, sciences, and humanities leading innovative research and education."
        />
        <meta name="keywords" content="IIT Patna, department heads, academic leadership, faculty, professors, engineering, science" />
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
                  Heads of Department
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Academic leadership driving excellence in education, research, and innovation across all departments at IIT Patna
                </p>
              </motion.div>
            </div>
          </section>

          {/* Department Heads Grid Section */}
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
                  Our Academic Leaders
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Distinguished faculty members leading various departments with extensive experience and expertise
                </p>
              </motion.div>

              {/* Department Heads Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departmentHeads.map((head, index) => (
                  <motion.div
                    key={head.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <Card className="card-modern h-full hover:shadow-elegant transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                              <UserCheck className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                              <CardTitle className="text-lg font-bold text-foreground">
                                {head.name}
                              </CardTitle>
                              <p className="text-sm text-primary font-medium">
                                {head.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 rounded-lg">
                          <h3 className="font-semibold text-foreground text-base">
                            {head.department}
                          </h3>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        
                        {/* Contact Information */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="h-4 w-4 text-primary" />
                            <a 
                              href={`mailto:${head.email}`} 
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {head.email}
                            </a>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{head.phone}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{head.office}</span>
                          </div>
                        </div>

                        {/* Expertise Areas */}
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Areas of Expertise</h4>
                          <div className="flex flex-wrap gap-1">
                            {head.expertise.map((area, idx) => (
                              <Badge 
                                key={idx} 
                                variant="secondary" 
                                className="text-xs bg-secondary/10 text-secondary hover:bg-secondary/20"
                              >
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Additional Information */}
                        <div className="pt-2 border-t border-border space-y-1">
                          <div className="text-sm">
                            <span className="font-medium text-foreground">Education:</span>
                            <span className="text-muted-foreground ml-2">{head.education}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium text-foreground">Joined:</span>
                            <span className="text-muted-foreground ml-2">{head.joinedYear}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="py-12 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Connect with Department Heads
                </h2>
                <div className="bg-card p-6 rounded-xl shadow-card">
                  <p className="text-muted-foreground mb-4">
                    For specific departmental inquiries, research collaborations, or academic discussions, 
                    feel free to reach out to the respective department heads.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="text-sm">
                      <span className="font-medium text-foreground">General Inquiry:</span>
                      <span className="text-muted-foreground ml-2">academic@iitp.ac.in</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-foreground">Phone:</span>
                      <span className="text-muted-foreground ml-2">+91-612-302-8000</span>
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

export default DepartmentHeads;