// key openweathermap.com
const apiKey = "e25fda2bdb2bfb50971e69a418ab0ed0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const search = document.querySelector(".input-field")
const submit = document.querySelector(' .submit-btn');
const weatherIcons = document.querySelector(".weatherIcons")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);


    document.querySelector(".location").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp )+ "°C"
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h"
    document.querySelector(".humidity-perc").innerHTML = data.main.humidity + "%"

    if (data.weather[0].main == "Clouds"){
        weatherIcons.src = "assets/img/clouds.png";
    } else if (data.weather[0].main == "Clear"){
        weatherIcons.src ="assets/img/clear.png"
    }else if (data.weather[0].main == "Rain"){
        weatherIcons.src = "assets/img/rain.png"
    } else if (data.weather[0].main == "Drizzle"){
        weatherIcons.src = "assets/img/drizzle.png"
    } else if (data.weather[0].main == "Mist"){
        weatherIcons.src= "assets/img/mist.png"
    }  

}

submit.addEventListener("click", ()=> {
    checkWeather(search.value   )
})