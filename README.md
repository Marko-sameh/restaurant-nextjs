# 🍽️ Indian Restaurant - Modern Next.js Website

A stunning, fully responsive restaurant website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This project showcases modern web development practices with smooth animations, interactive UI components, and optimal performance.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.25.0-ff69b4?style=for-the-badge&logo=framer)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Components Overview](#-components-overview)
- [Animations & Interactions](#-animations--interactions)
- [Responsive Design](#-responsive-design)
- [Performance Optimizations](#-performance-optimizations)
- [SEO & Accessibility](#-seo--accessibility)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎨 Design & UI
- **Modern Neumorphic Design** - Elegant card designs with soft shadows and depth
- **Smooth Animations** - Powered by Framer Motion for fluid transitions
- **Interactive Parallax Effects** - Mouse-tracking parallax on hero section
- **Responsive Layout** - Mobile-first design that works on all devices
- **Custom Scrollbar** - Styled scrollbar with gradient colors
- **Glass Morphism Effects** - Modern glassmorphic UI elements

### 🚀 Functionality
- **Dynamic Menu System** - Filter dishes by category (Breakfast, Lunch, Dinner)
- **Interactive Gallery** - Image carousel with lightbox and thumbnails
- **Video Modal** - Play restaurant story video in elegant modal
- **Favorites System** - Add dishes to favorites with heart icon
- **Shopping Cart** - Add items to cart with visual feedback
- **Newsletter Subscription** - Email subscription form
- **Contact Information** - Opening hours, phone, and location details

### 📱 Sections
1. **Intro Screen** - Animated welcome screen with video background
2. **Hero Section** - Eye-catching banner with parallax effects
3. **Brands Section** - Trusted by 70+ companies showcase
4. **About Section** - Restaurant story with video and stats
5. **Menu Section** - Interactive menu with category filters
6. **Featured Dishes** - Highlight special dishes (Pizza & Sushi)
7. **Gallery Section** - Restaurant interior photos with booking info
8. **Team Section** - Meet our chefs with social links
9. **Testimonials** - Customer reviews with ratings
10. **FAQ Section** - Frequently asked questions
11. **Blog Section** - Latest publications and news
12. **Footer** - Links, hours, and social media

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library with latest features
- **TypeScript 5.0** - Type-safe development
- **Tailwind CSS 3.4.0** - Utility-first CSS framework

### Animation & Interaction
- **Framer Motion 12.25.0** - Production-ready animation library
  - `useMotionValue` - Reactive motion values
  - `useSpring` - Spring physics animations
  - `useTransform` - Value transformations
  - `AnimatePresence` - Exit animations
- **Lucide React 0.562.0** - Beautiful icon library

### UI Components
- **Embla Carousel 8.6.0** - Smooth carousel functionality
- **React Hook Form 7.70.0** - Form validation and handling
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.4.0** - Merge Tailwind classes

### Development Tools
- **ESLint 9** - Code linting
- **Babel React Compiler 1.0.0** - React optimization
- **PostCSS** - CSS processing
- **Autoprefixer 10.4.23** - CSS vendor prefixes

## 📁 Project Structure

```
restaurant-nextjs/
├── public/
│   ├── images/
│   │   ├── blog/           # Blog post images
│   │   ├── brands/         # Company logos
│   │   ├── chef/           # Team member photos
│   │   ├── dish/           # Menu item images
│   │   ├── testimonials/   # Customer photos
│   │   ├── berry.png       # Parallax decoration
│   │   ├── leaf.png        # Parallax decoration
│   │   ├── main-b.jpg      # Hero image
│   │   ├── about.jpg       # About section image
│   │   ├── menu-bg.png     # Menu background pattern
│   │   └── video.mp4       # Restaurant story video
│   └── logo.png            # Restaurant logo
│
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navigation header
│   │   │   └── Footer.tsx          # Footer with links
│   │   │
│   │   ├── sections/
│   │   │   ├── IntroScreen.tsx     # Welcome animation
│   │   │   ├── HeroSection.tsx     # Hero banner
│   │   │   ├── BrandsSection.tsx   # Company logos
│   │   │   ├── AboutSection.tsx    # Restaurant story
│   │   │   ├── MenuSection.tsx     # Menu with filters
│   │   │   ├── FeaturedDishesSection.tsx  # Special dishes
│   │   │   ├── GallerySection.tsx  # Photo gallery
│   │   │   ├── TeamSection.tsx     # Chef profiles
│   │   │   ├── TestimonialsSection.tsx    # Reviews
│   │   │   ├── FAQSection.tsx      # Questions
│   │   │   └── BlogSection.tsx     # Blog posts
│   │   │
│   │   ├── ui/              # Reusable UI components
│   │   └── StructuredData.tsx      # SEO schema
│   │
│   ├── hooks/
│   │   └── useResponsive.ts        # Responsive hooks
│   │
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   │
│   └── types/
│       └── index.ts                # TypeScript types
│
├── .gitignore
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd restaurant-nextjs
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

### Lint Code

```bash
npm run lint
```

## 🧩 Components Overview

### Layout Components

#### Header (`src/components/layout/Header.tsx`)
- Fixed navigation with scroll effects
- Active section tracking
- Mobile-responsive menu
- Search functionality
- Shopping cart indicator
- User account button
- Smooth scroll navigation

**Features:**
- Glass morphism effect on scroll
- Animated mobile menu
- Active link highlighting
- Accessible ARIA labels

#### Footer (`src/components/layout/Footer.tsx`)
- Restaurant information
- Opening hours
- Quick links
- Social media icons
- Copyright information

### Section Components

#### 1. IntroScreen (`src/components/sections/IntroScreen.tsx`)
- Animated welcome screen
- Video background
- Fade-in text animations
- Auto-dismiss after 6 seconds

**Animations:**
- Fade in down
- Blur in
- Wheel in right

#### 2. HeroSection (`src/components/sections/HeroSection.tsx`)
- Parallax background elements (berry & leaf)
- Mouse-tracking animations
- Morphing image shape
- Call-to-action buttons
- Statistics display

**Technologies:**
- `useMotionValue` for mouse tracking
- `useSpring` for smooth animations
- `useTransform` for parallax effect

#### 3. BrandsSection (`src/components/sections/BrandsSection.tsx`)
- Company logos grid
- Responsive layout
- Hover effects

#### 4. AboutSection (`src/components/sections/AboutSection.tsx`)
- Restaurant story
- Video modal
- Statistics cards
- Mission & vision

**Features:**
- Play button with hover effect
- Fullscreen video modal
- Animated stats counters

#### 5. MenuSection (`src/components/sections/MenuSection.tsx`)
- Category filter (All, Breakfast, Lunch, Dinner)
- Dish cards with neumorphic design
- Favorites system
- Add to cart functionality
- Cook time display
- Rating stars

**Interactive Elements:**
- Category switching with animations
- Heart icon for favorites
- Plus button for cart
- Hover lift effects

#### 6. FeaturedDishesSection (`src/components/sections/FeaturedDishesSection.tsx`)
- Highlight special dishes
- Image and description layout
- Alternating layout pattern

#### 7. GallerySection (`src/components/sections/GallerySection.tsx`)
- Image carousel
- Lightbox with navigation
- Thumbnail grid
- Opening hours display
- Contact information
- Location details

**Features:**
- Swipe navigation
- Keyboard controls
- Image zoom
- Pagination dots

#### 8. TeamSection (`src/components/sections/TeamSection.tsx`)
- Chef profiles
- Social media links
- Carousel layout
- Hover effects

#### 9. TestimonialsSection (`src/components/sections/TestimonialsSection.tsx`)
- Customer reviews
- Star ratings
- Profile images
- Grid layout

#### 10. FAQSection (`src/components/sections/FAQSection.tsx`)
- Frequently asked questions
- Expandable cards
- Color-coded categories

#### 11. BlogSection (`src/components/sections/BlogSection.tsx`)
- Latest blog posts
- Newsletter subscription
- Read more links
- Last updated timestamps

## 🎭 Animations & Interactions

### Framer Motion Animations

#### Parallax Effects
```typescript
// Mouse-tracking parallax
const mouseX = useMotionValue(0)
const mouseY = useMotionValue(0)
const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
const berryX = useTransform(springX, [-0.5, 0.5], [-50, 50])
```

#### Scroll Animations
- Fade in on scroll
- Slide up on scroll
- Stagger children animations
- Exit animations with AnimatePresence

#### Hover Effects
- Scale transforms
- Shadow changes
- Color transitions
- Icon rotations

### Custom Animations

#### Neumorphic Cards
```css
.card-neumorphic {
  box-shadow: 
    20px 20px 40px rgba(148, 163, 184, 0.15),
    -20px -20px 40px rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card-neumorphic:hover {
  transform: translateY(-8px) scale(1.02);
}
```

#### Morphing Shapes
- Continuous border-radius animation
- Smooth transitions between shapes
- Infinite loop with linear easing

## 📱 Responsive Design

### Breakpoints
```typescript
const breakpoints = {
  xs: 475px,   // Extra small devices
  sm: 640px,   // Small devices
  md: 768px,   // Medium devices
  lg: 1024px,  // Large devices
  xl: 1280px,  // Extra large devices
  '2xl': 1536px // 2X large devices
}
```

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized images for different screen sizes

### Responsive Features
- Collapsible mobile menu
- Stacked layouts on mobile
- Horizontal scrolling for categories
- Adaptive typography
- Flexible grid systems

## ⚡ Performance Optimizations

### Next.js Optimizations
- **App Router** - Server components by default
- **Image Optimization** - Automatic image optimization with `next/image`
- **Code Splitting** - Automatic code splitting per route
- **Static Generation** - Pre-rendered pages at build time
- **Font Optimization** - Automatic font optimization

### Custom Optimizations
- **Lazy Loading** - Components load on demand
- **Debounced Events** - Optimized scroll and resize handlers
- **Motion Values** - Efficient animations without re-renders
- **CSS Optimization** - Tailwind CSS purging unused styles
- **Bundle Size** - Tree-shaking and minification

### Performance Metrics
- **First Contentful Paint (FCP)** - < 1.5s
- **Largest Contentful Paint (LCP)** - < 2.5s
- **Time to Interactive (TTI)** - < 3.5s
- **Cumulative Layout Shift (CLS)** - < 0.1

## 🔍 SEO & Accessibility

### SEO Features
- **Metadata** - Comprehensive meta tags
- **Open Graph** - Social media sharing optimization
- **Structured Data** - JSON-LD schema for restaurants
- **Sitemap** - Auto-generated sitemap
- **Robots.txt** - Search engine directives
- **Semantic HTML** - Proper heading hierarchy

### Accessibility Features
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus States** - Visible focus indicators
- **Alt Text** - Descriptive image alt attributes
- **Color Contrast** - WCAG AA compliant
- **Reduced Motion** - Respects user preferences

### Structured Data Example
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Indian Restaurant",
  "image": "/images/main-b.jpg",
  "servesCuisine": "Indian",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Spice Street",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400001"
  }
}
```

## 🎨 Styling System

### Tailwind CSS Configuration
- Custom color palette
- Extended spacing scale
- Custom animations
- Responsive breakpoints
- Custom utilities

### Global Styles
- Custom scrollbar
- Neumorphic effects
- Button styles
- Focus rings
- Glass effects
- Hover transitions

### Design Tokens
```typescript
colors: {
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    // ... full palette
    900: '#7c2d12',
  }
}
```

## 🔧 Utility Functions

### Responsive Hooks
```typescript
// useResponsive.ts
export const useResponsive = () => {
  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    width,
    height
  }
}
```

### Helper Functions
- `cn()` - Merge Tailwind classes
- `scrollToElement()` - Smooth scroll utility
- `debounce()` - Debounce function calls
- `formatPrice()` - Format currency
- Animation variants for Framer Motion

## 📦 TypeScript Types

### Core Types
```typescript
interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  calories: number
  rating: number
  image: string
  category: 'breakfast' | 'lunch' | 'dinner'
  type: 'veg' | 'non-veg'
  persons: number
  cookTime?: string
}

interface TeamMember {
  id: string
  name: string
  image: string
  socialLinks: {
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

interface Testimonial {
  id: string
  name: string
  image: string
  rating: number
  comment: string
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify** - Connect GitHub repository
- **AWS Amplify** - Deploy with AWS
- **Docker** - Containerized deployment
- **Self-hosted** - Node.js server

### Environment Variables
Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📝 Scripts

```json
{
  "dev": "next dev",           // Start development server
  "build": "next build",       // Build for production
  "start": "next start",       // Start production server
  "lint": "eslint"             // Run ESLint
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add comments for complex logic
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Vercel** - Hosting and deployment
- **Framer Motion** - Beautiful animations
- **Tailwind CSS** - Utility-first CSS
- **Lucide** - Icon library
- **Original Design** - HTML/CSS template inspiration

## 📞 Contact & Support

- **Email**: support@restaurant.com
- **Phone**: +91 - 8866998866
- **Location**: 123 Spice Street, Mumbai, Maharashtra 400001

## 🔗 Links

- [Live Demo](#)
- [Documentation](#)
- [Report Bug](#)
- [Request Feature](#)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

*Last Updated: 2024*
