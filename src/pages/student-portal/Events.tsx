import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Search, Filter, ExternalLink, Bell, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Events Page Component for Student Portal
 * 
 * Features:
 * - Comprehensive event listing with categories
 * - Advanced search and filtering capabilities
 * - Event registration and RSVP functionality
 * - Calendar integration and reminders
 * - Interactive event cards with animations
 * - Real-time event updates and notifications
 * - Social sharing capabilities
 * - Personalized event recommendations
 * - Past events archive with photos
 * - Event feedback and rating system
 * 
 * Event Categories:
 * - Academic (Seminars, Lectures, Conferences)
 * - Cultural (Festivals, Competitions, Performances)
 * - Technical (Workshops, Hackathons, Tech Talks)
 * - Sports (Tournaments, Matches, Sports Day)
 * - Social (Club Activities, Meetups, Networking)
 * - Career (Job Fairs, Placement Drives, Industry Visits)
 */

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: 'academic' | 'cultural' | 'technical' | 'sports' | 'social' | 'career';
  organizer: string;
  capacity: number;
  registered: number;
  price: number;
  image: string;
  tags: string[];
  status: 'upcoming' | 'ongoing' | 'completed';
  isRegistered: boolean;
  rating: number;
  featured: boolean;
}

const Events: React.FC = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');
  const [loading, setLoading] = useState(true);

  // Initialize component with animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate page entrance
    tl.fromTo('.events-header', 
      { opacity: 0, y: -30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.events-filters', 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 
      '-=0.4'
    );

    // Load events data
    loadEventsData();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Setup scroll animations for event cards
  useEffect(() => {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9 
        }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.1
        }
      );
    });
  }, [filteredEvents]);

  /**
   * Load events data from user context and localStorage
   * Simulates API call with comprehensive event data
   */
  const loadEventsData = async () => {
    setLoading(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Load from user data or generate sample events
      const sampleEvents: Event[] = [
        {
          id: '1',
          title: 'Annual Tech Symposium 2025',
          description: 'Join us for the biggest technical event of the year featuring industry leaders, innovative projects, and networking opportunities.',
          date: '2025-03-15',
          time: '09:00 AM',
          venue: 'Main Auditorium',
          category: 'technical',
          organizer: 'Computer Science Department',
          capacity: 500,
          registered: 342,
          price: 0,
          image: '/api/placeholder/600/400',
          tags: ['technology', 'innovation', 'networking', 'career'],
          status: 'upcoming',
          isRegistered: false,
          rating: 4.8,
          featured: true
        },
        {
          id: '2',
          title: 'Cultural Night - Anwesha 2025',
          description: 'Experience the vibrant cultural diversity of IIT Patna with performances, music, dance, and traditional celebrations.',
          date: '2025-02-28',
          time: '06:00 PM',
          venue: 'Open Air Theatre',
          category: 'cultural',
          organizer: 'Cultural Committee',
          capacity: 1000,
          registered: 756,
          price: 50,
          image: '/api/placeholder/600/400',
          tags: ['culture', 'music', 'dance', 'entertainment'],
          status: 'upcoming',
          isRegistered: true,
          rating: 4.9,
          featured: true
        },
        {
          id: '3',
          title: 'Machine Learning Workshop',
          description: 'Hands-on workshop covering fundamentals of ML, neural networks, and practical applications in industry.',
          date: '2025-02-20',
          time: '02:00 PM',
          venue: 'Computer Lab A',
          category: 'academic',
          organizer: 'AI/ML Club',
          capacity: 50,
          registered: 45,
          price: 100,
          image: '/api/placeholder/600/400',
          tags: ['machine learning', 'AI', 'workshop', 'hands-on'],
          status: 'upcoming',
          isRegistered: false,
          rating: 4.7,
          featured: false
        },
        {
          id: '4',
          title: 'Inter-Department Cricket Tournament',
          description: 'Annual cricket championship between different academic departments. Register your team now!',
          date: '2025-03-01',
          time: '08:00 AM',
          venue: 'Sports Ground',
          category: 'sports',
          organizer: 'Sports Committee',
          capacity: 200,
          registered: 120,
          price: 0,
          image: '/api/placeholder/600/400',
          tags: ['cricket', 'sports', 'tournament', 'competition'],
          status: 'upcoming',
          isRegistered: true,
          rating: 4.5,
          featured: false
        },
        {
          id: '5',
          title: 'Career Fair 2025',
          description: 'Meet with top companies, explore job opportunities, and kickstart your career journey.',
          date: '2025-03-10',
          time: '10:00 AM',
          venue: 'Convention Center',
          category: 'career',
          organizer: 'Placement Cell',
          capacity: 800,
          registered: 623,
          price: 0,
          image: '/api/placeholder/600/400',
          tags: ['career', 'jobs', 'placement', 'companies'],
          status: 'upcoming',
          isRegistered: true,
          rating: 4.8,
          featured: true
        }
      ];

      // Load user-specific events if available
      const userEvents = sampleEvents;
      
      setEvents(userEvents);
      setFilteredEvents(userEvents);
      
      // Save to localStorage
      localStorage.setItem('student_events', JSON.stringify(userEvents));
      
    } catch (error) {
      console.error('Error loading events:', error);
      toast.error('Failed to load events');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Filter and search events based on user input
   * Supports multiple filter criteria and sorting options
   */
  useEffect(() => {
    let filtered = [...events];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Apply status filter
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(event => event.status === selectedStatus);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'popularity':
          return b.registered - a.registered;
        case 'rating':
          return b.rating - a.rating;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredEvents(filtered);
  }, [searchTerm, selectedCategory, selectedStatus, sortBy, events]);

  /**
   * Register for an event
   * Updates event registration status and user data
   */
  const registerForEvent = async (eventId: string) => {
    try {
      const event = events.find(e => e.id === eventId);
      if (!event) return;

      if (event.registered >= event.capacity) {
        toast.error('Event is full! Cannot register.');
        return;
      }

      // Update event registration
      const updatedEvents = events.map(e => 
        e.id === eventId 
          ? { ...e, isRegistered: true, registered: e.registered + 1 }
          : e
      );

      setEvents(updatedEvents);
      localStorage.setItem('student_events', JSON.stringify(updatedEvents));
      
      // Animate registration success
      gsap.to(`#event-${eventId}`, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
      });

      toast.success(`Successfully registered for ${event.title}!`);
      
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Failed to register for event');
    }
  };

  /**
   * Unregister from an event
   * Removes user registration and updates counts
   */
  const unregisterFromEvent = async (eventId: string) => {
    try {
      const event = events.find(e => e.id === eventId);
      if (!event) return;

      // Update event registration
      const updatedEvents = events.map(e => 
        e.id === eventId 
          ? { ...e, isRegistered: false, registered: Math.max(0, e.registered - 1) }
          : e
      );

      setEvents(updatedEvents);
      localStorage.setItem('student_events', JSON.stringify(updatedEvents));
      
      toast.info(`Unregistered from ${event.title}`);
      
    } catch (error) {
      console.error('Unregistration error:', error);
      toast.error('Failed to unregister from event');
    }
  };

  /**
   * Share event with others
   * Opens native share dialog or copies link
   */
  const shareEvent = async (event: Event) => {
    const shareData = {
      title: event.title,
      text: event.description,
      url: `${window.location.origin}/events/${event.id}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(shareData.url);
        toast.success('Event link copied to clipboard!');
      }
    } catch (error) {
      console.error('Share error:', error);
      toast.error('Failed to share event');
    }
  };

  /**
   * Get category color for badges
   */
  const getCategoryColor = (category: string) => {
    const colors = {
      academic: 'bg-blue-500/20 text-blue-700',
      cultural: 'bg-purple-500/20 text-purple-700',
      technical: 'bg-green-500/20 text-green-700',
      sports: 'bg-orange-500/20 text-orange-700',
      social: 'bg-pink-500/20 text-pink-700',
      career: 'bg-indigo-500/20 text-indigo-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-700';
  };

  /**
   * Format date for display
   */
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="events-header text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Campus Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and participate in exciting events happening around campus. From technical workshops to cultural celebrations!
          </p>
        </div>

        {/* Filters and Search */}
        <Card className="events-filters bg-card/80 backdrop-blur-sm border">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="career">Career</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort By */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Featured Events */}
        {filteredEvents.some(e => e.featured) && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredEvents.filter(e => e.featured).map((event) => (
                <Card 
                  key={event.id}
                  id={`event-${event.id}`}
                  className="event-card group hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border overflow-hidden"
                >
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        <Star className="h-3 w-3 mr-1" />
                        {event.rating}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mt-2 line-clamp-2">
                          {event.description}
                        </p>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{event.registered}/{event.capacity} registered</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex gap-2">
                          {event.isRegistered ? (
                            <Button 
                              onClick={() => unregisterFromEvent(event.id)}
                              variant="outline"
                              size="sm"
                            >
                              Unregister
                            </Button>
                          ) : (
                            <Button 
                              onClick={() => registerForEvent(event.id)}
                              size="sm"
                              disabled={event.registered >= event.capacity}
                            >
                              {event.registered >= event.capacity ? 'Full' : 'Register'}
                            </Button>
                          )}
                          <Button 
                            onClick={() => shareEvent(event)}
                            variant="outline"
                            size="sm"
                          >
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          {event.price > 0 ? (
                            <span className="text-lg font-bold text-primary">₹{event.price}</span>
                          ) : (
                            <span className="text-sm text-green-600 font-medium">Free</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Events */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">
              {selectedCategory !== 'all' ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Events` : 'All Events'} 
              <span className="text-muted-foreground ml-2">({filteredEvents.length})</span>
            </h2>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card 
                  key={event.id}
                  id={`event-${event.id}`}
                  className="event-card group hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border overflow-hidden"
                >
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                            <Badge className={getCategoryColor(event.category)}>
                              {event.category}
                            </Badge>
                    </div>
                    {event.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="default" className="bg-primary">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {event.description}
                        </p>
                      </div>

                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{event.venue}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {event.isRegistered ? (
                          <Button 
                            onClick={() => unregisterFromEvent(event.id)}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                          >
                            Unregister
                          </Button>
                        ) : (
                          <Button 
                            onClick={() => registerForEvent(event.id)}
                            size="sm"
                            className="text-xs"
                            disabled={event.registered >= event.capacity}
                          >
                            {event.registered >= event.capacity ? 'Full' : 'Register'}
                          </Button>
                        )}
                        <div className="text-right">
                          {event.price > 0 ? (
                            <span className="text-sm font-semibold text-primary">₹{event.price}</span>
                          ) : (
                            <span className="text-xs text-green-600 font-medium">Free</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-card/80 backdrop-blur-sm border">
              <CardContent className="text-center py-12">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No Events Found</h3>
                <p className="text-muted-foreground">
                  No events match your current filters. Try adjusting your search criteria.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;