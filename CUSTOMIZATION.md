# AEGIS Dashboard - Customization Guide

## How to Customize Your Dashboard

This guide explains how to modify the dashboard to fit your specific needs.

## 🎨 Changing Colors

### Method 1: Edit CSS Variables (Recommended)

Open `styles.css` and find the `:root` section at the top (lines 9-21):

```css
:root {
    --primary-color: #1a472a;        /* Dark Green */
    --secondary-color: #2ecc71;      /* Bright Green */
    --accent-color: #e74c3c;         /* Red */
    --warning-color: #f39c12;        /* Orange */
    --info-color: #3498db;           /* Blue */
    --dark-bg: #0f1419;              /* Very Dark Blue */
    --light-bg: #f8f9fa;             /* Light Gray */
    --card-bg: #1e2936;              /* Dark Blue */
    --border-color: #2d3e50;         /* Medium Dark Blue */
    --text-primary: #ecf0f1;         /* Off White */
    --text-secondary: #bdc3c7;       /* Light Gray */
}
```

Change any hex color codes to your desired colors. For example:
- Change `--secondary-color: #2ecc71;` to `--secondary-color: #1abc9c;` for teal
- Change `--dark-bg: #0f1419;` to `--dark-bg: #1a1a2e;` for different dark shade

### Common Color Codes

**Greens**: #2ecc71 (bright), #27ae60 (medium), #229954 (dark)
**Blues**: #3498db (bright), #2980b9 (medium), #1e3799 (dark)
**Reds**: #e74c3c (bright), #c0392b (medium), #a93226 (dark)
**Grays**: #ecf0f1 (light), #bdc3c7 (medium), #7f8c8d (dark)

## 📝 Editing Content

### Change Project Name

Open `index.html` and find the navbar section (around line 11):

```html
<div class="navbar-brand">
    <h1>⚔️ AEGIS</h1>
    <p>Advanced Explosive-detection & Gas-sensing Integrated Safetywear</p>
</div>
```

Change to your project name:
```html
<h1>🛡️ YOUR PROJECT NAME</h1>
<p>Your project description here</p>
```

### Change Team Member Names

Find the team section (around line 537) and update names and roles:

```html
<div class="team-card">
    <div class="team-avatar">VS</div>
    <h4>Varender Singh (2237298)</h4>
    <p>System Architecture & Sensor Integration</p>
</div>
```

### Update Sensor Values

Find the sensor data section (around line 287) and change the placeholder values:

```html
<div class="sensor-value" id="temp-value">28.5°C</div>
<div class="sensor-value" id="humidity-value">65%</div>
<div class="sensor-value" id="gas-value">Safe</div>
```

### Change Alert History

Find the alert history section (around line 350) and update the entries:

```html
<div class="alert-item critical">
    <span class="alert-time">2025-12-07 14:32:15</span>
    <span class="alert-type">⚠️ METAL DETECTED</span>
    <span class="alert-location">Footwear Module (Right Shoe)</span>
    <span class="alert-status">Acknowledged</span>
</div>
```

## 📊 Customizing Charts

Open `script.js` and find the chart initialization functions (around line 10-100).

### Change Temperature Chart Data

```javascript
data: {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [{
        data: [22, 24, 26, 28.5, 27, 25],  // Change these numbers
    }]
}
```

### Change Chart Colors

```javascript
borderColor: '#e74c3c',                    // Line color
backgroundColor: 'rgba(231, 76, 60, 0.1)', // Fill color
pointBackgroundColor: '#e74c3c',           // Point color
```

### Add New Chart

1. Add a canvas element in HTML:
```html
<div class="sensor-card">
    <h4>📊 New Sensor</h4>
    <div class="sensor-value" id="newsensor-value">0</div>
    <canvas id="newsensorChart"></canvas>
</div>
```

2. Add chart initialization in JavaScript:
```javascript
const newsensorCtx = document.getElementById('newsensorChart');
if (newsensorCtx) {
    new Chart(newsensorCtx, {
        // Your chart configuration here
    });
}
```

## 🎯 Changing Metrics

Find the metrics section (around line 450) and update the values:

```html
<div class="metric-box">
    <div class="metric-value">95%</div>           <!-- Change this -->
    <div class="metric-label">Detection Accuracy</div>
    <p class="metric-detail">Multi-sensor fusion across varied terrains</p>
</div>
```

## 🔘 Adding New Buttons

To add a new quick action button:

```html
<button class="action-btn" onclick="myNewFunction()">
    <span class="action-icon">🎯</span>
    <span>My Button Label</span>
</button>
```

Then add the function in `script.js`:

```javascript
function myNewFunction() {
    showNotification('Action started...', 'info');
    setTimeout(() => {
        showNotification('Action completed!', 'success');
    }, 1000);
}
```

## 📱 Changing Responsive Breakpoints

Open `styles.css` and find the media queries (around line 900+).

Default breakpoints:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: 480px - 767px

To change, modify:
```css
@media (max-width: 768px) {
    /* Tablet and below styling */
}

@media (max-width: 480px) {
    /* Mobile styling */
}
```

## 🎬 Changing Animation Speed

Find animation definitions in `styles.css` (around line 870):

```css
--transition: all 0.3s ease;  /* Change 0.3s to your preferred speed */
```

For card animations (around line 850):
```css
animation: fadeInUp 0.6s ease forwards;  /* Change 0.6s */
```

## 🔊 Changing Notification Duration

Open `script.js` and find the `showNotification` function (around line 340):

```javascript
setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
}, 3000);  // Change 3000 (milliseconds) to your preferred duration
```

3000 = 3 seconds. Use:
- 2000 = 2 seconds
- 5000 = 5 seconds
- 10000 = 10 seconds

## 📊 Changing Sensor Update Interval

Open `script.js` and find the `startRealTimeUpdates` function (around line 200):

```javascript
setInterval(updateSensorData, 5000);  // Change 5000 to your preferred interval
```

5000 = 5 seconds. Use:
- 1000 = 1 second
- 3000 = 3 seconds
- 10000 = 10 seconds

## 🎨 Changing Font

Open `styles.css` and find the body style (around line 40):

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

Change to your preferred font:
- `'Arial', sans-serif`
- `'Times New Roman', serif`
- `'Courier New', monospace`

Or add Google Fonts in HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update CSS:
```css
font-family: 'Poppins', sans-serif;
```

## 🏢 Changing Institution/Organization Name

Find footer section (around line 750):

```html
<p>&copy; 2025 AEGIS Project | Chandigarh Engineering College - CGC Landran, Mohali</p>
<p>Under Guidance of Dr. Vinay Bhatia | Department of Electronics & Communication Engineering</p>
```

Replace with your organization details.

## 📌 Changing Navigation Links

Find navbar links section (around line 18):

```html
<nav class="navbar-links">
    <a href="#overview">Overview</a>
    <a href="#status">Status</a>
    <a href="#sensors">Sensors</a>
    <a href="#alerts">Alerts</a>
    <a href="#team">Team</a>
</nav>
```

Add, remove, or reorder links as needed.

## 🔐 Adding Password Protection

To add basic password protection, add this to `script.js`:

```javascript
window.addEventListener('load', function() {
    const password = prompt('Enter dashboard password:');
    if (password !== 'your-password-here') {
        alert('Incorrect password!');
        window.location.href = 'about:blank';
    }
});
```

## 📈 Updating Performance Metrics

Find the metrics grid section (around line 450) and update values:

```html
<div class="metric-box">
    <div class="metric-value">95%</div>  <!-- Detection Accuracy -->
    <div class="metric-label">Detection Accuracy</div>
</div>
```

## 🎯 Custom Color Themes

### Blue Theme
```css
--primary-color: #0a3d62;
--secondary-color: #3498db;
--accent-color: #2c3e50;
```

### Purple Theme
```css
--primary-color: #6c3483;
--secondary-color: #9b59b6;
--accent-color: #8e44ad;
```

### Orange Theme
```css
--primary-color: #b35806;
--secondary-color: #e67e22;
--accent-color: #d68910;
```

## 🔄 Connecting to Real Data

To connect to real ESP8266/ESP32 data, modify the `updateSensorData` function in `script.js`:

```javascript
function updateSensorData() {
    // Example with fetch from API
    fetch('http://your-device-ip/api/sensors')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temp-value').textContent = data.temperature + '°C';
            document.getElementById('humidity-value').textContent = data.humidity + '%';
            // Update other sensors...
        });
}
```

## 💾 Saving Your Changes

1. Edit files in a text editor (Notepad++, VS Code, Sublime Text)
2. Save the files in the same folder
3. Refresh browser (Ctrl+F5 or Cmd+Shift+R) to see changes
4. Clear browser cache if changes don't appear

## 🆘 Troubleshooting Changes

- **Changes not appearing**: Clear browser cache (Ctrl+Shift+Delete)
- **Styling broken**: Check CSS syntax (must have semicolons)
- **JavaScript errors**: Open console (F12) to see error messages
- **Charts not updating**: Verify chart element IDs match in HTML and JS

## 📚 Resources

- [CSS Reference](https://www.w3schools.com/cssref/)
- [JavaScript Guide](https://www.javascript.info/)
- [Chart.js Docs](https://www.chartjs.org/docs/latest/)
- [HTML Elements](https://www.w3schools.com/html/default.asp)

## ✅ Best Practices

1. Always make backups before major changes
2. Test changes in browser before deploying
3. Use consistent naming conventions
4. Keep CSS organized and documented
5. Test responsiveness on mobile devices
6. Validate HTML with W3C Validator
7. Check JavaScript console for errors

## 🎓 Need Help?

- Check the README.md for more information
- Review inline comments in code files
- Test changes one at a time
- Use browser developer tools (F12) to inspect elements

---

Happy customizing! 🎉
