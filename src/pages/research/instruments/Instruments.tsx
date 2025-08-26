import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Microscope, 
  Zap, 
  Atom, 
  Search, 
  Filter,
  Clock,
  Users,
  MapPin,
  ExternalLink,
  Calendar,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Research Instruments Page - IIT Patna
 * Central facility for accessing and booking research instruments
 * Features: Real-time availability, advanced filtering, booking system
 */

const instruments = [
  {
    id: 1,
    name: 'Scanning Electron Microscope (SEM)',
    category: 'Microscopy',
    department: 'Central Research Facility',
    description: 'High-resolution imaging for material characterization and structural analysis.',
    specifications: [
      'Resolution: 1.0 nm at 15 kV',
      'Magnification: 10x to 500,000x',
      'Accelerating voltage: 0.5-30 kV',
      'Sample size: Up to 200mm diameter'
    ],
    applications: ['Material Science', 'Nanotechnology', 'Biology', 'Geology'],
    availability: 'Available',
    rate: '₹2,500/hour',
    location: 'CRF Building, Ground Floor',
    contact: 'Dr. Sharma - sem@iitp.ac.in',
    bookingUrl: '/research/booking/sem',
    color: 'from-blue-500 to-blue-600',
    icon: Microscope
  },
  {
    id: 2,
    name: 'X-Ray Diffractometer (XRD)',
    category: 'Characterization',
    department: 'Materials Engineering',
    description: 'Crystal structure analysis and phase identification of materials.',
    specifications: [
      'Wavelength: Cu Kα (1.5406 Å)',
      'Detector: PIXcel3D',
      '2θ range: -110° to +168°',
      'Temperature range: -193°C to 1200°C'
    ],
    applications: ['Crystal Structure', 'Phase Analysis', 'Powder Diffraction', 'Thin Films'],
    availability: 'Busy',
    rate: '₹1,800/hour',
    location: 'Materials Lab, Block A',
    contact: 'Prof. Kumar - xrd@iitp.ac.in',
    bookingUrl: '/research/booking/xrd',
    color: 'from-green-500 to-green-600',
    icon: Atom
  },
  {
    id: 3,
    name: 'FTIR Spectrometer',
    category: 'Spectroscopy',
    department: 'Chemistry',
    description: 'Fourier Transform Infrared spectroscopy for molecular analysis.',
    specifications: [
      'Range: 4000-400 cm⁻¹',
      'Resolution: 0.5 cm⁻¹',
      'Detector: DTGS and MCT',
      'Accessories: ATR, Transmission, Reflection'
    ],
    applications: ['Molecular Analysis', 'Chemical ID', 'Quality Control', 'Forensics'],
    availability: 'Available',
    rate: '₹1,200/hour',
    location: 'Chemistry Lab, Block B',
    contact: 'Dr. Singh - ftir@iitp.ac.in',
    bookingUrl: '/research/booking/ftir',
    color: 'from-purple-500 to-purple-600',
    icon: Zap
  },
  {
    id: 4,
    name: 'Atomic Force Microscope (AFM)',
    category: 'Microscopy',
    department: 'Physics',
    description: 'Surface topography and nanoscale property measurements.',
    specifications: [
      'Scan size: 90 × 90 μm',
      'Z-range: 15 μm',
      'Resolution: < 1 nm',
      'Modes: Contact, Non-contact, Tapping'
    ],
    applications: ['Surface Analysis', 'Nanomaterials', 'Thin Films', 'Biomaterials'],
    availability: 'Maintenance',
    rate: '₹3,000/hour',
    location: 'Physics Lab, Block C',
    contact: 'Prof. Patel - afm@iitp.ac.in',
    bookingUrl: '/research/booking/afm',
    color: 'from-orange-500 to-orange-600',
    icon: Microscope
  },
  {
    id: 5,
    name: 'LC-MS/MS System',
    category: 'Analytical',
    department: 'Biochemistry',
    description: 'Liquid Chromatography-Mass Spectrometry for complex analysis.',
    specifications: [
      'Mass range: 5-2000 m/z',
      'Resolution: > 100,000 FWHM',
      'Ion sources: ESI, APCI',
      'Detectors: Orbitrap, Quadrupole'
    ],
    applications: ['Proteomics', 'Metabolomics', 'Drug Analysis', 'Environmental'],
    availability: 'Available',
    rate: '₹4,500/hour',
    location: 'Biochemistry Lab, Block D',
    contact: 'Dr. Gupta - lcms@iitp.ac.in',
    bookingUrl: '/research/booking/lcms',
    color: 'from-red-500 to-red-600',
    icon: Atom
  },
  {
    id: 6,
    name: 'Confocal Microscope',
    category: 'Microscopy',
    department: 'Biotechnology',
    description: 'High-resolution fluorescence imaging for biological samples.',
    specifications: [
      'Objective: 4x to 100x',
      'Lasers: 405, 488, 561, 633 nm',
      'Z-sectioning: 0.1 μm steps',
      'Live cell imaging capability'
    ],
    applications: ['Cell Biology', 'Fluorescence', '3D Imaging', 'Live Imaging'],
    availability: 'Available',
    rate: '₹2,800/hour',
    location: 'Biotech Lab, Block E',
    contact: 'Dr. Rao - confocal@iitp.ac.in',
    bookingUrl: '/research/booking/confocal',
    color: 'from-teal-500 to-teal-600',
    icon: Microscope
  }
];

const categories = ['All', 'Microscopy', 'Spectroscopy', 'Characterization', 'Analytical'];
const availabilityOptions = ['All', 'Available', 'Busy', 'Maintenance'];

const Instruments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');

  // Filter instruments based on search and filters
  const filteredInstruments = instruments.filter(instrument => {
    const matchesSearch = instrument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instrument.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || instrument.category === selectedCategory;
    const matchesAvailability = selectedAvailability === 'All' || instrument.availability === selectedAvailability;
    
    return matchesSearch && matchesCategory && matchesAvailability;
  });

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800 border-green-200';
      case 'Busy': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Maintenance': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <>
      <Helmet>
        <title>Research Instruments | IIT Patna - Central Research Facility</title>
        <meta 
          name="description" 
          content="Access advanced research instruments at IIT Patna. SEM, XRD, FTIR, AFM, LC-MS/MS, Confocal Microscope and more. Book online for your research needs." 
        />
        <meta name="keywords" content="IIT Patna research instruments, SEM, XRD, FTIR, AFM, LC-MS/MS, research facility booking" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
          
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Microscope className="h-10 w-10 text-primary" />
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                  Research Instruments
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Access state-of-the-art research instruments and analytical facilities 
                  at IIT Patna's Central Research Facility.
                </p>
              </motion.div>

              {/* Search and Filter Section */}
              <motion.div 
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search instruments..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <div className="flex items-center space-x-2">
                        <Filter className="h-4 w-4" />
                        <SelectValue placeholder="Category" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                    <SelectTrigger>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <SelectValue placeholder="Availability" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {availabilityOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-4 text-sm text-muted-foreground">
                  Showing {filteredInstruments.length} of {instruments.length} instruments
                </div>
              </motion.div>
            </div>
          </section>

          {/* Instruments Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredInstruments.map((instrument, index) => {
                  const IconComponent = instrument.icon;
                  
                  return (
                    <motion.div
                      key={instrument.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Card className="h-full card-feature group-hover:shadow-glow transition-all duration-300">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${instrument.color} flex items-center justify-center`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <Badge 
                              className={`${getAvailabilityColor(instrument.availability)} border`}
                            >
                              {instrument.availability}
                            </Badge>
                          </div>
                          
                          <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                            {instrument.name}
                          </CardTitle>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <Badge variant="outline">{instrument.category}</Badge>
                            <span className="font-semibold text-secondary">{instrument.rate}</span>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {instrument.description}
                          </p>

                          {/* Key Specifications */}
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-3">Key Specifications:</h4>
                            <div className="space-y-1">
                              {instrument.specifications.slice(0, 3).map((spec, idx) => (
                                <div key={idx} className="flex items-start space-x-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{spec}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Applications */}
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-3">Applications:</h4>
                            <div className="flex flex-wrap gap-2">
                              {instrument.applications.map((app, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Location and Contact */}
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{instrument.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{instrument.contact}</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button 
                              className={`flex-1 bg-gradient-to-r ${instrument.color} hover:scale-105 transition-all duration-300`}
                              disabled={instrument.availability !== 'Available'}
                            >
                              <Calendar className="h-4 w-4 mr-2" />
                              Book Now
                            </Button>
                            <Button 
                              variant="outline" 
                              size="default"
                              className="hover:bg-muted/50 transition-all duration-300"
                            >
                              <BookOpen className="h-4 w-4 mr-2" />
                              Manual
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* No Results */}
              {filteredInstruments.length === 0 && (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Microscope className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">No instruments found</h3>
                  <p className="text-muted-foreground">Try adjusting your search criteria</p>
                </motion.div>
              )}
            </div>
          </section>

          {/* Contact and Support */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-card-foreground mb-6">
                  Need Help with Instrument Selection?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our technical team can help you choose the right instrument for your research needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-hero">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Contact CRF Team
                  </Button>
                  <Button variant="outline" size="lg">
                    <BookOpen className="h-4 w-4 mr-2" />
                    User Guidelines
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Instruments;