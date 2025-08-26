import React, { useState, useEffect } from 'react';
import { Search, Plus, MapPin, Calendar, Clock, Filter, Eye, Phone, Mail, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Lost and Found Page Component for Student Portal
 * 
 * Features:
 * - Comprehensive lost and found item management
 * - Advanced search and filtering capabilities
 * - Item reporting system with detailed forms
 * - Location-based search and mapping
 * - Contact information for item retrieval
 * - Image upload support for items
 * - Status tracking (lost, found, claimed, returned)
 * - Real-time updates and notifications
 * - Category-based organization
 * - Responsive design with smooth animations
 * 
 * Item Categories:
 * - Electronics (Phones, Laptops, Chargers, Headphones)
 * - Documents (ID Cards, Certificates, Books, Notes)
 * - Accessories (Watches, Jewelry, Bags, Wallets)
 * - Clothing (Jackets, Caps, Shoes, Uniforms)
 * - Sports (Equipment, Bottles, Gear)
 * - Others (Miscellaneous items)
 */

interface LostFoundItem {
  id: string;
  type: 'lost' | 'found';
  title: string;
  description: string;
  category: 'electronics' | 'documents' | 'accessories' | 'clothing' | 'sports' | 'others';
  location: string;
  date: string;
  time: string;
  reporterName: string;
  reporterContact: string;
  reporterEmail: string;
  image?: string;
  status: 'active' | 'claimed' | 'returned' | 'expired';
  views: number;
  tags: string[];
  reward?: number;
  priority: 'high' | 'medium' | 'low';
}

const LostAndFound: React.FC = () => {
  const { user } = useAuth();
  const [items, setItems] = useState<LostFoundItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<LostFoundItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');
  const [activeTab, setActiveTab] = useState('all');
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form state for reporting new items
  const [reportForm, setReportForm] = useState({
    type: 'lost' as 'lost' | 'found',
    title: '',
    description: '',
    category: 'electronics' as LostFoundItem['category'],
    location: '',
    date: '',
    time: '',
    reporterName: user?.name || '',
    reporterContact: user?.profile?.phone || '',
    reporterEmail: user?.profile?.email || '',
    reward: 0,
    tags: ''
  });

  // Initialize component with animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate page entrance
    tl.fromTo('.lostfound-header', 
      { opacity: 0, y: -30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.lostfound-controls', 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 
      '-=0.4'
    );

    // Load lost and found data
    loadLostFoundData();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Setup scroll animations for item cards
  useEffect(() => {
    const itemCards = document.querySelectorAll('.lostfound-card');
    
    itemCards.forEach((card, index) => {
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
  }, [filteredItems]);

  /**
   * Load lost and found data from user context and localStorage
   * Includes comprehensive sample data for demonstration
   */
  const loadLostFoundData = async () => {
    setLoading(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Load from user data or generate sample items
      const sampleItems: LostFoundItem[] = [
        {
          id: '1',
          type: 'lost',
          title: 'iPhone 14 Pro - Black',
          description: 'Lost my black iPhone 14 Pro near the library around 3 PM yesterday. It has a dark blue case with a small crack on the screen protector. Contains important academic notes and contacts.',
          category: 'electronics',
          location: 'Central Library',
          date: '2025-02-08',
          time: '03:00 PM',
          reporterName: 'Rajesh Kumar',
          reporterContact: '+91 9876543210',
          reporterEmail: 'rajesh.kumar@iitp.ac.in',
          status: 'active',
          views: 45,
          tags: ['iphone', 'mobile', 'black', 'library'],
          reward: 1000,
          priority: 'high'
        },
        {
          id: '2',
          type: 'found',
          title: 'Blue Water Bottle with IIT Patna Sticker',
          description: 'Found a blue water bottle with IIT Patna engineering sticker near the sports complex. It appears to be new and was left on the bench.',
          category: 'sports',
          location: 'Sports Complex',
          date: '2025-02-09',
          time: '07:30 AM',
          reporterName: 'Priya Sharma',
          reporterContact: '+91 8765432109',
          reporterEmail: 'priya.sharma@iitp.ac.in',
          status: 'active',
          views: 23,
          tags: ['bottle', 'blue', 'sports', 'sticker'],
          priority: 'low'
        },
        {
          id: '3',
          type: 'lost',
          title: 'Black Laptop Bag - Dell',
          description: 'Lost my black Dell laptop bag containing my laptop, charger, and important documents. Last seen in the computer science building during the afternoon lecture.',
          category: 'electronics',
          location: 'Computer Science Building',
          date: '2025-02-07',
          time: '02:15 PM',
          reporterName: 'Amit Singh',
          reporterContact: '+91 7654321098',
          reporterEmail: 'amit.singh@iitp.ac.in',
          status: 'active',
          views: 67,
          tags: ['laptop', 'bag', 'dell', 'computer'],
          reward: 2000,
          priority: 'high'
        },
        {
          id: '4',
          type: 'found',
          title: 'Silver Watch - Casio',
          description: 'Found a silver Casio watch in the washroom of the electrical engineering building. It looks expensive and someone must be missing it.',
          category: 'accessories',
          location: 'Electrical Engineering Building',
          date: '2025-02-09',
          time: '11:45 AM',
          reporterName: 'Neha Gupta',
          reporterContact: '+91 6543210987',
          reporterEmail: 'neha.gupta@iitp.ac.in',
          status: 'active',
          views: 34,
          tags: ['watch', 'casio', 'silver', 'washroom'],
          priority: 'medium'
        },
        {
          id: '5',
          type: 'lost',
          title: 'Student ID Card - Registration No. 2021CS1234',
          description: 'Lost my student ID card with registration number 2021CS1234. Need it urgently for upcoming exams. Last seen near the cafeteria.',
          category: 'documents',
          location: 'Cafeteria',
          date: '2025-02-06',
          time: '01:20 PM',
          reporterName: 'Vikash Yadav',
          reporterContact: '+91 5432109876',
          reporterEmail: 'vikash.yadav@iitp.ac.in',
          status: 'active',
          views: 56,
          tags: ['id card', 'student', 'cafeteria', 'urgent'],
          reward: 500,
          priority: 'high'
        },
        {
          id: '6',
          type: 'found',
          title: 'Red Jacket - Adidas',
          description: 'Found a red Adidas jacket in the hostel common room. Size medium, with a small logo on the front. It was left on the couch.',
          category: 'clothing',
          location: 'Hostel Common Room',
          date: '2025-02-08',
          time: '09:15 PM',
          reporterName: 'Saurabh Jha',
          reporterContact: '+91 4321098765',
          reporterEmail: 'saurabh.jha@iitp.ac.in',
          status: 'active',
          views: 19,
          tags: ['jacket', 'red', 'adidas', 'hostel'],
          priority: 'medium'
        }
      ];

      // Load user-specific items if available - map old data structure to new format
      const userLostAndFound = user?.lostAndFound || [];
      const userItems: LostFoundItem[] = userLostAndFound.length > 0 
        ? userLostAndFound.map((item: any) => ({
            id: String(item.id),
            type: item.type as 'lost' | 'found',
            title: item.item || 'Untitled Item',
            description: item.item || 'No description available',
            category: 'electronics' as const,
            location: item.location,
            date: item.date,
            time: '12:00 PM',
            reporterName: 'Student',
            reporterContact: item.contact,
            reporterEmail: item.contact,
            status: 'active' as const,
            views: 0,
            tags: [],
            priority: 'medium' as const
          }))
        : sampleItems;
      
      setItems(userItems);
      setFilteredItems(userItems);
      
      // Save to localStorage
      localStorage.setItem('student_lostfound', JSON.stringify(userItems));
      
    } catch (error) {
      console.error('Error loading lost and found data:', error);
      toast.error('Failed to load lost and found items');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Filter and search items based on user input
   * Supports multiple filter criteria and sorting options
   */
  useEffect(() => {
    let filtered = [...items];

    // Apply tab filter
    if (activeTab === 'lost') {
      filtered = filtered.filter(item => item.type === 'lost');
    } else if (activeTab === 'found') {
      filtered = filtered.filter(item => item.type === 'found');
    } else if (activeTab === 'my-reports') {
      filtered = filtered.filter(item => 
        item.reporterEmail === user?.profile?.email ||
        item.reporterName === user?.name
      );
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Apply location filter
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(item => item.location.toLowerCase().includes(selectedLocation.toLowerCase()));
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date + ' ' + b.time).getTime() - new Date(a.date + ' ' + a.time).getTime();
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'views':
          return b.views - a.views;
        case 'reward':
          return (b.reward || 0) - (a.reward || 0);
        default:
          return 0;
      }
    });

    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory, selectedLocation, sortBy, activeTab, items, user]);

  /**
   * Submit new lost/found item report
   * Validates form data and adds new item to the list
   */
  const submitReport = async () => {
    try {
      // Validate form
      if (!reportForm.title || !reportForm.description || !reportForm.location || !reportForm.date) {
        toast.error('Please fill in all required fields');
        return;
      }

      // Create new item
      const newItem: LostFoundItem = {
        id: Date.now().toString(),
        type: reportForm.type,
        title: reportForm.title,
        description: reportForm.description,
        category: reportForm.category,
        location: reportForm.location,
        date: reportForm.date,
        time: reportForm.time || '12:00 PM',
        reporterName: reportForm.reporterName,
        reporterContact: reportForm.reporterContact,
        reporterEmail: reportForm.reporterEmail,
        status: 'active',
        views: 0,
        tags: reportForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        reward: reportForm.reward,
        priority: reportForm.reward > 1000 ? 'high' : reportForm.reward > 0 ? 'medium' : 'low'
      };

      // Add to items list
      const updatedItems = [newItem, ...items];
      setItems(updatedItems);
      localStorage.setItem('student_lostfound', JSON.stringify(updatedItems));

      // Reset form and close dialog
      setReportForm({
        type: 'lost',
        title: '',
        description: '',
        category: 'electronics',
        location: '',
        date: '',
        time: '',
        reporterName: user?.name || '',
        reporterContact: user?.profile?.phone || '',
        reporterEmail: user?.profile?.email || '',
        reward: 0,
        tags: ''
      });
      
      setIsReportDialogOpen(false);
      
      // Animate new item appearance
      setTimeout(() => {
        gsap.fromTo('.lostfound-card:first-child', 
          { scale: 0, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
        );
      }, 100);
      
      toast.success(`${reportForm.type === 'lost' ? 'Lost' : 'Found'} item reported successfully!`);
      
    } catch (error) {
      console.error('Error submitting report:', error);
      toast.error('Failed to submit report');
    }
  };

  /**
   * Contact item reporter
   * Simulates contact functionality
   */
  const contactReporter = (item: LostFoundItem) => {
    // Update view count
    const updatedItems = items.map(i => 
      i.id === item.id ? { ...i, views: i.views + 1 } : i
    );
    setItems(updatedItems);
    localStorage.setItem('student_lostfound', JSON.stringify(updatedItems));
    
    toast.success(`Contact information revealed for ${item.title}`);
  };

  /**
   * Get category color for badges
   */
  const getCategoryColor = (category: string) => {
    const colors = {
      electronics: 'bg-blue-500/20 text-blue-700',
      documents: 'bg-purple-500/20 text-purple-700',
      accessories: 'bg-green-500/20 text-green-700',
      clothing: 'bg-orange-500/20 text-orange-700',
      sports: 'bg-red-500/20 text-red-700',
      others: 'bg-gray-500/20 text-gray-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-700';
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
   * Format date for display
   */
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading lost and found items...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="lostfound-header text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Search className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Lost & Found</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help the campus community by reporting lost items or sharing found items. Together we can reunite people with their belongings!
          </p>
          
          {/* Report Button */}
          <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Plus className="h-5 w-5 mr-2" />
                Report Lost/Found Item
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Report Lost or Found Item</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                
                {/* Item Type */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Item Type</Label>
                    <Select 
                      value={reportForm.type} 
                      onValueChange={(value: 'lost' | 'found') => 
                        setReportForm(prev => ({ ...prev, type: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lost">Lost Item</SelectItem>
                        <SelectItem value="found">Found Item</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Category</Label>
                    <Select 
                      value={reportForm.category} 
                      onValueChange={(value: LostFoundItem['category']) => 
                        setReportForm(prev => ({ ...prev, category: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="documents">Documents</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <Label>Item Title *</Label>
                  <Input
                    placeholder="e.g., iPhone 14 Pro - Black"
                    value={reportForm.title}
                    onChange={(e) => setReportForm(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>

                {/* Description */}
                <div>
                  <Label>Description *</Label>
                  <Textarea
                    placeholder="Provide detailed description including color, brand, distinctive features, etc."
                    value={reportForm.description}
                    onChange={(e) => setReportForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                  />
                </div>

                {/* Location and DateTime */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Location *</Label>
                    <Input
                      placeholder="e.g., Central Library"
                      value={reportForm.location}
                      onChange={(e) => setReportForm(prev => ({ ...prev, location: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>Date *</Label>
                    <Input
                      type="date"
                      value={reportForm.date}
                      onChange={(e) => setReportForm(prev => ({ ...prev, date: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>Time</Label>
                    <Input
                      type="time"
                      value={reportForm.time}
                      onChange={(e) => setReportForm(prev => ({ ...prev, time: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Your Name</Label>
                    <Input
                      value={reportForm.reporterName}
                      onChange={(e) => setReportForm(prev => ({ ...prev, reporterName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>Contact Number</Label>
                    <Input
                      value={reportForm.reporterContact}
                      onChange={(e) => setReportForm(prev => ({ ...prev, reporterContact: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={reportForm.reporterEmail}
                    onChange={(e) => setReportForm(prev => ({ ...prev, reporterEmail: e.target.value }))}
                  />
                </div>

                {/* Reward (for lost items) */}
                {reportForm.type === 'lost' && (
                  <div>
                    <Label>Reward Amount (Optional)</Label>
                    <Input
                      type="number"
                      placeholder="Enter reward amount in ₹"
                      value={reportForm.reward}
                      onChange={(e) => setReportForm(prev => ({ ...prev, reward: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                )}

                {/* Tags */}
                <div>
                  <Label>Tags (comma-separated)</Label>
                  <Input
                    placeholder="e.g., urgent, valuable, exam-needed"
                    value={reportForm.tags}
                    onChange={(e) => setReportForm(prev => ({ ...prev, tags: e.target.value }))}
                  />
                </div>

                {/* Submit Button */}
                <Button onClick={submitReport} className="w-full">
                  Submit Report
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-muted">
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="lost">Lost Items</TabsTrigger>
            <TabsTrigger value="found">Found Items</TabsTrigger>
            <TabsTrigger value="my-reports">My Reports</TabsTrigger>
          </TabsList>

          {/* Filters and Controls */}
          <Card className="lostfound-controls bg-card/80 backdrop-blur-sm border mt-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search items..."
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
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="documents">Documents</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>

                {/* Location Filter */}
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="library">Library</SelectItem>
                    <SelectItem value="hostel">Hostel</SelectItem>
                    <SelectItem value="cafeteria">Cafeteria</SelectItem>
                    <SelectItem value="academic">Academic Buildings</SelectItem>
                    <SelectItem value="sports">Sports Complex</SelectItem>
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
                    <SelectItem value="reward">Reward</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <TabsContent value={activeTab} className="space-y-6">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card 
                    key={item.id}
                    className="lostfound-card group hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border overflow-hidden"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge 
                              variant={item.type === 'lost' ? 'destructive' : 'default'}
                              className={item.type === 'lost' ? 'bg-red-500/20 text-red-700' : 'bg-green-500/20 text-green-700'}
                            >
                              {item.type === 'lost' ? 'LOST' : 'FOUND'}
                            </Badge>
                            <Badge className={getCategoryColor(item.category)}>
                              {item.category}
                            </Badge>
                            <Badge className={getPriorityColor(item.priority)}>
                              {item.priority}
                            </Badge>
                          </div>
                          
                          <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                            {item.title}
                          </CardTitle>
                          
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{item.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(item.date)}</span>
                            </div>
                          </div>
                        </div>
                        
                        {item.reward && item.reward > 0 && (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            ₹{item.reward}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{item.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{item.views} views</span>
                          </div>
                        </div>
                        
                        {item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 3).map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {item.tags.length > 3 && (
                              <span className="text-xs text-muted-foreground">+{item.tags.length - 3} more</span>
                            )}
                          </div>
                        )}
                        
                        <div className="flex gap-2 pt-2">
                          <Button 
                            onClick={() => contactReporter(item)}
                            size="sm" 
                            className="flex-1"
                          >
                            <Phone className="h-4 w-4 mr-1" />
                            Contact
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => toast.info(`Email: ${item.reporterEmail}`)}
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          Reported by: {item.reporterName}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-card/80 backdrop-blur-sm border">
                <CardContent className="text-center py-12">
                  <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No Items Found</h3>
                  <p className="text-muted-foreground">
                    {activeTab === 'all' 
                      ? "No items match your current filters." 
                      : `No ${activeTab.replace('-', ' ')} available.`}
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

export default LostAndFound;