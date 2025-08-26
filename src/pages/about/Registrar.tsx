import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, FileText, Users, Calendar, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Office of Registrar Page - IIT Patna
 * Features:
 * - Registrar information and contact details
 * - Services offered by the office
 * - Forms and documents download
 * - Office hours and contact information
 */

const OfficeOfRegistrar: React.FC = () => {
  const services = [
    {
      title: 'Academic Records',
      description: 'Maintenance and verification of student academic records, transcripts, and degree certificates.',
      icon: FileText,
      category: 'Academic'
    },
    {
      title: 'Student Registration',
      description: 'Course registration, enrollment processes, and academic calendar coordination.',
      icon: Users,
      category: 'Registration'
    },
    {
      title: 'Examination Management',
      description: 'Coordination of examinations, result processing, and grade management systems.',
      icon: Calendar,
      category: 'Examination'
    },
    {
      title: 'Convocation Services',
      description: 'Organization of convocation ceremonies and degree conferment processes.',
      icon: Users,
      category: 'Convocation'
    },
    {
      title: 'Official Communications',
      description: 'Processing of official letters, certificates, and institutional correspondence.',
      icon: Mail,
      category: 'Communication'
    },
    {
      title: 'Alumni Services',
      description: 'Alumni registration, networking support, and lifetime email services.',
      icon: Users,
      category: 'Alumni'
    }
  ];

  const forms = [
    {
      title: 'Transcript Request Form',
      description: 'For requesting official academic transcripts',
      downloadUrl: '/forms/transcript-request.pdf'
    },
    {
      title: 'Degree Verification Form',
      description: 'For degree verification and authentication',
      downloadUrl: '/forms/degree-verification.pdf'
    },
    {
      title: 'Course Registration Form',
      description: 'For semester course registration',
      downloadUrl: '/forms/course-registration.pdf'
    },
    {
      title: 'Name Change Request',
      description: 'For official name change in records',
      downloadUrl: '/forms/name-change.pdf'
    },
    {
      title: 'Migration Certificate Request',
      description: 'For requesting migration certificates',
      downloadUrl: '/forms/migration-certificate.pdf'
    },
    {
      title: 'Alumni Registration Form',
      description: 'For alumni network registration',
      downloadUrl: '/forms/alumni-registration.pdf'
    }
  ];

  const contactInfo = {
    registrar: {
      name: 'Dr. Priya Sharma',
      designation: 'Registrar',
      qualifications: 'PhD (Management), MBA, B.Tech',
      experience: '15+ years in educational administration',
      email: 'registrar@iitp.ac.in',
      phone: '+91-612-302-8002',
      office: 'Administration Building, Room 101'
    },
    deputyRegistrar: {
      name: 'Mr. Rajesh Kumar',
      designation: 'Deputy Registrar',
      email: 'deputy.registrar@iitp.ac.in',
      phone: '+91-612-302-8003',
      office: 'Administration Building, Room 102'
    }
  };

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Public Holidays', hours: 'Closed' }
  ];

  return (
    <>
      <Helmet>
        <title>Office of Registrar - IIT Patna | Academic Records & Student Services</title>
        <meta 
          name="description" 
          content="Office of Registrar at IIT Patna provides academic records management, student registration, examination coordination, and various administrative services."
        />
        <meta name="keywords" content="IIT Patna registrar, academic records, student registration, transcripts, degree verification, examination office" />
        <link rel="canonical" href="https://iitp.ac.in/about/registrar" />
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
                    <FileText className="h-16 w-16 text-primary-foreground" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Office of Registrar
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
                  Academic records management and comprehensive student services
                </p>
              </motion.div>
            </div>
          </section>

          {/* Registrar Information */}
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
                  Office Leadership
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Meet our dedicated registrar team committed to providing excellent administrative services
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Registrar Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-modern">
                    <CardHeader>
                      <div className="text-center mb-4">
                        <div className="bg-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <Users className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-2xl text-primary">
                          {contactInfo.registrar.name}
                        </CardTitle>
                        <p className="text-lg font-medium text-foreground mt-1">
                          {contactInfo.registrar.designation}
                        </p>
                        <Badge variant="outline" className="mt-2">
                          Senior Administrator
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Qualifications</h4>
                        <p className="text-muted-foreground">{contactInfo.registrar.qualifications}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                        <p className="text-muted-foreground">{contactInfo.registrar.experience}</p>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              {contactInfo.registrar.email}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              {contactInfo.registrar.phone}
                            </span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {contactInfo.registrar.office}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Deputy Registrar Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-modern">
                    <CardHeader>
                      <div className="text-center mb-4">
                        <div className="bg-secondary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                          <Users className="h-8 w-8 text-secondary-foreground" />
                        </div>
                        <CardTitle className="text-2xl text-primary">
                          {contactInfo.deputyRegistrar.name}
                        </CardTitle>
                        <p className="text-lg font-medium text-foreground mt-1">
                          {contactInfo.deputyRegistrar.designation}
                        </p>
                        <Badge variant="outline" className="mt-2">
                          Deputy Administrator
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="pt-4">
                        <h4 className="font-semibold text-foreground mb-3">Contact Information</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              {contactInfo.deputyRegistrar.email}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              {contactInfo.deputyRegistrar.phone}
                            </span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {contactInfo.deputyRegistrar.office}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Office Hours */}
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold text-foreground mb-3">Office Hours</h4>
                        <div className="space-y-2">
                          {officeHours.map((schedule, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">{schedule.day}</span>
                              <span className="text-sm font-medium text-foreground">{schedule.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
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
                  Our Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive administrative services to support students, faculty, and staff
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="card-feature h-full">
                        <CardHeader>
                          <div className="text-center mb-4">
                            <div className="bg-primary rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                              <IconComponent className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <Badge variant="outline" className="mb-2">
                              {service.category}
                            </Badge>
                            <CardTitle className="text-lg text-primary">
                              {service.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-center">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Forms and Documents */}
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
                  Forms & Documents
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Download essential forms and documents for various administrative processes
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {forms.map((form, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-modern h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-primary mb-2">
                              {form.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              {form.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
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
                  Get in Touch
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                  For any administrative queries or assistance, don't hesitate to contact us
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="bg-primary-foreground/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Mail className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      Email Us
                    </h3>
                    <p className="text-primary-foreground/80">
                      registrar@iitp.ac.in
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-foreground/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-primary-foreground mb-2">
                      Call Us
                    </h3>
                    <p className="text-primary-foreground/80">
                      +91-612-302-8002
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-foreground/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Clock className="h-8 w-8 text-primary-foreground" />
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

export default OfficeOfRegistrar;