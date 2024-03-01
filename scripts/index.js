const hands = {
  hours: document.querySelector("#hour"),
  minutes: document.querySelector("#minute"),
  seconds: document.querySelector("#second")
};

const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

const positions = {};
positions.seconds = (360 / 60) * seconds;
positions.minutes = (360 / 60) * minutes + positions.seconds / 60;
positions.hours = (360 / 12) * hours + positions.minutes / 12;

function run() {
  const degrees = 6;
  positions.seconds += degrees;
  positions.minutes += degrees / 60;
  positions.hours += degrees / 60 / 12;

  hands.hours.style.transform = `rotate(${positions.hours}deg)`;
  hands.minutes.style.transform = `rotate(${positions.minutes}deg)`;
  hands.seconds.style.transform = `rotate(${positions.seconds}deg)`;
}

const interval = setInterval(run, 1000);