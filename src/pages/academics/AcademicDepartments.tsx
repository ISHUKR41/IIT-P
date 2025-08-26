import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Building, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Academic Departments Page for IIT Patna
 * Features:
 * - Comprehensive list of all academic departments
 * - Department information, faculty, and contact details
 * - Research areas and programs offered
 * - Modern animations and responsive design
 * - Direct links to department websites
 */
const AcademicDepartments: React.FC = () => {
  // Academic departments data
  const departments = [
    {
      name: "Computer Science & Engineering",
      shortName: "CSE",
      color: "from-blue-500 to-blue-600",
      faculty: 28,
      students: 450,
      established: 2008,
      description: "Leading research and education in computer science, artificial intelligence, and software engineering.",
      researchAreas: [
        "Artificial Intelligence & Machine Learning",
        "Data Science & Big Data Analytics",
        "Cybersecurity & Network Security",
        "Software Engineering & DevOps",
        "Computer Vision & Image Processing",
        "Distributed Systems & Cloud Computing"
      ],
      programs: ["B.Tech", "M.Tech", "PhD"],
      head: "Dr. Rajesh Kumar",
      email: "cse@iitp.ac.in",
      phone: "+91-612-302-8028",
      website: "#"
    },
    {
      name: "Electrical Engineering",
      shortName: "EE",
      color: "from-green-500 to-green-600",
      faculty: 25,
      students: 380,
      established: 2008,
      description: "Excellence in electrical systems, power engineering, and electronics with cutting-edge research facilities.",
      researchAreas: [
        "Power Systems & Smart Grid",
        "Control Systems & Automation",
        "Signal Processing & Communications",
        "VLSI Design & Embedded Systems",
        "Renewable Energy Systems",
        "Robotics & Mechatronics"
      ],
      programs: ["B.Tech", "M.Tech", "PhD"],
      head: "Dr. Priya Sharma",
      email: "ee@iitp.ac.in",
      phone: "+91-612-302-8029",
      website: "#"
    },
    {
      name: "Mechanical Engineering",
      shortName: "ME",
      color: "from-purple-500 to-purple-600",
      faculty: 22,
      students: 360,
      established: 2008,
      description: "Innovation in mechanical systems, manufacturing, and thermal engineering with state-of-the-art laboratories.",
      researchAreas: [
        "Manufacturing & Production Engineering",
        "Thermal & Fluid Sciences",
        "Design & Mechanics",
        "Materials Science & Engineering",
        "Automotive Engineering",
        "Biomechanics & Biomedical Engineering"
      ],
      programs: ["B.Tech", "M.Tech", "PhD"],
      head: "Dr. Anand Verma",
      email: "me@iitp.ac.in",
      phone: "+91-612-302-8030",
      website: "#"
    },
    {
      name: "Civil Engineering",
      shortName: "CE",
      color: "from-orange-500 to-orange-600",
      faculty: 20,
      students: 320,
      established: 2009,
      description: "Building sustainable infrastructure and advancing construction technology for modern society.",
      researchAreas: [
        "Structural Engineering",
        "Geotechnical Engineering",
        "Transportation Engineering",
        "Water Resources Engineering",
        "Environmental Engineering",
        "Construction Management"
      ],
      programs: ["B.Tech", "M.Tech", "PhD"],
      head: "Dr. Sunita Gupta",
      email: "ce@iitp.ac.in",
      phone: "+91-612-302-8031",
      website: "#"
    },
    {
      name: "Chemical Engineering",
      shortName: "CHE",
      color: "from-red-500 to-red-600",
      faculty: 18,
      students: 280,
      established: 2010,
      description: "Innovation in chemical processes, biotechnology, and sustainable manufacturing solutions.",
      researchAreas: [
        "Process Systems Engineering",
        "Biotechnology & Biochemical Engineering",
        "Environmental Engineering",
        "Petroleum & Petrochemical Engineering",
        "Materials & Nanotechnology",
        "Process Safety & Risk Management"
      ],
      programs: ["B.Tech", "M.Tech", "PhD"],
      head: "Dr. Amit Singh",
      email: "che@iitp.ac.in",
      phone: "+91-612-302-8032",
      website: "#"
    },
    {
      name: "Materials Science & Engineering",
      shortName: "MSE",
      color: "from-indigo-500 to-indigo-600",
      faculty: 16,
      students: 220,
      established: 2012,
      description: "Advanced materials research and development for next-generation technologies.",
      researchAreas: [
        "Nanomaterials & Nanotechnology",
        "Electronic Materials",
        "Biomaterials & Medical Devices",
        "Composite Materials",
        "Energy Materials",
        "Materials Characterization"
      ],
      programs: ["B.Tech", "M.Tech", "PhD"],
      head: "Dr. Kavita Joshi",
      email: "mse@iitp.ac.in",
      phone: "+91-612-302-8033",
      website: "#"
    },
    {
      name: "Mathematics & Computing",
      shortName: "MnC",
      color: "from-pink-500 to-pink-600",
      faculty: 15,
      students: 200,
      established: 2011,
      description: "Bridging mathematics and computing for solving complex real-world problems.",
      researchAreas: [
        "Applied Mathematics",
        "Computational Mathematics",
        "Operations Research",
        "Mathematical Modeling",
        "Statistics & Data Analytics",
        "Cryptography & Information Security"
      ],
      programs: ["B.Tech", "M.Sc", "PhD"],
      head: "Dr. Ravi Prakash",
      email: "mnc@iitp.ac.in",
      phone: "+91-612-302-8034",
      website: "#"
    },
    {
      name: "Physics",
      shortName: "PHY",
      color: "from-teal-500 to-teal-600",
      faculty: 14,
      students: 180,
      established: 2009,
      description: "Fundamental research in physics with applications in technology and engineering.",
      researchAreas: [
        "Condensed Matter Physics",
        "High Energy Physics",
        "Optics & Photonics",
        "Quantum Physics",
        "Astrophysics & Cosmology",
        "Applied Physics"
      ],
      programs: ["M.Sc", "PhD"],
      head: "Dr. Neeta Sinha",
      email: "phy@iitp.ac.in",
      phone: "+91-612-302-8035",
      website: "#"
    },
    {
      name: "Chemistry",
      shortName: "CHY",
      color: "from-yellow-500 to-yellow-600",
      faculty: 12,
      students: 160,
      established: 2010,
      description: "Chemical sciences research spanning from fundamental to applied chemistry.",
      researchAreas: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Analytical Chemistry",
        "Chemical Biology",
        "Materials Chemistry"
      ],
      programs: ["M.Sc", "PhD"],
      head: "Dr. Manoj Kumar",
      email: "chy@iitp.ac.in",
      phone: "+91-612-302-8036",
      website: "#"
    },
    {
      name: "Humanities & Social Sciences",
      shortName: "HSS",
      color: "from-gray-500 to-gray-600",
      faculty: 10,
      students: 120,
      established: 2011,
      description: "Liberal arts education fostering critical thinking and cultural understanding.",
      researchAreas: [
        "English Literature",
        "Economics",
        "Philosophy",
        "Psychology",
        "Sociology",
        "Management Studies"
      ],
      programs: ["M.A", "PhD"],
      head: "Dr. Sanjay Tiwari",
      email: "hss@iitp.ac.in",
      phone: "+91-612-302-8037",
      website: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Academic Departments - IIT Patna | Engineering & Science Departments</title>
        <meta 
          name="description" 
          content="Explore academic departments at IIT Patna. Engineering, science, and humanities departments offering undergraduate, postgraduate, and doctoral programs."
        />
        <meta 
          name="keywords" 
          content="IIT Patna departments, engineering departments, science departments, academic divisions, faculty, research areas"
        />
        <link rel="canonical" href="https://www.iitp.ac.in/academics/departments" />
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-gradient-subtle py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Section */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Building className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                Academic Departments
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our world-class academic departments offering cutting-edge research 
                and education across engineering, science, and humanities disciplines.
              </p>
            </motion.div>

            {/* Institute Statistics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">10</h3>
                  <p className="text-muted-foreground">Academic Departments</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">180+</h3>
                  <p className="text-muted-foreground">Faculty Members</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">2,500+</h3>
                  <p className="text-muted-foreground">Students</p>
                </CardContent>
              </Card>
              <Card className="card-feature text-center">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-muted-foreground">Research Areas</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Departments Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
              {departments.map((department, index) => (
                <motion.div
                  key={department.shortName}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="card-modern hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 rounded-full bg-gradient-to-r ${department.color}`}>
                            <Building className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-primary">
                              {department.name}
                            </CardTitle>
                            <p className="text-muted-foreground">
                              Established: {department.established}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex space-x-4 text-sm text-muted-foreground">
                            <div className="text-center">
                              <p className="font-semibold text-primary">{department.faculty}</p>
                              <p>Faculty</p>
                            </div>
                            <div className="text-center">
                              <p className="font-semibold text-primary">{department.students}</p>
                              <p>Students</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {department.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        
                        {/* Research Areas */}
                        <div>
                          <h4 className="font-semibold text-primary mb-3">Research Areas</h4>
                          <div className="space-y-2">
                            {department.researchAreas.map((area, areaIndex) => (
                              <div key={areaIndex} className="flex items-start space-x-2">
                                <span className="text-secondary text-sm mt-1">•</span>
                                <span className="text-muted-foreground text-sm">{area}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Department Info */}
                        <div className="space-y-4">
                          
                          {/* Programs Offered */}
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Programs Offered</h4>
                            <div className="flex flex-wrap gap-2">
                              {department.programs.map((program, programIndex) => (
                                <span 
                                  key={programIndex}
                                  className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                                >
                                  {program}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Contact Information */}
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Department Head</h4>
                            <p className="text-muted-foreground text-sm mb-2">{department.head}</p>
                            
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>{department.email}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>{department.phone}</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button 
                              className="btn-secondary flex-1"
                              onClick={() => window.open(department.website, '_blank')}
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Visit Website
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Users className="mr-2 h-4 w-4" />
                              Faculty Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AcademicDepartments;