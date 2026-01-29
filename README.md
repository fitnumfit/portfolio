# Portfolio - Healthcare SEO & Content Specialist

A beautiful, modern portfolio website built with Next.js, React, and Tailwind CSS. This portfolio showcases healthcare SEO and content writing expertise with a focus on SEO optimization.

## Features

- 🚀 **Next.js 14** with App Router for optimal SEO
- 🎨 **Modern & Beautiful UI** with Tailwind CSS
- 📱 **Fully Responsive** design
- ⚡ **Fast Performance** with optimized loading
- 🔧 **Easy Configuration** - All content in a single config file
- 🎯 **SEO Optimized** with proper meta tags and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Update your information in `config/portfolio.js`:
   - Add your email and LinkedIn URL
   - Customize any content as needed

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

All portfolio content is stored in `config/portfolio.js`. Simply edit this file to update:

- Personal information (name, title, tagline, contact)
- About section
- Work experience
- Skills and strengths
- Content formats
- Work samples and links

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js application can be deployed to:

- **Vercel** (recommended) - Just connect your GitHub repo
- **Netlify** - Connect your repo or use Netlify CLI
- **Any Node.js hosting** - Follow Next.js deployment guides

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Work samples
│   └── Contact.tsx     # Contact section
├── config/
│   └── portfolio.js    # All portfolio content (EDIT THIS!)
└── public/             # Static assets
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme. The primary color is currently set to blue.

### Styling

All styles use Tailwind CSS utility classes. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles in individual component files

## SEO Features

- Proper meta tags in `app/layout.tsx`
- Semantic HTML structure
- Open Graph tags for social sharing
- Twitter Card support
- Optimized for search engines

## License

This project is open source and available for personal and commercial use.
