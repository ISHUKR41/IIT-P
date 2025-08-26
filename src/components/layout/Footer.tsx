import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import logoImage from '@/assets/iit-patna-logo.png';

/**
 * Footer component for IIT Patna website
 * Features:
 * - Comprehensive contact information
 * - Quick links to important sections
 * - Social media links
 * - Responsive grid layout
 * - Academic institution branding
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Institute Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="IIT Patna Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">IIT Patna</h3>
                <p className="text-sm text-primary-foreground/80">
                  Indian Institute of Technology
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/90 leading-relaxed">
              An Institution of National Importance established by an Act of Parliament 
              for fostering excellence in education and research in science, engineering 
              and technology.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                aria-label="IIT Patna Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                aria-label="IIT Patna Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                aria-label="IIT Patna LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                aria-label="IIT Patna YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Academics */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/academics/undergraduate" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Undergraduate Programs
                </Link>
              </li>
              <li>
                <Link 
                  to="/academics/masters" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Masters Programs
                </Link>
              </li>
              <li>
                <Link 
                  to="/academics/phd" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  PhD Program
                </Link>
              </li>
              <li>
                <Link 
                  to="/academics/departments" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Academic Departments
                </Link>
              </li>
              <li>
                <Link 
                  to="/academics/library" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Central Library
                </Link>
              </li>
              <li>
                <Link 
                  to="/academics/calendar" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Academic Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links - Research & Admissions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Research & Admissions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/research/rd-home" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Research Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/research/consultancy" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Consultancy
                </Link>
              </li>
              <li>
                <Link 
                  to="/research/innovation-hub" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Innovation Hub
                </Link>
              </li>
              <li>
                <Link 
                  to="/admissions/why-choose" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Why Choose IIT Patna
                </Link>
              </li>
              <li>
                <Link 
                  to="/admissions/fee-structure" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link 
                  to="/placements" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  Placements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-secondary">Contact Information</h4>
            <div className="space-y-3 text-sm">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Indian Institute of Technology Patna<br />
                    Bihta, Patna - 801106<br />
                    Bihar, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <a 
                  href="tel:+916112445404" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  +91 611 244 5404
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a 
                  href="mailto:office@iitp.ac.in" 
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  office@iitp.ac.in
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-secondary flex-shrink-0" />
                <a 
                  href="https://www.iitp.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-secondary transition-colors duration-300"
                >
                  www.iitp.ac.in
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2">
              <Link 
                to="/contact/reach-campus"
                className="btn-secondary inline-block text-center"
              >
                How to Reach Campus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/80">
              <p>
                © {new Date().getFullYear()} Indian Institute of Technology Patna. 
                All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link 
                to="/about/acts-statutes" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
              >
                Acts & Statutes
              </Link>
              <Link 
                to="/contact/directory" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
              >
                Directory
              </Link>
              <Link 
                to="/academics/downloads" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
              >
                Downloads
              </Link>
              <Link 
                to="/careers/apply" 
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;