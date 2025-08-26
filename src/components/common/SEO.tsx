import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for consistent meta tags across pages
 * Features:
 * - Dynamic title and description
 * - Open Graph and Twitter Card support
 * - Canonical URL handling
 * - Keywords optimization
 */

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "IIT Patna - Indian Institute of Technology Patna",
  description = "IIT Patna is a premier technological institution offering world-class education in engineering, science, and technology.",
  keywords = "IIT Patna, engineering education, technology, research, Bihar, India",
  canonicalUrl = "https://www.iitp.ac.in",
  ogImage = "https://www.iitp.ac.in/images/iit-patna-og-image.jpg",
  ogType = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="IIT Patna" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="IIT Patna" />
    </Helmet>
  );
};

export default SEO;