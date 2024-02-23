let timeDisplay = document.getElementById("time-display");

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function generateTimeString() {
  let hoursStr = hours < 10 ? `0${hours}` : hours.toString();
  let minutesStr = minutes < 10 ? `0${minutes}` : minutes.toString();
  let secondsStr = seconds < 10 ? `0${seconds}` : seconds.toString();
  return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  timeDisplay.innerHTML = generateTimeString();
}

function startWatch() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function pauseWatch() {
  clearInterval(timer);
}

function resetWatch() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  timeDisplay.innerHTML = generateTimeString();
}
