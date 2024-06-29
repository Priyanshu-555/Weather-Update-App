const searchBtn = document.querySelector("#btn");
const weatherIcon = document.querySelector(".weather-icon");

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9927717f5amshc20d1c3328c775ep1bc510jsnde25ca2eb4c0',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};

async function checkWeather(key) {

   
    // key is name of city!!
    try {
        const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${key}&format=json&u=c`;
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.location.city;
        document.querySelector(".temp").innerHTML = Math.round(data.current_observation.condition.temperature) + "℃";
        document.querySelector(".humidity").innerHTML = data.current_observation.atmosphere.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current_observation.wind.speed + "km/h";

        if (data.current_observation.condition.text == "Clouds") {
            weatherIcon.src = ""; //  use a cloudy sky image
        }
        else if (data.current_observation.condition.text == "Clear") {
            weatherIcon.src = ""; //  use a clear sky image
        }
        else if (data.current_observation.condition.text == "Rain") {
            weatherIcon.src = ""; //  use a rain sky image
        }
        else if (data.current_observation.condition.text == "Partly Cloudy") {
            weatherIcon.src = ""; //  use a partly cloudy image
        }
        else if (data.current_observation.condition.text== "Mist") {
            weatherIcon.src = ""; // use a fog image
        }

    } catch (error) {
        console.error(error);
    }
}


// onlick of btn.
searchBtn.addEventListener("click", () => {
    const searchBox = document.querySelector("#searchinput");
    console.log(searchBox.value);
    checkWeather(searchBox.value);
})
