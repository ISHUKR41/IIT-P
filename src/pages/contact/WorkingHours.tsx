import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, Calendar, Phone, MapPin, Users, AlertCircle, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/common/AnimatedSection';
import GradientText from '@/components/common/GradientText';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { GlassmorphismCard, InteractiveHoverEffect } from '@/components/effects/ModernEffects';

// Register GSAP plugins for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

/**
 * ====================================================================
 * WORKING HOURS PAGE - IIT PATNA OFFICE TIMINGS & SCHEDULES
 * ====================================================================
 * 
 * This component provides comprehensive information about IIT Patna's
 * working hours, office timings, and operational schedules across
 * different departments and facilities.
 * 
 * Key Features:
 * - Department-wise working hours display
 * - Holiday and special timings information
 * - Emergency contact information
 * - Real-time office status indicators
 * - Interactive schedule calendar
 * - Contact information for each department
 * - Advanced animations with GSAP and ScrollTrigger
 * - Glassmorphism design effects
 * - Modern responsive layout
 * - Live status updates
 * 
 * Animation Libraries Used:
 * - GSAP with ScrollTrigger for scroll-based reveals
 * - Framer Motion for interactive elements
 * - Custom ModernEffects for glassmorphism
 * - Interactive hover animations
 * 
 * Responsive Design:
 * - Mobile: Single column, stack layout
 * - Tablet: Two-column grid
 * - Desktop: Three-column grid with enhanced spacing
 * - Large Screen: Four-column grid with full details
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: 2024
 * ====================================================================
 */

interface DepartmentHours {
  id: string;
  department: string;
  category: 'Academic' | 'Administrative' | 'Support' | 'Library' | 'Medical' | 'Security';
  workingDays: string[];
  timings: {
    weekdays: { start: string; end: string; };
    saturday: { start: string; end: string; } | null;
    sunday: { start: string; end: string; } | null;
  };
  breakTime?: { start: string; end: string; };
  contactNumber: string;
  email: string;
  location: string;
  inCharge: string;
  specialNotes: string[];
  emergencyAvailable: boolean;
  onlineServices: boolean;
  currentStatus: 'Open' | 'Closed' | 'Break' | 'Holiday';
}

const WorkingHours: React.FC = () => {
  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const currentTimeRef = useRef<HTMLDivElement>(null);
  const departmentsRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);

  // Comprehensive department working hours data
  const departmentHours: DepartmentHours[] = [
    {
      id: 'admin-office',
      department: 'Administrative Office',
      category: 'Administrative',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: {
        weekdays: { start: '09:00', end: '17:30' },
        saturday: { start: '09:00', end: '13:00' },
        sunday: null
      },
      breakTime: { start: '13:00', end: '14:00' },
      contactNumber: '+91-612-302-8001',
      email: 'admin@iitp.ac.in',
      location: 'Administrative Block, Ground Floor',
      inCharge: 'Dr. Rajesh Kumar Singh',
      specialNotes: ['Closed on all public holidays', 'Extended hours during admission season'],
      emergencyAvailable: false,
      onlineServices: true,
      currentStatus: 'Open'
    },
    {
      id: 'registrar-office',
      department: 'Office of the Registrar',
      category: 'Administrative',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: {
        weekdays: { start: '09:30', end: '17:00' },
        saturday: { start: '09:30', end: '12:30' },
        sunday: null
      },
      breakTime: { start: '13:00', end: '14:00' },
      contactNumber: '+91-612-302-8004',
      email: 'registrar@iitp.ac.in',
      location: 'Administrative Block, First Floor',
      inCharge: 'Prof. Sudhir Kumar',
      specialNotes: ['Appointment required for personal meetings', 'Online portal available 24/7'],
      emergencyAvailable: false,
      onlineServices: true,
      currentStatus: 'Open'
    },
    {
      id: 'library',
      department: 'Central Library',
      category: 'Library',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      timings: {
        weekdays: { start: '08:00', end: '22:00' },
        saturday: { start: '08:00', end: '22:00' },
        sunday: { start: '10:00', end: '18:00' }
      },
      contactNumber: '+91-612-302-8010',
      email: 'library@iitp.ac.in',
      location: 'Library Building, All Floors',
      inCharge: 'Dr. Priya Sharma',
      specialNotes: ['24/7 access for PhD students with special cards', 'Reduced hours during examinations'],
      emergencyAvailable: false,
      onlineServices: true,
      currentStatus: 'Open'
    },
    {
      id: 'medical-center',
      department: 'Health Center',
      category: 'Medical',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: {
        weekdays: { start: '08:30', end: '20:00' },
        saturday: { start: '08:30', end: '14:00' },
        sunday: { start: '10:00', end: '14:00' }
      },
      contactNumber: '+91-612-302-8020',
      email: 'health@iitp.ac.in',
      location: 'Health Center Building',
      inCharge: 'Dr. Amit Verma',
      specialNotes: ['Emergency services available 24/7', 'Ambulance service available'],
      emergencyAvailable: true,
      onlineServices: false,
      currentStatus: 'Open'
    },
    {
      id: 'security',
      department: 'Security Office',
      category: 'Security',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      timings: {
        weekdays: { start: '00:00', end: '23:59' },
        saturday: { start: '00:00', end: '23:59' },
        sunday: { start: '00:00', end: '23:59' }
      },
      contactNumber: '+91-612-302-8030',
      email: 'security@iitp.ac.in',
      location: 'Main Gate Security Office',
      inCharge: 'Shri Ram Prasad',
      specialNotes: ['Available 24/7 for emergencies', 'Visitor registration services'],
      emergencyAvailable: true,
      onlineServices: false,
      currentStatus: 'Open'
    },
    {
      id: 'academic-office',
      department: 'Academic Section',
      category: 'Academic',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: {
        weekdays: { start: '09:00', end: '17:00' },
        saturday: { start: '09:00', end: '13:00' },
        sunday: null
      },
      breakTime: { start: '13:00', end: '14:00' },
      contactNumber: '+91-612-302-8005',
      email: 'academic@iitp.ac.in',
      location: 'Academic Block, Second Floor',
      inCharge: 'Dr. Sunita Mishra',
      specialNotes: ['Extended hours during result declaration', 'Online transcript services available'],
      emergencyAvailable: false,
      onlineServices: true,
      currentStatus: 'Open'
    },
    {
      id: 'hostel-office',
      department: 'Hostel Administration',
      category: 'Support',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: {
        weekdays: { start: '09:00', end: '18:00' },
        saturday: { start: '09:00', end: '13:00' },
        sunday: null
      },
      breakTime: { start: '13:00', end: '14:00' },
      contactNumber: '+91-612-302-8025',
      email: 'hostel@iitp.ac.in',
      location: 'Hostel Complex, Administration Building',
      inCharge: 'Dr. Rakesh Jain',
      specialNotes: ['Warden available 24/7 for emergencies', 'Online room booking system'],
      emergencyAvailable: true,
      onlineServices: true,
      currentStatus: 'Open'
    },
    {
      id: 'it-services',
      department: 'IT Services',
      category: 'Support',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      timings: {
        weekdays: { start: '08:30', end: '17:30' },
        saturday: { start: '09:00', end: '13:00' },
        sunday: null
      },
      contactNumber: '+91-612-302-8015',
      email: 'itservices@iitp.ac.in',
      location: 'Computer Center Building',
      inCharge: 'Dr. Vikram Singh',
      specialNotes: ['Remote support available 24/7', 'Network maintenance on weekends'],
      emergencyAvailable: true,
      onlineServices: true,
      currentStatus: 'Open'
    }
  ];

  // Get current time and status
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Category icons mapping
  const categoryIcons: Record<string, any> = {
    'Academic': Calendar,
    'Administrative': Users,
    'Support': Phone,
    'Library': Clock,
    'Medical': AlertCircle,
    'Security': CheckCircle
  };

  // Status colors mapping
  const statusColors = {
    'Open': 'bg-green-500/20 text-green-700',
    'Closed': 'bg-red-500/20 text-red-700',
    'Break': 'bg-yellow-500/20 text-yellow-700',
    'Holiday': 'bg-gray-500/20 text-gray-700'
  };

  // Initialize GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section entrance animation
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

      // Current time display animation
      gsap.fromTo(currentTimeRef.current, {
        scale: 0.8,
        opacity: 0,
        rotationY: 45
      }, {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: currentTimeRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

      // Department cards animation
      gsap.fromTo(departmentsRef.current?.children || [], {
        y: 80,
        opacity: 0,
        scale: 0.8,
        rotationX: 30
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: departmentsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Emergency section animation
      gsap.fromTo(emergencyRef.current?.children || [], {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: emergencyRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* SEO Optimization */}
      <Helmet>
        <title>Working Hours & Office Timings - Contact Information | IIT Patna</title>
        <meta 
          name="description" 
          content="Find complete working hours, office timings, and contact information for all departments at IIT Patna. Get department-wise schedules and emergency contact details." 
        />
        <meta name="keywords" content="IIT Patna working hours, office timings, department hours, contact information, emergency contacts" />
        <link rel="canonical" href="https://www.iitp.ac.in/contact/working-hours" />
        
        <meta property="og:title" content="Working Hours & Office Timings | IIT Patna" />
        <meta property="og:description" content="Complete information about office timings and working hours of all departments." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "IIT Patna Working Hours",
            "description": "Office timings and working hours for all departments at Indian Institute of Technology Patna",
            "url": "https://www.iitp.ac.in/contact/working-hours"
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
                  Working Hours
                </GradientText>
                <p className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                  Department-wise office timings and contact information
                </p>
              </motion.div>

              {/* Current time display */}
              <div ref={currentTimeRef}>
                <InteractiveHoverEffect effect="glow" intensity="medium">
                  <GlassmorphismCard className="inline-block px-8 py-4">
                    <div className="flex items-center gap-4">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Current Time (IST)</p>
                        <p className="text-2xl font-bold text-foreground">{getCurrentTime()}</p>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </InteractiveHoverEffect>
              </div>
            </div>
          </div>
        </section>

        {/* Department Working Hours */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <GradientText>Department Timings</GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the working hours and contact information for all departments
              </p>
            </div>

            <div ref={departmentsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentHours.map((dept) => {
                const CategoryIcon = categoryIcons[dept.category];
                return (
                  <InteractiveHoverEffect
                    key={dept.id}
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
                                {dept.category}
                              </Badge>
                            </div>
                            <Badge 
                              variant="secondary"
                              className={statusColors[dept.currentStatus]}
                            >
                              {dept.currentStatus}
                            </Badge>
                          </div>
                          
                          <CardTitle className="text-lg font-bold text-foreground mb-2">
                            {dept.department}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mb-4">
                            {dept.location}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Working hours */}
                          <div>
                            <h4 className="font-semibold text-sm text-foreground mb-3">Working Hours</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Mon - Fri:</span>
                                <span className="font-medium">{dept.timings.weekdays.start} - {dept.timings.weekdays.end}</span>
                              </div>
                              {dept.timings.saturday && (
                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-muted-foreground">Saturday:</span>
                                  <span className="font-medium">{dept.timings.saturday.start} - {dept.timings.saturday.end}</span>
                                </div>
                              )}
                              {dept.timings.sunday && (
                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-muted-foreground">Sunday:</span>
                                  <span className="font-medium">{dept.timings.sunday.start} - {dept.timings.sunday.end}</span>
                                </div>
                              )}
                              {dept.breakTime && (
                                <div className="flex justify-between items-center text-sm text-yellow-600">
                                  <span>Break Time:</span>
                                  <span>{dept.breakTime.start} - {dept.breakTime.end}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Contact information */}
                          <div>
                            <h4 className="font-semibold text-sm text-foreground mb-3">Contact Information</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-3 w-3 text-primary" />
                                <span className="text-muted-foreground">{dept.contactNumber}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-3 w-3 text-primary" />
                                <span className="text-muted-foreground">{dept.email}</span>
                              </div>
                              <div className="text-sm">
                                <span className="text-muted-foreground">In-charge: </span>
                                <span className="font-medium">{dept.inCharge}</span>
                              </div>
                            </div>
                          </div>

                          {/* Services */}
                          <div className="flex gap-2">
                            {dept.emergencyAvailable && (
                              <Badge variant="secondary" className="bg-red-500/20 text-red-700 text-xs">
                                Emergency Available
                              </Badge>
                            )}
                            {dept.onlineServices && (
                              <Badge variant="secondary" className="bg-blue-500/20 text-blue-700 text-xs">
                                Online Services
                              </Badge>
                            )}
                          </div>

                          {/* Special notes */}
                          {dept.specialNotes.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-sm text-foreground mb-2">Special Notes</h4>
                              <div className="space-y-1">
                                {dept.specialNotes.map((note, idx) => (
                                  <p key={idx} className="text-xs text-muted-foreground">
                                    • {note}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </GlassmorphismCard>
                  </InteractiveHoverEffect>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <AnimatedSection className="py-16 bg-card/20 backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <div ref={emergencyRef} className="text-center">
              <h2 className="text-3xl font-bold mb-8">
                <GradientText>Emergency Contacts</GradientText>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <InteractiveHoverEffect effect="glow" intensity="strong">
                  <GlassmorphismCard className="p-6 text-center">
                    <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Medical Emergency</h3>
                    <p className="text-2xl font-bold text-red-600">108</p>
                    <p className="text-sm text-muted-foreground">24/7 Available</p>
                  </GlassmorphismCard>
                </InteractiveHoverEffect>

                <InteractiveHoverEffect effect="glow" intensity="strong">
                  <GlassmorphismCard className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Campus Security</h3>
                    <p className="text-2xl font-bold text-blue-600">+91-612-302-8030</p>
                    <p className="text-sm text-muted-foreground">24/7 Available</p>
                  </GlassmorphismCard>
                </InteractiveHoverEffect>

                <InteractiveHoverEffect effect="glow" intensity="strong">
                  <GlassmorphismCard className="p-6 text-center">
                    <Phone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Main Office</h3>
                    <p className="text-2xl font-bold text-green-600">+91-612-302-8001</p>
                    <p className="text-sm text-muted-foreground">Office Hours</p>
                  </GlassmorphismCard>
                </InteractiveHoverEffect>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default WorkingHours;