const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let secPosition = (360 / 60) * sec;
let minPosition = (360 / 60) * min + secPosition / 60;
let hrPosition = (360 / 12) * hr + minPosition / 12;

function runTheClock() {
  
  let degreePerSecond = 6
  secPosition += degreePerSecond;
  minPosition += degreePerSecond / 60;
  hrPosition += degreePerSecond / 60 / 12;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);


