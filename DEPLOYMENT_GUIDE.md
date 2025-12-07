# Deploying AEGIS Dashboard to Vercel

## Quick Start (Recommended Method)

### Option 1: Deploy via GitHub (Easiest)

1. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository named `aegis-dashboard`
   - Don't initialize with README (we have one)

2. **Push your code to GitHub**:
   ```powershell
   cd "c:\Users\DELL\Desktop\Aegi"
   git remote add origin https://github.com/YOUR_USERNAME/aegis-dashboard.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**:
   - Go to https://vercel.com/import
   - Click "Import Project"
   - Select "Import Git Repository"
   - Paste your GitHub URL
   - Click "Import"
   - Vercel will auto-detect it as a static site
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Node.js** if not already installed:
   - Download from https://nodejs.org/ (LTS version)

2. **Install Vercel CLI**:
   ```powershell
   npm install -g vercel
   ```

3. **Deploy**:
   ```powershell
   cd "c:\Users\DELL\Desktop\Aegi"
   vercel
   ```
   - Follow the prompts
   - Select default options
   - Choose production deployment

### Option 3: Drag & Drop Deploy

1. Go to https://vercel.com/new
2. Scroll to "Create from template"
3. Or simply drag your project folder to the upload area
4. Vercel will deploy automatically

## After Deployment

Once deployed, you'll get a URL like:
- `https://aegis-dashboard.vercel.app`

### Custom Domain (Optional)

1. Go to your Vercel dashboard
2. Click on your project
3. Go to "Settings" → "Domains"
4. Add your custom domain
5. Follow DNS configuration instructions

### Environment Variables (if needed)

In Vercel dashboard:
1. Project Settings → Environment Variables
2. Add any variables your app needs
3. Redeploy

## Verifying Deployment

Visit your Vercel URL and check:
- ✅ Dashboard loads correctly
- ✅ Charts render properly
- ✅ Sensor data updates in real-time
- ✅ Buttons are clickable
- ✅ Notifications appear
- ✅ Download/Export functions work
- ✅ Keyboard shortcuts function

## Project Structure

```
aegis-dashboard/
├── index.html          # Main HTML file
├── styles.css          # Dashboard styling
├── script.js           # Dashboard functionality
├── package.json        # Project metadata
├── vercel.json         # Vercel configuration
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
├── QUICKSTART.md       # Quick start guide
├── CUSTOMIZATION.md    # Customization guide
└── MANIFEST.md         # Project manifest
```

## Configuration Details

The `vercel.json` file handles:
- Static site serving
- Route configuration for SPA support
- Automatic deployments on git push

## Support

For Vercel deployment issues:
- Vercel Docs: https://vercel.com/docs
- GitHub Issues: Report any problems

## Deployment Status

After deployment, you can:
- Monitor build logs in Vercel dashboard
- Set up automatic deployments on git push
- Configure custom domains
- Enable SSL/HTTPS (automatic)
- View analytics and performance metrics

Enjoy your live AEGIS Dashboard! 🎖️
