export function dateTime() {
  const date = new Date();
  let today = date.toDateString();
  let time = date.toLocaleTimeString();
  const dateTimeEl = document.getElementById('date-time')
  if (dateTimeEl) {
    dateTimeEl.innerHTML = '<p id="date">' + today + '</p><p id="time">' + time + '</p>';
  }
  setTimeout(dateTime, 1000);
}
