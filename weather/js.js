let weatherNow = document.querySelector(".weatherNow");
let icons = document.querySelector(".icons");
let street = document.querySelector(".street");
let wind = document.querySelector(".wind");
let button = document.getElementById("button");
let opens = document.getElementById("open");
let toggle = document.querySelector(".closed");
let dataWeather = document.querySelector(".dataWeather");
let openWeather = document.querySelector(".openWeather");
let contentAll = document.querySelector(".contentAll");
let closed = document.getElementById("closed_weather");

let apiurl = "https://api.openweathermap.org/data/2.5/";
let apikey = "0da53a9d063b9889683609b158111967";
const minskLat = 53.9;
const minskLong = 27.5667;
let apiWeather = `${apiurl}/onecall?lat=${minskLat}&lon=${minskLong}&exclude=minutely,alerts,hourly&units=metric&lang=ru&appid=${apikey}`;
(async function () {
  const api = await fetch(apiWeather);
  const data = await api.json();
  console.log(data);

  weatherNow.innerHTML = `Сейчас в Минске ${Math.trunc(
    data.current.temp
  )}&degC`;
  icons.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" alt="картинка" class="">`;
  street.innerHTML = `${data.current.weather[0].description}`;
  wind.innerHTML = `Ветер ${Math.round(data.current.wind_speed)} м/с`;

  let dayOne = document.querySelector(".containerOne");
  let dayTwo = document.querySelector(".containerTwo");
  let dayThree = document.querySelector(".containerThree");
  let dayArray = [dayOne, dayTwo, dayThree];

  (function ddd() {
    for (let i = 0; i < dayArray.length; i++) {
      let day =
        dayArray[i] === dayOne
          ? "Сегодня"
          : dayArray[i] === dayTwo
          ? "завтра"
          : "Послезавтра";
      let name = document.createElement("span");
      let img = document.createElement("span");
      let street = document.createElement("span");
      dayArray[i].append(name, img, street);
      name.innerHTML = ` ${day} в Минске ${Math.round(
        data.daily[i].temp.day
      )}&degC`;
      img.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png" alt="картинка" class="">`;
      street.innerHTML = `${data.daily[i].weather[0].description}`;
    }
  })();
})();

button.addEventListener("click", toogle);
function toogle() {
  toggle.classList.toggle("closed");
}

closed.addEventListener("click", function () {
  if (toggle.className == "containerAll") {
    console.log("hi closed");
    toggle.classList.toggle("closed");
    dataWeather.classList.toggle("closed");
    openWeather.style.display = "block";
  } else {
    dataWeather.classList.toggle("closed");
    openWeather.style.display = "block";
  }
});

opens.addEventListener("click", function () {
  console.log("hi opens");

  dataWeather.classList.toggle("closed");
  openWeather.style.display = "none";
});
