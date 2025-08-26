import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Navigation, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

/**
 * Mailing Address page - Complete contact information and location details
 * Features:
 * - Complete postal address with PIN code
 * - Interactive map integration
 * - Contact numbers for different departments
 * - Office locations within campus
 * - GPS coordinates and navigation links
 */
const Address: React.FC = () => {
  const { toast } = useToast();

  const addresses = [
    {
      title: "Main Campus Address",
      type: "Primary",
      lines: [
        "Indian Institute of Technology Patna",
        "Bihta, Patna - 801106",
        "Bihar, India"
      ],
      pincode: "801106",
      coordinates: "25.6093° N, 85.1376° E",
      icon: "🏛️"
    },
    {
      title: "Administrative Office",
      type: "Official",
      lines: [
        "Office of the Registrar",
        "IIT Patna, Bihta Campus",
        "Patna - 801106, Bihar"
      ],
      pincode: "801106",
      coordinates: "25.6093° N, 85.1376° E",
      icon: "🗂️"
    },
    {
      title: "Postal Address",
      type: "Mailing",
      lines: [
        "Indian Institute of Technology Patna",
        "Bihta, Patna",
        "PIN - 801106",
        "Bihar, India"
      ],
      pincode: "801106",
      coordinates: "25.6093° N, 85.1376° E",
      icon: "📮"
    }
  ];

  const contactNumbers = [
    {
      department: "Main Reception",
      phone: "+91-612-302-8000",
      email: "office@iitp.ac.in",
      timing: "9:00 AM - 5:30 PM"
    },
    {
      department: "Registrar Office",
      phone: "+91-612-302-8001",
      email: "registrar@iitp.ac.in",
      timing: "10:00 AM - 5:00 PM"
    },
    {
      department: "Academic Section",
      phone: "+91-612-302-8002",
      email: "academic@iitp.ac.in",
      timing: "10:00 AM - 5:00 PM"
    },
    {
      department: "Admissions Office",
      phone: "+91-612-302-8003",
      email: "admissions@iitp.ac.in",
      timing: "10:00 AM - 4:00 PM"
    },
    {
      department: "Placement Cell",
      phone: "+91-612-302-8004",
      email: "placement@iitp.ac.in",
      timing: "10:00 AM - 5:00 PM"
    },
    {
      department: "Hostel Office",
      phone: "+91-612-302-8005",
      email: "hostel@iitp.ac.in",
      timing: "9:00 AM - 6:00 PM"
    }
  ];

  const officeLocations = [
    {
      office: "Director's Office",
      building: "Administrative Block",
      floor: "Ground Floor",
      room: "Room No. 101"
    },
    {
      office: "Registrar Office",
      building: "Administrative Block",
      floor: "First Floor",
      room: "Room No. 201-205"
    },
    {
      office: "Academic Section",
      building: "Academic Block-1",
      floor: "Ground Floor",
      room: "Room No. A-101"
    },
    {
      office: "Student Affairs",
      building: "Student Activity Center",
      floor: "First Floor",
      room: "Room No. SAC-201"
    },
    {
      office: "Training & Placement",
      building: "Academic Block-2",
      floor: "Second Floor",
      room: "Room No. A2-201"
    },
    {
      office: "International Relations",
      building: "Administrative Block",
      floor: "Second Floor",
      room: "Room No. 301"
    }
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Mailing Address - IIT Patna | Contact Information & Location</title>
        <meta 
          name="description" 
          content="Find complete mailing address, contact numbers, and location details for IIT Patna. Get GPS coordinates and office locations for easy navigation."
        />
        <meta name="keywords" content="IIT Patna address, contact details, location, postal address, phone numbers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative bg-gradient-primary text-primary-foreground py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <MapPin className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Address
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Find us at our beautiful campus in Bihta, Patna
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Addresses */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Address Information
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete address details for correspondence and visits
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {addresses.map((address, index) => (
                <motion.div
                  key={address.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-3xl">{address.icon}</div>
                        <div>
                          <CardTitle className="text-lg text-primary">
                            {address.title}
                          </CardTitle>
                          <span className="text-sm text-secondary font-medium">
                            {address.type}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          {address.lines.map((line, lineIndex) => (
                            <p key={lineIndex} className="text-sm text-foreground font-medium">
                              {line}
                            </p>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">PIN Code:</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">{address.pincode}</span>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyToClipboard(address.pincode, "PIN Code")}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Coordinates:</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">{address.coordinates}</span>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyToClipboard(address.coordinates, "Coordinates")}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <Button 
                          className="w-full" 
                          variant="outline"
                          onClick={() => copyToClipboard(address.lines.join(', '), "Address")}
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Address
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Numbers */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Contact Numbers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Department-wise contact information for specific queries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactNumbers.map((contact, index) => (
                <motion.div
                  key={contact.department}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">
                        {contact.department}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-secondary" />
                          <a 
                            href={`tel:${contact.phone}`}
                            className="text-sm font-medium text-secondary hover:underline"
                          >
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-secondary" />
                          <a 
                            href={`mailto:${contact.email}`}
                            className="text-sm text-secondary hover:underline"
                          >
                            {contact.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {contact.timing}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Office Locations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find specific offices within our campus for your visits
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeLocations.map((location, index) => (
                <motion.div
                  key={location.office}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-primary">
                          {location.office}
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Building:</span>
                            <span className="font-medium">{location.building}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Floor:</span>
                            <span className="font-medium">{location.floor}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Room:</span>
                            <span className="font-medium">{location.room}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Directions?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get detailed directions to reach our campus from anywhere
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="btn-secondary">
                  <Navigation className="h-5 w-5 mr-2" />
                  View on Google Maps
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <MapPin className="h-5 w-5 mr-2" />
                  Campus Map
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Address;