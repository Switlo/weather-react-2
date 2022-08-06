import React from "react";
import IconsWeather from "./IconsWeather"

import "./NextDays.css";

export default function WeatherNextDays(props) {

    function maxTemperature() {
        let tempMax = Math.round(props.data.temp.max);
        return `${tempMax}°`;
      }
    
      function minTemperature() {
        let tempMin = Math.round(props.data.temp.min);
        return `${tempMin}°`;
      }
    

    function weekDays() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
               if (day < 6) {
            return days[day + 1];
          } else {
            return "Sun";
          }
      }
      
    return (
        <div className="card-body">
            <p className="week-day">{weekDays()}</p>
              <span className="nextdays">
                <IconsWeather code={props.data.weather[0].icon} size={35}/>
                <br />
                <span className="temperature-max">
                {maxTemperature()} ...&nbsp;
                </span>
                <span className="temperature-min">
                {minTemperature()}
                </span>                  
              </span>
        </div>
    );
}