const body = document.body;
const start = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
// console.log(start.textContent);
// console.log(stop.textContent);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


start.addEventListener('click', onStartBtnClick => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.disabled = true;
  stopBtn.disabled = false;

})



stopBtn.addEventListener('click', onStopBtnClick => {
  clearInterval(timerId);
  stopBtn.disabled = true;
  start.disabled = false;

})


