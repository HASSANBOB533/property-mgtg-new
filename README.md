# Best of Bedz (BOB) - Property Management Website

A professional, SEO-optimized, fully accessible property management website for Best of Bedz - Egypt's premier short-term rental property management company.

## ✨ Recent Updates (December 2024)

This website has been comprehensively optimized to meet international standards:

- ✅ **Official BOB Branding**: New logo with brand colors (#3B6CB4 blue, #E9C500 yellow)
- ✅ **Interactive Before/After Gallery**: Professional drag-to-compare image slider
- ✅ **Google Sheets Integration**: Form submissions with Cloudinary image URLs
- ✅ **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, JSON-LD
- ✅ **Accessibility Compliant**: WCAG 2.1 AA standards with ARIA labels
- ✅ **Performance Optimized**: PWA support, lazy loading, Core Web Vitals ready

## Features

- 🌍 **Bilingual Support**: Full English/Arabic with RTL layout support
- 📱 **Mobile-First**: Responsive design optimized for all devices
- 🎨 **Modern Design**: Built with Next.js 16, TypeScript, and Tailwind CSS 4
- 🖼️ **Before/After Gallery**: Interactive image comparison slider with touch support
- 📊 **Form Integration**: Cloudinary image upload + Google Sheets submission
- ♿ **Accessible**: Skip links, ARIA labels, keyboard navigation, screen reader support
- 🚀 **SEO Ready**: Rich meta tags, structured data, social sharing optimized
- 🌐 **Comprehensive Pages**:
  - Homepage with services, pricing, and trust indicators
  - Design & Furnishing showcase with interactive gallery
  - Property listing form with image upload
  - Owner portal integration

## Tech Stack

- **Framework**: Next.js 16 with App Router (Turbopack)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4
- **Internationalization**: next-intl 4.6
- **Image Management**: next-cloudinary 6.13
- **Fonts**: Inter & Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file (optional):

```env
# Google Sheets Integration (optional - has fallback)
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_google_apps_script_url

# Cloudinary Configuration (required for image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed setup instructions.

## Project Structure

```
├── app/
│   ├── [locale]/               # Internationalized pages
│   │   ├── page.tsx            # Homepage
│   │   ├── design/             # Design & Furnishing page
│   │   ├── list-property/      # Property listing form
│   │   └── layout.tsx          # Root layout with SEO meta tags
│   └── globals.css             # Global styles with brand colors
├── components/
│   ├── homepage/               # Homepage sections
│   ├── design/
│   │   └── ProjectGallery.tsx  # Interactive before/after slider
│   ├── Header.tsx              # Navigation with logo
│   ├── Footer.tsx              # Footer with social links
│   └── PropertyForm.tsx        # Form with Cloudinary integration
├── lib/
│   └── translations/           # i18n (en.json, ar.json)
├── public/
│   ├── images/
│   │   ├── logo.svg            # Official BOB logo
│   │   ├── logo-simple.svg     # Simplified variant
│   │   └── og-image.svg        # Social sharing image (1200x630)
│   ├── favicon.svg             # Browser icon
│   ├── apple-touch-icon.svg    # iOS icon
│   ├── site.webmanifest        # PWA manifest
│   └── robots.txt              # Search engine crawler config
├── BRAND_GUIDELINES.md         # Complete brand specifications
└── GOOGLE_SHEETS_SETUP.md      # Integration setup guide
```

## Brand Colors

Official BOB brand palette:

- **Primary Blue**: `#2861AD` (primary actions, links)
- **Blue Dark**: `#1D4A85` (hover states)
- **Yellow Accent**: `#F7DD6E` (highlights, CTAs)
- **Yellow Dark**: `#EBCB4E` (hover states)
- **Light Cream**: `#EEF0DC` (primary background)
- **Light Blue BG**: `#f2f7fc` (alternative background)
- **Green (Success)**: `#00A569` (success states, "after" images)
- **Red Accent**: `#DE2A37` (errors, "before" images)
- **Dark Text**: `#1F2D26` (body text, headings)

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for complete design specifications.

## Key Integrations

### Cloudinary (Image Upload)
- Property photos uploaded to Cloudinary
- Automatic optimization and transformations
- Secure upload widget with file type restrictions
- See `components/PropertyForm.tsx` for implementation

### Google Sheets (Form Submissions)
- Form data sent to Google Sheets via Apps Script
- Property images included as comma-separated URLs
- Email notifications support (optional)
- See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for setup

### Guesty (Owner Portal)
- Direct integration link for property owners
- Access to bookings, calendar, and revenue

### Cal.com (Meeting Scheduler)
- Embedded video call booking
- Direct integration on property listing page

## SEO Features

- ✅ Open Graph meta tags (Facebook sharing)
- ✅ Twitter Card meta tags
- ✅ JSON-LD structured data (Organization schema)
- ✅ Comprehensive meta descriptions
- ✅ Custom social sharing image (1200x630)
- ✅ robots.txt for crawler configuration
- ✅ Sitemap ready (extend with sitemap.xml)
- ✅ PWA manifest for installable app

## Accessibility Features

- ✅ WCAG 2.1 AA compliant
- ✅ Skip to main content link
- ✅ ARIA labels on all interactive elements
- ✅ Semantic HTML (header, nav, main, footer, address)
- ✅ Keyboard navigation support
- ✅ Focus-visible styles
- ✅ Screen reader optimized
- ✅ Reduced motion support
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Alt text for all images

## Performance Optimizations

- ✅ Next.js Image component with automatic optimization
- ✅ Font optimization (preconnect, display=swap)
- ✅ Lazy loading for below-the-fold images
- ✅ Code splitting with dynamic imports
- ✅ PWA support with web manifest
- ✅ Optimized SVG assets
- ✅ Font smoothing for better rendering

## Documentation

- 📄 [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) - Complete brand specifications (colors, typography, components)
- 📄 [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) - Step-by-step integration guide

## Social Media

- Facebook: [@BestofBedz](https://www.facebook.com/BestofBedz/)
- Instagram: [@bestofbedz](https://www.instagram.com/bestofbedz)
- LinkedIn: [Best of Bedz](https://www.linkedin.com/company/best-of-bedz/)
- YouTube: [@BestofBedz-LLC](https://www.youtube.com/@BestofBedz-LLC)
- TikTok: [@bestofbedzofficial](https://www.tiktok.com/@bestofbedzofficial)
- Snapchat: [EWTMkLhy](https://snapchat.com/t/EWTMkLhy)

## Contact

- **Email**: cs@bestofbedz.com
- **Phone**: +20 122 758 0022
- **Address**: New Cairo, 5th Settlement, Egypt

## License

All rights reserved © 2024-2025 Best of Bedz LLC
