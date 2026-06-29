# 🚀 Quick Start - Abuzar Portfolio

Get your portfolio online in 5 minutes!

## ⚡ Fastest Setup (Vercel)

### 1. Push to GitHub
```bash
cd abuzar-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### 2. Deploy to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Click "Deploy"
- **Done!** 🎉 Your site is live in 2-3 minutes

### 3. Add Custom Domain (Optional)
- In Vercel dashboard: Settings > Domains
- Add your domain
- Update DNS records (instructions in Vercel)

---

## 🏠 Local Development

### 1. Install Node.js
- Download from [nodejs.org](https://nodejs.org)
- Choose LTS version (20.x)

### 2. Setup Project
```bash
cd abuzar-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Customize
Edit these files to personalize:
- `lib/constants.ts` - Your info, social links
- `data/projects.ts` - Add your projects
- `data/skills.ts` - Update skills

---

## 📝 Key Files to Edit

### Personal Info
**File:** `lib/constants.ts`
```typescript
export const personalInfo = {
  name: 'Your Name',
  email: 'your@email.com',
  phone: '+91 XXXXXXXXXX',
  // ... more fields
};
```

### Projects
**File:** `data/projects.ts`
```typescript
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Your Project',
    description: 'Description...',
    // ... more fields
  },
];
```

### Skills
**File:** `data/skills.ts`
```typescript
export const technicalSkills = [
  {
    id: 'skill-1',
    name: 'Skill Name',
    level: 'Advanced',
    progress: 85,
  },
];
```

---

## 🎨 Quick Customization

### Change Colors
**File:** `tailwind.config.ts`
```typescript
colors: {
  primary: '#2563EB',    // Your primary color
  accent: '#38BDF8',     // Your accent color
}
```

### Update Social Links
**File:** `lib/constants.ts`
```typescript
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  // Add more links
];
```

---

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy Commands

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

**Docker**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## ✅ Pre-Launch Checklist

- [ ] Update all personal information
- [ ] Add your projects with descriptions
- [ ] Update skills and experience
- [ ] Change colors to match your brand
- [ ] Update social media links
- [ ] Add custom domain (optional)
- [ ] Test on mobile (responsive check)
- [ ] Check lighthouse score: `npm run build && npm start`
- [ ] Deploy to production

---

## 🔍 Verify Installation

```bash
# Check Node.js
node --version     # Should be 18.0.0+

# Check npm
npm --version      # Should be 8.0.0+

# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📚 More Detailed Guides

- **[Setup Guide](./SETUP_GUIDE.md)** - Complete customization guide
- **[Deployment Guide](./DEPLOYMENT_GUIDE.md)** - All deployment options
- **[README](./abuzar-portfolio/README.md)** - Full documentation

---

## 🆘 Quick Troubleshooting

### Port 3000 in use?
```bash
# Use different port
PORT=3001 npm run dev
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build failing?
```bash
npm run type-check  # Check for type errors
npm run lint        # Check for lint errors
```

---

## 🎯 Common Tasks

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Start production | `npm start` |
| Check types | `npm run type-check` |
| Lint code | `npm run lint` |

---

## 🌐 Recommended Deployments

1. **Vercel** ⭐ (Easiest, free)
   - Best performance
   - Auto-deploys from GitHub
   - Free tier covers most needs

2. **Netlify** (Easy, free)
   - Simple setup
   - Great build tools
   - Free hosting

3. **Railway** (Flexible, $5-10/month)
   - More control
   - Generous free tier
   - Easy scaling

4. **Docker** (Full control)
   - Deploy anywhere
   - Containerized
   - Best for scaling

---

## 💡 Tips

- Keep local changes backed up to GitHub
- Test on mobile devices (use DevTools)
- Monitor performance with Lighthouse
- Update dependencies regularly
- Use environment variables for secrets
- Add Google Analytics for insights

---

## 🎉 You're All Set!

Your portfolio is ready to go live!

**Next Steps:**
1. Customize your information
2. Add your projects
3. Deploy to Vercel (or your platform)
4. Share with the world!

Need help? Check the guides above or search the Next.js documentation.

---

**Happy building! 🚀**
