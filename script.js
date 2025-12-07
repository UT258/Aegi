// AEGIS Dashboard - JavaScript with Advanced Features

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    startRealTimeUpdates();
    addAnimationStyles();
});

// ===== CHART INITIALIZATION =====
function initializeCharts() {
    // Temperature Chart
    const tempCtx = document.getElementById('tempChart');
    if (tempCtx) {
        new Chart(tempCtx, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                datasets: [{
                    label: 'Temperature (°C)',
                    data: [22, 24, 26, 28.5, 27, 25],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: false, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Humidity Chart
    const humidityCtx = document.getElementById('humidityChart');
    if (humidityCtx) {
        new Chart(humidityCtx, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                datasets: [{
                    label: 'Humidity (%)',
                    data: [55, 60, 65, 65, 62, 58],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: false, max: 100, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Gas Level Chart
    const gasCtx = document.getElementById('gasChart');
    if (gasCtx) {
        new Chart(gasCtx, {
            type: 'bar',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                datasets: [{
                    label: 'Gas Level (ppm)',
                    data: [10, 15, 8, 12, 18, 11],
                    backgroundColor: ['#2ecc71', '#2ecc71', '#2ecc71', '#2ecc71', '#f39c12', '#2ecc71'],
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Metal Detection Chart
    const metalCtx = document.getElementById('metalChart');
    if (metalCtx) {
        new Chart(metalCtx, {
            type: 'doughnut',
            data: {
                labels: ['No Detection', 'Detection'],
                datasets: [{
                    data: [95, 5],
                    backgroundColor: ['#2ecc71', '#e74c3c'],
                    borderColor: '#1e2936',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#bdc3c7', padding: 15 }
                    }
                }
            }
        });
    }
}

// ===== REAL-TIME UPDATES =====
function startRealTimeUpdates() {
    setInterval(updateSensorData, 5000);
}

function updateSensorData() {
    // Temperature
    const tempValue = document.getElementById('temp-value');
    const currentTemp = parseFloat(tempValue.textContent);
    const newTemp = (currentTemp + (Math.random() - 0.5) * 0.5).toFixed(1);
    tempValue.textContent = newTemp + '°C';

    // Humidity
    const humidityValue = document.getElementById('humidity-value');
    const currentHumidity = parseInt(humidityValue.textContent);
    const newHumidity = Math.max(30, Math.min(90, currentHumidity + Math.random() * 4 - 2));
    humidityValue.textContent = Math.round(newHumidity) + '%';

    // Gas Level
    const gasValue = document.getElementById('gas-value');
    const gasLevel = Math.random() * 25;
    gasValue.textContent = gasLevel < 20 ? 'Safe' : 'Warning';
    gasValue.style.color = gasLevel < 20 ? '#2ecc71' : '#f39c12';
}

// ===== ACTION HANDLERS =====
function requestPhoto() {
    showNotification('📸 Photo request sent...', 'info');
    setTimeout(() => {
        showNotification('✅ Photo captured!', 'success');
    }, 1500);
}

function testBuzzer() {
    showNotification('🔔 Testing buzzer...', 'info');
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
    setTimeout(() => {
        showNotification('✅ Buzzer test completed!', 'success');
    }, 500);
}

function startMonitoring() {
    showNotification('▶️ Monitoring started...', 'info');
    setTimeout(() => {
        showNotification('✅ All sensors active!', 'success');
    }, 1000);
}

function stopMonitoring() {
    showNotification('⏹️ Monitoring stopped...', 'warning');
    setTimeout(() => {
        showNotification('✅ Data saved!', 'success');
    }, 1000);
}

// ===== ADVANCED FEATURES =====
function systemTest() {
    showNotification('⚙️ Running comprehensive system test...', 'info');
    let testProgress = 0;
    const testInterval = setInterval(() => {
        testProgress += 25;
        if (testProgress >= 100) {
            clearInterval(testInterval);
            showNotification('✅ System test completed! All components operational.', 'success');
        }
    }, 500);
}

function downloadReport() {
    showNotification('📥 Generating report...', 'info');
    setTimeout(() => {
        const report = generateDummyReport();
        downloadFile(report, 'AEGIS_Report_' + new Date().toISOString().slice(0, 10) + '.txt');
        showNotification('✅ Report downloaded successfully!', 'success');
    }, 1500);
}

function exportLogs() {
    showNotification('📤 Exporting system logs...', 'info');
    setTimeout(() => {
        const logs = generateDummyLogs();
        downloadFile(logs, 'AEGIS_Logs_' + new Date().toISOString().slice(0, 10) + '.log');
        showNotification('✅ Logs exported successfully!', 'success');
    }, 1000);
}

function clearAlerts() {
    const alertHistory = document.querySelector('.alert-history');
    if (alertHistory) {
        alertHistory.innerHTML = '<p style="text-align: center; color: #bdc3c7; padding: 20px;">No alerts at this time.</p>';
        showNotification('✅ Alert history cleared!', 'success');
    }
}

// ===== DATA GENERATORS =====
function generateDummyReport() {
    const date = new Date().toISOString();
    return `
AEGIS SYSTEM REPORT
Generated: ${date}

=== SYSTEM STATUS ===
Overall Status: OPERATIONAL
Helmet Module: ONLINE
Footwear Module: ONLINE
Detection Accuracy: 95%
Response Time: < 3 seconds

=== SENSOR DATA ===
Temperature: 28.5°C
Humidity: 65%
Gas Level: Safe
Metal Detection: No Active Detection

=== ALERTS TODAY ===
- 14:32:15 - METAL DETECTED (Acknowledged)
- 13:45:22 - GAS LEVEL ELEVATED (Acknowledged)
- 13:20:10 - PHOTO CAPTURED (Completed)

=== PERFORMANCE METRICS ===
Detection Depth: 15cm (Metal)
Detection Radius: 25-30cm (Gas)
Battery Life: 8+ hours
Network Success Rate: 98% (Mesh), 92% (GSM)

=== NOTES ===
System operating within normal parameters.
All sensors calibrated and responsive.
Recommended maintenance: None at this time.

Report End
    `;
}

function generateDummyLogs() {
    const logs = [];
    const now = new Date();
    
    for (let i = 0; i < 20; i++) {
        const time = new Date(now.getTime() - i * 5 * 60000);
        const events = [
            'Sensor data updated',
            'System check completed',
            'Data transmitted to server',
            'Battery status: 75%',
            'Network status: Connected'
        ];
        logs.push(`[${time.toISOString()}] ${events[Math.floor(Math.random() * events.length)]}`);
    }
    
    return logs.join('\n');
}

function downloadFile(content, filename) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2ecc71' : type === 'warning' ? '#f39c12' : '#3498db'};
        color: white;
        padding: 16px 24px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== CSS ANIMATIONS =====
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(event) {
    // Ctrl+P to request photo
    if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();
        requestPhoto();
    }
    // Ctrl+T to test buzzer
    if (event.ctrlKey && event.key === 't') {
        event.preventDefault();
        testBuzzer();
    }
    // Ctrl+S to system test
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        systemTest();
    }
    // Ctrl+L to export logs
    if (event.ctrlKey && event.key === 'l') {
        event.preventDefault();
        exportLogs();
    }
});

console.log('AEGIS Dashboard with Advanced Features initialized!');
