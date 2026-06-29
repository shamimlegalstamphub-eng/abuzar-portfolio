# Abuzar Portfolio - Setup Guide

Complete guide for setting up and customizing your portfolio.

## Table of Contents

1. [System Requirements](#system-requirements)
2. [Initial Setup](#initial-setup)
3. [Project Structure](#project-structure)
4. [Customization Guide](#customization-guide)
5. [Development Workflow](#development-workflow)
6. [Common Tasks](#common-tasks)
7. [Troubleshooting](#troubleshooting)

## System Requirements

### Minimum Requirements
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher (or yarn/pnpm)
- 500MB free disk space
- Modern web browser

### Recommended Setup
- Node.js 20.x LTS
- npm 10.x
- Visual Studio Code
- 2GB+ free disk space

## Initial Setup

### 1. Install Node.js

**Windows/Mac/Linux:**
- Download from [nodejs.org](https://nodejs.org)
- Choose LTS version (20.x)
- Follow installation wizard
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### 2. Project Structure Setup

```bash
# Navigate to project directory
cd abuzar-portfolio

# Install dependencies
npm install

# This installs all packages listed in package.json
# Takes 2-5 minutes depending on connection
```

### 3. Verify Installation

```bash
# Check all packages installed
npm list

# Should show dependency tree without errors
```

### 4. Start Development Server

```bash
npm run dev
```

Opens development server at `http://localhost:3000`

**Features:**
- Hot reload on file changes
- Fast refresh for instant updates
- Error overlay in browser
- Development tools enabled

### 5. First Build

```bash
npm run build
```

Creates optimized production build in `.next/` folder

---

## Project Structure

```
abuzar-portfolio/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   └── sitemap.ts         # SEO sitemap
│
├── components/            # React components
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Projects grid
│   ├── Journey.tsx        # Timeline
│   ├── Services.tsx       # Services section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
│
├── data/                  # Data files
│   ├── projects.ts        # Project data
│   └── skills.ts          # Skills data
│
├── lib/                   # Utilities & configs
│   ├── constants.ts       # Site configuration
│   └── animations.ts      # Framer Motion variants
│
├── styles/                # CSS files
│   └── globals.css        # Global styles
│
├── public/                # Static files
│   ├── favicon/           # Favicon files
│   ├── images/            # Image assets
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # XML sitemap
│
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
│
├── .github/               # GitHub configuration
│   └── workflows/         # GitHub Actions
│
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
├── tailwind.config.ts     # Tailwind config
├── tailwind.config.ts     # Tailwind config
└── README.md              # Project documentation
```

---

## Customization Guide

### 1. Update Personal Information

**File:** `lib/constants.ts`

```typescript
export const personalInfo = {
  name: 'Your Name',           // Your full name
  title: 'Your Title',         // Your professional title
  email: 'your@email.com',     // Contact email
  phone: '+91 XXXXXXXXXX',     // Phone number
  location: 'City, State',     // Your location
  timezone: 'IST (UTC+5:30)',  // Your timezone
  bio: 'Your bio here...',     // Short biography
  tagline: 'Your tagline',     // Professional tagline
  roles: ['Role 1', 'Role 2'], // Professional roles
};
```

### 2. Add Your Projects

**File:** `data/projects.ts`

```typescript
export const projects: Project[] = [
  {
    id: 'unique-project-id',
    title: 'Project Title',
    description: 'Short description',
    longDescription: 'Detailed description',
    category: 'Web',                    // AI, Web, Automation, Cloud, Testing
    image: 'https://image-url.com/img.jpg',
    status: 'Completed',                // Completed, In Progress, Archived
    technologies: ['Tech1', 'Tech2'],
    features: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/...',   // Optional
    link: 'https://live-site.com',      // Optional
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',                // Optional
  },
  // Add more projects...
];
```

### 3. Update Skills

**File:** `data/skills.ts`

```typescript
export const technicalSkills = [
  {
    id: 'skill-id',
    name: 'Skill Name',
    level: 'Intermediate',              // Beginner, Intermediate, Advanced
    progress: 75,                        // 0-100
    description: 'Description',
    tags: ['Tag1', 'Tag2'],
  },
  // Add more skills...
];
```

### 4. Customize Colors

**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: '#2563EB',    // Change to your primary color
  accent: '#38BDF8',     // Change to your accent color
  // Modify the dark theme colors
}
```

### 5. Update Social Links

**File:** `lib/constants.ts`

```typescript
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  // Update with your social profiles
];
```

### 6. Modify Education & Experience

**File:** `lib/constants.ts`

```typescript
export const education = [
  {
    degree: 'Your Degree',
    field: 'Your Field',
    institution: 'Your University',
    startYear: 2022,
    endYear: 2025,
    description: 'Description',
    current: true,
  },
];

export const experience = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'Description',
    highlights: ['Achievement 1', 'Achievement 2'],
  },
];
```

### 7. Update Timeline Events

**File:** `lib/constants.ts`

```typescript
export const timeline = [
  {
    year: 2024,
    title: 'Event Title',
    description: 'Event description',
    type: 'milestone',  // milestone, achievement, future
  },
  // Add more events...
];
```

---

## Development Workflow

### Daily Development

```bash
# Start dev server
npm run dev

# Open http://localhost:3000 in browser
# Make changes to files
# Changes auto-refresh in browser
```

### Before Committing

```bash
# Type check
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build

# Start production server to test
npm start
```

### File Naming Conventions

- **Components**: PascalCase (Hero.tsx, About.tsx)
- **Utility files**: camelCase (constants.ts, animations.ts)
- **Directories**: kebab-case (api/contact)

### Component Template

```typescript
'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function MyComponent() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>Title</motion.h2>
      <motion.p variants={itemVariants}>Content</motion.p>
    </motion.section>
  );
}
```

---

## Common Tasks

### Adding a New Section

1. Create component: `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to page layout
4. Style with Tailwind classes
5. Add animations using Framer Motion

### Updating Colors

1. Edit `tailwind.config.ts`
2. Update CSS variables in `styles/globals.css`
3. Files auto-update with new colors

### Adding a New Page

1. Create folder: `app/new-page/`
2. Add `page.tsx` inside
3. Use same layout structure
4. Add to navigation in `lib/constants.ts`

### Changing Fonts

Edit in `app/layout.tsx`:
```typescript
// Replace Google Fonts link
<link
  href="https://fonts.googleapis.com/css2?family=YourFont&display=swap"
  rel="stylesheet"
/>
```

### Adding Analytics

**Google Analytics:**
```typescript
// In app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
PORT=3001 npm run dev
```

### Module Not Found Error

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

```bash
# Clear build cache
rm -rf .next

# Rebuild
npm run build

# Check for TypeScript errors
npm run type-check
```

### Styling Not Applied

- Check Tailwind classes are correct
- Verify `globals.css` is imported in layout
- Clear browser cache (Ctrl+Shift+Delete)

### Images Not Loading

- Verify image paths are correct
- Images in `public/` folder don't need prefix
- For external images, update `next.config.js` domains

### Component Not Rendering

- Check if component is properly exported
- Verify `'use client'` directive if using client features
- Check console for error messages

---

## Performance Optimization Tips

### Image Optimization
- Use `Image` component from Next.js
- Compress images before uploading
- Use WebP format when possible
- Add `alt` text for accessibility

### Code Splitting
- Import components dynamically
- Use `React.lazy()` for heavy components
- Tailwind CSS automatically removes unused styles

### Bundle Analysis
```bash
npm run build --analyze
```

### Lighthouse Audit
```bash
# Build production
npm run build
npm start

# In another terminal
npx lighthouse http://localhost:3000 --view
```

---

## Security Checklist

- [ ] Remove sensitive data from code
- [ ] Use environment variables for secrets
- [ ] Update dependencies regularly
- [ ] Enable HTTPS in production
- [ ] Set proper CORS headers
- [ ] Validate form inputs
- [ ] Implement rate limiting
- [ ] Keep Next.js updated

---

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes
git add .

# Commit changes
git commit -m "feat: Add new feature"

# Push to remote
git push origin feature/your-feature

# Create Pull Request on GitHub
```

### Commit Message Format
```
feat: Add new feature
fix: Fix bug description
docs: Update documentation
style: Format code
refactor: Reorganize code
test: Add tests
chore: Update dependencies
```

---

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Tools & Extensions
- **VS Code Extensions**
  - Prettier - Code formatter
  - ESLint - Code quality
  - Tailwind CSS IntelliSense
  - Thunder Client - API testing

### Learning Resources
- Next.js Tutorial: https://nextjs.org/learn
- React Patterns: https://patterns.dev/
- CSS Tricks: https://css-tricks.com/

---

## Support

For issues or questions:
1. Check documentation first
2. Search GitHub issues
3. Check browser console for errors
4. Post in community forums

---

Last Updated: 2024
