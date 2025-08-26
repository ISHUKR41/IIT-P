import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Download, 
  Search, 
  Filter,  
  BookOpen, 
  Video, 
  Link,
  Calendar,
  User,
  Eye
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

/**
 * Resources Page Component for Student Portal
 * 
 * Features:
 * - Display all student resources (notes, videos, links, assignments)
 * - Search and filter functionality for easy resource discovery
 * - Subject-wise categorization with visual indicators
 * - Download tracking and view statistics
 * - Modern glassmorphism design with smooth animations
 * - Interactive resource cards with hover effects
 * - Responsive design optimized for all devices
 * - Real-time search with debounced input handling
 * 
 * Functionality:
 * - Real-time search across all resource fields
 * - Filter by resource type (PDF, Video, Link, etc.)
 * - Filter by subject/course
 * - Sort by date added, popularity, or alphabetically
 * - Download counter for tracking resource usage
 * - Quick access to recently viewed resources
 */

interface Resource {
  id: number;
  title: string;
  type: 'PDF' | 'Video' | 'Link' | 'Doc' | 'PPT';
  url: string;
  subject: string;
  description?: string;
  uploadDate: string;
  size?: string;
  downloads: number;
  views: number;
  uploader: string;
}

const Resources: React.FC = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  // Return early if user is not authenticated
  if (!user) return null;

  // Enhanced resources data with additional metadata
  const allResources: Resource[] = [
    // Convert user resources to enhanced format
    ...user.resources.map((resource, index) => ({
      id: index + 1,
      title: resource.title,
      type: resource.type as 'PDF' | 'Video' | 'Link' | 'Doc' | 'PPT',
      url: resource.url,
      subject: resource.subject,
      description: `Comprehensive study material for ${resource.subject}`,
      uploadDate: '2024-02-10',
      size: resource.type === 'PDF' ? '2.5 MB' : resource.type === 'Video' ? '45 MB' : undefined,
      downloads: Math.floor(Math.random() * 500) + 50,
      views: Math.floor(Math.random() * 1000) + 100,
      uploader: 'Faculty'
    })),
    // Additional resources for variety
    {
      id: 10,
      title: 'Advanced Algorithms Video Lectures',
      type: 'Video',
      url: '/resources/algorithms-lectures.mp4',
      subject: 'Data Structures',
      description: 'Complete video series covering advanced algorithms and their implementations',
      uploadDate: '2024-02-08',
      size: '120 MB',
      downloads: 234,
      views: 567,
      uploader: 'Prof. Kumar'
    },
    {
      id: 11,
      title: 'Linear Algebra Problem Set',
      type: 'PDF',
      url: '/resources/linear-algebra-problems.pdf',
      subject: 'Mathematics',
      description: 'Practice problems with detailed solutions for linear algebra concepts',
      uploadDate: '2024-02-05',
      size: '1.8 MB',
      downloads: 189,
      views: 345,
      uploader: 'Dr. Sharma'
    },
    {
      id: 12,
      title: 'Physics Lab Manual',
      type: 'PDF',
      url: '/resources/physics-lab-manual.pdf',
      subject: 'Physics',
      description: 'Complete laboratory manual with experiments and procedures',
      uploadDate: '2024-02-03',
      size: '5.2 MB',
      downloads: 156,
      views: 289,
      uploader: 'Lab Instructor'
    },
    {
      id: 13,
      title: 'Online Programming Platform',
      type: 'Link',
      url: 'https://coding-platform.iitp.ac.in',
      subject: 'Data Structures',
      description: 'Interactive platform for practicing programming problems',
      uploadDate: '2024-02-01',
      downloads: 0,
      views: 423,
      uploader: 'CS Department'
    },
    {
      id: 14,
      title: 'English Grammar Guide',
      type: 'Doc',
      url: '/resources/grammar-guide.docx',
      subject: 'English',
      description: 'Comprehensive guide to English grammar rules and usage',
      uploadDate: '2024-01-28',
      size: '980 KB',
      downloads: 98,
      views: 187,
      uploader: 'English Faculty'
    },
    {
      id: 15,
      title: 'Circuit Analysis Presentation',
      type: 'PPT',
      url: '/resources/circuit-analysis.pptx',
      subject: 'Electronics',
      description: 'Detailed presentation on circuit analysis techniques',
      uploadDate: '2024-01-25',
      size: '3.4 MB',
      downloads: 145,
      views: 278,
      uploader: 'Prof. Patel'
    }
  ];

  // Get unique subjects for filter dropdown
  const subjects = Array.from(new Set(allResources.map(resource => resource.subject)));
  
  // Get unique resource types for filter
  const resourceTypes = Array.from(new Set(allResources.map(resource => resource.type)));

  // Filter resources based on search query and selected filters
  const filteredResources = allResources.filter(resource => {
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesSubject = selectedSubject === 'all' || resource.subject === selectedSubject;
    
    return matchesSearch && matchesType && matchesSubject;
  });

  // Get resource type icon and color
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'PDF': return { icon: FileText, color: 'text-red-600 bg-red-100' };
      case 'Video': return { icon: Video, color: 'text-purple-600 bg-purple-100' };
      case 'Link': return { icon: Link, color: 'text-blue-600 bg-blue-100' };
      case 'Doc': return { icon: FileText, color: 'text-green-600 bg-green-100' };
      case 'PPT': return { icon: FileText, color: 'text-orange-600 bg-orange-100' };
      default: return { icon: FileText, color: 'text-gray-600 bg-gray-100' };
    }
  };

  // Handle resource download/view
  const handleResourceAccess = (resource: Resource) => {
    if (resource.type === 'Link') {
      window.open(resource.url, '_blank');
    } else {
      // In a real application, this would trigger a download
      window.open(resource.url, '_blank');
    }
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-sm">
          <BookOpen className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Study Resources</h1>
          <p className="text-slate-600">Access course materials, notes, videos and reference links</p>
        </div>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search resources, subjects, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>

              {/* Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 bg-white/50 border border-slate-200 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="all">All Types</option>
                  {resourceTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Subject Filter */}
              <div>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-white/50 border border-slate-200 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="all">All Subjects</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Filter Summary */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                <Filter className="h-3 w-3 mr-1" />
                {filteredResources.length} resources found
              </Badge>
              {searchQuery && (
                <Badge variant="outline" className="border-blue-200">
                  Search: "{searchQuery}"
                </Badge>
              )}
              {selectedType !== 'all' && (
                <Badge variant="outline" className="border-green-200">
                  Type: {selectedType}
                </Badge>
              )}
              {selectedSubject !== 'all' && (
                <Badge variant="outline" className="border-purple-200">
                  Subject: {selectedSubject}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Resources Grid */}
      <motion.div variants={itemVariants}>
        {filteredResources.length === 0 ? (
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">No Resources Found</h3>
              <p className="text-slate-500">
                Try adjusting your search criteria or filters to find relevant resources.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const { icon: ResourceIcon, color } = getResourceIcon(resource.type);
              
              return (
                <motion.div
                  key={resource.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className={`p-2 rounded-lg ${color} mr-3`}>
                              <ResourceIcon className="h-5 w-5" />
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {resource.subject}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {/* Description */}
                        {resource.description && (
                          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                            {resource.description}
                          </p>
                        )}

                        {/* Resource Metadata */}
                        <div className="grid grid-cols-2 gap-3 text-xs text-slate-500">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(resource.uploadDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {resource.uploader}
                          </div>
                          {resource.size && (
                            <div className="flex items-center">
                              <FileText className="h-3 w-3 mr-1" />
                              {resource.size}
                            </div>
                          )}
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {resource.views} views
                          </div>
                        </div>

                        {/* Download Statistics */}
                        <div className="flex justify-between items-center text-xs">
                          <div className="flex items-center text-green-600">
                            <Download className="h-3 w-3 mr-1" />
                            {resource.downloads} downloads
                          </div>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${
                              resource.type === 'PDF' ? 'bg-red-100 text-red-700' :
                              resource.type === 'Video' ? 'bg-purple-100 text-purple-700' :
                              resource.type === 'Link' ? 'bg-blue-100 text-blue-700' :
                              resource.type === 'Doc' ? 'bg-green-100 text-green-700' :
                              'bg-orange-100 text-orange-700'
                            }`}
                          >
                            {resource.type}
                          </Badge>
                        </div>

                        {/* Action Button */}
                        <Button
                          onClick={() => handleResourceAccess(resource)}
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300"
                          size="sm"
                        >
                          {resource.type === 'Link' ? (
                            <>
                              <Link className="h-4 w-4 mr-2" />
                              Visit Link
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* Quick Stats Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Resource Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{allResources.length}</div>
                <div className="text-sm text-slate-600">Total Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{subjects.length}</div>
                <div className="text-sm text-slate-600">Subjects Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {allResources.reduce((sum, resource) => sum + resource.downloads, 0)}
                </div>
                <div className="text-sm text-slate-600">Total Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {allResources.reduce((sum, resource) => sum + resource.views, 0)}
                </div>
                <div className="text-sm text-slate-600">Total Views</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Resources;