# IIT Patna Website

Welcome to the modern, responsive website for the Indian Institute of Technology Patna.

## Project Overview

This website is built using modern web technologies to provide an excellent user experience across all devices - from mobile phones to large desktop screens.

## 🏗️ Architecture & Folder Structure

### Core Technologies
- **Vite** - Fast build tool and development server
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **React Helmet Async** - SEO and meta tag management

### 📁 Folder Organization

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Footer, Layout)
│   ├── home/            # Homepage specific components
│   ├── common/          # Reusable common components
│   └── ui/              # shadcn/ui components and custom UI elements
├── pages/
│   ├── about/           # About section pages
│   ├── academics/       # Academic pages (future)
│   ├── admissions/      # Admission pages (future)
│   ├── research/        # Research pages (future)
│   ├── careers/         # Career pages (future)
│   ├── contact/         # Contact pages (future)
│   └── Index.tsx        # Homepage
├── assets/              # Images, icons, and static files
├── lib/                 # Utility functions and configurations
└── hooks/               # Custom React hooks
```

## 🎨 Design System

The website uses a comprehensive design system defined in:
- `src/index.css` - CSS variables and design tokens
- `tailwind.config.ts` - Tailwind configuration with custom colors

### Color Palette
- **Primary**: Academic Blue (`--primary`)
- **Secondary**: IIT Orange (`--secondary`)
- **Accent**: Bright Blue (`--accent`)
- **Gradients**: Modern gradient combinations for visual appeal

### Component Classes
- `.btn-hero` - Primary hero button style
- `.btn-secondary` - Secondary button style
- `.btn-outline` - Outline button style
- `.card-modern` - Modern card component
- `.card-feature` - Feature card with hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd iit-patna-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Laptops** (1024px and up)
- **Desktops** (1280px and up)
- **Large screens** (1920px and up)

## 🧩 Navigation Structure

The navigation follows the institutional hierarchy:

### Main Sections:
1. **About** - Institute information, history, leadership
2. **Academics** - Programs, departments, academic resources
3. **Admissions** - Application process, requirements, fees
4. **Research** - Research areas, facilities, publications
5. **Placements** - Career services, placement statistics
6. **Careers** - Job opportunities, recruitment
7. **Contact** - Contact information, directions

Each section contains comprehensive subsections as per the institutional requirements.

## 🔧 Component Guidelines

### Adding New Components
1. Create components in appropriate folder (`components/`)
2. Use TypeScript interfaces for props
3. Include detailed JSDoc comments
4. Follow the established naming conventions
5. Use design system classes from `index.css`

### Adding New Pages
1. Create page component in `pages/` folder
2. Add route in `src/App.tsx`
3. Include SEO component with appropriate meta tags
4. Use Layout component for consistent structure

### Code Style
- Use functional components with hooks
- Include comprehensive comments for complex logic
- Follow TypeScript best practices
- Use semantic HTML elements
- Implement proper accessibility attributes

## 🎯 SEO Optimization

- **Title tags** optimized for each page
- **Meta descriptions** under 160 characters
- **Structured data** for better search engine understanding
- **Canonical URLs** to prevent duplicate content
- **Image optimization** with descriptive alt text
- **Mobile-first** responsive design

## 🌟 Features

### Current Features
- Modern, attractive design with subtle animations
- Fully responsive layout
- SEO optimized pages
- Comprehensive navigation structure
- Professional hero section with campus showcase
- Feature highlights section
- Contact information and social links

### Planned Features
- Individual pages for all navigation sections
- Search functionality
- Online application forms
- Event calendar
- News and announcements
- Faculty and research profiles
- Student portal integration

## 📞 Support & Contact

For technical issues or questions about the website:
- Check the documentation in component comments
- Review the folder structure and naming conventions
- Follow the established patterns for new additions

## 🔄 Contributing

When making changes:
1. Follow the established folder structure
2. Include detailed comments in your code
3. Test responsiveness across all device sizes
4. Ensure SEO meta tags are properly set
5. Maintain design system consistency

## 📋 Notes

- All colors are defined using HSL values in the design system
- Components use semantic tokens instead of hardcoded colors
- The website supports both light and dark modes
- All navigation links are properly structured for future implementation
- Images are optimized and include proper alt text for accessibility

---

**IIT Patna** - Excellence in Engineering Education