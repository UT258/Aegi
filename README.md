# AEGIS Dashboard - Advanced Explosive-detection & Gas-sensing Integrated Safetywear

A comprehensive, professional dashboard website for monitoring and controlling the AEGIS wearable safety system.

## 📋 Overview

The AEGIS Dashboard provides real-time monitoring, status updates, and control interface for the AEGIS wearable safety system. It includes:

- **Real-time system status monitoring**
- **Sensor data visualization with interactive charts**
- **Alert history and logging**
- **Quick action controls**
- **Performance metrics display**
- **Team information and project details**
- **Technical specifications**

## 🚀 Features

### 1. **System Status Dashboard**
- Real-time status of helmet and footwear modules
- Battery level monitoring with visual indicators
- Network connectivity status (Wi-Fi signal strength)
- Overall system health assessment
- Last update timestamps

### 2. **Real-Time Sensor Data**
- Temperature monitoring with live chart
- Humidity level tracking with visualization
- Gas level detection and status
- Metal detection status and history
- Interactive Chart.js graphs with smooth animations

### 3. **Alert Management**
- Comprehensive alert history with timestamps
- Color-coded alerts (Critical, Warning, Info)
- Alert location and status tracking
- Clear all alerts functionality
- Export logs feature

### 4. **Quick Actions**
- **Request Photo**: Trigger ESP32-CAM image capture
- **Test Buzzer**: Audio test of alert system
- **Start/Stop Monitoring**: Control system operation
- **Download Report**: Generate and download system reports
- **System Test**: Run comprehensive diagnostics

### 5. **Component Information**
- Detailed specifications for each hardware component
- Functions and capabilities of each module
- Integration details
- Power management information

### 6. **Performance Metrics**
- 95% Detection Accuracy
- < 3 seconds Response Time
- 8+ Hours Battery Life
- 15cm Detection Depth
- 4-5% False Positive Rate
- 360° Coverage (Helmet + Footwear)

### 7. **Team & Patent Information**
- Team member details and roles
- Faculty and institution information
- Patent filing status and details
- Application reference numbers

## 📁 File Structure

```
Aegi/
├── index.html          # Main HTML dashboard
├── styles.css          # Professional styling and responsive design
├── script.js           # Interactive features and charts
└── README.md           # This file
```

## 🎯 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js for real-time data visualization
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Responsive**: Mobile-first approach with media queries
- **Colors**: Dark theme with green accent color (#2ecc71)

## 🌐 Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Dashboard Sections

### 1. Navigation Header
- Project branding and title
- Quick navigation links
- Sticky header for easy access

### 2. Hero Section
- Project tagline and mission statement
- Call-to-action buttons
- Eye-catching gradient background

### 3. Project Overview
- Mission statement
- Technology highlights
- Primary applications

### 4. Key Features (6 Feature Cards)
- IoT Connectivity
- Visual Confirmation with Camera
- Multi-Channel Alerts
- Metal Detection Capability
- Gas and Vapor Sensing
- Battery Efficiency

### 5. System Status
- Helmet Module Status
- Footwear Module Status
- Overall System Health
- Real-time monitoring indicators

### 6. Sensor Data
- Temperature Chart
- Humidity Chart
- Gas Level Chart
- Metal Detection Status Chart

### 7. Alert History
- Time-stamped alerts
- Alert types (Critical, Warning, Info)
- Location and status tracking
- Export and clear options

### 8. Components & Specifications
- Hardware component details
- Technical specifications
- Performance metrics
- System capabilities

### 9. Team Section
- Team member profiles
- Role descriptions
- Faculty and institution information
- Patent filing details

### 10. Quick Actions
- Photo capture
- Buzzer testing
- Monitoring control
- Report generation
- System diagnostics

## 🎨 Design Features

### Color Scheme
- **Primary Background**: #0f1419 (Dark Navy)
- **Primary Color**: #1a472a (Dark Green)
- **Accent Color**: #2ecc71 (Bright Green)
- **Warning Color**: #e74c3c (Red)
- **Info Color**: #3498db (Blue)

### Responsive Design
- Fully responsive on all devices
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Ultra-mobile (< 480px)

### Animations
- Fade-in animations for cards
- Smooth hover effects
- Pulse animation for online status
- Slide-in notifications
- Smooth scroll behavior

## 🔧 JavaScript Features

### Real-Time Updates
- Automatic sensor data refresh every 5 seconds
- Timestamp updates every minute
- Battery level monitoring
- Network status tracking

### Interactive Elements
- Smooth scroll navigation
- Dynamic notifications system
- Chart.js data visualization
- Modal-like action responses
- Keyboard shortcuts:
  - `Ctrl+P`: Request Photo
  - `Ctrl+T`: Test Buzzer

### Data Management
- Report generation
- Log export functionality
- Alert history management
- Performance metrics calculation

## 📈 Chart Visualizations

### Temperature Chart
- Line chart with real-time data
- 24-hour time series
- Color-coded trend visualization

### Humidity Chart
- Line chart showing humidity levels
- Percentage-based scale (0-100%)
- Environmental monitoring

### Gas Level Chart
- Bar chart for gas concentration
- Color-coded safety levels
- Alert threshold visualization

### Metal Detection
- Doughnut chart showing detection status
- Percentage distribution
- Visual safety indicator

## 🔐 Features for System Control

### Photo Capture
- Request image from ESP32-CAM
- Visual confirmation display
- Timestamp logging
- Telegram integration simulation

### Buzzer Test
- Audio frequency generation
- Test alert functionality
- Sound feedback confirmation

### Monitoring Control
- Start/Stop system monitoring
- Data streaming control
- Active device management

### Report Generation
- System status report
- Performance summary
- Alert statistics
- Data export

## 📱 Mobile Optimization

- Touch-friendly buttons and controls
- Responsive grid layouts
- Optimized chart sizing
- Mobile-first styling
- Readable font sizes
- Easy navigation

## 🎓 Educational Value

This dashboard serves as:
- Project showcase platform
- System monitoring interface
- Real-time feedback mechanism
- Team collaboration tool
- Technical documentation reference

## 🚀 Usage Instructions

1. **Open Dashboard**: Open `index.html` in a modern web browser
2. **View Status**: Check real-time system status in the status section
3. **Monitor Sensors**: View live sensor data and charts
4. **Check Alerts**: Review alert history and logs
5. **Control System**: Use quick action buttons to control devices
6. **Download Reports**: Export system data and logs

## ⌨️ Keyboard Shortcuts

- `Ctrl+P`: Request Photo from ESP32-CAM
- `Ctrl+T`: Test Buzzer Alert System
- Click on section links in navbar for smooth scrolling
- Use arrow keys for smooth scrolling

## 🔔 Notification System

The dashboard includes a toast notification system for user feedback:
- Success notifications (Green)
- Warning notifications (Orange)
- Info notifications (Blue)
- Auto-dismiss after 3 seconds

## 📊 Performance

- Optimized CSS with minimal redundancy
- Efficient JavaScript with debouncing
- Smooth 60fps animations
- Fast page load times
- Minimal external dependencies (Chart.js only)

## 🔄 Real-Time Features

- Automatic sensor data refresh
- Live timestamp updates
- Battery level monitoring
- Network status tracking
- Alert notifications
- Chart data updates

## 💾 Data Storage

The dashboard uses:
- LocalStorage for user preferences (dark mode)
- Session storage for temporary data
- Real-time memory updates for sensor data
- Browser console for debug information

## 📝 Customization

To customize the dashboard:

1. **Colors**: Edit CSS variables in `styles.css`
2. **Charts**: Modify chart data in `script.js`
3. **Content**: Edit HTML sections in `index.html`
4. **Notifications**: Customize notification styling in `script.js`

## 🐛 Troubleshooting

### Charts Not Displaying
- Ensure Chart.js is loaded from CDN
- Check browser console for errors
- Verify canvas elements are present

### Responsiveness Issues
- Clear browser cache
- Check CSS media queries
- Test on different viewport sizes

### Notification Not Appearing
- Check z-index in CSS
- Verify JavaScript console for errors
- Test in different browsers

## 📚 References

- [Chart.js Documentation](https://www.chartjs.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 📄 Project Information

- **Project Name**: AEGIS (Advanced Explosive-detection & Gas-sensing Integrated Safetywear)
- **Institution**: Chandigarh Engineering College - CGC Landran, Mohali
- **Department**: Electronics and Communication Engineering
- **Guide**: Dr. Vinay Bhatia
- **Team Members**:
  - Varender Singh (2237298)
  - Vijender Walia (2237299)
  - Sahil Sharma (2237263)
  - Sahilpreet Singh (2237264)

## 📅 Timeline

- **Project Period**: July-December 2025
- **Dashboard Created**: December 2025
- **Status**: Active and Maintained

## 🙏 Acknowledgments

Special thanks to:
- Dr. Vinay Bhatia for guidance and support
- Chandigarh Engineering College for resources
- ECE Department faculty for technical assistance

## 📞 Support

For questions or issues regarding the dashboard, please contact:
- Email: iprapplications@cgc.edu.in
- Institution: Chandigarh Group of Colleges, Landran

## 📜 License

This project is academic work from Chandigarh Engineering College. All rights reserved.

---

**Last Updated**: December 7, 2025
**Version**: 1.0
**Status**: Production Ready
