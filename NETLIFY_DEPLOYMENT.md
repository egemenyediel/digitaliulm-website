# Netlify Deployment Guide

## Overview
This frontend project is deployed on **Netlify** while the API backend remains on **Render**.

## Prerequisites
- GitHub account with the repository linked
- Netlify account (netlify.com)

## Deployment Steps

### 1. Connect Repository to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"New site from Git"**
3. Select **GitHub** and authorize Netlify
4. Find and select the `digitaliulm-website` repository
5. Click **Deploy site**

### 2. Configure Build Settings
Netlify should automatically detect:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18+ (set in netlify.toml)

### 3. Set Environment Variables
In Netlify dashboard, go to **Site settings → Build & deploy → Environment**:

```
VITE_API_URL=https://digitaliulm-api.onrender.com/api
```

> **Note**: This tells the frontend where the API is located. The Render backend URL should remain stable.

### 4. Automatic Deployments
Every push to the `main` branch will trigger a new build and deploy automatically.

## Monitoring

### View Logs
- **Netlify Build Logs**: Site settings → Deploys → View build logs
- **Render API Logs**: Go to Render dashboard → digitaliulm-api service → Logs

### Health Checks
- Frontend: `https://your-netlify-site.netlify.app`
- API: `https://digitaliulm-api.onrender.com/api/content`
- Progress bar should appear during slow API calls

## API Configuration

The API remains on Render:
- **URL**: `https://digitaliulm-api.onrender.com`
- **Repository**: Same GitHub repo (server folder)
- **Entry**: `server/index.js`
- **Environment**: `NODE_ENV=production`

Frontend calls this API for all content (no localStorage fallback).

## Troubleshooting

### 404 on Video Asset
If `/assets/jkj.mp4` returns 404:
1. Ensure `public/assets/jkj.mp4` exists in repo
2. Check `netlify.toml` redirects don't interfere
3. Verify file is committed to Git (not ignored)

### API Unreachable
1. Check `VITE_API_URL` environment variable is set correctly
2. Verify Render backend is running: `curl https://digitaliulm-api.onrender.com/health`
3. Check browser Network tab for CORS errors

### Build Failures
1. Check Netlify build logs for details
2. Ensure dependencies are installed: `npm install`
3. Verify TypeScript compiles: `npm run build` locally

## Custom Domain
1. In Netlify dashboard: **Site settings → Domain management**
2. Add your custom domain (e.g., `digitaliulm.de`)
3. Update DNS records at your registrar to point to Netlify

## Notes
- Netlify CDN provides fast static asset delivery globally
- API calls go directly to Render for real-time data
- Build previews available for all pull requests
- Automatic HTTPS via Let's Encrypt (included)
