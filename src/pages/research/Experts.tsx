import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, User, Mail, Phone, BookOpen, Award, Building } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Find an Expert page - Directory of research experts and their specializations
 * Features:
 * - Searchable expert database
 * - Department-wise filtering
 * - Research area categorization
 * - Contact information and collaboration opportunities
 * - Detailed expertise profiles
 */
const Experts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const experts = [
    {
      name: "Dr. Rajesh Kumar Singh",
      designation: "Professor & Head",
      department: "Computer Science & Engineering",
      email: "rks@iitp.ac.in",
      phone: "+91-612-302-8101",
      expertise: ["Machine Learning", "Artificial Intelligence", "Data Mining", "Deep Learning"],
      researchInterests: "AI applications in healthcare, Natural Language Processing, Computer Vision",
      projects: 15,
      publications: 85,
      experience: "15+ years",
      image: "👨‍🏫"
    },
    {
      name: "Prof. Meera Sharma",
      designation: "Professor",
      department: "Electrical Engineering",
      email: "meera@iitp.ac.in",
      phone: "+91-612-302-8102",
      expertise: ["Power Systems", "Renewable Energy", "Smart Grid", "Energy Storage"],
      researchInterests: "Solar energy integration, Grid stability, Energy management systems",
      projects: 12,
      publications: 92,
      experience: "18+ years",
      image: "👩‍🔬"
    },
    {
      name: "Dr. Amit Patel",
      designation: "Associate Professor",
      department: "Mechanical Engineering",
      email: "amit.patel@iitp.ac.in",
      phone: "+91-612-302-8103",
      expertise: ["Robotics", "Automation", "Manufacturing", "Design Engineering"],
      researchInterests: "Industrial robotics, Additive manufacturing, Smart manufacturing systems",
      projects: 10,
      publications: 65,
      experience: "12+ years",
      image: "👨‍💼"
    },
    {
      name: "Dr. Priya Gupta",
      designation: "Assistant Professor",
      department: "Chemical Engineering",
      email: "priya.gupta@iitp.ac.in",
      phone: "+91-612-302-8104",
      expertise: ["Process Optimization", "Biotechnology", "Environmental Engineering", "Catalysis"],
      researchInterests: "Sustainable chemical processes, Biofuels, Water treatment technologies",
      projects: 8,
      publications: 45,
      experience: "8+ years",
      image: "👩‍🔬"
    },
    {
      name: "Prof. Vikram Joshi",
      designation: "Professor",
      department: "Civil Engineering",
      email: "vikram@iitp.ac.in",
      phone: "+91-612-302-8105",
      expertise: ["Structural Engineering", "Earthquake Engineering", "Construction Management", "Materials"],
      researchInterests: "Seismic design, High-performance concrete, Infrastructure resilience",
      projects: 18,
      publications: 110,
      experience: "20+ years",
      image: "👨‍🏗️"
    },
    {
      name: "Dr. Sonia Verma",
      designation: "Associate Professor",
      department: "Electronics & Communication",
      email: "sonia@iitp.ac.in",
      phone: "+91-612-302-8106",
      expertise: ["VLSI Design", "Signal Processing", "Communication Systems", "IoT"],
      researchInterests: "5G communications, IoT applications, Embedded systems design",
      projects: 9,
      publications: 58,
      experience: "10+ years",
      image: "👩‍💻"
    }
  ];

  const departments = ["All", "Computer Science & Engineering", "Electrical Engineering", "Mechanical Engineering", "Chemical Engineering", "Civil Engineering", "Electronics & Communication"];

  const researchAreas = [
    { area: "Artificial Intelligence", count: 8, color: "bg-blue-100 text-blue-800" },
    { area: "Renewable Energy", count: 6, color: "bg-green-100 text-green-800" },
    { area: "Robotics", count: 5, color: "bg-purple-100 text-purple-800" },
    { area: "Materials Science", count: 7, color: "bg-orange-100 text-orange-800" },
    { area: "Biotechnology", count: 4, color: "bg-pink-100 text-pink-800" },
    { area: "Communication Systems", count: 6, color: "bg-teal-100 text-teal-800" }
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expert.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'All' || expert.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <Layout>
      <Helmet>
        <title>Find an Expert - IIT Patna | Research Collaboration & Expertise</title>
        <meta 
          name="description" 
          content="Connect with leading research experts at IIT Patna. Find specialists in various engineering and technology domains for collaboration and consultation."
        />
        <meta name="keywords" content="IIT Patna experts, research collaboration, faculty expertise, consulting, technical experts" />
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
              <Search className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Find an Expert
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                Connect with leading researchers and technical experts for collaboration and consultation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Experts
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search by name or expertise..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Department
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                Research Areas
              </h2>
              <p className="text-muted-foreground">
                Explore our key research domains with expert faculty
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern text-center hover:scale-105 transition-transform duration-300">
                    <CardContent className="pt-4">
                      <Badge className={`${area.color} mb-2`}>
                        {area.count} Experts
                      </Badge>
                      <h3 className="text-sm font-medium text-primary">
                        {area.area}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experts Directory */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Our Experts ({filteredExperts.length})
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet our distinguished faculty members and their areas of expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredExperts.map((expert, index) => (
                <motion.div
                  key={expert.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-modern h-full">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{expert.image}</div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-primary mb-1">
                            {expert.name}
                          </CardTitle>
                          <p className="text-secondary font-medium">{expert.designation}</p>
                          <div className="flex items-center mt-2">
                            <Building className="h-4 w-4 text-muted-foreground mr-1" />
                            <span className="text-sm text-muted-foreground">{expert.department}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Expertise Tags */}
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Expertise:</h4>
                          <div className="flex flex-wrap gap-1">
                            {expert.expertise.map((skill, skillIndex) => (
                              <Badge 
                                key={skillIndex} 
                                variant="outline" 
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Research Interests */}
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Research Interests:</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {expert.researchInterests}
                          </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 py-3 bg-muted/30 rounded-lg">
                          <div className="text-center">
                            <div className="text-sm font-bold text-primary">{expert.projects}</div>
                            <div className="text-xs text-muted-foreground">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-bold text-primary">{expert.publications}</div>
                            <div className="text-xs text-muted-foreground">Publications</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-bold text-primary">{expert.experience}</div>
                            <div className="text-xs text-muted-foreground">Experience</div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="pt-4 border-t border-border">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-secondary" />
                              <a 
                                href={`mailto:${expert.email}`}
                                className="text-sm text-secondary hover:underline"
                              >
                                {expert.email}
                              </a>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-secondary" />
                              <span className="text-sm text-muted-foreground">
                                {expert.phone}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-4">
                            <Button size="sm" variant="outline" className="flex-1">
                              <User className="h-4 w-4 mr-1" />
                              Profile
                            </Button>
                            <Button size="sm" className="flex-1">
                              <Mail className="h-4 w-4 mr-1" />
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredExperts.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">No experts found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or department filter
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Collaborate?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Connect with our experts for research partnerships, consulting, or technical collaboration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="btn-secondary">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Research Office
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Collaboration Guidelines
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Experts;