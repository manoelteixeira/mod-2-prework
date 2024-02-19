function updateHtmlData(data) {
  const weather = document.querySelector(".weather");
  const icon = document.querySelector(".weather-icon");
  const city = document.querySelector(".city");
  const temp = document.querySelector(".temp");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");

  // Update City Data
  city.innerHTML = data.name;
  temp.innerHTML = `${Math.round(data.main.temp)} °C`;
  humidity.innerHTML = `${data.main.humidity}%`;
  wind.innerHTML = `${data.wind.speed} km/h`;

  // Update weather image
  if (data.weather[0].main == "Clouds") {
    icon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    icon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    icon.src = "./images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    icon.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    icon.src = "./images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    icon.src = "./images/snow.png";
  }

  // Display Information
  weather.style.display = "block";
}

async function checkWeather(apiKey, city) {
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather? &units=metric&q=";

  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    // Sow error message
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    // Show city weather data
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }

  var data = await response.json();
  updateHtmlData(data);
}

const apiKey = "f74945c791c4f8a79b85214924468359";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  const city = searchBox.value;
  checkWeather(apiKey, city);
});
