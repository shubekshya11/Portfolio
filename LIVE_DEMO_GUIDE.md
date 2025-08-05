# Live Demo Guide for Portfolio

This guide explains how to add live demos to your portfolio projects.

## Types of Live Demos

### 1. **Web Applications** (External Links)
For projects like your Real Estate Platform, Portfolio Website:
- **Deploy to**: Vercel, Netlify, Heroku, or Railway
- **Demo Type**: `external`
- **Icon**: Globe 🌐
- **Text**: "Live Demo"

**Example:**
```javascript
{
  title: 'Real Estate Platform',
  liveUrl: 'https://your-real-estate-app.vercel.app',
  demoType: 'external'
}
```

### 2. **GitHub Repository Links**
For projects that don't have live demos but have detailed READMEs:
- **Demo Type**: `github`
- **Icon**: GitHub 🐙
- **Text**: "View Project"

**Example:**
```javascript
{
  title: 'Walmart Sales Prediction',
  liveUrl: 'https://github.com/shubekshya/WalmartSalesPrediction',
  demoType: 'github'
}
```

### 3. **Video Demos** 🎥
For projects that work better as video demonstrations:

#### **Option A: YouTube Videos**
- **Demo Type**: `video`
- **Icon**: Play ▶️
- **Text**: "Watch Demo"
- **Features**: Opens in a modal overlay with embedded YouTube player

**Example:**
```javascript
{
  title: 'Real Estate Platform Demo',
  liveUrl: 'https://youtube.com/watch?v=your-video-id',
  demoType: 'video'
}
```

**Supported Video Platforms:**
- YouTube (recommended)
- Vimeo
- Any platform with embed URLs

#### **Option B: Local Video Files** 📁
- **Demo Type**: `local-video`
- **Icon**: Play ▶️
- **Text**: "Watch Demo"
- **Features**: Opens in a modal overlay with local video player

**Example:**
```javascript
{
  title: 'Real Estate Platform Demo',
  liveUrl: '/real-estate-demo.mp4', // File in public folder
  demoType: 'local-video'
}
```

**How to set up local videos:**
1. Record your demo using screen recording software
2. Export as MP4 format
3. Place video file in `portfolio/public/` folder
4. Reference with path like `/filename.mp4`

**See `LOCAL_VIDEO_GUIDE.md` for detailed instructions.**

### 4. **No Demo Available**
For projects that don't have demos:
- **Demo Type**: `none`
- **Icon**: File 📄
- **Text**: "No Demo"

## How to Deploy Your Projects

### For React/Vite Projects (like your Portfolio):
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or use Netlify
npm run build
# Drag dist folder to Netlify
```

### For Django Projects (like your Real Estate Platform):
```bash
# Install dependencies
pip install gunicorn whitenoise

# Create requirements.txt
pip freeze > requirements.txt

# Deploy to Railway or Heroku
# Follow platform-specific instructions
```

### For Machine Learning Projects:
1. **Streamlit**: Create interactive web apps
2. **Gradio**: Build demos quickly
3. **Hugging Face Spaces**: Host ML demos

**Example Streamlit app:**
```python
import streamlit as st
import pandas as pd

st.title("Walmart Sales Prediction")
# Your ML model code here
```

## Updating Your Projects

To update your projects with live demos:

1. **Deploy your projects** using the methods above
2. **Update the `liveUrl`** in your `Projects.jsx` file
3. **Set the correct `demoType`** based on the type of demo
4. **Test all links** to ensure they work

## Current Project Status

| Project | Current Status | Action Needed |
|---------|---------------|---------------|
| Walmart Sales Prediction | Local video demo | 📁 Add video file to public/ |
| Real Estate Platform | Local video demo | 📁 Add video file to public/ |
| Automated Testing | Local video demo | 📁 Add video file to public/ |
| Portfolio Website | Placeholder URL | 🔄 Deploy to Vercel |
| Online Bookstore | Local video demo | 📁 Add video file to public/ |

## Quick Deployment Commands

### Vercel (Recommended for React/Vite):
```bash
npm install -g vercel
vercel
```

### Netlify:
```bash
npm run build
# Drag dist folder to netlify.com
```

### Railway (Good for Django):
```bash
# Connect your GitHub repo to railway.app
# Railway will auto-deploy
```

## Tips for Better Demos

### For Video Demos:
1. **Keep videos short** (2-5 minutes max)
2. **Show key features** and user flows
3. **Use screen recording software** like OBS, Loom, or QuickTime
4. **Add captions** for accessibility
5. **Upload to YouTube** for better embedding
6. **Create a script** to stay focused and professional

### For All Demos:
1. **Add screenshots** to your project READMEs
2. **Create GIFs** showing your app in action
3. **Write clear instructions** for users
4. **Include sample data** for testing
5. **Add a "Try it out" section** in your README

## Next Steps

### For Local Video Demos:
1. **Record screen demos** of your applications
2. **Export as MP4** with optimized settings
3. **Place videos in `public/` folder**:
   - `walmart-demo.mp4`
   - `real-estate-demo.mp4`
   - `testing-demo.mp4`
   - `bookstore-demo.mp4`
4. **Test the video modal** functionality
5. **Deploy your Portfolio** to Vercel

### For YouTube Videos:
1. **Upload videos to YouTube** (unlisted or public)
2. **Update `liveUrl` values** in `Projects.jsx` with YouTube URLs
3. **Change `demoType` to `video`** for YouTube videos

## Video Demo Checklist

### Local Videos:
- [ ] Record screen demos of your applications
- [ ] Export as MP4 (optimized for web)
- [ ] Place video files in `public/` folder
- [ ] Update project URLs in `Projects.jsx`
- [ ] Test video modal functionality
- [ ] Add video descriptions to project READMEs

### YouTube Videos:
- [ ] Record screen demos of your applications
- [ ] Edit videos to be concise and professional
- [ ] Upload to YouTube (unlisted or public)
- [ ] Update project URLs in `Projects.jsx`
- [ ] Test video modal functionality

Your portfolio now has a flexible system that can handle different types of demos! 