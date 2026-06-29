# Abuzar - Premium Personal Portfolio

A production-grade personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Features

- **Modern Design**: Premium, minimal dark theme inspired by Apple, Stripe, and Linear
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: 90+ Lighthouse score with lazy loading and image optimization
- **SEO Ready**: Complete SEO configuration with metadata and Open Graph tags
- **TypeScript**: Full type safety for better development experience
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Dark Mode**: Beautiful dark theme with gradient accents
- **Fast**: Static site generation with ISR for optimal performance

## 📋 Sections

1. **Hero** - Eye-catching landing section
2. **About** - Personal bio, education, and experience
3. **Skills** - Technical, professional skills, languages, and learning areas
4. **Projects** - Portfolio of featured projects with filtering
5. **Journey** - Timeline of achievements and milestones
6. **Services** - Service offerings with detailed descriptions
7. **Contact** - Contact form and information
8. **Footer** - Navigation links and social connections

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm or yarn package manager

### Installation

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/abuzar/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

### Update Personal Information

Edit `/lib/constants.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  email: 'your@email.com',
  phone: '+91 XXXXXXXXXX',
  // ... other details
};
```

### Add Your Projects

Edit `/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Short description',
    // ... other fields
  },
  // Add more projects
];
```

### Customize Skills

Edit `/data/skills.ts`:

```typescript
export const technicalSkills = [
  {
    id: 'skill-id',
    name: 'Skill Name',
    level: 'Advanced',
    progress: 85,
    // ... other fields
  },
  // Add more skills
];
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#2563EB',    // Blue
  accent: '#38BDF8',     // Cyan
  // ... customize colors
}
```

### Typography

Modify font settings in `app/layout.tsx` and `globals.css`.

### Animations

Adjust animations in `/lib/animations.ts` using Framer Motion variants.

## 🏗️ Build

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

```bash
vercel deploy
```

### Docker

1. **Build Image**
   ```bash
   docker build -t abuzar-portfolio .
   ```

2. **Run Container**
   ```bash
   docker run -p 3000:3000 abuzar-portfolio
   ```

3. **Using Docker Compose**
   ```bash
   docker-compose up
   ```

### Railway

1. Connect GitHub repository
2. Set Node environment
3. Deploy

### AWS (EC2)

1. SSH into instance
2. Install Node.js
3. Clone repository
4. Run `npm install && npm run build`
5. Use PM2 for process management

### DigitalOcean App Platform

1. Connect GitHub
2. Select Node.js buildpack
3. Deploy

## 🔍 SEO

- ✅ Metadata configured in `app/layout.tsx`
- ✅ Open Graph tags for social sharing
- ✅ XML Sitemap support
- ✅ Robots.txt configured
- ✅ Structured data (JSON-LD)
- ✅ Mobile-friendly responsive design

### Add sitemap.xml

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## ⚡ Performance

- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load on intersection
- **Compression**: Gzip compression enabled
- **Caching**: Strategic caching for static assets

### Lighthouse Scores

Target metrics:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## 🔐 Security

- ✅ HTTPS enforced
- ✅ Content Security Policy (CSP)
- ✅ XSS Protection
- ✅ CSRF Token Support
- ✅ Rate Limiting Ready
- ✅ SQL Injection Safe (no database)

## 🧪 Testing

### Run Linter

```bash
npm run lint
```

### Type Check

```bash
npm run type-check
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📚 Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Next/Image** - Image optimization

### Development
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

### Deployment
- **Vercel** (Recommended)
- **Docker** - Containerization
- **Node.js 18+** - Runtime

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📞 Support

For questions or issues:
- Email: khanabuzar7070@gmail.com
- GitHub Issues: [Project Issues](https://github.com/abuzar/portfolio/issues)

## 🙏 Acknowledgments

- Inspired by Apple, Stripe, and Linear design systems
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Next.js team for the excellent framework

---

Made with ❤️ by Abuzar | © 2024 - Present
