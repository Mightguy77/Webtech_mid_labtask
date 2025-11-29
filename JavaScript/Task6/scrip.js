const clockEl = document.getElementById('clock');
const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');
const ampm = document.getElementById('ampm');

function pad(n) {
  return String(n).padStart(2, '0');
}

function updateClock() {
  const now = new Date();
  let hrs = now.getHours();     
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  ampm.textContent = hrs >= 12 ? 'PM' : 'AM';

  hrs = hrs % 12;
  if (hrs === 0) hrs = 12;

  hh.textContent = pad(hrs);
  mm.textContent= pad(mins);
  ss.textContent = pad(secs);

}
  


updateClock();
setInterval(updateClock, 10);