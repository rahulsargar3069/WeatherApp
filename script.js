
const apiKey = "7d4224741b83cbb100dcc05ee9ee6068";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherImg = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
     
    //error handling when input city name is invalid
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =  `${Math.round(data.main.temp)}°c`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

   if(data.weather[0].main == 'Clear'){
    weatherImg.src = "clear.png";
   }else if(data.weather[0].main == 'Rain'){
    weatherImg.src = "rain.png";
   }else if(data.weather[0].main == 'Clouds'){
    weatherImg.src = "clouds.png";
   }else if(data.weather[0].main == 'Drizzle'){
    weatherImg.src = "drizzle.png";
   }else if(data.weather[0].main == 'Mist'){
    weatherImg.src = "mist.png";
   }else{
    weatherImg.src = "snow.png";
   }
   document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}


searchBtn.addEventListener("click", ()=>{

   checkWeather(searchBox.value);

})
