const form = document.querySelector(".js-name"),
  input = form.querySelector("input"),
  container = document.querySelector(".container"),
  name = document.querySelector(".main__name-user");

const USER = "user",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER, text);
}

function showContainer(text) {
  form.classList.remove(SHOWING_CN);
  container.classList.add(SHOWING_CN);
  name.innerText = text;
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = input.value.trim();
  if (!currentValue) {
    input.value = "";
    return;
  }
  showContainer(currentValue);
  saveName(currentValue);
}

function askUserName() {
  container.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER);
  if (!currentUser) {
    askUserName();
  } else {
    showContainer(currentUser);
  }
}

function init() {
  loadName();
}

init();
