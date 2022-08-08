import React, { useState, useEffect } from "react";
import axios from "axios";
import NextDaysWeather from "./NextDaysWeather"

import "./NextDays.css";

export default function NextDays(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
      setLoaded(false);
    }, [props.coord]);
  
    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
  
    if (loaded) {
    return (
      <div className="card" id="weather-nextdays">
       <div className="row justify-content-center"> 
       {/* eslint-disable-next-line */}
            {forecast.map(function (day, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                    <NextDaysWeather data={day} />
                </div>
              ); 
            } else {
              return null;
            }
             })}
        </div>
      </div>
      );        
  } else {
    let apiKey = "961c81b1f2ef4eeae1c215b2ba88c0df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;
   
    axios.get(apiUrl).then(handleResponse);  
   
    return null; 
}
}
