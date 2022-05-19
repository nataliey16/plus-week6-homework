let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let now = new Date();
let day = days[now.getDay()];
let date = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();
let hour = now.getHours();
let minute = now.getMinutes();

let dayWeek = document.querySelector("#day-of-week");
dayWeek.innerHTML = `${day}, ${month} ${date}, ${year}`;

console.log(minute);
let time = document.querySelector("#time");
time.innerHTML = ` ${hour}:${minute}`;

// function farhenTemp(event) {
//   event.preventDefault();
//   let currentTemp = document.querySelector("#current-temp");
//   currentTemp.innerHTML = "66";
// }
// let farhenheit = document.querySelector("#farhen-link");
// farhenheit.addEventListener("click", farhenTemp);

// function celsiusTemp(event) {
//   event.preventDefault();
//   let currentTemp = document.querySelector("#current-temp");
//   currentTemp.innerHTML = "1";
// }

// let celsius = document.querySelector("#celsius-link");
// celsius.addEventListener("click", celsiusTemp);

// Week 5 Homework: Search Engine

// function search(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-input-text");
//   let inputCity = document.querySelector("#city");

//   if (searchInput.value) {
//     inputCity.innerHTML = `${searchInput.value}`;
//   } else {
//     alert(`Please enter a city`);
//   }
// }
// let form = document.querySelector("#search-form");
// form.addEventListener("submit", search);

//  Search input city and temperature

function searchInputCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input-text");
  let shownCity = document.querySelector("#city");
  let city = cityInput.value;
  let apiKey = "abc1ee724ce94bd135a062b94b61de5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  if (cityInput.value) {
    shownCity.innerHTML = `${cityInput.value}`;
  } else {
    alert(`Please enter a city`);
  }

  axios.get(apiUrl).then(showTemperature);
}

// Display current temperature

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let cityName = response.data.name;
  let currentCityTemp = document.querySelector("#current-temp");
  currentCityTemp.innerHTML = `${temperature}˚C`;
  let currentCityName = document.querySelector("#city");
  currentCityName.innerHTML = `${cityName}`;
  let currentDescription = document.querySelector("#current-description");
  currentDescription.innerHTML = `${description}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchInputCity);

// GPS location
function showPosition(position) {
  console.log(position);
  let lat = Math.round(position.coords.latitude);
  let long = Math.round(position.coords.longitude);
  let apiKey = "abc1ee724ce94bd135a062b94b61de5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
// Call function  - user clicks gpsButton; calls function called getCurrentPosition
let gpsButton = document.querySelector("#gps-button");
gpsButton.addEventListener("click", getCurrentPosition);
