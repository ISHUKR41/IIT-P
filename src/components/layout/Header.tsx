import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/iit-patna-logo.png';
import { ScrollArea } from '@/components/ui/scroll-area';

/**
 * Navigation menu structure for IIT Patna website
 * Organized according to the institutional hierarchy and user requirements
 */
const navigationMenu = [
  {
    title: 'About',
    items: [
      { title: 'Introduction', path: '/about/introduction' },
      { title: 'Institute Vision & Mission', path: '/about/vision-mission' },
      { title: 'Director\'s Message', path: '/about/director-message' },
      { title: 'Books & Videos', path: '/about/books-videos' },
      { title: 'Organization', path: '/about/organization' },
      { title: 'Institution of Eminence', path: '/about/eminence' },
      { title: 'Institute Colloquium/Lectures', path: '/about/colloquium' },
      { title: 'Press Release', path: '/about/press-release' },
      { title: 'Magazines', path: '/about/magazines', 
        subItems: [
          { title: 'Insight', path: '/about/magazines/insight' },
          { title: 'Campus Diary', path: '/about/magazines/campus-diary' },
          { title: 'Kshitij', path: '/about/magazines/kshitij' },
          { title: 'Impulse', path: '/about/magazines/impulse' }
        ]
      },
      { title: 'About Us', path: '/about/about-us' },
      { title: 'About Logo', path: '/about/logo' },
      { title: 'Board of Governors', path: '/about/board-governors' },
      { title: 'Finance Committee', path: '/about/finance-committee' },
      { title: 'Administrators', path: '/about/administrators' },
      { title: 'Office of Registrar', path: '/about/registrar' },
      { title: 'Heads of Department', path: '/about/department-heads' },
      { title: 'Administrative Units', path: '/about/admin-units' },
      { title: 'Acts and Statutes', path: '/about/acts-statutes' },
      { title: 'History of Patna', path: '/about/history-patna' },
      { title: 'Convocation', path: '/about/convocation' },
      { title: 'Annual Reports', path: '/about/annual-reports' },
      { title: 'Other Institute Functionary', path: '/about/functionary' },
      { title: 'Recruitment Rules', path: '/about/recruitment-rules' },
      { title: 'Alumni & Endowment', path: '/about/alumni-endowment' },
      { title: 'Former Directors', path: '/about/former-directors' },
      { title: 'Current MOUs', path: '/about/current-mous' },
      { title: 'Past MOUs', path: '/about/past-mous' },
      { title: 'Institute Song', path: '/about/institute-song' }
    ]
  },
  {
    title: 'Academics',
    items: [
      { title: 'Undergraduate Programs', path: '/academics/undergraduate' },
      { title: 'Dual Degree Program', path: '/academics/dual-degree' },
      { title: 'Masters Programs', path: '/academics/masters' },
      { title: 'PhD Program', path: '/academics/phd' },
      { title: 'Executive Programs', path: '/academics/executive' },
      { title: 'Academic Rule Books', path: '/academics/rule-books' },
      { title: 'Academic Calendar', path: '/academics/calendar' },
      { title: 'Academic Timetable', path: '/academics/timetable' },
      { title: 'Academic Website', path: '/academics/website' },
      { title: 'Holiday List', path: '/academics/holidays' },
      { title: 'Course Management', path: '/academics/course-management' },
      { title: 'Distance Learning', path: '/academics/distance-learning' },
      { title: 'International Exchange', path: '/academics/international-exchange' },
      { title: 'Moodle', path: '/academics/moodle' },
      { title: 'Academic Departments', path: '/academics/departments' },
      { title: 'Classrooms', path: '/academics/classrooms' },
      { title: 'Labs', path: '/academics/labs' },
      { title: 'Central Library', path: '/academics/library' },
      { title: 'Exam Schedule', path: '/academics/exam-schedule' },
      { title: 'Ordinances & Regulations', path: '/academics/ordinances' },
      { title: 'Disciplinary Ordinance', path: '/academics/disciplinary' },
      { title: 'NEP-2020 Syllabus', path: '/academics/nep-syllabus' },
      { title: 'NEP-2020 Curriculum', path: '/academics/nep-curriculum' },
      { title: 'Awards & Medals', path: '/academics/awards' },
      { title: 'Campus Life', path: '/academics/campus-life' },
      { title: 'Career Development', path: '/academics/career-development' },
      { title: 'Scholarships', path: '/academics/scholarships' },
      { title: 'Cultural Activities', path: '/academics/cultural-activities' },
      { title: 'Transport Facility', path: '/academics/transport' },
      { title: 'People (Academics)', path: '/academics/people' },
      { title: 'Downloads', path: '/academics/downloads' }
    ]
  },
  {
    title: 'Admissions',
    items: [
      { title: 'Why Choose Us', path: '/admissions/why-choose' },
      { title: 'Undergraduate Programs', path: '/admissions/undergraduate' },
      { title: 'Dual Degree Program', path: '/admissions/dual-degree' },
      { title: 'Master\'s Programs', path: '/admissions/masters' },
      { title: 'PhD Program', path: '/admissions/phd' },
      { title: 'Postdoctoral Programs', path: '/admissions/postdoc' },
      { title: 'International Applicants', path: '/admissions/international' },
      { title: 'Research Internship', path: '/admissions/research-internship' },
      { title: 'Educator Training', path: '/admissions/educator-training' },
      { title: 'Women Students', path: '/admissions/women-students' },
      { title: 'Executive Degree Program', path: '/admissions/executive' },
      { title: 'Fee Structure', path: '/admissions/fee-structure' }
    ]
  },
  {
    title: 'Research',
    items: [
      { title: 'Consultancy', path: '/research/consultancy' },
      { title: 'Find an Expert', path: '/research/experts' },
      { title: 'Use Our Instruments', path: '/research/instruments' },
      { title: 'Technology Transfer', path: '/research/tech-transfer' },
      { title: 'Entrepreneurship', path: '/research/entrepreneurship' },
      { title: 'Research Park', path: '/research/research-park' },
      { title: 'Research & Industry', path: '/research/industry' },
      { title: 'Executive Training', path: '/research/executive-training' },
      { title: 'CSR & Corporate Philanthropy', path: '/research/csr' },
      { title: 'Technology Innovation Hub', path: '/research/innovation-hub' },
      { title: 'Projects & Consultancy', path: '/research/projects-consultancy' },
      { title: 'Placements', path: '/research/placements' },
      { title: 'R&D Home', path: '/research/rd-home' },
      { title: 'Patent & IPR', path: '/research/patent-ipr' },
      { title: 'People (R&D)', path: '/research/people' },
      { title: 'Research Projects', path: '/research/projects' },
      { title: 'Research Scholars\' Day', path: '/research/scholars-day' },
      { title: 'Rules and Regulations', path: '/research/rules' },
      { title: 'Latest News/Updates', path: '/research/news' },
      { title: 'Latest Theses', path: '/research/theses' },
      { title: 'Monthly e-Newsletter', path: '/research/newsletter' }
    ]
  },
  {
    title: 'Placements',
    path: '/placements'
  },
  {
    title: 'Careers',
    items: [
      { title: 'Career Development', path: '/careers/development' },
      { title: 'Why Choose Us', path: '/careers/why-choose' },
      { title: 'Apply', path: '/careers/apply' }
    ]
  },
  {
    title: 'Contact',
    items: [
      { title: 'Mailing Address', path: '/contact/address' },
      { title: 'Working Hours', path: '/contact/hours' },
      { title: 'Communication Directory', path: '/contact/directory' },
      { title: 'Bus Timings', path: '/contact/bus-timings' },
      { title: 'How to Reach Campus', path: '/contact/reach-campus' },
      { title: 'Airport to Campus', path: '/contact/airport' },
      { title: 'Railway Station to Campus', path: '/contact/railway' },
      { title: 'Transportation Guide', path: '/contact/transport-guide' }
    ]
  }
];

/**
 * Modern responsive header component for IIT Patna website
 * Features:
 * - Fully responsive design for all device sizes
 * - Smooth animations and hover effects
 * - Multi-level dropdown navigation
 * - Mobile-friendly hamburger menu
 * - Accessible design with proper ARIA labels
 */
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns when toggling mobile menu
  };

  // Handle dropdown menu interactions
  const handleDropdownEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-nav-background shadow-custom sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Left side - Logo and Institute Name */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
              aria-label="IIT Patna Home"
            >
              <img 
                src={logoImage} 
                alt="IIT Patna Logo" 
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain animate-float"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-nav-foreground">
                  IIT Patna
                </h1>
                <p className="text-xs lg:text-sm text-nav-foreground/80">
                  Indian Institute of Technology
                </p>
              </div>
            </Link>
          </div>

          {/* Center - Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationMenu.map((menu) => (
              <div
                key={menu.title}
                className="relative nav-item"
                onMouseEnter={() => menu.items && handleDropdownEnter(menu.title)}
                onMouseLeave={handleDropdownLeave}
              >
                {menu.items ? (
                  <>
                    <button
                      className="nav-link flex items-center space-x-1"
                      aria-expanded={activeDropdown === menu.title}
                      aria-haspopup="true"
                    >
                      <span>{menu.title}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === menu.title ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`nav-dropdown ${
                        activeDropdown === menu.title ? 'opacity-100 visible translate-y-0' : ''
                      }`}
                      role="menu"
                      aria-label={`${menu.title} submenu`}
                    >
                      <div className="py-2">
                        {menu.items.map((item) => (
                          <div key={item.title}>
                            <Link
                              to={item.path}
                              className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                              role="menuitem"
                            >
                              {item.title}
                            </Link>
                            {/* Sub-items for nested menus */}
                            {item.subItems && (
                              <div className="ml-4 border-l border-border">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    to={subItem.path}
                                    className="block px-4 py-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                                    role="menuitem"
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={menu.path || '/'}
                    className="nav-link"
                  >
                    {menu.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Login Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            
            {/* Login Button - Always visible with modern styling */}
            <Link to="/auth" className="hidden sm:block">
              <Button 
                variant="outline" 
                size="sm"
                className="relative bg-gradient-to-r from-primary to-primary-glow text-primary-foreground border-0 px-6 py-2 rounded-lg font-medium hover:from-primary/90 hover:to-primary-glow hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow"
                aria-label="Login to IIT Patna portal"
              >
                <span className="relative z-10">Login</span>
              </Button>
            </Link>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-nav-foreground hover:bg-nav-hover transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-nav-hover animate-fade-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-nav-background">
              
              {/* Mobile Login Button */}
              <div className="px-3 py-2 sm:hidden">
                <Link to="/auth">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground border-0 rounded-lg font-medium hover:from-secondary/90 hover:to-secondary transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Login Portal
                  </Button>
                </Link>
              </div>

              {/* Mobile Navigation Items */}
              {navigationMenu.map((menu) => (
                <div key={menu.title} className="space-y-1">
                  {menu.items ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(
                          activeDropdown === menu.title ? null : menu.title
                        )}
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-nav-foreground hover:bg-nav-hover rounded-md transition-colors duration-200"
                        aria-expanded={activeDropdown === menu.title}
                      >
                        <span>{menu.title}</span>
                        <ChevronDown 
                          className={`h-5 w-5 transition-transform duration-300 ${
                            activeDropdown === menu.title ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      {activeDropdown === menu.title && (
                        <div className="pl-6 space-y-1 animate-fade-up">
                          {menu.items.map((item) => (
                            <div key={item.title}>
                              <Link
                                to={item.path}
                                className="block px-3 py-2 text-sm text-nav-foreground/80 hover:text-secondary hover:bg-nav-hover rounded-md transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.title}
                              </Link>
                              {/* Mobile Sub-items */}
                              {item.subItems && (
                                <div className="pl-4 space-y-1">
                                  {item.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      to={subItem.path}
                                      className="block px-3 py-1 text-xs text-nav-foreground/60 hover:text-secondary transition-colors duration-200"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={menu.path || '/'}
                      className="block px-3 py-2 text-base font-medium text-nav-foreground hover:bg-nav-hover rounded-md transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {menu.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;