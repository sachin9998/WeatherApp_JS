const apiKey = "852acd81ef71b13f4d4be2449a167e5f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

const weatherIconEl = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    //   console.log(data);

    cityEl.innerHTML = data.name;
    tempEl.innerHTML = parseInt(data.main.temp) + "°c";
    humidityEl.innerHTML = data.main.humidity + "%";
    windEl.innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIconEl.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIconEl.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIconEl.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIconEl.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIconEl.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIconEl.src = "images/snow.png";
    } else if (data.weather[0].main == "Wind") {
      weatherIconEl.src = "images/wind.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBox.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const city = searchBox.value;
    checkWeather(city);
  }
});

searchBtn.addEventListener("click", () => {
  const city = searchBox.value;
  checkWeather(city);
});
