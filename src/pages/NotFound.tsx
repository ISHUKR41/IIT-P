import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';

/**
 * 404 Not Found page component
 * Features:
 * - Professional error page design
 * - Navigation options to help users
 * - Error logging for debugging
 * - IIT Patna branding consistency
 */
const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 errors for debugging and analytics
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* 404 Graphic */}
          <div className="mb-12">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
              404
            </h1>
            <div className="relative -mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
                Oops! The page you're looking for doesn't exist. It might have been moved, 
                deleted, or you entered the wrong URL.
              </p>
            </div>
          </div>

          {/* Navigation Options */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            
            {/* Back to Home */}
            <Link to="/">
              <Button className="btn-hero group w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>

            {/* Go Back */}
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="btn-outline w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>

            {/* Search/Contact */}
            <Link to="/contact">
              <Button 
                variant="secondary"
                className="btn-secondary w-full sm:w-auto"
              >
                <Search className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-6">
              You might be looking for:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <Link 
                to="/admissions/why-choose" 
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                Admissions
              </Link>
              <Link 
                to="/academics/undergraduate" 
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                Academic Programs
              </Link>
              <Link 
                to="/research/rd-home" 
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                Research
              </Link>
              <Link 
                to="/contact/reach-campus" 
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                Contact Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;