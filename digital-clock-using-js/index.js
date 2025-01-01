function showtime() {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        document.querySelector('.fortime').textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Call updateClock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display time immediately
}
