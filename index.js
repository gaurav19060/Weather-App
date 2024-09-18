import { apikey } from './config.js';
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function checkweather(city) {
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind-speed").innerHTML=data.wind.speed+"km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./images/clouds.png"
    }
    
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./images/clear.png"
    }
    
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./images/rain.png"
    }
    
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./images/mist.png"
    }
}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);

});


