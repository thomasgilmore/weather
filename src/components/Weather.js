import React, { useState } from "react";
import "./weather.css";
import { WeatherIcon } from './WeatherIcon';
import moment from 'moment';
import WeatherCard from './WeatherCard';

require('dotenv').config()

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    zip: ""
  });

console.log(form);
console.log(weather);

  async function weatherData(e) {
    e.preventDefault();
    if (form.zip === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(form.zip)}.json?access_token=${process.env.REACT_APP_API_KEY_MAPBOX}&limit=1`
      )
      .then((res) => res.json())
      .then((location) => {
        const latitude = location.features[0].center[1];
        const longitude = location.features[0].center[0];
        const data2 = fetch(
          `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP}&units=imperial`
        )
        .then((res2) => res2.json())
        .then((weatherData) => {
          const days = weatherData.daily;
          
          let weatherCards = []

          days.forEach(day => {
            const time = day.dt * 1000;
            const dayOfWeek = moment(time).format('dddd');
            const temp = Math.floor(day.temp.day);
            const rain = `${Math.floor(day.pop * 100)}%`;
            const weatherId = day.weather[0].id;
            const weatherIcon = day.weather[0].icon;
            const weatherImage = WeatherIcon(weatherId, weatherIcon);

            const weatherCard = <WeatherCard key={time} weekDay={dayOfWeek} tempeture={temp} raining={rain} image={weatherImage} />
            weatherCards.push(weatherCard)

          });

          setWeather({ data: weatherCards })
        })
      })
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "zip") {
      setForm({ ...form, zip: value });
    }
  };
  return (
    <div>
    <div className="weather">
      <span className="title">Weather</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="ZIP"
          name="zip"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Search
        </button>
      </form>
    </div>
     
      <div className="weatherCardContainer">
        {weather.data !== undefined ? (
          <div>
            {weather.data}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Weather;