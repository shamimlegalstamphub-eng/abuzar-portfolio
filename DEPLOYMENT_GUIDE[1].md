# Abuzar Portfolio - Deployment Guide

Complete guide for deploying your portfolio website to various hosting platforms.

## Table of Contents

1. [Quick Deployment (Vercel)](#quick-deployment-vercel)
2. [GitHub Pages](#github-pages)
3. [Netlify](#netlify)
4. [Railway](#railway)
5. [DigitalOcean](#digitalocean)
6. [Docker & Self-Hosted](#docker--self-hosted)
7. [AWS EC2](#aws-ec2)
8. [Domain Configuration](#domain-configuration)
9. [Performance Optimization](#performance-optimization)

## Quick Deployment (Vercel)

**Recommended** - Easiest and fastest deployment.

### Prerequisites
- GitHub account with project repository
- Vercel account (free at vercel.com)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select GitHub repository
   - Configure project settings:
     - **Framework**: Next.js (auto-detected)
     - **Root Directory**: ./
     - **Node Version**: 18.x
     - **Build Command**: `npm run build`
     - **Install Command**: `npm ci`
     - **Output Directory**: `.next`

3. **Set Environment Variables**
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site is live!

### Auto-Deployment
After initial setup, every push to main branch automatically deploys.

### Custom Domain
1. Go to Project Settings > Domains
2. Add custom domain
3. Update DNS records (instructions provided by Vercel)
4. SSL certificate auto-provisioned

### Environment Variables
1. Settings > Environment Variables
2. Add variables for production
3. Variables auto-injected in builds

---

## GitHub Pages

Free hosting directly from GitHub.

### Prerequisites
- Public GitHub repository
- GitHub account

### Steps

1. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/portfolio',
     assetPrefix: '/portfolio/',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Build Locally**
   ```bash
   npm run build
   ```

3. **Create Deployment Workflow**
   Create `.github/workflows/pages.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - name: Upload to GitHub Pages
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./out

     deploy:
       runs-on: ubuntu-latest
       needs: build-and-deploy
       permissions:
         pages: write
         id-token: write
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

4. **Push and Deploy**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push
   ```

5. **Enable Pages**
   - Go to repository Settings
   - GitHub Pages > Source > GitHub Actions
   - Site will be available at `username.github.io/portfolio`

---

## Netlify

Easy deployment with excellent build features.

### Prerequisites
- Netlify account (free at netlify.com)
- GitHub repository

### Steps

1. **Connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Authorize GitHub
   - Select repository

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18

3. **Set Environment Variables**
   - Site settings > Build & deploy > Environment
   - Add: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`

4. **Deploy**
   - Netlify automatically builds and deploys
   - Site available at `yourname.netlify.app`

5. **Custom Domain**
   - Domain settings > Add custom domain
   - Update DNS records
   - SSL auto-provisioned

### Environment Variables
Settings > Build & deploy > Environment Variables

---

## Railway

Modern deployment platform with generous free tier.

### Prerequisites
- Railway account (free at railway.app)
- GitHub repository

### Steps

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - New Project > GitHub Repo
   - Authorize and select repository

2. **Configure**
   - Auto-detected as Node.js
   - Add environment variables:
     ```
     NEXT_PUBLIC_SITE_URL=https://yourdomain.com
     NODE_ENV=production
     ```

3. **Deploy**
   - Railway automatically deploys
   - Check deployment logs
   - Available at `yourname-prod.up.railway.app`

4. **Custom Domain**
   - Project Settings > Domains
   - Add custom domain
   - Update DNS

### Environment Variables
Settings > Variables

---

## DigitalOcean

Professional managed hosting with App Platform.

### Prerequisites
- DigitalOcean account
- GitHub repository

### Steps

1. **Create App**
   - Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)
   - Apps > Create App
   - Connect GitHub repository

2. **Build Configuration**
   - **Source Type**: GitHub
   - **Repository**: Select yours
   - **Build Command**: `npm ci && npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: 3000

3. **Environment Variables**
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NODE_ENV=production
   ```

4. **Deploy**
   - Review and create
   - Wait for build and deployment
   - Available at auto-generated URL

5. **Custom Domain**
   - App Settings > Domains
   - Add custom domain
   - Update DNS records

### Scaling
- Resources tab to adjust compute
- Auto-scale settings available

---

## Docker & Self-Hosted

Full control with Docker containerization.

### Build Docker Image

```bash
# Build
docker build -t abuzar-portfolio:latest .

# Run locally
docker run -p 3000:3000 abuzar-portfolio:latest

# Tag for registry
docker tag abuzar-portfolio:latest your-registry/abuzar-portfolio:latest

# Push to Docker Hub
docker login
docker push your-registry/abuzar-portfolio:latest
```

### Docker Compose

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Deploy to Your Server

```bash
# SSH into server
ssh user@server.com

# Pull image
docker pull your-registry/abuzar-portfolio:latest

# Run container
docker run -d \
  -p 80:3000 \
  --name portfolio \
  --restart unless-stopped \
  your-registry/abuzar-portfolio:latest

# Check status
docker ps
```

---

## AWS EC2

Traditional server deployment on AWS.

### Prerequisites
- AWS account
- EC2 instance (t2.micro eligible for free tier)
- Ubuntu 20.04 LTS or similar

### Steps

1. **Launch EC2 Instance**
   - Instance type: t2.micro (free tier)
   - Security group: Allow HTTP (80), HTTPS (443), SSH (22)
   - Key pair: Download .pem file

2. **Connect to Instance**
   ```bash
   chmod 400 your-key.pem
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Dependencies**
   ```bash
   sudo apt update
   sudo apt install -y curl git
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Install PM2 (process manager)
   sudo npm install -g pm2
   ```

4. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   npm install
   npm run build
   ```

5. **Start Application**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx Reverse Proxy**
   ```bash
   sudo apt install -y nginx
   ```

   Create `/etc/nginx/sites-available/default`:
   ```nginx
   server {
     listen 80 default_server;
     listen [::]:80 default_server;
     server_name _;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

   ```bash
   sudo systemctl restart nginx
   ```

7. **Setup SSL with Certbot**
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

### Monitoring
```bash
# View logs
pm2 logs portfolio

# Monitor
pm2 monit
```

---

## Domain Configuration

### DNS Records Setup

For any hosting platform, configure these DNS records:

**For primary domain (example.com):**
```
Type    Name    Value
A       @       1.2.3.4 (your server IP)
CNAME   www     example.com
```

**For subdomain (portfolio.example.com):**
```
Type    Name        Value
CNAME   portfolio   yourhost.com (or IP)
```

### SSL Certificate

- **Vercel**: Auto-provisioned
- **Netlify**: Auto-provisioned
- **Railway**: Auto-provisioned
- **EC2**: Use Let's Encrypt (Certbot)

### Email Configuration

If using custom domain email:
1. Update MX records
2. Set SPF, DKIM, DMARC records
3. Use email service (Gmail, Namecheap Email, etc.)

---

## Performance Optimization

### Pre-Deployment Checklist

```bash
# Build analysis
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Test locally
npm start
```

### Optimize Images

1. Ensure images are in `public/` folder
2. Use Next.js Image component
3. Optimize with:
   ```bash
   npx imagemin public/images/* --out-dir=public/images
   ```

### Monitor Performance

**Lighthouse Report:**
```bash
npm install -g lighthouse
lighthouse https://yourdomain.com --view
```

**Core Web Vitals:**
- Check in Google Search Console
- Monitor with PageSpeed Insights
- Use web-vitals npm package

### Caching Strategy

Update headers in deployment config:
```
Cache-Control: public, max-age=31536000, immutable  # Static assets
Cache-Control: public, s-maxage=3600                # Dynamic content
```

### Database Optimization

If you add a database later:
- Use connection pooling
- Index frequently queried fields
- Archive old data
- Regular backups

---

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next
npm run build
```

### Slow Performance
- Check image sizes
- Analyze bundle (next/bundle-analyzer)
- Enable gzip compression
- Optimize database queries

### 502 Bad Gateway
- Check application logs
- Ensure port 3000 is open
- Verify environment variables

### SSL Certificate Issues
- Run `certbot renew --dry-run`
- Check certificate expiration
- Verify DNS records

---

## Monitoring & Maintenance

### Setup Monitoring

**Uptime Monitoring:**
- UptimeRobot (free)
- Pingdom
- Statuspage

**Performance Monitoring:**
- Sentry (error tracking)
- LogRocket
- New Relic

### Regular Backups
```bash
# Backup database (if added)
pg_dump dbname > backup.sql

# Backup to cloud storage
aws s3 cp backup.sql s3://your-bucket/
```

### Updates

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update major versions
npm install -g npm-check-updates
ncu -u
npm install
```

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Deployment Issues**: Check platform-specific documentation

---

## Quick Comparison

| Platform | Cost | Setup Time | Best For |
|----------|------|-----------|----------|
| Vercel | Free/$20+ | 2 min | Best overall |
| GitHub Pages | Free | 5 min | Simple sites |
| Netlify | Free/$19+ | 3 min | Great builds |
| Railway | Free/$5+ | 3 min | Flexible |
| DigitalOcean | $6+/month | 10 min | Scaling |
| EC2 | $0-50/month | 30 min | Full control |

---

Last Updated: 2024
