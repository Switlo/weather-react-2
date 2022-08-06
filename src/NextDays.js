import React, { useState } from "react";
import axios from "axios";
import WeatherNextDays from "./WeatherNextDays"

import "./NextDays.css";

export default function NextDays(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
  
    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
  
    if (loaded) {
    return (
      <div className="card" id="weather-nextdays">
       <div className="row"> 
       {/* eslint-disable-next-line */}
            {forecast.map(function (dailyWeather, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                    <WeatherNextDays data={dailyWeather} />
                </div>
              ); }
             })
            }
        </div>
      </div>);  
      
  } else {
    let apiKey = "0bbb2981f03e6b3d1d7194b9db724d7c";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  
    return null; 
}
}
