# Deployment Guide

This guide covers deploying the Hovue website to various hosting platforms.

## Prerequisites

- Node.js 20+ installed
- Build passes locally: `npm run build`
- Git repository set up

## Deployment Options

### Vercel (Recommended)

Vercel provides excellent support for Astro projects with zero configuration.

#### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Astro and configure everything
5. Deploy!

#### Environment Variables

If you need environment variables, add them in the Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add any required variables

### Netlify

#### Option 1: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

#### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

#### Netlify Configuration

Create `netlify.toml` in the root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

#### Using GitHub Actions

1. Create `.github/workflows/deploy.yml` (see below)
2. Push to GitHub
3. Go to Repository Settings → Pages
4. Select "GitHub Actions" as source
5. The workflow will deploy automatically

#### Manual Deployment

```bash
# Build the site
npm run build

# Copy dist/ to gh-pages branch
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Cloudflare Pages

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to Pages → Create a project
4. Connect your repository
5. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy!

### Self-Hosted

#### Using Nginx

```nginx
server {
    listen 80;
    server_name hovue.dev;
    root /var/www/hovue/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Using Apache

```apache
<VirtualHost *:80>
    ServerName hovue.dev
    DocumentRoot /var/www/hovue/dist

    <Directory /var/www/hovue/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Rewrite rules
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</VirtualHost>
```

## Continuous Deployment

### GitHub Actions Workflow

See `.github/workflows/deploy.yml` for automated deployment.

The workflow:
1. Runs on push to `main` branch
2. Builds the site
3. Deploys to your chosen platform

## Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

### Netlify

1. Go to Site Settings → Domain management
2. Add custom domain
3. Configure DNS as instructed

### Cloudflare Pages

1. Go to Pages → Your project → Custom domains
2. Add your domain
3. Update DNS records

## Environment Variables

Create a `.env.example` file with:

```env
# Site URL
PUBLIC_SITE_URL=https://hovue.dev

# Analytics (optional)
PUBLIC_GA_ID=your-google-analytics-id

# Other environment variables
```

Then create `.env` for local development and configure in your hosting platform.

## Build Optimization

The site is already optimized with:
- ✅ HTML compression (`compressHTML: true`)
- ✅ Static site generation
- ✅ Optimized assets
- ✅ Proper caching headers

## Monitoring

### Analytics

Add analytics to `BaseLayout.astro`:

```astro
<!-- Google Analytics -->
<script>
  // Add your analytics code
</script>
```

### Error Tracking

Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Vercel Analytics (if using Vercel)

## Troubleshooting

### Build Fails

1. Check Node.js version: `node --version` (should be 20+)
2. Clear cache: `rm -rf node_modules .astro dist`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

### 404 Errors

- Ensure `output: 'static'` in `astro.config.mjs`
- Check redirect rules in hosting platform
- Verify all routes are properly defined

### Assets Not Loading

- Check `site` URL in `astro.config.mjs`
- Verify asset paths are relative
- Check CORS settings if using CDN

## Support

For deployment issues, please:
1. Check the [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
2. Open an issue on GitHub
3. Check platform-specific documentation

