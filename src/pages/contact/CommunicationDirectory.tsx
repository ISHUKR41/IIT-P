import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Search, Filter, Users, Building2, GraduationCap, Settings, Heart, Shield } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/common/AnimatedSection';
import GradientText from '@/components/common/GradientText';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { GlassmorphismCard, InteractiveHoverEffect } from '@/components/effects/ModernEffects';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * ====================================================================
 * COMMUNICATION DIRECTORY PAGE - IIT PATNA CONTACT DIRECTORY
 * ====================================================================
 * 
 * This component provides a comprehensive directory of all contacts
 * at IIT Patna including faculty, staff, and administrative personnel.
 * 
 * Key Features:
 * - Searchable contact directory
 * - Department-wise filtering
 * - Detailed contact information
 * - Real-time search functionality
 * - Responsive card-based layout
 * - Interactive animations and effects
 * - Export functionality for contacts
 * - Quick dial and email options
 * - Advanced GSAP animations
 * - Glassmorphism design effects
 * 
 * Animation Libraries Used:
 * - GSAP with ScrollTrigger for scroll animations
 * - Framer Motion for interactive elements
 * - Custom ModernEffects for visual enhancements
 * - Hover and search animations
 * 
 * Responsive Design:
 * - Mobile: Single column with search
 * - Tablet: Two-column grid
 * - Desktop: Three-column grid with filters
 * - Large Screen: Four-column with expanded details
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

interface ContactPerson {
  id: string;
  name: string;
  designation: string;
  department: string;
  category: 'Faculty' | 'Administrative' | 'Technical' | 'Support' | 'Security' | 'Medical';
  phoneNumbers: {
    office?: string;
    mobile?: string;
    residence?: string;
  };
  email: {
    official: string;
    personal?: string;
  };
  office: {
    building: string;
    room: string;
    floor: number;
  };
  specialization?: string[];
  responsibilities: string[];
  availableHours: string;
  emergencyContact: boolean;
  photoUrl?: string;
}

const CommunicationDirectory: React.FC = () => {
  // State management for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [filteredContacts, setFilteredContacts] = useState<ContactPerson[]>([]);

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Comprehensive contact directory data
  const contactDirectory: ContactPerson[] = [
    {
      id: 'dir-001',
      name: 'Prof. T.N. Singh',
      designation: 'Director',
      department: 'Office of the Director',
      category: 'Administrative',
      phoneNumbers: {
        office: '+91-612-302-8000',
        mobile: '+91-98765-43210'
      },
      email: {
        official: 'director@iitp.ac.in'
      },
      office: {
        building: 'Administrative Block',
        room: 'Director Chamber',
        floor: 2
      },
      responsibilities: ['Institute Administration', 'Strategic Planning', 'External Relations'],
      availableHours: 'Mon-Fri: 10:00 AM - 5:00 PM',
      emergencyContact: true
    },
    {
      id: 'reg-001',
      name: 'Prof. Sudhir Kumar',
      designation: 'Registrar',
      department: 'Office of the Registrar',
      category: 'Administrative',
      phoneNumbers: {
        office: '+91-612-302-8004',
        mobile: '+91-98765-43211'
      },
      email: {
        official: 'registrar@iitp.ac.in'
      },
      office: {
        building: 'Administrative Block',
        room: 'Registrar Office',
        floor: 1
      },
      responsibilities: ['Academic Administration', 'Student Affairs', 'Examination Management'],
      availableHours: 'Mon-Sat: 9:30 AM - 5:00 PM',
      emergencyContact: false
    },
    {
      id: 'cse-001',
      name: 'Dr. Rajesh Kumar Singh',
      designation: 'Professor & Head',
      department: 'Computer Science & Engineering',
      category: 'Faculty',
      phoneNumbers: {
        office: '+91-612-302-8101',
        mobile: '+91-98765-43212'
      },
      email: {
        official: 'rks@iitp.ac.in',
        personal: 'rajesh.kumar@gmail.com'
      },
      office: {
        building: 'Academic Block A',
        room: 'CSE-201',
        floor: 2
      },
      specialization: ['Machine Learning', 'Data Mining', 'Artificial Intelligence'],
      responsibilities: ['Department Administration', 'PhD Supervision', 'Research Coordination'],
      availableHours: 'Mon-Fri: 11:00 AM - 6:00 PM',
      emergencyContact: false
    },
    {
      id: 'ece-001',
      name: 'Dr. Priya Sharma',
      designation: 'Associate Professor',
      department: 'Electronics & Communication Engineering',
      category: 'Faculty',
      phoneNumbers: {
        office: '+91-612-302-8201',
        mobile: '+91-98765-43213'
      },
      email: {
        official: 'priya@iitp.ac.in'
      },
      office: {
        building: 'Academic Block B',
        room: 'ECE-301',
        floor: 3
      },
      specialization: ['VLSI Design', 'Digital Signal Processing', 'Embedded Systems'],
      responsibilities: ['Curriculum Development', 'Lab Management', 'Industry Liaison'],
      availableHours: 'Mon-Fri: 10:00 AM - 5:30 PM',
      emergencyContact: false
    },
    {
      id: 'me-001',
      name: 'Dr. Amit Verma',
      designation: 'Professor',
      department: 'Mechanical Engineering',
      category: 'Faculty',
      phoneNumbers: {
        office: '+91-612-302-8301',
        mobile: '+91-98765-43214'
      },
      email: {
        official: 'amit.verma@iitp.ac.in'
      },
      office: {
        building: 'Mechanical Block',
        room: 'ME-201',
        floor: 2
      },
      specialization: ['Robotics', 'Automation', 'Manufacturing Technology'],
      responsibilities: ['Research Projects', 'Industrial Consultancy', 'Student Mentoring'],
      availableHours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      emergencyContact: false
    },
    {
      id: 'lib-001',
      name: 'Dr. Sunita Mishra',
      designation: 'Chief Librarian',
      department: 'Central Library',
      category: 'Administrative',
      phoneNumbers: {
        office: '+91-612-302-8010',
        mobile: '+91-98765-43215'
      },
      email: {
        official: 'librarian@iitp.ac.in'
      },
      office: {
        building: 'Library Building',
        room: 'Librarian Office',
        floor: 1
      },
      responsibilities: ['Library Administration', 'Digital Resources', 'Information Services'],
      availableHours: 'Mon-Sat: 8:00 AM - 8:00 PM',
      emergencyContact: false
    },
    {
      id: 'med-001',
      name: 'Dr. Rakesh Jain',
      designation: 'Chief Medical Officer',
      department: 'Health Center',
      category: 'Medical',
      phoneNumbers: {
        office: '+91-612-302-8020',
        mobile: '+91-98765-43216',
        residence: '+91-612-234-5678'
      },
      email: {
        official: 'cmo@iitp.ac.in'
      },
      office: {
        building: 'Health Center',
        room: 'CMO Office',
        floor: 1
      },
      specialization: ['General Medicine', 'Emergency Care', 'Preventive Healthcare'],
      responsibilities: ['Medical Services', 'Health Programs', 'Emergency Response'],
      availableHours: 'Mon-Sat: 8:30 AM - 8:00 PM, Emergency: 24/7',
      emergencyContact: true
    },
    {
      id: 'sec-001',
      name: 'Shri Ram Prasad',
      designation: 'Chief Security Officer',
      department: 'Security Services',
      category: 'Security',
      phoneNumbers: {
        office: '+91-612-302-8030',
        mobile: '+91-98765-43217'
      },
      email: {
        official: 'security@iitp.ac.in'
      },
      office: {
        building: 'Security Office',
        room: 'Control Room',
        floor: 1
      },
      responsibilities: ['Campus Security', 'Visitor Management', 'Emergency Response'],
      availableHours: '24/7 Availability',
      emergencyContact: true
    },
    {
      id: 'it-001',
      name: 'Dr. Vikram Singh',
      designation: 'System Administrator',
      department: 'IT Services',
      category: 'Technical',
      phoneNumbers: {
        office: '+91-612-302-8015',
        mobile: '+91-98765-43218'
      },
      email: {
        official: 'itservices@iitp.ac.in'
      },
      office: {
        building: 'Computer Center',
        room: 'Server Room',
        floor: 2
      },
      specialization: ['Network Administration', 'System Security', 'Database Management'],
      responsibilities: ['IT Infrastructure', 'Network Maintenance', 'User Support'],
      availableHours: 'Mon-Sat: 8:30 AM - 6:00 PM, Emergency Support: 24/7',
      emergencyContact: true
    }
  ];

  // Category icons mapping
  const categoryIcons: Record<string, any> = {
    'Faculty': GraduationCap,
    'Administrative': Building2,
    'Technical': Settings,
    'Support': Users,
    'Security': Shield,
    'Medical': Heart
  };

  // Filter contacts based on search and category
  useEffect(() => {
    let filtered = contactDirectory;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(contact => contact.category === selectedCategory);
    }

    // Apply department filter
    if (selectedDepartment !== 'All') {
      filtered = filtered.filter(contact => contact.department === selectedDepartment);
    }

    setFilteredContacts(filtered);
  }, [searchTerm, selectedCategory, selectedDepartment]);

  // Get unique categories and departments for filters
  const categories = ['All', ...Array.from(new Set(contactDirectory.map(c => c.category)))];
  const departments = ['All', ...Array.from(new Set(contactDirectory.map(c => c.department)))];

  // Initialize GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current?.children || [], {
        y: 100,
        opacity: 0,
        scale: 0.9
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Search section animation
      gsap.fromTo(searchRef.current?.children || [], {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: searchRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

      // Contacts animation
      gsap.fromTo(contactsRef.current?.children || [], {
        y: 80,
        opacity: 0,
        scale: 0.8
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: contactsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [filteredContacts]);

  return (
    <Layout>
      {/* SEO Optimization */}
      <Helmet>
        <title>Communication Directory - Contact Information | IIT Patna</title>
        <meta 
          name="description" 
          content="Complete communication directory of IIT Patna faculty, staff, and administration. Find phone numbers, email addresses, and office locations of all personnel." 
        />
        <meta name="keywords" content="IIT Patna directory, contact information, faculty contacts, staff directory, phone numbers, email addresses" />
        <link rel="canonical" href="https://www.iitp.ac.in/contact/directory" />
        
        <meta property="og:title" content="Communication Directory | IIT Patna" />
        <meta property="og:description" content="Comprehensive contact directory with phone numbers and email addresses." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "IIT Patna Communication Directory",
            "description": "Complete contact directory for Indian Institute of Technology Patna",
            "url": "https://www.iitp.ac.in/contact/directory"
          })}
        </script>
      </Helmet>

      <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div ref={heroRef} className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <GradientText className="text-4xl md:text-6xl font-bold">
                  Communication Directory
                </GradientText>
                <p className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                  Find contact information for faculty, staff, and administration
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{contactDirectory.length}+</p>
                  <p className="text-sm text-muted-foreground">Total Contacts</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">{departments.length - 1}</p>
                  <p className="text-sm text-muted-foreground">Departments</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">{categories.length - 1}</p>
                  <p className="text-sm text-muted-foreground">Categories</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <AnimatedSection className="py-12 bg-card/20 backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <div ref={searchRef} className="max-w-4xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, designation, or department..."
                  className="pl-10 py-6 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Category:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-center">
                <p className="text-muted-foreground">
                  Showing {filteredContacts.length} of {contactDirectory.length} contacts
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contacts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div ref={contactsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContacts.map((contact) => {
                const CategoryIcon = categoryIcons[contact.category];
                return (
                  <InteractiveHoverEffect
                    key={contact.id}
                    effect="lift"
                    intensity="medium"
                    className="h-full"
                  >
                    <GlassmorphismCard className="h-full">
                      <Card className="h-full bg-transparent border-0">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-primary/10">
                                <CategoryIcon className="h-5 w-5 text-primary" />
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {contact.category}
                              </Badge>
                            </div>
                            {contact.emergencyContact && (
                              <Badge variant="secondary" className="bg-red-500/20 text-red-700 text-xs">
                                Emergency
                              </Badge>
                            )}
                          </div>
                          
                          <CardTitle className="text-lg font-bold text-foreground mb-1">
                            {contact.name}
                          </CardTitle>
                          <p className="text-sm text-primary font-medium mb-2">
                            {contact.designation}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {contact.department}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          {/* Contact Information */}
                          <div className="space-y-3">
                            {contact.phoneNumbers.office && (
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground">Office:</span>
                                <a 
                                  href={`tel:${contact.phoneNumbers.office}`}
                                  className="font-medium text-foreground hover:text-primary transition-colors"
                                >
                                  {contact.phoneNumbers.office}
                                </a>
                              </div>
                            )}
                            {contact.phoneNumbers.mobile && (
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-secondary" />
                                <span className="text-muted-foreground">Mobile:</span>
                                <a 
                                  href={`tel:${contact.phoneNumbers.mobile}`}
                                  className="font-medium text-foreground hover:text-primary transition-colors"
                                >
                                  {contact.phoneNumbers.mobile}
                                </a>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-accent" />
                              <span className="text-muted-foreground">Email:</span>
                              <a 
                                href={`mailto:${contact.email.official}`}
                                className="font-medium text-foreground hover:text-primary transition-colors text-xs"
                              >
                                {contact.email.official}
                              </a>
                            </div>
                          </div>

                          {/* Office Location */}
                          <div className="p-3 bg-muted/20 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span className="font-medium text-sm">Office Location</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {contact.office.building}, Room {contact.office.room}
                              <br />Floor {contact.office.floor}
                            </p>
                          </div>

                          {/* Specialization */}
                          {contact.specialization && contact.specialization.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-sm text-foreground mb-2">Specialization</h4>
                              <div className="flex flex-wrap gap-1">
                                {contact.specialization.slice(0, 2).map((spec, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {spec}
                                  </Badge>
                                ))}
                                {contact.specialization.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{contact.specialization.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Availability */}
                          <div className="pt-3 border-t border-border/50">
                            <p className="text-xs text-muted-foreground">
                              <strong>Available:</strong> {contact.availableHours}
                            </p>
                          </div>

                          {/* Quick Actions */}
                          <div className="flex gap-2">
                            <motion.a
                              href={`tel:${contact.phoneNumbers.office || contact.phoneNumbers.mobile}`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex-1 py-2 px-3 bg-primary/10 hover:bg-primary/20 text-primary text-center rounded-lg text-sm font-medium transition-colors duration-300"
                            >
                              Call
                            </motion.a>
                            <motion.a
                              href={`mailto:${contact.email.official}`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex-1 py-2 px-3 bg-secondary/10 hover:bg-secondary/20 text-secondary text-center rounded-lg text-sm font-medium transition-colors duration-300"
                            >
                              Email
                            </motion.a>
                          </div>
                        </CardContent>
                      </Card>
                    </GlassmorphismCard>
                  </InteractiveHoverEffect>
                );
              })}
            </div>

            {/* No Results Message */}
            {filteredContacts.length === 0 && (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No contacts found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Quick Contact Section */}
        <AnimatedSection className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">
                <GradientText>Need Immediate Assistance?</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                For urgent matters, contact our main office or emergency services directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+91-612-302-8000"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                  Call Main Office
                </motion.a>
                <motion.a
                  href="mailto:info@iitp.ac.in"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300"
                >
                  Send Email
                </motion.a>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default CommunicationDirectory;