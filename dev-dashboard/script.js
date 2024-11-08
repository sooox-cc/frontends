function animateLatency() {
    const latencyElement = document.querySelector('.time');
    let increasing = true;
    let currentLatency = 248;
    const maxLatency = 300;
    const minLatency = 8;
    const updateInterval = 1000; // 2 seconds between updates

    function updateLatency() {
        // Randomly increase or decrease
        const change = Math.random() * 40; // Random change up to 40ms

        if (increasing) {
            currentLatency += change;
            if (currentLatency >= maxLatency) {
                currentLatency = maxLatency;
                increasing = false;
            }
        } else {
            currentLatency -= change;
            if (currentLatency <= minLatency) {
                currentLatency = minLatency;
                increasing = true;
            }
        }

        // Update the display with rounded number
        latencyElement.textContent = `${Math.round(currentLatency)}ms`;

        // Add color classes based on latency
        latencyElement.className = 'time'; // Reset classes
        if (currentLatency < 100) {
            latencyElement.classList.add('time-good');
        } else if (currentLatency < 200) {
            latencyElement.classList.add('time-warning');
        } else {
            latencyElement.classList.add('time-high');
        }
    }

    // Update every 2 seconds
    setInterval(updateLatency, updateInterval);
}

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', animateLatency);