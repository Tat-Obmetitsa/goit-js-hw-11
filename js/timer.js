const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

let day = `Jan 07 2021 00:00:00`;

function setTime(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
}
function reset(...arr) {
  return arr.map(el => (el.textContent = '00'));
}
class CountdownTimer {
  constructor(date, obj) {
    this.date = date;
    this.refs = obj;
  }
  count() {
    let x = setTime(new Date(this.date) - Date.now());
    console.log(x);
    this.refs.days.textContent = x.days;
    this.refs.hours.textContent = x.hours;
    this.refs.mins.textContent = x.mins;
    this.refs.secs.textContent = x.secs;
  }

  start() {
    this.count();
    const timerId = setInterval(() => {
      this.count();
    }, 1000);
  }
  stop() {
    const { days, hours, mins, secs } = refs;
    clearInterval(timerId);
    reset(days, hours, mins, secs);
  }
}
const timer = new CountdownTimer(day, refs);
timer.start();


