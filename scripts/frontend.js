document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        document.getElementById('datetime').textContent = dateTimeString;
    }

    updateDateTime(); // Initial call to set the date and time immediately
    setInterval(updateDateTime, 1000); // Update the date and time every second
});
