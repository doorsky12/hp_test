document.addEventListener("DOMContentLoaded", () => {
    const timeZones = {
        "new-york": "America/New_York",
        "london": "Europe/London",
        "tokyo": "Asia/Tokyo"
    };

    async function fetchTime(timeZone) {
        const response = await fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.datetime;
    }

    function updateTime() {
        Object.keys(timeZones).forEach(city => {
            const timeElement = document.getElementById(`time-${city}`);
            const timeZone = timeZones[city];

            fetchTime(timeZone)
                .then(dateTimeString => {
                    const dateTime = new Date(dateTimeString);
                    const formattedTime = dateTime.toLocaleTimeString("en-US", {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                    });
                    timeElement.textContent = formattedTime;
                })
                .catch(error => {
                    console.error(`Error fetching time for ${city}:`, error);
                    timeElement.textContent = "Error";
                });
        });
    }

    updateTime();
    setInterval(updateTime, 10000); // 10초마다 시간 업데이트
});
