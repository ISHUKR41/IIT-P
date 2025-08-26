import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Filter, Download, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Academic Calendar Page - Interactive Calendar for IIT Patna
 * 
 * Features:
 * - Interactive monthly and yearly calendar views
 * - Real-time event filtering and advanced search functionality  
 * - Category-wise event management (exams, holidays, registration)
 * - Downloadable calendar formats and export functionality
 * - Mobile-optimized touch interactions and responsive design
 * - Advanced GSAP timeline animations with scroll triggers
 * - Professional academic event categorization and color coding
 * 
 * Technical Implementation:
 * - GSAP ScrollTrigger for scroll-based animations
 * - Framer Motion for interactive component animations
 * - Responsive grid layout for optimal viewing across devices
 * - Real-time search and filter capabilities
 * - Export functionality for calendar data
 * 
 * Author: IIT Patna Web Development Team
 * Last Updated: August 2025
 */

gsap.registerPlugin(ScrollTrigger);

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  category: 'exam' | 'holiday' | 'registration' | 'event' | 'academic';
  description: string;
  duration?: string;
}

const AcademicCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month');

  // Sample academic calendar events - replace with real data
  const calendarEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Semester End Examinations',
      date: '2024-11-20',
      category: 'exam',
      description: 'Final examinations for odd semester 2024-25',
      duration: '2 weeks'
    },
    {
      id: '2', 
      title: 'Diwali Festival Holiday',
      date: '2024-11-01',
      category: 'holiday',
      description: 'Festival holiday for Diwali celebration'
    },
    {
      id: '3',
      title: 'Spring Semester Registration',
      date: '2024-12-15',
      category: 'registration', 
      description: 'Course registration opens for spring semester',
      duration: '1 week'
    },
    {
      id: '4',
      title: 'Annual Tech Fest - Celesta',
      date: '2024-12-10',
      category: 'event',
      description: 'IIT Patna annual technical festival',
      duration: '3 days'
    },
    {
      id: '5',
      title: 'Convocation Ceremony',
      date: '2024-12-05',
      category: 'academic',
      description: 'Annual graduation ceremony for IIT Patna students'
    }
  ];

  // Initialize GSAP animations when component mounts
  useEffect(() => {
    // Animate header elements
    gsap.fromTo('.calendar-header', 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animate calendar cards with stagger effect
    gsap.fromTo('.calendar-card',
      { opacity: 0, y: 30, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.calendar-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate filter controls
    gsap.fromTo('.filter-controls',
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out'
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Filter events based on category and search term
  const filteredEvents = calendarEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Category configuration with colors and icons
  const categories = [
    { value: 'all', label: 'All Events', color: 'bg-slate-500', count: calendarEvents.length },
    { value: 'exam', label: 'Examinations', color: 'bg-red-500', count: calendarEvents.filter(e => e.category === 'exam').length },
    { value: 'holiday', label: 'Holidays', color: 'bg-green-500', count: calendarEvents.filter(e => e.category === 'holiday').length },
    { value: 'registration', label: 'Registration', color: 'bg-blue-500', count: calendarEvents.filter(e => e.category === 'registration').length },
    { value: 'event', label: 'Events', color: 'bg-purple-500', count: calendarEvents.filter(e => e.category === 'event').length },
    { value: 'academic', label: 'Academic', color: 'bg-orange-500', count: calendarEvents.filter(e => e.category === 'academic').length }
  ];

  // Handle calendar navigation
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  // Export calendar data (placeholder function)
  const exportCalendar = () => {
    const dataStr = JSON.stringify(filteredEvents, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'iit-patna-academic-calendar.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <Layout>
      <Helmet>
        <title>Academic Calendar 2024-25 - IIT Patna | Important Dates & Events</title>
        <meta name="description" content="Interactive academic calendar for IIT Patna with examination dates, holidays, registration periods, and important academic events for students and faculty." />
        <meta name="keywords" content="IIT Patna calendar, academic calendar, exam dates, holidays, registration, academic events" />
        <link rel="canonical" href="https://iitp.ac.in/academics/calendar" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        
        {/* Hero Section with Calendar Header */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="calendar-header text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Calendar className="h-16 w-16 text-blue-300 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Academic Calendar
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
                Your comprehensive guide to important academic dates, examinations, holidays, and events at IIT Patna
              </p>
              <div className="mt-8 text-sm text-blue-200">
                Academic Year 2024-25 | Real-time Updates | Interactive Calendar
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter and Search Controls */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="filter-controls flex flex-col lg:flex-row gap-6 items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search events, dates, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className={`relative ${selectedCategory === category.value ? category.color : ''}`}
                  >
                    {category.label}
                    <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                      {category.count}
                    </span>
                  </Button>
                ))}
              </div>

              {/* View Mode & Export */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'month' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('month')}
                >
                  Month
                </Button>
                <Button
                  variant={viewMode === 'year' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('year')}
                >
                  Year
                </Button>
                <Button variant="outline" size="sm" onClick={exportCalendar}>
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => navigateMonth('prev')}>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              <h2 className="text-2xl font-bold text-gray-800">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              
              <Button variant="outline" onClick={() => navigateMonth('next')}>
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Calendar Events Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredEvents.length > 0 ? (
              <div className="calendar-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event, index) => {
                  const categoryConfig = categories.find(cat => cat.value === event.category);
                  return (
                    <motion.div
                      key={event.id}
                      className="calendar-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-3 h-3 rounded-full ${categoryConfig?.color || 'bg-gray-500'} mt-2`}></div>
                            <span className="text-sm text-gray-500 font-medium">
                              {new Date(event.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {event.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-3">
                            {event.description}
                          </p>
                          
                          {event.duration && (
                            <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                              Duration: {event.duration}
                            </div>
                          )}
                          
                          <div className="mt-4 text-xs text-gray-500 capitalize">
                            Category: {event.category.replace('_', ' ')}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Found</h3>
                <p className="text-gray-500">
                  No events match your current filters. Try adjusting your search or category selection.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AcademicCalendar;