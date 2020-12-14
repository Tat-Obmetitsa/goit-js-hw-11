const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const ref = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};
ref.btnStart.addEventListener('click', onBtnStart);
ref.btnStop.addEventListener('click', onBtnStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  ref.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
let timerId;

function onBtnStart() {
  timerId = setInterval(changeColor, 1000);
  ref.btnStart.disabled = true;
}
function onBtnStop() {
  clearInterval(timerId);
  ref.btnStart.disabled = false;
}
