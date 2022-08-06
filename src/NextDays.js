import React from "react";
import IconsWeather from "./IconsWeather"

import "./NextDays.css";

export default function NextDays() {
  return (
        <div className="card" id="weather-nextdays">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p className="week-day">Mon</p>
                <span className="nextdays">
                  <IconsWeather code="01d" size={35}/>
                  <br />
                  <span className="temperature-max">
                  +16°...
                  </span>
                  <span className="temperature-min">
                  +10°
                  </span>                  
                </span>
              </div>
              <div className="col">
                <p className="week-day">Mon</p>
                <span className="nextdays">
                  <IconsWeather code="01d" size={35}/>
                  <br />
                  <span className="temperature-max">
                  +16°...
                  </span>
                  <span className="temperature-min">
                  +10°
                  </span>                  
                </span>
              </div>
              <div className="col">
                <p className="week-day">Mon</p>
                <span className="nextdays">
                  <IconsWeather code="01d" size={35}/>
                  <br />
                  <span className="temperature-max">
                  +16°...
                  </span>
                  <span className="temperature-min">
                  +10°
                  </span>                  
                </span>
              </div>
              <div className="col">
                <p className="week-day">Mon</p>
                <span className="nextdays">
                  <IconsWeather code="01d" size={35}/>
                  <br />
                  <span className="temperature-max">
                  +16°...
                  </span>
                  <span className="temperature-min">
                  +10°
                  </span>                  
                </span>
              </div>
                          </div>
          </div>
        </div>
      
    
  );
}
