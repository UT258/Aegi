# AEGIS Dashboard - Quick Start Guide

## 📦 What's Included

Your AEGIS Dashboard website is now complete with 4 files:

1. **index.html** - Main dashboard interface (complete HTML structure)
2. **styles.css** - Professional styling and responsive design
3. **script.js** - Interactive features and real-time updates
4. **README.md** - Comprehensive documentation

## 🚀 How to Use

### Step 1: Open the Dashboard
Simply double-click `index.html` or open it in your web browser (Chrome, Firefox, Safari, Edge)

### Step 2: Explore the Dashboard
- **Navigation**: Use the header navigation to jump to different sections
- **Status**: View real-time system status for helmet and footwear modules
- **Sensors**: Check live sensor data with interactive charts
- **Alerts**: Review alert history and manage notifications
- **Actions**: Use quick action buttons to control the system

## ✨ Key Features

### Real-Time Monitoring
- Live temperature, humidity, and gas level charts
- Battery status monitoring with visual indicators
- Network connectivity display
- Metal detection status

### Interactive Controls
- Request photo from ESP32-CAM
- Test buzzer alert system
- Start/stop monitoring
- Download system reports
- Export logs

### Professional UI
- Dark theme with green accents
- Fully responsive (works on desktop, tablet, mobile)
- Smooth animations and transitions
- Color-coded alerts (Red=Critical, Orange=Warning, Green=Info)

### Real-Time Updates
- Sensor data refreshes every 5 seconds
- Timestamps update automatically
- Charts show historical trends
- Live battery level monitoring

## 🎯 Dashboard Sections

1. **Header/Navigation** - Quick access to all sections
2. **Hero Section** - Project overview and call-to-action
3. **Overview** - Mission, technology, applications
4. **Features** - 6 key capabilities of AEGIS
5. **System Status** - Real-time module health and connectivity
6. **Sensor Data** - Charts for temperature, humidity, gas, metal detection
7. **Alert History** - Timestamped events and notifications
8. **Components** - Hardware specifications and functions
9. **Performance Metrics** - Key performance indicators
10. **Team Section** - Team members and project information
11. **Quick Actions** - Control buttons for system operations
12. **Technical Specs** - Detailed system specifications
13. **Patent Info** - Filing details and patent status
14. **Footer** - Project credits

## 🎨 Color Theme

- **Dark Navy Background**: #0f1419
- **Bright Green Accent**: #2ecc71 (Status OK)
- **Red Alert**: #e74c3c (Critical)
- **Orange Warning**: #f39c12 (Warning)
- **Blue Info**: #3498db (Information)

## ⌨️ Keyboard Shortcuts

- `Ctrl+P` - Request Photo
- `Ctrl+T` - Test Buzzer
- Click navbar links - Smooth scroll to section

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Ultra-Mobile**: Below 480px

## 🔧 Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Grid, Flexbox, Variables, Animations
- **JavaScript (ES6+)** - Interactive features
- **Chart.js** - Data visualization (loaded from CDN)

## 📊 Charts Included

1. **Temperature Chart** - 24-hour trend line graph
2. **Humidity Chart** - Percentage-based tracking
3. **Gas Level Chart** - Bar chart with alert thresholds
4. **Metal Detection** - Doughnut chart showing status

## 🎮 Quick Actions Button Guide

| Button | Function | Result |
|--------|----------|--------|
| 📸 Request Photo | Trigger ESP32-CAM | Photo captured and uploaded |
| 🔔 Test Buzzer | Audio alert test | Beep sound plays |
| ▶️ Start Monitoring | Activate sensors | System starts streaming |
| ⏹️ Stop Monitoring | Deactivate sensors | Data collection stops |
| 📥 Download Report | Generate report | System data exported |
| ⚙️ System Test | Run diagnostics | Tests all components |

## 📈 Real-Time Data

The dashboard simulates real-time sensor data:
- Temperature: Updates every 5 seconds (±0.5°C variation)
- Humidity: Updates every 5 seconds (±2% variation)
- Gas Level: Dynamic status (Safe/Warning)
- Metal Detection: Simulated detection events

## ⚙️ System Status Indicators

### Helmet Module
- Status: ONLINE (Green badge with pulsing dot)
- Battery Level: Animated bar (75%)
- Wi-Fi Signal: 92% strength
- Device ID: ESP32-CAM-001

### Footwear Module
- Status: ONLINE (Green badge with pulsing dot)
- Battery Level: Animated bar (68%)
- Wi-Fi Signal: 88% strength
- Device ID: ESP8266-FOOT-002

### System Health
- Status: EXCELLENT
- Detection Accuracy: 95%
- Response Time: < 3 seconds
- Network Success: 98% (Mesh), 92% (GSM)

## 📝 Alert Types

1. **Critical** (Red) - Immediate action required
   - Metal Detected
   - Gas Level Exceeded

2. **Warning** (Orange) - Attention needed
   - Gas Level Elevated
   - Temperature High

3. **Info** (Green) - Status updates
   - Photo Captured
   - System Initialized
   - Data Synced

## 💾 Browser Storage

- **LocalStorage**: Stores dark mode preference
- **SessionStorage**: Temporary session data
- **Memory**: Real-time sensor data

## 🌐 Compatibility

Works perfectly on:
- ✅ Google Chrome/Chromium
- ✅ Mozilla Firefox
- ✅ Apple Safari
- ✅ Microsoft Edge
- ✅ Mobile Chrome
- ✅ Mobile Safari

## 📱 Mobile Features

- Touch-friendly interface
- Optimized button sizes
- Responsive grid layouts
- Mobile-optimized charts
- Easy navigation on small screens

## 🎓 Project Information

**Institution**: Chandigarh Engineering College - CGC Landran, Mohali
**Department**: Electronics & Communication Engineering
**Guide**: Dr. Vinay Bhatia
**Project**: AEGIS (Advanced Explosive-detection & Gas-sensing Integrated Safetywear)
**Period**: July-December 2025
**Patent**: Filed (Application: 202511040838)

## 👥 Team Members

- **Varender Singh** (2237298) - System Architecture & Sensor Integration
- **Vijender Walia** (2237299) - Documentation & Patent Research
- **Sahil Sharma** (2237263) - Hardware Assembly & Implementation
- **Sahilpreet Singh** (2237264) - Programming & Sensor Calibration

## 🔐 Notifications

When you click action buttons, you'll see toast notifications:
- Appear in bottom-right corner
- Auto-dismiss after 3 seconds
- Color-coded by type (Green=Success, Blue=Info, Orange=Warning)
- Non-blocking (doesn't interrupt workflow)

## 🎬 Getting Started

1. **Extract/Download**: Ensure all 4 files are in the same folder
2. **Open**: Double-click `index.html` or open in browser
3. **Explore**: Click navigation links to browse sections
4. **Interact**: Try the quick action buttons
5. **Monitor**: Watch real-time sensor data updates
6. **Export**: Download reports and logs as needed

## 🐛 If Something Doesn't Work

1. **Charts not showing?**
   - Check browser console (F12)
   - Ensure JavaScript is enabled
   - Try refreshing the page

2. **Notifications not appearing?**
   - Check notification settings in browser
   - Verify JavaScript is enabled
   - Check bottom-right corner of screen

3. **Charts not updating?**
   - Refresh the page
   - Check browser console for errors
   - Close and reopen dashboard

4. **Scrolling not smooth?**
   - Your browser may not support smooth scrolling
   - It will still jump to section (just not smoothly)
   - Works on all modern browsers

## 📞 Support

For issues or questions:
- Email: iprapplications@cgc.edu.in
- Institution: Chandigarh Group of Colleges

## 🎉 You're All Set!

Your professional AEGIS Dashboard is ready to use. Enjoy monitoring your advanced explosive and gas detection system!

---

**Created**: December 2025
**Version**: 1.0
**Status**: Production Ready ✅
