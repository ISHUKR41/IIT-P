import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Main layout component that wraps all pages
 * Features:
 * - Consistent header and footer across all pages
 * - Proper semantic HTML structure for accessibility
 * - Responsive layout container
 * - SEO-friendly structure
 */

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Navigation */}
      <Header />
      
      {/* Main Content Area */}
      <main className={`flex-1 ${className}`} role="main">
        {children}
      </main>
      
      {/* Footer - Site Information */}
      <Footer />
    </div>
  );
};

export default Layout;