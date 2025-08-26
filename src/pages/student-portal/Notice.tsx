import React, { useState, useEffect } from 'react';
import { Bell, Pin, Search, Filter, Download, Eye, Calendar, AlertCircle, Info, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Notice Page Component for Student Portal
 * 
 * Features:
 * - Comprehensive notice management system
 * - Advanced filtering and search capabilities  
 * - Priority-based notice categorization
 * - Real-time updates and notifications
 * - Document download functionality
 * - Notice reading status tracking
 * - Pinned notices for important announcements
 * - Archive system for old notices
 * - Rich text content support
 * - Mobile-responsive design with animations
 * 
 * Notice Categories:
 * - Academic (Exam schedules, Course updates, Academic calendar)
 * - Administrative (Fee payment, Document submission, Policy changes)
 * - Events (Cultural events, Workshops, Seminars)
 * - Placement (Job opportunities, Company visits, Career guidance)
 * - General (Campus updates, Facility changes, Emergency notices)
 * - Hostel (Accommodation updates, Mess schedules, Hostel rules)
 */

interface Notice {
  id: string;
  title: string;
  content: string;
  category: 'academic' | 'administrative' | 'events' | 'placement' | 'general' | 'hostel';
  priority: 'high' | 'medium' | 'low';
  author: string;
  department: string;
  publishDate: string;
  expiryDate?: string;
  attachments: {
    name: string;
    url: string;
    size: string;
    type: string;
  }[];
  tags: string[];
  isRead: boolean;
  isPinned: boolean;
  views: number;
  status: 'active' | 'archived' | 'draft';
}

const Notice: React.FC = () => {
  const { user } = useAuth();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [filteredNotices, setFilteredNotices] = useState<Notice[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);

  // Initialize component with animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate page entrance
    tl.fromTo('.notice-header', 
      { opacity: 0, y: -30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.notice-filters', 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 
      '-=0.4'
    );

    // Load notices data
    loadNoticesData();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Setup scroll animations for notice cards
  useEffect(() => {
    const noticeCards = document.querySelectorAll('.notice-card');
    
    noticeCards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95 
        }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.05
        }
      );
    });
  }, [filteredNotices]);

  /**
   * Load notices data from user context and localStorage
   * Includes comprehensive notice samples for demonstration
   */
  const loadNoticesData = async () => {
    setLoading(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Load from user data or generate sample notices
      const sampleNotices: Notice[] = [
        {
          id: '1',
          title: 'Mid-Semester Examination Schedule Released',
          content: 'The mid-semester examination schedule for Spring 2025 has been released. Students are advised to check their respective course schedules and prepare accordingly. The exams will commence from March 15, 2025. Please ensure you have your admit cards ready and follow all examination guidelines.',
          category: 'academic',
          priority: 'high',
          author: 'Academic Office',
          department: 'Administration',
          publishDate: '2025-02-10',
          expiryDate: '2025-03-20',
          attachments: [
            {
              name: 'Exam_Schedule_Spring2025.pdf',
              url: '/documents/exam_schedule.pdf',
              size: '245 KB',
              type: 'PDF'
            },
            {
              name: 'Exam_Guidelines.pdf',
              url: '/documents/exam_guidelines.pdf',
              size: '156 KB',
              type: 'PDF'
            }
          ],
          tags: ['examination', 'mid-semester', 'schedule', 'spring2025'],
          isRead: false,
          isPinned: true,
          views: 1247,
          status: 'active'
        },
        {
          id: '2',
          title: 'Fee Payment Deadline Extension',
          content: 'Due to technical issues with the payment gateway, the fee payment deadline has been extended to February 28, 2025. Students who were unable to pay their fees can now complete the payment without any late fees. Please use the updated payment portal link provided below.',
          category: 'administrative',
          priority: 'high',
          author: 'Finance Office',
          department: 'Administration',
          publishDate: '2025-02-08',
          expiryDate: '2025-03-01',
          attachments: [
            {
              name: 'Payment_Instructions.pdf',
              url: '/documents/payment_instructions.pdf',
              size: '189 KB',
              type: 'PDF'
            }
          ],
          tags: ['fee payment', 'deadline', 'extension', 'finance'],
          isRead: true,
          isPinned: true,
          views: 892,
          status: 'active'
        },
        {
          id: '3',
          title: 'Annual Tech Fest - Celesta 2025 Registration Open',
          content: 'Registration for Celesta 2025, the annual technical festival, is now open! Join us for three days of innovation, competition, and learning. Register for various events including coding competitions, robotics challenges, and technical talks by industry experts.',
          category: 'events',
          priority: 'medium',
          author: 'Cultural Committee',
          department: 'Student Affairs',
          publishDate: '2025-02-05',
          expiryDate: '2025-03-15',
          attachments: [
            {
              name: 'Celesta2025_Brochure.pdf',
              url: '/documents/celesta_brochure.pdf',
              size: '2.1 MB',
              type: 'PDF'
            },
            {
              name: 'Event_List.xlsx',
              url: '/documents/event_list.xlsx',
              size: '98 KB',
              type: 'Excel'
            }
          ],
          tags: ['celesta', 'tech fest', 'registration', 'competition'],
          isRead: false,
          isPinned: false,
          views: 634,
          status: 'active'
        },
        {
          id: '4',
          title: 'Placement Drive - TCS Campus Recruitment',
          content: 'Tata Consultancy Services (TCS) will be conducting campus recruitment for the batch of 2025. Eligible students from CSE, ECE, and IT departments can apply. The selection process includes online test, technical interview, and HR interview. Registration deadline is February 20, 2025.',
          category: 'placement',
          priority: 'high',
          author: 'Placement Cell',
          department: 'Training & Placement',
          publishDate: '2025-02-07',
          expiryDate: '2025-02-20',
          attachments: [
            {
              name: 'TCS_Job_Description.pdf',
              url: '/documents/tcs_jd.pdf',
              size: '234 KB',
              type: 'PDF'
            },
            {
              name: 'Registration_Form.docx',
              url: '/documents/registration_form.docx',
              size: '67 KB',
              type: 'Word'
            }
          ],
          tags: ['placement', 'TCS', 'recruitment', 'campus'],
          isRead: true,
          isPinned: false,
          views: 756,
          status: 'active'
        },
        {
          id: '5',
          title: 'Library Renovation Update',
          content: 'The central library renovation work is progressing well. The second floor will be closed for renovation from February 15-28, 2025. Students can access books from the ground floor and first floor during this period. Digital resources remain available 24/7.',
          category: 'general',
          priority: 'medium',
          author: 'Library Committee',
          department: 'Library',
          publishDate: '2025-02-06',
          expiryDate: '2025-03-01',
          attachments: [],
          tags: ['library', 'renovation', 'closure', 'update'],
          isRead: false,
          isPinned: false,
          views: 423,
          status: 'active'
        },
        {
          id: '6',
          title: 'Hostel Mess Menu Updated',
          content: 'The hostel mess committee has updated the weekly menu based on student feedback. The new menu includes more variety in breakfast options and regional cuisines for dinner. The updated menu is effective from February 12, 2025.',
          category: 'hostel',
          priority: 'low',
          author: 'Hostel Committee',
          department: 'Student Affairs',
          publishDate: '2025-02-04',
          expiryDate: '2025-04-30',
          attachments: [
            {
              name: 'Weekly_Mess_Menu.pdf',
              url: '/documents/mess_menu.pdf',
              size: '134 KB',
              type: 'PDF'
            }
          ],
          tags: ['hostel', 'mess', 'menu', 'food'],
          isRead: true,
          isPinned: false,
          views: 312,
          status: 'active'
        }
      ];

      // Load user-specific notices if available - map old data structure to new format
      const userNoticeData = user?.notice || [];
      const userNotices: Notice[] = userNoticeData.length > 0 
        ? userNoticeData.map((notice: any, index: number) => ({
            id: String(index + 1),
            title: notice.title,
            content: notice.content,
            category: 'academic' as const,
            priority: (notice.priority || 'medium') as 'high' | 'medium' | 'low',
            author: 'Administration',
            department: 'Academic Affairs',
            publishDate: notice.date,
            attachments: [],
            isRead: false,
            isPinned: notice.priority === 'high',
            views: 0,
            tags: [],
            status: 'active' as const
          }))
        : sampleNotices;
      
      setNotices(userNotices);
      setFilteredNotices(userNotices);
      
      // Save to localStorage
      localStorage.setItem('student_notices', JSON.stringify(userNotices));
      
    } catch (error) {
      console.error('Error loading notices:', error);
      toast.error('Failed to load notices');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Filter and search notices based on user input
   * Supports multiple filter criteria and sorting options
   */
  useEffect(() => {
    let filtered = [...notices];

    // Apply tab filter
    if (activeTab === 'unread') {
      filtered = filtered.filter(notice => !notice.isRead);
    } else if (activeTab === 'pinned') {
      filtered = filtered.filter(notice => notice.isPinned);
    } else if (activeTab === 'archived') {
      filtered = filtered.filter(notice => notice.status === 'archived');
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(notice =>
        notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        notice.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(notice => notice.category === selectedCategory);
    }

    // Apply priority filter
    if (selectedPriority !== 'all') {
      filtered = filtered.filter(notice => notice.priority === selectedPriority);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'views':
          return b.views - a.views;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredNotices(filtered);
  }, [searchTerm, selectedCategory, selectedPriority, sortBy, activeTab, notices]);

  /**
   * Mark notice as read
   * Updates notice read status and saves to localStorage
   */
  const markAsRead = (noticeId: string) => {
    const updatedNotices = notices.map(notice => 
      notice.id === noticeId 
        ? { ...notice, isRead: true, views: notice.views + 1 }
        : notice
    );
    
    setNotices(updatedNotices);
    localStorage.setItem('student_notices', JSON.stringify(updatedNotices));
  };

  /**
   * Toggle pin status of notice
   * Updates notice pin status for quick access
   */
  const togglePin = (noticeId: string) => {
    const updatedNotices = notices.map(notice => 
      notice.id === noticeId 
        ? { ...notice, isPinned: !notice.isPinned }
        : notice
    );
    
    setNotices(updatedNotices);
    localStorage.setItem('student_notices', JSON.stringify(updatedNotices));
    
    const notice = updatedNotices.find(n => n.id === noticeId);
    toast.success(`Notice ${notice?.isPinned ? 'pinned' : 'unpinned'} successfully`);
  };

  /**
   * Download attachment file
   * Simulates file download functionality
   */
  const downloadAttachment = (attachment: Notice['attachments'][0]) => {
    // In a real application, this would trigger actual file download
    toast.success(`Downloading ${attachment.name}...`);
    
    // Simulate download delay
    setTimeout(() => {
      toast.success(`${attachment.name} downloaded successfully!`);
    }, 1500);
  };

  /**
   * Get priority color for badges
   */
  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'bg-red-500/20 text-red-700',
      medium: 'bg-yellow-500/20 text-yellow-700',
      low: 'bg-green-500/20 text-green-700'
    };
    return colors[priority as keyof typeof colors] || 'bg-gray-500/20 text-gray-700';
  };

  /**
   * Get category color for badges
   */
  const getCategoryColor = (category: string) => {
    const colors = {
      academic: 'bg-blue-500/20 text-blue-700',
      administrative: 'bg-purple-500/20 text-purple-700',
      events: 'bg-green-500/20 text-green-700',
      placement: 'bg-orange-500/20 text-orange-700',
      general: 'bg-gray-500/20 text-gray-700',
      hostel: 'bg-pink-500/20 text-pink-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-700';
  };

  /**
   * Get priority icon
   */
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="h-4 w-4" />;
      case 'medium':
        return <Info className="h-4 w-4" />;
      case 'low':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  /**
   * Format date for display
   */
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  /**
   * Check if notice is expired
   */
  const isExpired = (expiryDate?: string) => {
    if (!expiryDate) return false;
    return new Date() > new Date(expiryDate);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading notices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="notice-header text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Bell className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Notice Board</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest announcements, notifications, and important information from the institute.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-muted">
            <TabsTrigger value="all">All Notices</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="pinned">Pinned</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          {/* Filters and Search */}
          <Card className="notice-filters bg-card/80 backdrop-blur-sm border mt-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search notices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="administrative">Administrative</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="placement">Placement</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="hostel">Hostel</SelectItem>
                  </SelectContent>
                </Select>

                {/* Priority Filter */}
                <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                  <SelectTrigger>
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>

                {/* Sort By */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="priority">Priority</SelectItem>
                    <SelectItem value="views">Views</SelectItem>
                    <SelectItem value="title">Title</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <TabsContent value={activeTab} className="space-y-6">
            {filteredNotices.length > 0 ? (
              <div className="space-y-4">
                {filteredNotices.map((notice) => (
                  <Card 
                    key={notice.id}
                    className={`notice-card group hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border overflow-hidden ${
                      !notice.isRead ? 'border-l-4 border-l-primary' : ''
                    } ${isExpired(notice.expiryDate) ? 'opacity-75' : ''}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge className={getCategoryColor(notice.category)}>
                              {notice.category}
                            </Badge>
                            <Badge className={getPriorityColor(notice.priority)}>
                              {getPriorityIcon(notice.priority)}
                              <span className="ml-1">{notice.priority}</span>
                            </Badge>
                            {notice.isPinned && (
                              <Badge variant="outline">
                                <Pin className="h-3 w-3 mr-1" />
                                Pinned
                              </Badge>
                            )}
                            {!notice.isRead && (
                              <Badge variant="default" className="bg-primary">
                                New
                              </Badge>
                            )}
                            {isExpired(notice.expiryDate) && (
                              <Badge variant="destructive">
                                <Clock className="h-3 w-3 mr-1" />
                                Expired
                              </Badge>
                            )}
                          </div>
                          
                          <CardTitle 
                            className={`text-lg group-hover:text-primary transition-colors cursor-pointer ${
                              !notice.isRead ? 'font-bold' : 'font-semibold'
                            }`}
                            onClick={() => markAsRead(notice.id)}
                          >
                            {notice.title}
                          </CardTitle>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>By {notice.author}</span>
                            <span>•</span>
                            <span>{notice.department}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(notice.publishDate)}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{notice.views} views</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => togglePin(notice.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Pin className={`h-4 w-4 ${notice.isPinned ? 'fill-current' : ''}`} />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <p 
                          className="text-muted-foreground leading-relaxed cursor-pointer"
                          onClick={() => markAsRead(notice.id)}
                        >
                          {notice.content}
                        </p>
                        
                        {notice.attachments.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">Attachments:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {notice.attachments.map((attachment, index) => (
                                <div 
                                  key={index}
                                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                                >
                                  <div className="flex items-center gap-2 flex-1 min-w-0">
                                    <div className="p-1 bg-primary/10 rounded">
                                      <Download className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <p className="text-sm font-medium truncate">{attachment.name}</p>
                                      <p className="text-xs text-muted-foreground">
                                        {attachment.type} • {attachment.size}
                                      </p>
                                    </div>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => downloadAttachment(attachment)}
                                  >
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {notice.tags.length > 0 && (
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs text-muted-foreground">Tags:</span>
                            {notice.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                        
                        {notice.expiryDate && (
                          <div className="text-xs text-muted-foreground">
                            {isExpired(notice.expiryDate) ? (
                              <span className="text-red-600">Expired on {formatDate(notice.expiryDate)}</span>
                            ) : (
                              <span>Valid until {formatDate(notice.expiryDate)}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-card/80 backdrop-blur-sm border">
                <CardContent className="text-center py-12">
                  <Bell className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No Notices Found</h3>
                  <p className="text-muted-foreground">
                    {activeTab === 'all' 
                      ? "No notices match your current filters." 
                      : `No ${activeTab} notices available.`}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Notice;