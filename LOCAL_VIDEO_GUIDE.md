# Local Video Demo Guide

This guide shows you how to add local video demos to your portfolio without uploading to YouTube.

## How It Works

Instead of uploading videos to YouTube, you can place video files directly in your `public` folder and reference them in your projects.

## Setup Steps

### 1. **Record Your Demo Videos**
Use any screen recording software:
- **OBS Studio** (free, professional)
- **Loom** (easy, browser-based)
- **QuickTime** (Mac built-in)
- **Windows Game Bar** (Windows built-in)

### 2. **Export Videos**
- **Format**: MP4 (recommended) or WebM
- **Resolution**: 1080p or 720p
- **Duration**: 2-5 minutes max
- **File size**: Keep under 50MB for faster loading

### 3. **Add Videos to Public Folder**
Place your video files in the `portfolio/public/` folder:

```
portfolio/
├── public/
│   ├── walmart-demo.mp4
│   ├── real-estate-demo.mp4
│   ├── testing-demo.mp4
│   ├── bookstore-demo.mp4
│   ├── profile.jpeg
│   ├── cv.pdf
│   └── vite.svg
```

### 4. **Update Your Projects**
In `src/components/Projects.jsx`, update the project configuration:

```javascript
{
  title: 'Real Estate Platform',
  liveUrl: '/real-estate-demo.mp4', // Path to video in public folder
  demoType: 'local-video', // Use this for local videos
  // ... other properties
}
```

## Video File Naming Convention

Use descriptive names for your video files:
- `walmart-demo.mp4`
- `real-estate-demo.mp4`
- `testing-automation-demo.mp4`
- `bookstore-ecommerce-demo.mp4`
- `portfolio-walkthrough.mp4`

## Supported Video Formats

- **MP4** (recommended) - Best compatibility
- **WebM** - Smaller file size, good for web
- **MOV** - Mac format, larger file size

## File Size Optimization

### For Better Performance:
1. **Compress videos** using tools like:
   - **HandBrake** (free, powerful)
   - **FFmpeg** (command line)
   - **Online compressors**

2. **Recommended settings**:
   - **Resolution**: 1280x720 (720p)
   - **Bitrate**: 1-2 Mbps
   - **Codec**: H.264
   - **Audio**: AAC, 128 kbps

### Example FFmpeg command:
```bash
ffmpeg -i input.mp4 -vf scale=1280:720 -b:v 1.5M -b:a 128k output.mp4
```

## Project Configuration Examples

### Walmart Sales Prediction:
```javascript
{
  title: 'Walmart Sales Prediction',
  liveUrl: '/walmart-demo.mp4',
  demoType: 'local-video',
  featured: true
}
```

### Real Estate Platform:
```javascript
{
  title: 'Real Estate Platform',
  liveUrl: '/real-estate-demo.mp4',
  demoType: 'local-video',
  featured: true
}
```

### Automated Testing:
```javascript
{
  title: 'Automated Website Testing',
  liveUrl: '/testing-demo.mp4',
  demoType: 'local-video',
  featured: false
}
```

### Online Bookstore:
```javascript
{
  title: 'Online Bookstore',
  liveUrl: '/bookstore-demo.mp4',
  demoType: 'local-video',
  featured: false
}
```

## Advantages of Local Videos

✅ **No external dependencies** - Works offline
✅ **No YouTube ads** - Clean viewing experience
✅ **Faster loading** - No external API calls
✅ **Privacy control** - Videos stay on your server
✅ **No upload limits** - Host as many as you want

## Disadvantages

❌ **Larger repository size** - Video files add to git repo
❌ **Bandwidth usage** - Videos served from your server
❌ **No analytics** - Can't track views like YouTube

## Best Practices

### Video Content:
1. **Keep it short** (2-5 minutes)
2. **Show key features** clearly
3. **Use clear narration** or captions
4. **Start with an intro** of what you'll show
5. **End with a summary**

### Technical:
1. **Optimize file sizes** for faster loading
2. **Use consistent naming** for easy management
3. **Test on different devices** and browsers
4. **Provide fallback text** for accessibility

## Troubleshooting

### Video won't play:
- Check file path is correct
- Ensure video format is supported
- Verify file isn't corrupted

### Video is too large:
- Compress using HandBrake or FFmpeg
- Reduce resolution to 720p
- Lower bitrate

### Video loads slowly:
- Compress video file
- Consider using WebM format
- Use a CDN for deployment

## Next Steps

1. **Record your demo videos** using screen recording software
2. **Export as MP4** with optimized settings
3. **Place videos in `public/` folder**
4. **Update project configurations** in `Projects.jsx`
5. **Test the video modal** functionality
6. **Deploy and test** on live site

Your portfolio now supports local video demos with a professional modal player! 