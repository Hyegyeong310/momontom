const { HOURS, MINUTES } = require("../../clockData");

const clock = document.querySelector(".js-clock"),
  span = clock.querySelectorAll("span"),
  hourElem = clock.querySelector("#시"),
  minElem = clock.querySelector("#분");

const ACTIVE_CN = "active";

function checkHour(hours, mins) {
  if (
    (hours > 0 && hours < 12) ||
    ((hours === 0 || hours === 12) && mins > 0)
  ) {
    hourElem.classList.add(ACTIVE_CN);
  } else {
    hourElem.classList.remove(ACTIVE_CN);
  }
}

function checkMin(mins) {
  if (mins > 0) {
    minElem.classList.add(ACTIVE_CN);
  } else {
    minElem.classList.remove(ACTIVE_CN);
  }
}

function setTimeActive(hours, mins) {
  let hours2Kor = HOURS[hours];
  const mins2Kor = MINUTES[mins];

  if (hours === 0 || hours === 12) {
    if (mins === 0) {
      hours2Kor = hours2Kor[0];
    } else {
      hours2Kor = hours2Kor[1];
    }
  }
  for (let i = 0; i < span.length; i++) {
    if (hours2Kor.includes(span[i].id) || mins2Kor.includes(span[i].id)) {
      span[i].classList.add(ACTIVE_CN);
    } else {
      span[i].classList.remove(ACTIVE_CN);
    }
  }
  checkHour(hours, mins);
  checkMin(mins);
}

function getTime() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  hours = hours >= 12 ? hours - 12 : hours;

  setTimeActive(hours, minutes);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
