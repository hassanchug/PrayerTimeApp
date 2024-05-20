document.addEventListener('DOMContentLoaded', (event) => {
    const apiURL = 'http://api.aladhan.com/v1/timingsByCity?city=Charlotte&country=USA&method=2';
    
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            const prayerTimesDiv = document.getElementById('prayer-times');

            for (const [prayer, time] of Object.entries(timings)) {
                const prayerTimeElement = document.createElement('div');
                prayerTimeElement.className = 'prayer-time';
                prayerTimeElement.innerHTML = `<strong>${prayer}</strong>: ${time}`;
                prayerTimesDiv.appendChild(prayerTimeElement);
            }
        })
        .catch(error => console.error('Error fetching prayer times:', error));
});