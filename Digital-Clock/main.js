function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  document.getElementById("clock").textContent = timeString;
}

// Update every 10 milliseconds for smooth display
setInterval(updateClock, 10);
