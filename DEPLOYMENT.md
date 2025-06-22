# GitHub Pages Deployment Guide

## Overview
This project is configured to automatically deploy to GitHub Pages using GitHub Actions and will be accessible at `https://witness-films.com`.

## Setup Instructions

### 1. Repository Settings
1. Go to your GitHub repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The custom domain should be automatically detected from the CNAME file

### 2. Domain Configuration
1. In your domain registrar (where you bought witness-films.com):
   - Create a CNAME record pointing `www.witness-films.com` to `[your-github-username].github.io`
   - Create A records for the apex domain `witness-films.com` pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

### 3. SSL Certificate
GitHub Pages will automatically provision an SSL certificate for your custom domain. This may take a few minutes after the domain is configured.

### 4. Deployment Process
The deployment happens automatically when you:
- Push to the `main` or `master` branch
- The GitHub Action will:
  1. Install dependencies
  2. Build the React app
  3. Deploy to GitHub Pages
  4. Your site will be available at `https://witness-films.com`

### 5. Local Development
```bash
npm start          # Start development server
npm run build      # Build for production
npm run deploy     # Manual deploy to gh-pages (alternative method)
```

## Files Added/Modified for Deployment
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/CNAME` - Custom domain configuration
- `public/.nojekyll` - Bypass Jekyll processing
- `package.json` - Added homepage field

## Troubleshooting
- If the site doesn't load, check that the CNAME record is properly configured
- Ensure GitHub Pages is enabled in repository settings
- Check the Actions tab for any deployment errors
- SSL certificate may take up to 24 hours to provision

## Important Notes
- The site will be publicly accessible once deployed
- All images and assets will be served from GitHub Pages
- With GitHub Pro, private repositories can use GitHub Pages 