import "../styles/reset.css";
import "../styles/style.css";
import "../styles/name.css";
import "../styles/clock.css";
import "../styles/todo.css";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";

const body = document.querySelector("body");

const IMG_NUMBER = 5;

function getImage(num) {
  switch (num) {
    case 0:
      return img1;
    case 1:
      return img2;
    case 2:
      return img3;
    case 3:
      return img4;
    case 4:
      return img5;

    default:
      return img1;
  }
}

function paintBackground(num) {
  const image = new Image();
  image.src = getImage(num);
  image.classList.add("bg-image");
  body.prepend(image);
}

function getRandomNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandomNumber();
  paintBackground(randomNumber);
}

init();
