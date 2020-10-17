const { apiUrl, HOST, API_KEY } = require("../../weatherData");

const tempElem = document.querySelector(".js-temp"),
  location = document.querySelector(".js-location");

const COORDS = "coords";

const getWeatherData = (lat, lon, region) => {
  fetch(apiUrl(lat, lon, region), {
    method: "GET",
    headers: {
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const {
        name,
        main: { temp },
      } = json;

      tempElem.innerText = `${temp} °`;

      const locaIcon = document.createElement("i");
      locaIcon.classList.add("fas", "fa-map-marker-alt");
      const span = document.createElement("span");
      span.innerText = name.toUpperCase();
      location.append(locaIcon);
      location.append(span);
    })
    .catch((err) => {
      console.error(err);
    });
};

function getWeather(lat, lon, region = "Seoul") {
  getWeatherData(lat, lon, region);
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const {
    coords: { latitude, longitude },
  } = position;
  saveCoords({ latitude, longitude });
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function setCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (!loadedCoords) {
    setCoords();
  } else {
    const { latitude, longitude } = JSON.parse(loadedCoords);
    getWeather(latitude, longitude);
  }
}

function init() {
  loadCoords();
}

init();
