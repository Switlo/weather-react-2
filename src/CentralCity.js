import React from "react";
import IconsWeather from "./IconsWeather";
import "./Header.css";   
      

export default function CentralCity (props) {
  return (
    <div className="card" id="centralCard">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h1 className="searchCity">
              {props.data.city}, {props.data.country}
            </h1>
            <h3 className="description" id="description">
              {props.data.description}
            </h3>
            <div>
              <ul className="todayAnother">
                <li>
                  Humidity: <span id="currentHumidity">{props.data.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="currentWind">{props.data.wind}</span> m/sec
                </li>
              </ul>
            </div>
          </div>
          <div className="col" >
            <div id="icon">
            <IconsWeather code={props.data.icon} alt={props.data.description} />
           {/* <img src={props.data.icon} alt={props.data.description} id="icon"/> */}
           </div>
            <div className="temperature-units">
              <span className="temperature" id="temperature">
                {props.data.temp}
              </span>
              <span className="units">
                <a href="#top" id="celsius-link" className="active">
                  °C
                </a>
                |
                <a href="#top" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}
