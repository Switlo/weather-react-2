import React, { useState } from "react";

import "./Header.css"

export default function TemperatureUnits(props) {
const [unit, setUnit] = useState(`celsius`);

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function fahrenheit() {
    return Math.round(props.celsius * 9/5) +32;
}

if (unit === `celsius`) {
    return (
        <div className="TemperatureUnits">
        <span className="temperature" >
                {props.celsius}
              </span>
              <span className="units">                
                  °C                
                |
                <a href="/" onClick={showFahrenheit}>
                  °F
                </a>
              </span>
        </div>
    );
} else {
       return (
        <div className="TemperatureUnits">
        <span className="temperature">
                {fahrenheit()}
              </span>
              <span className="units">
              <a href="/" onClick={showCelsius}>
                  °C
                </a>
                |
                  °F                
              </span>
        </div>
    );
}

    
}