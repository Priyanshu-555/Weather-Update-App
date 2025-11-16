// 7c7ce5571a36cd91934fa24ff27e377a  
//https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=7c7ce5571a36cd91934fa24ff27e377a


const apiKey = "7c7ce5571a36cd91934fa24ff27e377a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchBox = document.querySelector("#searchinput");  
const searchBtn = document.querySelector("#btn");
const weatherIcon = document.querySelector("#weather-icon");


async function checkWeather(city){
  
const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
     
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
      
    console.log(data);
    // console.log(data.value);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
    document.querySelector(".feels-like").innerHTML = "Feels like " + Math.round(data.main.feels_like) + "℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed*10 + "km/h";
    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
        const searchBox = document.querySelector("#searchinput");
        checkWeather(searchBox.value);
  
})

