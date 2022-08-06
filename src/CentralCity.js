import React from "react";
import IconsWeather from "./IconsWeather";
import TemperatureUnits from "./TemperatureUnits";
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
            <IconsWeather code={props.data.icon} alt={props.data.description} size={55}/>
                     </div>
            <div className="temperature-units">
              <TemperatureUnits celsius={props.data.temp}/>
             </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}
