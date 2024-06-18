function updateTime() {
    const timeZones = {
        "New York": "America/New_York",
        "London": "Europe/London",
        "Tokyo": "Asia/Tokyo"
    };

    Object.keys(timeZones).forEach(city => {
        const timeElement = document.getElementById(`time-${city.toLowerCase().replace(/ /g, '-')}`);
        const timeZone = timeZones[city];
        const currentTime = new Date().toLocaleTimeString("en-US", { timeZone: timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        timeElement.textContent = currentTime;
    });
}

updateTime();
setInterval(updateTime, 1000);
